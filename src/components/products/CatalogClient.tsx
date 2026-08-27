'use client'

import { useMemo, useState } from 'react'
import type { Product } from '@/types/product'
import { filterProducts, type FilterState } from '@/lib/filters'
import { FilterBar } from './FilterBar'
import { ProductGrid } from './ProductGrid'
import { EmptyState } from './EmptyState'

const INITIAL_FILTER: FilterState = { query: '', category: 'all', sizeBand: 'all' }

export function CatalogClient({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<FilterState>(INITIAL_FILTER)
  const filtered = useMemo(() => filterProducts(products, filter), [products, filter])

  return (
    <div className="space-y-8">
      <FilterBar filter={filter} onChange={setFilter} />
      <p className="font-mono text-xs text-zinc-500" aria-live="polite" data-testid="product-count">
        {filtered.length} / {products.length} items
      </p>
      {filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <EmptyState onReset={() => setFilter(INITIAL_FILTER)} />
      )}
    </div>
  )
}
