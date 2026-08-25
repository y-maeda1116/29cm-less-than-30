# 「29cm - Less than 30」デザインスペック

作成日: 2026-08-25
ステータス: 承認済み（ブレインストーミング完了）

## 1. プロジェクト概要

自治体の「30cm以上は粗大ごみ扱い」というルールに着目した架空のライフスタイル・家具・雑貨ECサイト（ポートフォリオ作品）。

**コンセプト**: すべての商品の最長辺が 29.9cm 以下 / 粗大ごみ手続き不要 / 処分コスト ¥0

**キャッチコピー**:
- 「粗大ごみ券、いりません。」
- 「30cmの壁を越えないプロダクト」

## 2. 確定事項（ユーザー承認済み）

| 項目 | 決定 |
|---|---|
| 技術スタック | 要件書のスタック + Vitest/Testing Library + Playwright + GitHub Actions CI |
| 商品詳細UI | 独立ページ `/products/[id]`（Dynamic Routes + SSG） |
| 商品点数 | 14点（デスク周り4 / 小型家具4 / キッチン3 / 雑貨3、うちfeatured 4点） |
| テスト方針 | フィルタロジック等のUnit（TDD）+ 主要フロー3本のE2E |
| 構成 | 案A: 複数ページ構成 + クライアントフィルタリング |

## 3. 技術スタック

| ライブラリ | バージョン方針 |
|---|---|
| Next.js | 16.x（App Router） |
| TypeScript | 7.x（>= 7.0、グローバル設定準拠） |
| Tailwind CSS | 4.x（`@theme` によるデザイントークン定義） |
| Motion | `motion` 13.x（旧 framer-motion ではなく新パッケージ名） |
| lucide-react | 1.x |
| Vitest + Testing Library | Unit テスト |
| Playwright | E2E テスト |

## 4. ディレクトリ構成

```
29cm-less-than-30/
├── .github/workflows/ci.yml          # CI（lint / typecheck / test / build / e2e）
├── next.config.ts                    # Unsplash画像の remotePatterns
├── playwright.config.ts
├── vitest.config.ts
├── public/
└── src/
    ├── app/
    │   ├── layout.tsx                # ルートレイアウト（Header/Footer/フォント/Metadata）
    │   ├── page.tsx                  # Home: Hero + Featured + Brand Story
    │   ├── not-found.tsx
    │   ├── globals.css               # Tailwind v4 @theme デザイントークン
    │   └── products/
    │       ├── page.tsx              # カタログ（フィルターUI）
    │       └── [id]/page.tsx         # 商品詳細（SSG + generateStaticParams）
    ├── components/
    │   ├── layout/  … Header / Footer
    │   ├── home/    … Hero（定規モチーフ）/ FeaturedProducts / BrandStory
    │   ├── products/… ProductCard / ProductGrid / FilterBar / SizeBadge / WasteBadge / PurchaseButton
    │   └── ui/      … Badge / DemoModal（「ポートフォリオ用デモ」表示）
    ├── data/products.ts              # モックデータ14点
    ├── lib/filters.ts                # フィルタ純関数（TDD対象）
    ├── lib/constants.ts              # カテゴリ・サイズ帯の定義
    └── types/product.ts              # Product 型
tests/
├── unit/filters.test.ts
└── e2e/{catalog,detail,navigation}.spec.ts
```

原則: フィーチャー別ディレクトリ分割、小ファイル（200-400行Typical / 800行Max）。

## 5. データモデル（src/types/product.ts）

```typescript
export const CATEGORIES = ['desk', 'furniture', 'kitchen', 'goods'] as const;
export type Category = (typeof CATEGORIES)[number];
// desk=デスク周り / furniture=小型家具 / kitchen=キッチン / goods=雑貨

export type WasteType = 'burnable' | 'nonBurnable';   // 可燃ごみ / 不燃ごみ
export type SizeBand = 'under15' | 'under25' | 'limit';
// under15=〜15cm / under25=15cm超〜25cm / limit=25cm超〜29.9cm（29cm限界）

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  maxSize: number;                     // 最長辺 cm（必ず 29.9 以下の不変条件）
  wasteType: WasteType;
  description: string;
  imageUrl: string;                    // Unsplash
  dimensions: { width: number; depth: number; height: number };
  assemblyRequired: boolean;           // 解体要否（false →「解体不要」表示）
  foldedMaxSize?: number;              // 折りたたみ時の最長辺（オプション）
  recommendedBagSize: string;          // 推奨ゴミ袋（例: '45L'）
  featured?: boolean;                  // トップのピックアップ枠
}
```

サイズ帯の境界値定義（`lib/constants.ts`）:
- `under15`: maxSize <= 15.0
- `under25`: 15.0 < maxSize <= 25.0
- `limit`: 25.0 < maxSize <= 29.9

データ不変条件: 全商品 `maxSize <= 29.9`。`products.ts` にランタイム検証を入れ、違反時に throw する。

## 6. デザインシステム

### カラー
- ベース: モノトーン（zinc系スケール）
- アクセント: オレンジ `#E8590C` 系 — サイズバッジ・`処分費用 ¥0` 表示・定規マーカーのみに限定使用
- Tailwind v4 の `@theme` にトークン定義（`--color-accent` 等）

### タイポグラフィ
- 見出し・本文（日本語）: Zen Kaku Gothic New（next/font/google）
- サイズ数値・スペック値（`29.0 cm` 等）: IBM Plex Mono — 計器的な精密感

### 定規モチーフ（Hero）
0→30cm の目盛りバー。29.9cm 位置にアクセント色マーカー、「30cmの壁」を可視化。初回表示時に目盛りが走るアニメーション（Motion）。

### バッジ
- SizeBadge: `29.0 cm` 形式、サイズ帯で濃淡（limit帯が最も強調）
- WasteBadge: `普通ごみ OK` / `処分費用 ¥0`

## 7. ページ仕様

### Home（/）
1. **Hero**: キャッチコピー「粗大ごみ券、いりません。」+ 定規目盛りアニメーション + 「なぜ29cmなのか」の短いイントロ（粗大ごみコスト¥0・処分ストレスゼロ）
2. **FeaturedProducts**: `featured: true` の4点をグリッド表示
3. **BrandStory**: 「30cmの壁」解説 — 引っ越し・買い替え時の粗大ごみ申請・手配・手数料のストレス → 本ブランドの存在意義
4. CTA → `/products`

### カタログ（/products）
- **FilterBar**: テキスト検索input + カテゴリタブ（全4種+ALL）+ サイズ帯タブ（3種+ALL）
- **ProductGrid**: Motion `layout` アニメーションでフィルタ再配置。カード要素: 画像（next/image）・商品名・価格・SizeBadge・WasteBadge
- フィルタはクライアントstate管理（即時反応・URL再取得なし）
- フィルタ結果0件 → Empty状態表示（「該当する商品がありません」+ フィルタリセットボタン）

### 商品詳細（/products/[id]）
- 大画像 + スペック表（寸法・重量・材質）
- **29cmスペック領域**:
  - 最長辺サイズの証明表記（`29.0 cm — 30cm未満 in`）
  - 解体要否（「解体不要」/「折りたたみ時 29.0cm」）
  - 推奨ゴミ袋（例: 45Lゴミ袋に収まるイラスト/アイコン + ラベル）
- 購入ボタン → **DemoModal**: 「これはポートフォリオ用のデモです」
- 関連商品（同カテゴリから3点）
- `generateStaticParams` で全14点を静的生成 / `generateMetadata` でOGP

## 8. エラー処理

- 不正な商品ID → `notFound()` → カスタム `not-found.tsx`
- 画像読み込み失敗 → プレースホルダーへのフォールバック
- データ不変条件違反（maxSize > 29.9）→ products.ts 読み込み時に throw（開発時検出）

## 9. テスト計画

### Unit（Vitest + Testing Library、TDD）
対象: `lib/filters.ts` の純関数
- 検索語フィルタ（部分一致・case insensitive・空文字）
- カテゴリフィルタ
- サイズ帯フィルタ（境界値: 15.0 / 15.1 / 25.0 / 25.1 / 29.9）
- 複合フィルタ（検索語×カテゴリ×サイズ帯）
- featured 抽出関数

### E2E（Playwright、3本）
1. **catalog.spec.ts**: カタログ表示 → カテゴリ/サイズフィルタ操作で表示件数が変化
2. **detail.spec.ts**: カード → 詳細遷移 → 購入ボタン → デモモーダル表示
3. **navigation.spec.ts**: Home → カタログ → 詳細 → Brand Story アンカー移動

## 10. CI（GitHub Actions）

- actions/checkout・actions/setup-node は最新メジャーバージョン
- ジョブ: install → lint → typecheck → vitest → build → playwright e2e

## 11. スコープ外（YAGNI）

- カート機能・決済・認証（架空サイトのため）
- CMS統合・API層
- 多言語化
- モーダル型詳細（独立ページに決定済み）
