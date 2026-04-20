import { expect,Locator,Page } from "@playwright/test";



export class DashboardPage {
    readonly page: Page;
    readonly midText: Locator;


    constructor(page: Page) {
        this.page = page;
        this.midText = page.getByRole('heading', { name: 'Travel: A companion that collects memories' })

    }

    async loadURL() {
        await this.page.goto('https://test.ebookingnepal.com/');

    }

    async verifyDashboardLoad() {
        await expect(this.midText).toBeVisible();
        await expect(this.midText).toContainText('Travel: A companion that collects memories');
        await this.page.waitForTimeout(5000);

    }
    async closePopupIfVisible() {
        const closeButton = this.page.locator("button svg.lucide-x");

        if (await closeButton.isVisible()) {
            await closeButton.click();
        }
    }

    async clickSignIn() {

    await this.page.locator(':text-is("Sign In")').click()
    await expect(this.page.getByRole('img', { name: 'Google' })).toBeVisible()

}}