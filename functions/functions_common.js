const { test, expect } = require('@playwright/test');
const homePageLocators = require("../locators/homePageLocators");
const mensLocators = require("../locators/mensLocators");
const orderLocators = require("../locators/orderLocators");

module.exports = { 
    selectMenuItemJacket: async function (page, jacketName) {
    // Click on the Men's menu
    await page.locator(mensLocators.menu_Men).click();
    
    // Click on the Jackets option in the sidebar menu
    await page.locator(mensLocators.mens_SideBarMenu_Jackets).click();
    
    // Use the jacket name provided to find and click on the item
    await page.getByRole('link', { name: jacketName }).first().click();
}

};