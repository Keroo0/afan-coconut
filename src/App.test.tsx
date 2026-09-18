import { render, screen } from "@testing-library/react"
import { readFileSync } from "node:fs"
import App from "./App"

describe("Affan Coconut landing page", () => {
  it("uses cheerful sales copy and image-led menu content", () => {
    render(<App />)

    expect(screen.getByRole("heading", { name: "Segarnya Bikin Senyum!" })).toBeInTheDocument()
    expect(screen.getByText(/nikmat sampai tegukan terakhir/i)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /pilih kesegaranmu/i })).toHaveAttribute("href", "#menu")
    expect(screen.getByRole("heading", { name: "Mau Seger yang Mana?" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Es Kelapa Biasa" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Kelapa 1-an" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Kelapa Muda" })).toBeInTheDocument()
    expect(screen.getByText(/ramah di kantong/i)).toBeInTheDocument()
    expect(screen.getByText(/hausnya nggak setengah-setengah/i)).toBeInTheDocument()
    expect(screen.getByText(/air melimpah/i)).toBeInTheDocument()
    expect(screen.getByText("Rp5.000")).toBeInTheDocument()
    expect(screen.getByText("Rp12.000")).toBeInTheDocument()
    expect(screen.getByText("Rp18.000")).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /es kelapa segar affan coconut/i })).toBeInTheDocument()
    expect(screen.getAllByRole("img", { name: /menu/i })).toHaveLength(3)
    expect(screen.getByText("09.00–17.00")).toBeInTheDocument()
    expect(screen.getByText(/Kp\. Pondok Jengkol, Pagedangan, Tangerang/)).toBeInTheDocument()
    expect(screen.getByText(/segarnya dekat, senyumnya dapat/i)).toBeInTheDocument()
  })

  it("offers WhatsApp contact and configurable Google Maps directions", () => {
    render(<App />)

    for (const link of screen.getAllByRole("link", { name: /whatsapp|tanya & pesan/i })) {
      expect(link).toHaveAttribute("href", expect.stringContaining("https://wa.me/6283863190378"))
    }
    expect(screen.getAllByTestId("whatsapp-icon").length).toBeGreaterThanOrEqual(2)
    expect(screen.getByTitle("Peta lokasi Affan Coconut")).toHaveAttribute("src", expect.stringContaining("google.com/maps"))
    expect(screen.getByRole("link", { name: /buka petunjuk arah/i })).toHaveAttribute("href", expect.stringContaining("google.com/maps/dir"))
  })

  it("uses compact conversion-first responsive contracts", () => {
    render(<App />)

    expect(screen.getByRole("region", { name: /segarnya bikin senyum/i })).toHaveAttribute("data-mobile-layout", "compact")
    expect(screen.getByRole("link", { name: /pilih kesegaranmu/i })).toHaveClass("w-full", "sm:w-auto")

    const cards = screen.getAllByTestId("menu-card")
    expect(cards).toHaveLength(3)
    for (const card of cards) {
      expect(card).toHaveClass("grid", "grid-cols-[8.5rem_1fr]", "md:block")
    }

    const floatingWhatsapp = screen.getByTestId("floating-whatsapp")
    expect(floatingWhatsapp).toHaveClass("size-14", "md:w-auto")
    expect(screen.getByTestId("floating-whatsapp-label")).toHaveClass("hidden", "md:inline")
  })

  it("enables safe-area viewport coverage", () => {
    const html = readFileSync("index.html", "utf8")
    expect(html).toContain('width=device-width, initial-scale=1.0, viewport-fit=cover')
  })
})
