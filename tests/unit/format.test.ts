import { describe, expect, it } from 'vitest'
import { formatPrice } from '@/lib/format'

describe('formatPrice', () => {
  it('価格を通貨記号付きカンマ区切りで返す', () => {
    expect(formatPrice(3200)).toBe('¥3,200')
  })

  it('0円も正しく整形される', () => {
    expect(formatPrice(0)).toBe('¥0')
  })
})
