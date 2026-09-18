import { spawn } from "node:child_process"
import { mkdtempSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
const debuggingPort = 9333
const profilePath = mkdtempSync(join(tmpdir(), "affan-chrome-"))
const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  `--remote-debugging-port=${debuggingPort}`,
  `--user-data-dir=${profilePath}`,
  "--no-first-run",
  "--no-default-browser-check",
  "about:blank",
], { stdio: "ignore" })

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

async function waitForChrome() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${debuggingPort}/json/version`)
      if (response.ok) return
    } catch {
      await delay(125)
    }
  }
  throw new Error("Chrome DevTools endpoint did not become ready")
}

async function openTarget(url) {
  const response = await fetch(`http://127.0.0.1:${debuggingPort}/json/new?${encodeURIComponent(url)}`, { method: "PUT" })
  if (!response.ok) throw new Error(`Unable to open browser target: ${response.status}`)
  return response.json()
}

function createCdpClient(webSocketDebuggerUrl) {
  const socket = new WebSocket(webSocketDebuggerUrl)
  const pending = new Map()
  let messageId = 0

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data)
    if (!message.id || !pending.has(message.id)) return
    const { resolve, reject } = pending.get(message.id)
    pending.delete(message.id)
    if (message.error) reject(new Error(message.error.message))
    else resolve(message.result)
  })

  return {
    ready: new Promise((resolve, reject) => {
      socket.addEventListener("open", resolve, { once: true })
      socket.addEventListener("error", reject, { once: true })
    }),
    send(method, params = {}) {
      messageId += 1
      const id = messageId
      socket.send(JSON.stringify({ id, method, params }))
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }))
    },
    close() {
      socket.close()
    },
  }
}

async function captureViewport(client, name, width, height, mobile) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height,
  })
  await client.send("Page.navigate", { url: "http://127.0.0.1:5173/" })
  await delay(2200)

  const metrics = await client.send("Runtime.evaluate", {
    expression: `JSON.stringify({
      innerWidth: window.innerWidth,
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      heroHeight: Math.round(document.querySelector('#beranda').getBoundingClientRect().height),
      firstMenuTop: Math.round(document.querySelector('#menu').getBoundingClientRect().top),
      whatsappBottom: Math.round(document.querySelector('[data-testid="floating-whatsapp"]').getBoundingClientRect().bottom),
      viewportHeight: window.innerHeight
    })`,
    returnByValue: true,
  })

  const screenshot = await client.send("Page.captureScreenshot", { format: "png", fromSurface: true })
  writeFileSync(`/private/tmp/affan-${name}.png`, Buffer.from(screenshot.data, "base64"))

  const layout = await client.send("Page.getLayoutMetrics")
  const fullScreenshot = await client.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: true,
    clip: {
      x: 0,
      y: 0,
      width,
      height: Math.ceil(layout.cssContentSize.height),
      scale: 1,
    },
  })
  writeFileSync(`/private/tmp/affan-${name}-full.png`, Buffer.from(fullScreenshot.data, "base64"))

  return JSON.parse(metrics.result.value)
}

try {
  await waitForChrome()
  const target = await openTarget("about:blank")
  const client = createCdpClient(target.webSocketDebuggerUrl)
  await client.ready
  await client.send("Page.enable")
  await client.send("Runtime.enable")

  const mobile360 = await captureViewport(client, "mobile-360", 360, 800, true)
  const mobile390 = await captureViewport(client, "mobile-390", 390, 844, true)
  const mobile430 = await captureViewport(client, "mobile-430", 430, 932, true)
  const desktop = await captureViewport(client, "desktop-1440", 1440, 900, false)

  console.log(JSON.stringify({ mobile360, mobile390, mobile430, desktop }, null, 2))
  client.close()
} finally {
  chrome.kill("SIGTERM")
}
