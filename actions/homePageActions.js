// actions/homePageActions.js
const { test, expect } = require('@playwright/test');
//const { logo, searchBox, searchButton, link_createAccount } = require('../locators/homePageLocators');
const homePageLocators = require("../locators/homePageLocators");

// Define actions related to the home page
module.exports = {
  async verifyLogo(page) {
    await page.locator(homePageLocators.logo).isVisible();
    await page.locator(homePageLocators.link_createAccount).isVisible();
    await expect(page.locator(homePageLocators.link_createAccount)).toContainText('Create an Account');
  },

  async searchForProduct(page, productName) {
    await page.type(homePageLocators.searchBox, productName);
    await page.in
    await page.locator(homePageLocators.search_list).waitFor();
    await page.click(homePageLocators.search_first_option);
    await page.click(homePageLocators.searchButton);    
  }
};
