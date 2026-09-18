import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border-[3px] border-ink font-mono text-xs font-bold tracking-wide transition-[transform,box-shadow] focus-visible:ring-4 focus-visible:ring-sky focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ink text-cream coral-shadow hover:-translate-x-0.5 hover:-translate-y-0.5",
        lime: "bg-lime text-ink poster-shadow hover:-translate-x-0.5 hover:-translate-y-0.5",
        ghost: "border-0 bg-transparent text-ink hover:-translate-y-0.5",
      },
      size: {
        default: "h-13 px-5 py-3",
        sm: "h-11 px-3 py-2",
        lg: "h-15 px-7 py-4 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
)

function Button({ className, variant, size, asChild = false, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
