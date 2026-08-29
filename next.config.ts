import type { NextConfig } from 'next'

/** GitHub Pages ビルド（GITHUB_PAGES=1）でのみ静的エクスポートを有効化 */
const isGitHubPages = process.env.GITHUB_PAGES === '1'

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: 'export',
    basePath: '/29cm-less-than-30',
    trailingSlash: true,
  }),
  images: {
    // 静的エクスポートでは Image Optimization が動作しないため無効化
    ...(isGitHubPages && { unoptimized: true }),
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
}

export default nextConfig
