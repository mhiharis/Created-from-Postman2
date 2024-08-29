const { test, expect } = require('@playwright/test');
const homePageActions = require('../actions/homePageActions');
const userHomePageActions = require("../actions/userHomePageActions");

test('Verify user can Login using valid credentials', async ({ page }) => {
  await page.goto(process.env.baseURL);
  await homePageActions.verifyLogo(page);
  await userHomePageActions.navigateLoginNverify(page);
  await userHomePageActions.validLogin(page);
});

