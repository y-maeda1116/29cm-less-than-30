# 29cm - Less than 30

「粗大ごみ券、いりません。」— 最長辺29.9cm以下の商品だけを扱う架空のECサイト（ポートフォリオ作品）。

## コンセプト

自治体の「30cm以上は粗大ごみ扱い」というルールに着目し、すべての商品を最長辺29.9cm以下に設計。
処分時は普通ごみ（可燃/不燃）で出せ、申請・手数料・収集日待ちがすべて不要になります。

## 技術スタック

- Next.js 16（App Router / SSG）
- TypeScript 7
- Tailwind CSS 4（@theme デザイントークン）
- Motion（マイクロインタラクション）
- Vitest / Playwright（ユニットテスト / E2E）

## セットアップ

```bash
npm install
npm run dev        # http://localhost:3000
```

## スクリプト

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバー |
| `npm run build` | 本番ビルド |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript 型チェック |
| `npm run test:unit` | Vitest ユニットテスト |
| `npm run test:e2e` | Playwright E2E |

## 注意

本サイトは架空のECサイトです。掲載商品・価格はすべて fiction で、購入・決済はできません。
