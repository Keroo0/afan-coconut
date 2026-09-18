import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LocationSection } from "@/components/location-section"
import { MenuSection, type MenuItem } from "@/components/menu-section"
import { WhatsappButton } from "@/components/whatsapp-button"

const menuItems: MenuItem[] = [
  { name: "Es Kelapa Biasa", label: ["Es Kelapa", "Biasa"], description: "Segar, manis, dan ramah di kantong. Pilihan pas buat nemenin harimu.", price: "Rp5.000", icon: "🥥", color: "bg-sky", image: "/images/es-kelapa-biasa.webp", imageAlt: "Foto menu Es Kelapa Biasa yang dingin dan segar", layout: "md:col-span-5" },
  { name: "Kelapa 1-an", label: ["Kelapa", "Satuan"], description: "Satu kelapa utuh buat kamu yang hausnya nggak setengah-setengah.", price: "Rp12.000", icon: "🌴", color: "bg-lime", image: "/images/kelapa-satuan.webp", imageAlt: "Foto menu Kelapa 1-an utuh siap diminum", layout: "md:col-span-3" },
  { name: "Kelapa Muda", label: ["Kelapa", "Muda"], description: "Daging lembut, air melimpah, dan rasa alami yang bikin pengin lagi.", price: "Rp18.000", icon: "✨", color: "bg-sun", image: "/images/kelapa-muda.webp", imageAlt: "Foto menu Kelapa Muda dengan daging kelapa lembut", layout: "md:col-span-4" },
]

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <a href="#isi" className="fixed -left-96 top-4 z-50 bg-cream p-3 font-bold focus:left-4">Langsung ke isi</a>
      <Header />
      <main id="isi">
        <Hero />
        <MenuSection items={menuItems} />
        <LocationSection />
      </main>
      <footer className="flex flex-col gap-2 border-t border-cream/20 bg-ink px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-7 text-[11px] text-cream sm:px-[6vw] sm:flex-row sm:items-center sm:justify-between md:pb-7 md:pr-44"><span>© 2026 AFFAN COCONUT</span><span className="text-lime">Segarnya dekat, senyumnya dapat.</span></footer>
      <WhatsappButton />
    </div>
  )
}
