import { test as base } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { ProductPage } from "../pages/ProductPage"
import { CheckoutOverviewPage } from "../pages/CheckOutOverViewPage"

type Fixtures =
    {
        loginPage: LoginPage
        productPage: ProductPage
        checPage: CheckoutOverviewPage
    }

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    }
})
test("save authentication state", async ({ page }) => { 
    const context = page.context(); 
    await page.goto('url') 
    await page.locator("username").fill("admin"); 
    await page.locator("password").fill("admin123"); 
    await page.locator("login").click() 
    await context.storageState({ path: "actual path.json" })
}) 