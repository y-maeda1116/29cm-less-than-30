import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, PackageOpen, Ruler, Trash2, Wallet } from 'lucide-react'
import { getProduct, products } from '@/data/products'
import { getRelated } from '@/lib/filters'
import { CATEGORY_LABELS, WASTE_TYPE_LABELS } from '@/lib/constants'
import { formatPrice } from '@/lib/format'
import { SizeBadge } from '@/components/products/SizeBadge'
import { WasteBadge } from '@/components/products/WasteBadge'
import { ProductImage } from '@/components/products/ProductImage'
import { PurchaseButton } from '@/components/products/PurchaseButton'
import { ProductCard } from '@/components/products/ProductCard'

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }))
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: '商品が見つかりません' }
  return {
    title: product.name,
    description: `${product.description} 最長辺${product.maxSize.toFixed(1)}cm、普通ごみで処分可能。`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.imageUrl }],
    },
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = getProduct(id)
  if (!product) notFound()
  const related = getRelated(products, product, 3)

  const specs = [
    ['サイズ (W×D×H)', `${product.dimensions.width} × ${product.dimensions.depth} × ${product.dimensions.height} cm`],
    ['最長辺', `${product.maxSize.toFixed(1)} cm`],
    ['カテゴリ', CATEGORY_LABELS[product.category]],
    ['処分区分', `${WASTE_TYPE_LABELS[product.wasteType]}（普通ごみ）`],
    ['推奨ゴミ袋', `${product.recommendedBagSize}ゴミ袋`],
  ] as const

  const assemblyText = product.assemblyRequired
    ? `折りたたみ（解体）で最長辺 ${product.foldedMaxSize?.toFixed(1)} cm まで収まります`
    : '解体・折りたたみ不要。そのままのサイズで30cm未満です'

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft size={14} /> 商品一覧に戻る
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800">
          <ProductImage
            src={product.imageUrl}
            alt={product.name}
            seed={product.id}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {CATEGORY_LABELS[product.category]}
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight">{product.name}</h1>
          <p className="mt-2 font-mono text-2xl">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {product.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <SizeBadge maxSize={product.maxSize} />
            <WasteBadge wasteType={product.wasteType} />
          </div>

          <div className="mt-6">
            <PurchaseButton price={product.price} />
          </div>

          <section
            aria-label="29cmスペック"
            className="mt-8 rounded-3xl border-2 border-accent/40 bg-accent/5 p-6"
          >
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Why 29cm — 処分費用 ¥0 の証明
            </h2>
            <ul className="mt-5 space-y-5 text-sm">
              <li className="flex gap-3">
                <Ruler size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-black">
                    最長辺 {product.maxSize.toFixed(1)} cm — 30cm未満
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    粗大ごみの境界線（30cm）を下回るため、自治体の区分ではそのまま普通ごみとして出せます。
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <PackageOpen size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-black">{assemblyText}</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    工具や手間をかけず、通常のゴミ袋に入る寸法に収まることを確認しています。
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Trash2 size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-black">{product.recommendedBagSize}ゴミ袋に収まる</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {WASTE_TYPE_LABELS[product.wasteType]}の区分に従って、市販の
                    {product.recommendedBagSize}ゴミ袋に入れて出してください。
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Wallet size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-black">処分費用 ¥0</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    粗大ごみ処理券の購入は不要。手続き費用は一切かかりません。
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <table className="mt-8 w-full text-sm">
            <caption className="sr-only">商品スペック一覧</caption>
            <tbody>
              {specs.map(([label, value]) => (
                <tr key={label} className="border-b border-zinc-200 dark:border-zinc-800">
                  <th scope="row" className="w-44 py-3 pr-4 text-left font-bold">
                    {label}
                  </th>
                  <td className="py-3 font-mono">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-xl font-black tracking-tight">あわせて見たい</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  )
}
