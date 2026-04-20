import { test } from "@playwright/test";
import {DashboardPage} from "../pages/dashboard";



test("Test Application Load", async ({ page }) => {
    await page.goto('/');
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.verifyDashboardLoad();
    await dashboardPage.closePopupIfVisible();
    await page.locator('img.m_11f8ac07.mantine-Avatar-image').click();
    await page.getByText('Logout', { exact: true }).click();
    await page.waitForTimeout(5000)
});