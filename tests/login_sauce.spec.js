import { test, expect } from '@playwright/test'

test('Login with valid credentials', async ({page}) => {

    await page.goto('https://demo.applitools.com/')
    await expect(page).toHaveTitle('ACME Demo App by Applitools')
    await page.pause()
    await page.locator().fill('')
})