import type { Product } from '@/types/product'
import { MAX_PRODUCT_SIZE } from '@/lib/constants'

export const products: Product[] = [
  {
    id: 'p-01',
    name: 'ペントレイ（ウォールナット）',
    category: 'desk',
    price: 3200,
    maxSize: 15.0,
    wasteType: 'burnable',
    description:
      'デスクまわりのペンや小物をまとめて、しかもごみに出すときはそのまま可燃ごみ。15cmの小さなトレイです。',
    imageUrl: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 15, depth: 10, height: 4 },
    assemblyRequired: false,
    recommendedBagSize: '20L',
    featured: true,
  },
  {
    id: 'p-02',
    name: 'ケーブルクリップ 6個セット',
    category: 'desk',
    price: 980,
    maxSize: 4.5,
    wasteType: 'nonBurnable',
    description:
      'USBケーブルやイヤホンケーブルをまとめるクリップ。1個4.5cm、ポケットにもゴミ袋にも収まります。',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 4.5, depth: 2, height: 1.5 },
    assemblyRequired: false,
    recommendedBagSize: '20L',
  },
  {
    id: 'p-03',
    name: 'モニターライザー ミニ',
    category: 'desk',
    price: 5800,
    maxSize: 29.5,
    wasteType: 'burnable',
    description:
      'ノートPCの視線を上げる木製ライザー。最長辺29.5cm — 30cmの壁まであと5mmの攻めた設計です。',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 29.5, depth: 18, height: 6.5 },
    assemblyRequired: false,
    recommendedBagSize: '45L',
    featured: true,
  },
  {
    id: 'p-04',
    name: 'ブックスタンド（スチール）',
    category: 'desk',
    price: 2900,
    maxSize: 24.0,
    wasteType: 'nonBurnable',
    description:
      '読みかけの本を立てて収納するスチール製スタンド。処分するときは不燃ごみへ、そのまま出せます。',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 24, depth: 14, height: 18 },
    assemblyRequired: false,
    recommendedBagSize: '45L',
  },
  {
    id: 'p-05',
    name: '折りたたみスツール「TWENTY NINE」',
    category: 'furniture',
    price: 7900,
    maxSize: 29.9,
    wasteType: 'nonBurnable',
    description:
      '使用時は座高45cmのスツール、折りたたむと最長辺29.9cm。家具なのに、粗大ごみにならない。本ブランドの象徴です。',
    imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 34, depth: 30, height: 45 },
    assemblyRequired: true,
    foldedMaxSize: 29.9,
    recommendedBagSize: '70L',
    featured: true,
  },
  {
    id: 'p-06',
    name: 'ウォールシェルフ 29',
    category: 'furniture',
    price: 6500,
    maxSize: 29.8,
    wasteType: 'burnable',
    description:
      '壁に掛ける小さな木製シェルフ。最長辺29.8cmの木板は、処分時も可燃ごみとしてそのまま出せます。',
    imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 29.8, depth: 12, height: 4 },
    assemblyRequired: false,
    recommendedBagSize: '45L',
  },
  {
    id: 'p-07',
    name: 'ミニサイドテーブル（立方体）',
    category: 'furniture',
    price: 8900,
    maxSize: 28.0,
    wasteType: 'burnable',
    description:
      '28cm立方のソファサイドテーブル。コロンとした形状で部屋になじみ、処分するときは可燃ごみでOK。',
    imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 28, depth: 28, height: 28 },
    assemblyRequired: false,
    recommendedBagSize: '70L',
  },
  {
    id: 'p-08',
    name: 'フロアシートクッション',
    category: 'furniture',
    price: 3800,
    maxSize: 28.0,
    wasteType: 'burnable',
    description:
      '28cm四方の座面クッション。布とウレタンだけの構成で、いらなくなったら可燃ごみへ。',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 28, depth: 28, height: 6 },
    assemblyRequired: false,
    recommendedBagSize: '70L',
  },
  {
    id: 'p-09',
    name: 'ドリップポット 0.4L',
    category: 'kitchen',
    price: 4300,
    maxSize: 14.8,
    wasteType: 'nonBurnable',
    description:
      '一口サイズのステンレスドリップポット。細い注ぎ口でゆっくり注いで、使わなくなったら不燃ごみへ。',
    imageUrl: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 14.8, depth: 10.5, height: 11 },
    assemblyRequired: false,
    recommendedBagSize: '20L',
    featured: true,
  },
  {
    id: 'p-10',
    name: 'カッティングボード S',
    category: 'kitchen',
    price: 2600,
    maxSize: 24.5,
    wasteType: 'burnable',
    description:
      'ひとり暮らしにちょうどいい木製まな板。24.5cm、使い終わったら可燃ごみとして処分できます。',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 24.5, depth: 15, height: 1.5 },
    assemblyRequired: false,
    recommendedBagSize: '45L',
  },
  {
    id: 'p-11',
    name: 'スタッフコンテナ 800ml',
    category: 'kitchen',
    price: 1900,
    maxSize: 19.0,
    wasteType: 'nonBurnable',
    description:
      '冷蔵庫のデッドスペースを埋める角型保存容器。積み重ねても19cm、不燃ごみへそのまま。',
    imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 19, depth: 11, height: 10 },
    assemblyRequired: false,
    recommendedBagSize: '45L',
  },
  {
    id: 'p-12',
    name: 'アーチミラー',
    category: 'goods',
    price: 4900,
    maxSize: 28.5,
    wasteType: 'nonBurnable',
    description:
      '玄関や洗面台に置くアーチ型の卓上ミラー。28.5cm、割れても不燃ごみで出せるサイズです。',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 28.5, depth: 18, height: 1.2 },
    assemblyRequired: false,
    recommendedBagSize: '45L',
  },
  {
    id: 'p-13',
    name: 'レザーコースター 4枚組',
    category: 'goods',
    price: 2200,
    maxSize: 10.5,
    wasteType: 'burnable',
    description:
      '10.5cmの本革コースター4枚組。革は可燃ごみ。小さく使って、小さく手放せます。',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 10.5, depth: 10.5, height: 0.5 },
    assemblyRequired: false,
    recommendedBagSize: '20L',
  },
  {
    id: 'p-14',
    name: 'アロマストーンディフューザー',
    category: 'goods',
    price: 1800,
    maxSize: 8.0,
    wasteType: 'nonBurnable',
    description:
      '8cmの陶器ストーンに精油を数滴。電気も火も使わず、処分時は不燃ごみです。',
    imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80',
    dimensions: { width: 8, depth: 8, height: 8 },
    assemblyRequired: false,
    recommendedBagSize: '20L',
  },
]

for (const product of products) {
  if (product.maxSize > MAX_PRODUCT_SIZE) {
    throw new Error(
      `商品 ${product.id} の最長辺が上限を超えています: ${product.maxSize}cm`,
    )
  }
}

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
