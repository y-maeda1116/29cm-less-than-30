import type { Category, SizeBand, WasteType } from '@/types/product'

export const MAX_PRODUCT_SIZE = 29.9
export const SIZE_BAND_LIMIT_15 = 15
export const SIZE_BAND_LIMIT_25 = 25

export const CATEGORY_LABELS: Record<Category, string> = {
  desk: 'デスク周り',
  furniture: '小型家具',
  kitchen: 'キッチン',
  goods: '雑貨',
}

export const SIZE_BAND_LABELS: Record<SizeBand, string> = {
  under15: '〜15cm',
  under25: '〜25cm',
  limit: '29cm限界',
}

export const WASTE_TYPE_LABELS: Record<WasteType, string> = {
  burnable: '可燃ごみ',
  nonBurnable: '不燃ごみ',
}
