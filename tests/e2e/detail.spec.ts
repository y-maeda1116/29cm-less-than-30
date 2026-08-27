import { expect, test } from '@playwright/test'

test.describe('商品詳細', () => {
  test('カードから遷移し、29cmスペックとデモモーダルを確認できる', async ({ page }) => {
    await page.goto('/products')
    await page.getByTestId('product-card').filter({ hasText: '折りたたみスツール' }).click()

    await expect(page).toHaveURL(/\/products\/p-05$/)
    await expect(
      page.getByRole('heading', { name: '折りたたみスツール「TWENTY NINE」' }),
    ).toBeVisible()
    await expect(page.getByRole('region', { name: '29cmスペック' })).toBeVisible()
    await expect(page.getByRole('region', { name: '29cmスペック' })).toContainText('29.9 cm — 30cm未満')
    await expect(page.getByRole('region', { name: '29cmスペック' })).toContainText('70Lゴミ袋に収まる')

    await page.getByRole('button', { name: /カートに入れる/ }).click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    await expect(dialog).toContainText('これはポートフォリオ用のデモです')
    await dialog.getByRole('button', { name: '閉じる', exact: true }).click()
    await expect(dialog).toBeHidden()
  })

  test('存在しない商品IDは404ページを表示する', async ({ page }) => {
    await page.goto('/products/does-not-exist')
    await expect(page.getByRole('heading', { name: 'ページが見つかりません' })).toBeVisible()
  })
})
