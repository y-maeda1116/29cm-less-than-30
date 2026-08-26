import type { Category, Product, SizeBand } from '@/types/product'
import { SIZE_BAND_LIMIT_15, SIZE_BAND_LIMIT_25 } from '@/lib/constants'

export type CategoryFilter = Category | 'all'
export type SizeBandFilter = SizeBand | 'all'

export interface FilterState {
  query: string
  category: CategoryFilter
  sizeBand: SizeBandFilter
}

export function getSizeBand(maxSize: number): SizeBand {
  if (maxSize <= SIZE_BAND_LIMIT_15) return 'under15'
  if (maxSize <= SIZE_BAND_LIMIT_25) return 'under25'
  return 'limit'
}

export function filterProducts(products: Product[], filter: FilterState): Product[] {
  const query = filter.query.trim().toLowerCase()
  return products.filter((product) => {
    if (filter.category !== 'all' && product.category !== filter.category) return false
    if (filter.sizeBand !== 'all' && getSizeBand(product.maxSize) !== filter.sizeBand) {
      return false
    }
    if (query && !`${product.name} ${product.description}`.toLowerCase().includes(query)) {
      return false
    }
    return true
  })
}

export function getFeatured(products: Product[]): Product[] {
  return products.filter((product) => product.featured === true)
}

export function getRelated(products: Product[], target: Product, count = 3): Product[] {
  const sameCategory = products.filter(
    (product) => product.id !== target.id && product.category === target.category,
  )
  const others = products
    .filter((product) => product.id !== target.id && product.category !== target.category)
    .sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false))
  return [...sameCategory, ...others].slice(0, count)
}
