// To create new tests, record them instead of writing them:
//
// 1) Generate test steps with "npm run test:e2e-codegen".
// 2) Change the initial `page.goto` so it uses "/".

import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto('/')

  // Click li:has-text("Try unit testing with Vitest")
  await page.locator('li:has-text("Try unit testing with Vitest")').click()

  // Click text=Archive done todos
  await page.locator('text=Archive done todos').click()

  // Click li:has-text("Try integration testing with Playwright")
  await page
    .locator('li:has-text("Try integration testing with Playwright")')
    .click()

  // Click [placeholder="What\'s next\?"]
  await page.locator('[placeholder="What\\\'s next\\?"]').click()

  // Fill [placeholder="What\'s next\?"]
  await page
    .locator('[placeholder="What\\\'s next\\?"]')
    .fill('TDD all the things!')

  // Press Enter
  await page.locator('[placeholder="What\\\'s next\\?"]').press('Enter')

  // Click text=Archive done todos
  await page.locator('text=Archive done todos').click()

  // Double click li:has-text("TDD all the things!")
  await page.locator('li:has-text("TDD all the things!")').dblclick()

  // Click text=Archive done todos
  await page.locator('text=Archive done todos').click()
})
