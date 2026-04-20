import { expect,chromium } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard';

export default async function globalSetup() {
    const browser = await chromium.launch();

    const context = await browser.newContext(
     { storageState: undefined } ); 
      
   
    // await context.clearCookies(); // fully clean the context (cookies, localStorage, etc.
    const page = await context.newPage();

    await page.goto('https://test.ebookingnepal.com/');
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.closePopupIfVisible();
    await page.locator(':text-is("Sign In")').click()
    await expect(page.getByRole('img', { name: 'Google' })).toBeVisible()
    await page.getByRole('textbox', { name: 'Enter your Email' }).fill('bishalkoju69@gmail.com');
    await page.getByRole('textbox', { name: 'Please enter a strong password' }).fill('Bishal@123456');
    await page.locator('button').filter({ hasText: 'Sign In' }).last().click();
    await page.waitForURL('https://test.ebookingnepal.com/');
    await context.storageState({ path: 'auth.json' });
    await browser.close();
}