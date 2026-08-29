# 29cm - Less than 30

「30cmを、超えない。」— 最長辺29.9cm以下の商品だけを扱う架空のECサイト（ポートフォリオ作品）。

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

## デプロイ

`next.config.ts` は2つの出力モードを持ち、主要なホスティングすべてに対応します。

| モード | ビルドコマンド | 出力 | 対応プラットフォーム |
|---|---|---|---|
| サーバー | `npm run build` | `.next/` | Vercel / Railway / fly.io |
| 静的エクスポート | `STATIC_EXPORT=1 npm run build` | `out/` | Netlify / Cloudflare Pages / Render |

GitHub Pagesは静的エクスポートにリポジトリサブパスの `basePath` を加えた `GITHUB_PAGES=1 npm run build` を使用し、ワークフロー（`.github/workflows/deploy.yml`）がmainブランチへのプッシュ時に自動デプロイします。

- デプロイ済み: <https://y-maeda1116.github.io/29cm-less-than-30/>

### 各プラットフォームの手順

**Vercel** — 設定ファイル不要。ダッシュボードでリポジトリをImportすると自動検出されます。

**Netlify** — `netlify.toml` を同梱。ダッシュボードからGit連携するか、CLIでデプロイ:

```bash
STATIC_EXPORT=1 npm run build && netlify deploy --prod --dir=out
```

**Cloudflare Pages** — `wrangler.toml` を同梱（ビルドはローカルまたはダッシュボード設定で実行）:

```bash
STATIC_EXPORT=1 npm run build && npx wrangler pages deploy out
```

**Render** — `render.yaml`（Blueprint）を同梱。ダッシュボードで New → Blueprint としてリポジトリを選択します。

**Railway** — `railway.json`（NIXPACKS）を同梱。リポジトリを新規プロジェクトとして接続します。

**fly.io** — `fly.toml` と `Dockerfile` を同梱:

```bash
fly launch   # fly.toml / Dockerfile を検出（アプリ名はこの時点で確定）
fly deploy
```

※ `Dockerfile` はローカルのDocker環境がないためビルド検証を行っていません。初回デプロイ時に確認してください。

## 注意

本サイトは架空のECサイトです（ポートフォリオ作品）。掲載商品・価格はすべて fiction で、購入・決済はできません。
