import type { NextConfig } from 'next'

/** 静的エクスポート（Netlify / Cloudflare Pages / Render 等）。basePathなし */
const isStaticExport = process.env.STATIC_EXPORT === '1'
/** GitHub Pages ビルド。静的エクスポート + リポジトリサブパスの basePath */
const isGitHubPages = process.env.GITHUB_PAGES === '1'
/** 静的ファイルのみの配信では Image Optimization が動作しない */
const isExport = isStaticExport || isGitHubPages

const nextConfig: NextConfig = {
  ...(isExport && {
    output: 'export',
  }),
  ...(isGitHubPages && {
    basePath: '/29cm-less-than-30',
    trailingSlash: true,
  }),
  images: {
    ...(isExport && { unoptimized: true }),
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
}

export default nextConfig
