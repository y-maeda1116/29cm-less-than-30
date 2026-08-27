import { expect, test } from '@playwright/test'

test.describe('商品カタログ', () => {
  test('初期表示で14点の商品カードが出る', async ({ page }) => {
    await page.goto('/products')
    await expect(page).toHaveURL(/\/products/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('すべての商品、29.9cm以下。')
    await expect(page.getByTestId('product-card')).toHaveCount(14)
  })

  test('カテゴリ「小型家具」で4点に絞り込まれる', async ({ page }) => {
    await page.goto('/products')
    await page.getByRole('button', { name: '小型家具' }).click()
    await expect(page.getByTestId('product-card')).toHaveCount(4)
  })

  test('サイズ「29cm限界」で6点に絞り込まれる', async ({ page }) => {
    await page.goto('/products')
    await page.getByRole('button', { name: '29cm限界' }).click()
    await expect(page.getByTestId('product-card')).toHaveCount(6)
  })

  test('小型家具×〜25cmは0件で空状態→リセットで復帰', async ({ page }) => {
    await page.goto('/products')
    await page.getByRole('button', { name: '小型家具' }).click()
    await page.getByRole('button', { name: '〜25cm' }).click()
    await expect(page.getByTestId('empty-state')).toBeVisible()
    await page.getByRole('button', { name: 'フィルタをリセット' }).click()
    await expect(page.getByTestId('product-card')).toHaveCount(14)
  })

  test('検索「スツール」で1点に絞り込まれる', async ({ page }) => {
    await page.goto('/products')
    await page.getByLabel('商品を検索').fill('スツール')
    await expect(page.getByTestId('product-card')).toHaveCount(1)
    await expect(page.getByTestId('product-card')).toContainText('折りたたみスツール')
  })
})
