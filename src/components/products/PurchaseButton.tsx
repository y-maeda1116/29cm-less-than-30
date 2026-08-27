'use client'

import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { DemoModal } from '@/components/ui/DemoModal'
import { formatPrice } from '@/lib/format'

export function PurchaseButton({ price }: { price: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-black text-white transition hover:bg-accent-strong sm:w-auto"
      >
        <ShoppingBag size={16} />
        カートに入れる — {formatPrice(price)}
      </button>
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
