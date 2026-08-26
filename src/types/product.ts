export const CATEGORIES = ['desk', 'furniture', 'kitchen', 'goods'] as const
export type Category = (typeof CATEGORIES)[number]

export const SIZE_BANDS = ['under15', 'under25', 'limit'] as const
export type SizeBand = (typeof SIZE_BANDS)[number]

export const WASTE_TYPES = ['burnable', 'nonBurnable'] as const
export type WasteType = (typeof WASTE_TYPES)[number]

export interface ProductDimensions {
  width: number
  depth: number
  height: number
}

export interface Product {
  id: string
  name: string
  category: Category
  price: number
  /** 最長辺 cm（不変条件: 29.9以下） */
  maxSize: number
  wasteType: WasteType
  description: string
  imageUrl: string
  dimensions: ProductDimensions
  /** 解体（折りたたみ）が必要か */
  assemblyRequired: boolean
  /** 折りたたみ時の最長辺 cm（assemblyRequired: true の場合のみ） */
  foldedMaxSize?: number
  recommendedBagSize: string
  featured?: boolean
}
