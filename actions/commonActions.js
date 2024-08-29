const { test, expect } = require('@playwright/test');
const homePageLocators = require("../locators/homePageLocators");
const mensLocators = require("../locators/mensLocators");
const orderLocators = require("../locators/orderLocators");

module.exports={
    async selectMenuItemJacket(page) {
        await page.locator(mensLocators.menu_Men).click();
        await page.locator(mensLocators.mens_SideBarMenu_Jackets).click();
        await page.getByRole('link', { name: 'Proteus Fitness Jackshirt' }).first().click();

    }


};