import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type MenuItem = {
  name: string
  label: [string, string]
  description: string
  price: string
  icon: string
  color: string
  image: string
  imageAlt: string
  layout: string
}

export function MenuSection({ items }: { items: MenuItem[] }) {
  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-cream px-4 py-14 sm:px-[6vw] md:py-28">
      <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-3xl md:mb-12">
        <p className="mb-3 font-mono text-sm font-bold text-coral">Tinggal pilih, semua bikin seger.</p>
        <h2 id="menu-title" className="text-balance font-display text-5xl font-extrabold leading-[.88] tracking-[-.04em] sm:text-6xl md:text-8xl">Mau Seger yang Mana?</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-12 md:items-stretch md:gap-7">
        {items.map((item, index) => (
          <Card data-testid="menu-card" key={item.name} className={cn("group grid min-h-[228px] grid-cols-[8.5rem_1fr] overflow-hidden rounded-2xl border-0 p-0 shadow-none md:block md:min-h-[560px] md:transition-transform md:duration-300 md:ease-out md:hover:-translate-y-2", item.color, item.layout)}>
            <CardHeader className="relative row-span-2 h-full min-h-[228px] overflow-hidden p-3 md:h-72 md:min-h-0 md:p-6">
              <span className="relative z-10 grid size-8 place-items-center rounded-full bg-cream font-mono text-[11px] font-bold md:size-9 md:text-xs">{String(index + 1).padStart(2, "0")}</span>
              <img src={item.image} alt={item.imageAlt} width="1254" height="1254" loading="lazy" className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-500 ease-out md:p-4 md:group-hover:scale-105" />
            </CardHeader>
            <CardContent className="bg-[#f9faf6] px-4 pb-1 pt-5 md:px-6 md:pb-0 md:pt-7">
              <CardTitle aria-label={item.name} className="text-crush text-[1.85rem] leading-[.88] sm:text-4xl lg:text-5xl">{item.label[0]}<br />{item.label[1]}</CardTitle>
              <CardDescription className="mt-3 max-w-sm text-pretty text-[13px] leading-5 text-ink/75 sm:text-sm md:mt-4">{item.description}</CardDescription>
            </CardContent>
            <CardFooter className="bg-[#f9faf6] px-4 pb-5 pt-2 md:px-6 md:pb-7 md:pt-6"><strong className="font-display text-2xl font-extrabold md:text-3xl">{item.price}</strong></CardFooter>
          </Card>
        ))}
      </div>
      </div>
    </section>
  )
}
