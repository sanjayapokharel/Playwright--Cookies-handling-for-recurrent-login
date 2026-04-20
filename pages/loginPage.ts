import { expect,Locator,Page } from "@playwright/test";



export class LoginPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.email = page.getByRole('textbox', { name: 'Enter your Email' })
        this.password = page.getByRole('textbox', { name: 'Please enter a strong password' })
        this.loginButton = page.locator('button').filter({ hasText: 'Sign In' }).last()
    }

    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }}