import { ArrowUpRight, Clock3, MapPin } from "lucide-react"

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { mapDirectionsUrl, mapEmbedUrl, siteConfig, whatsappUrl } from "@/config/site"

export function LocationSection() {
  return (
    <section id="lokasi" aria-labelledby="location-title" className="bg-ink px-4 py-14 text-cream sm:px-[6vw] md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-9 md:gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 font-mono text-[11px] font-bold text-ink"><MapPin className="size-4" /> DEKAT, SEGAR, SIAP DINIKMATI</span>
          <h2 id="location-title" className="mt-5 max-w-xl text-balance font-display text-5xl font-extrabold leading-[.88] tracking-[-.04em] sm:text-6xl md:mt-6 md:text-8xl">Haus?<br />Mampir Aja!</h2>
          <div className="mt-7 space-y-5 border-t border-cream/30 pt-6 md:mt-8">
            <p className="flex items-start gap-3 text-base leading-6"><MapPin className="mt-0.5 size-5 shrink-0 text-lime" /><span><strong className="block font-display text-lg">Lokasi</strong>{siteConfig.address}</span></p>
            <p className="flex items-start gap-3 text-base leading-6"><Clock3 className="mt-0.5 size-5 shrink-0 text-lime" /><span><strong className="block font-display text-lg">Buka setiap hari</strong>{siteConfig.hours}</span></p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button asChild variant="lime" className="w-full sm:w-auto"><a href={mapDirectionsUrl} target="_blank" rel="noreferrer">BUKA PETUNJUK ARAH <ArrowUpRight aria-hidden="true" /></a></Button>
            <Button asChild className="w-full border-cream bg-cream text-ink shadow-none hover:bg-sun sm:w-auto"><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Hubungi Affan Coconut melalui WhatsApp"><WhatsAppIcon className="size-5" /> TANYA &amp; PESAN</a></Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border-[3px] border-cream bg-cream shadow-[6px_6px_0_#c5f43d] md:shadow-[10px_10px_0_#c5f43d]">
          <iframe title="Peta lokasi Affan Coconut" src={mapEmbedUrl} width="100%" height="480" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[310px] min-h-0 w-full border-0 grayscale-[.15] md:h-[480px] md:min-h-[380px]" />
        </div>
      </div>
    </section>
  )
}
