import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="relative z-30 flex h-[4.5rem] items-center justify-between border-b border-ink/20 bg-[#f9faf6] px-4 sm:h-20 sm:px-[6vw]">
      <a href="#beranda" aria-label="Affan Coconut, kembali ke beranda" className="flex min-h-11 items-center gap-1.5 font-display text-sm font-extrabold leading-[.8] tracking-wide sm:gap-2 sm:text-base">
        <span aria-hidden="true" className="text-2xl sm:text-3xl">🥥</span>
        <span>AFFAN<br />COCONUT</span>
      </a>
      <nav aria-label="Navigasi utama" className="flex items-center gap-1">
        <Button asChild variant="ghost" size="sm"><a href="#menu">MENU</a></Button>
        <Button asChild variant="ghost" size="sm"><a href="#lokasi">LOKASI</a></Button>
      </nav>
    </header>
  )
}
