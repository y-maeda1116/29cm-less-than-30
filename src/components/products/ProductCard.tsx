'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import type { Product } from '@/types/product'
import { CATEGORY_LABELS } from '@/lib/constants'
import { formatPrice } from '@/lib/format'
import { ProductImage } from './ProductImage'
import { SizeBadge } from './SizeBadge'
import { WasteBadge } from './WasteBadge'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} data-testid="product-card" className="group block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="relative aspect-square overflow-hidden">
          <ProductImage
            src={product.imageUrl}
            alt={product.name}
            seed={product.id}
            priority={priority}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2 p-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            {CATEGORY_LABELS[product.category]}
          </p>
          <h3 className="font-bold leading-snug">{product.name}</h3>
          <p className="font-mono text-sm">{formatPrice(product.price)}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <SizeBadge maxSize={product.maxSize} />
            <WasteBadge wasteType={product.wasteType} />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
