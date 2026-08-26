import { describe, expect, it } from 'vitest'
import { products } from '@/data/products'
import { MAX_PRODUCT_SIZE } from '@/lib/constants'
import type { Category } from '@/types/product'

describe('products モックデータの不変条件', () => {
  it('商品は14点', () => {
    expect(products).toHaveLength(14)
  })

  it('IDは一意', () => {
    expect(new Set(products.map((p) => p.id)).size).toBe(products.length)
  })

  it('全商品の最長辺は29.9cm以下', () => {
    for (const p of products) {
      expect(p.maxSize).toBeLessThanOrEqual(MAX_PRODUCT_SIZE)
    }
  })

  it('折りたたみ時サイズも29.9cm以下', () => {
    for (const p of products) {
      if (p.foldedMaxSize !== undefined) {
        expect(p.foldedMaxSize).toBeLessThanOrEqual(MAX_PRODUCT_SIZE)
      }
    }
  })

  it('折りたたみ不要な商品のmaxSizeは寸法の最大値と一致', () => {
    for (const p of products) {
      if (!p.assemblyRequired) {
        const maxDim = Math.max(p.dimensions.width, p.dimensions.depth, p.dimensions.height)
        expect(maxDim).toBeCloseTo(p.maxSize)
      }
    }
  })

  it('featuredは4点', () => {
    expect(products.filter((p) => p.featured).length).toBe(4)
  })

  it('カテゴリ分布は desk:4 / furniture:4 / kitchen:3 / goods:3', () => {
    const count = (category: Category) =>
      products.filter((p) => p.category === category).length
    expect(count('desk')).toBe(4)
    expect(count('furniture')).toBe(4)
    expect(count('kitchen')).toBe(3)
    expect(count('goods')).toBe(3)
  })
})
