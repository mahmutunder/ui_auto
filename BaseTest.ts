import { Browser, BrowserContext, Page, chromium } from 'playwright';

class BaseTest {
    browser: Browser | undefined;
     context: BrowserContext | undefined;
     page: Page |undefined;

    constructor() {
        // Constructor can be used for initializing variables or for configurations that apply to all tests
    }

    async setup() {
        // Launch a new browser for each test
        this.browser = await chromium.launch({ headless: false }); // set headless: true if you don't need a browser UI
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async teardown() {
        // Close the browser after each test
        if (this.page) {
            await this.page.close();
        }
        if (this.context) {
            await this.context.close();
        }
        if (this.browser) {
            await this.browser.close();
        }
    }

    // Utility method example: navigate to a URL
    async navigateTo(url: string) {
       
        if (!this.page) {
            throw new Error("Page is not initialized.");
        } else {
            await this.page.goto(url);
        }
        
    }


    async clickElement(selector: string) {
        if (!this.page) {
            throw new Error("Page is not initialized.");
        }
        const element = await this.page.locator(selector);
        await element.click();
    }


    async logIn() {
        const loginIdLocator="#login2";
        if (!this.page) {
            throw new Error("Page is not initialized.");
        }
        const element = await this.page.locator(loginIdLocator);
        await element.click();
    }

  
}

export default BaseTest;
