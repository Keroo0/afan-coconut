import { ArrowDownRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const TICKER = "• KELAPA SEGAR • DINGINNYA PAS • HARGA BERSAHABAT • "

export function Hero() {
  return (
    <>
      <section id="beranda" role="region" aria-label="Segarnya Bikin Senyum!" data-mobile-layout="compact" className="hero-wash relative isolate overflow-hidden bg-[#f9faf6] px-4 py-10 sm:px-[6vw] md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-1 md:min-h-[600px] md:gap-10 lg:grid-cols-[.92fr_1.08fr]">
          <div className="relative z-10">
            <p className="mb-3 flex items-center gap-2 font-mono text-[10px] font-bold leading-5 text-ink/70 sm:mb-5 sm:text-xs"><Sparkles className="size-4 shrink-0 text-coral" /> ES KELAPA SEGAR • PONDOK JENGKOL</p>
            <h1 id="hero-title" className="max-w-2xl text-balance font-display text-[3.45rem] font-extrabold leading-[.86] tracking-[-.04em] sm:text-7xl lg:text-8xl">Segarnya Bikin Senyum!</h1>
            <p className="my-5 max-w-xl text-pretty font-mono text-[15px] leading-6 text-ink/80 sm:my-7 md:text-base md:leading-7">Kelapa segar, dingin pas, dan nikmat sampai tegukan terakhir. Teman paling asyik buat lawan haus!</p>
            <Button asChild size="lg" className="w-full sm:w-auto"><a href="#menu">PILIH KESEGARANMU <ArrowDownRight aria-hidden="true" /></a></Button>
            <div className="mt-5 flex items-center gap-3 text-xs font-bold text-ink/70 sm:mt-10 sm:gap-4"><span className="h-px w-9 bg-ink/30 sm:w-12" /><span>Mulai dari Rp5.000</span></div>
          </div>
          <div className="relative -mb-6 min-h-[340px] md:mb-0 md:min-h-[580px]">
            <div aria-hidden="true" className="absolute inset-[13%_1%_4%_7%] rotate-[-5deg] rounded-[45%_55%_50%_50%] bg-lime md:inset-[10%_2%_6%_10%]" />
            <div aria-hidden="true" className="absolute right-1 top-[10%] size-20 rounded-full bg-sun sm:size-28 md:right-0 md:top-[8%] md:size-36" />
            <img src="/images/affan-coconut-hero.webp" alt="Es kelapa segar Affan Coconut dengan buah kelapa dan percikan air" width="1024" height="1536" fetchPriority="high" className="relative z-10 mx-auto h-[365px] w-auto object-contain drop-shadow-[0_20px_18px_rgba(20,62,43,.18)] sm:h-[500px] md:h-[620px] md:drop-shadow-[0_24px_20px_rgba(20,62,43,.2)]" />
            <div className="absolute bottom-[5%] left-[1%] z-20 rotate-[-6deg] rounded-full border-[3px] border-ink bg-coral px-3 py-3 text-center font-display text-base font-extrabold leading-none sm:bottom-[8%] sm:left-[2%] sm:px-5 sm:py-4 sm:text-xl">DIBUAT<br /><span className="text-[11px] sm:text-sm">SETIAP HARI</span></div>
          </div>
        </div>
      </section>
      <div className="overflow-hidden bg-ink py-3 text-lime">
        <div aria-hidden="true" className="ticker-track w-max whitespace-nowrap text-xs font-bold tracking-[.12em]">{TICKER.repeat(8)}</div>
      </div>
    </>
  )
}
