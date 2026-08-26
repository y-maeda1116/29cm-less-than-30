import { describe, expect, it } from 'vitest'
import type { Product } from '@/types/product'
import {
  filterProducts,
  getFeatured,
  getRelated,
  getSizeBand,
  type FilterState,
} from '@/lib/filters'

const makeProduct = (overrides: Partial<Product> = {}): Product => ({
  id: 'p-test',
  name: 'テスト商品',
  category: 'desk',
  price: 1000,
  maxSize: 20,
  wasteType: 'burnable',
  description: 'テスト用の説明文',
  imageUrl: 'https://images.unsplash.com/photo-test',
  dimensions: { width: 20, depth: 10, height: 5 },
  assemblyRequired: false,
  recommendedBagSize: '45L',
  ...overrides,
})

describe('getSizeBand（サイズ帯の境界値）', () => {
  it.each([
    [4.5, 'under15'],
    [15.0, 'under15'],
    [15.1, 'under25'],
    [25.0, 'under25'],
    [25.1, 'limit'],
    [29.9, 'limit'],
  ])('maxSize %i → %s', (maxSize, expected) => {
    expect(getSizeBand(maxSize)).toBe(expected)
  })
})

describe('filterProducts', () => {
  const products = [
    makeProduct({ id: 'a', name: '折りたたみスツール', category: 'furniture', maxSize: 29.9 }),
    makeProduct({ id: 'b', name: 'ケーブルクリップ', category: 'desk', maxSize: 4.5 }),
    makeProduct({ id: 'c', name: 'カッティングボード', category: 'kitchen', maxSize: 24.5 }),
  ]

  it('フィルタなしで全件返す', () => {
    const result = filterProducts(products, { query: '', category: 'all', sizeBand: 'all' })
    expect(result).toHaveLength(3)
  })

  it('カテゴリで絞り込む', () => {
    const result = filterProducts(products, { query: '', category: 'desk', sizeBand: 'all' })
    expect(result.map((p) => p.id)).toEqual(['b'])
  })

  it('サイズ帯で絞り込む', () => {
    const result = filterProducts(products, { query: '', category: 'all', sizeBand: 'limit' })
    expect(result.map((p) => p.id)).toEqual(['a'])
  })

  it('検索語は商品名と説明に対し大文字小文字を無視して部分一致', () => {
    const result = filterProducts(products, { query: 'スツール', category: 'all', sizeBand: 'all' })
    expect(result.map((p) => p.id)).toEqual(['a'])
  })

  it('検索語の前後の空白は無視される', () => {
    const result = filterProducts(products, { query: '  スツール  ', category: 'all', sizeBand: 'all' })
    expect(result.map((p) => p.id)).toEqual(['a'])
  })

  it('複合フィルタ（カテゴリ×サイズ帯×検索語）', () => {
    const result = filterProducts(products, { query: 'ボード', category: 'kitchen', sizeBand: 'under25' })
    expect(result.map((p) => p.id)).toEqual(['c'])
  })

  it('一致なしなら空配列', () => {
    const result = filterProducts(products, { query: '存在しない', category: 'all', sizeBand: 'all' })
    expect(result).toEqual([])
  })
})

describe('getFeatured', () => {
  it('featured: true の商品だけを返す', () => {
    const products = [
      makeProduct({ id: 'a', featured: true }),
      makeProduct({ id: 'b' }),
      makeProduct({ id: 'c', featured: true }),
    ]
    expect(getFeatured(products).map((p) => p.id)).toEqual(['a', 'c'])
  })
})

describe('getRelated', () => {
  const products = [
    makeProduct({ id: 'a', category: 'kitchen' }),
    makeProduct({ id: 'b', category: 'kitchen' }),
    makeProduct({ id: 'c', category: 'desk', featured: true }),
    makeProduct({ id: 'd', category: 'goods' }),
  ]

  it('同カテゴリを優先し自身を除外、不足分は他カテゴリ（featured優先）で補完して3点返す', () => {
    const related = getRelated(products, products[0], 3)
    expect(related.map((p) => p.id)).toEqual(['b', 'c', 'd'])
  })

  it('同カテゴリが十分あれば同カテゴリだけで3点返す', () => {
    const many = [
      makeProduct({ id: 'a', category: 'desk' }),
      makeProduct({ id: 'b', category: 'desk' }),
      makeProduct({ id: 'c', category: 'desk' }),
      makeProduct({ id: 'd', category: 'desk' }),
    ]
    const related = getRelated(many, many[0], 3)
    expect(related.map((p) => p.id)).toEqual(['b', 'c', 'd'])
  })
})
