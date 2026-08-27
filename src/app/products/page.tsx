import type { Metadata } from 'next'
import { products } from '@/data/products'
import { CatalogClient } from '@/components/products/CatalogClient'

export const metadata: Metadata = {
  title: '商品一覧',
  description:
    '最長辺29.9cm以下の商品カタログ。カテゴリ・サイズ帯・検索で絞り込みできます。どの商品も普通ごみで処分可能。',
}

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Products
      </p>
      <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
        すべての商品、29.9cm以下。
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        カテゴリとサイズ帯で絞り込めます。どの商品も粗大ごみ扱いにならず、普通ごみで処分できます。
      </p>
      <div className="mt-8">
        <CatalogClient products={products} />
      </div>
    </div>
  )
}
