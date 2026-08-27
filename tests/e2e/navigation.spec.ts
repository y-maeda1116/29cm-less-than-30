import { expect, test } from '@playwright/test'

test.describe('サイト全体のナビゲーション', () => {
  test('ホーム→カタログ→詳細→ストーリーの導線が通る', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('粗大ごみ券')

    await page.getByRole('link', { name: '商品を見る' }).click()
    await expect(page).toHaveURL(/\/products$/)

    await page.getByTestId('product-card').first().click()
    await expect(page).toHaveURL(/\/products\/p-\d{2}$/)

    await page.getByRole('banner').getByRole('link', { name: 'ホーム' }).click()
    await expect(page).toHaveURL(/\/$/)

    await page.getByRole('link', { name: '30cmの壁とは' }).click()
    await expect(page.locator('#story')).toBeVisible()
  })
})
