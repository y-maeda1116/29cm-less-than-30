import { products } from '@/data/products'
import { getFeatured } from '@/lib/filters'
import { ProductCard } from '@/components/products/ProductCard'

export function FeaturedProducts() {
  const featured = getFeatured(products)

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Featured
      </p>
      <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
        注目のアイテム
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        どれも最長辺29.9cm以下。処分時は普通ごみで出せます。
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 2} />
        ))}
      </div>
    </section>
  )
}
