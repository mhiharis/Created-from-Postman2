
const { test, expect } = require('@playwright/test');
const homePageActions = require('../actions/homePageActions');

// test('Verify user can navigate to Home page', async ({ page }) => {
//   await page.goto(process.env.baseURL);
//   //await page.goto('https://magento.softwaretestingboard.com/');
//   // Verify the logo is visible
//   await homePageActions.verifyLogo(page);
// });


// test('Verify user can search for a product', async ({ page }) => {
//   await page.goto(process.env.baseURL);
//   //await page.goto('https://magento.softwaretestingboard.com/');
//   await homePageActions.verifyLogo(page);
//   await homePageActions.searchForProduct(page, 'Shirt');
//   await expect(page.locator("//span[@class='base']")).toBeVisible();
// });
