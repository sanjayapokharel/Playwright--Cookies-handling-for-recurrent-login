import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard';



test("Already logged in test", async ({ page }) => {
    await page.goto('https://test.ebookingnepal.com/user/detail');
const dashboardPage = new DashboardPage(page);
    await dashboardPage.closePopupIfVisible();
    await expect(page.locator('span:has-text("bishalkoju")')).toHaveText('bishalkoju');

    await page.waitForTimeout(5000)
});