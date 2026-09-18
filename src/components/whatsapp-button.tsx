import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { whatsappUrl } from "@/config/site"

export function WhatsappButton() {
  return (
    <Button asChild variant="lime" className="safe-floating-bottom fixed right-4 z-40 size-14 rounded-full p-0 md:h-13 md:w-auto md:rounded-none md:px-5 md:py-3">
      <a data-testid="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Hubungi Affan Coconut melalui WhatsApp"><WhatsAppIcon className="size-6 md:size-5" /><span data-testid="floating-whatsapp-label" className="hidden md:inline">TANYA &amp; PESAN</span></a>
    </Button>
  )
}
