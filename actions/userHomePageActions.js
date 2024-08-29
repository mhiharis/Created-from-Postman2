// actions/homePageActions.js
const { test, expect } = require('@playwright/test');
//const { logo, searchBox, searchButton, link_createAccount } = require('../locators/homePageLocators');
const homePageLocators = require("../locators/homePageLocators");

// Define actions related to the home page
module.exports = {
  async navigateLoginNverify(page) {
    const signIn = await page.locator(homePageLocators.link_signIn);
    await signIn.click();
    await page.locator(homePageLocators.text_WelcomTestUserName).isVisible();
    await page.locator(homePageLocators.signIn_text_registerdCustomers).isVisible();
    await expect(page.locator(homePageLocators.button_SignIn)).toContainText('Sign In');
    await page.locator(homePageLocators.signIn_text_NewCustomers).isVisible();
    await expect(page.locator(homePageLocators.button_createAccount)).toContainText('Create an Account');
  },

  async validLogin(page) {
    // Use environment variables directly
    const username = process.env.USER_NAME;
    const password = process.env.PASSWORD;
    await page.locator(homePageLocators.text_input_Email).fill(username);
    await page.locator(homePageLocators.text_input_Passwrod).fill(password);
    await page.click(homePageLocators.button_SignIn);
    const welcomeText = await page.locator(homePageLocators.text_WelcomTestUserName);
    await expect(welcomeText).toHaveText("Welcome, Test User John Dow!");
    //Validate user Logged in successfully.
    const loggedInSuccess = await page.locator(homePageLocators.text_WelcomTestUserName);
    if (loggedInSuccess) {
      await expect(loggedInSuccess).toHaveClass("logged-in");
      console.log("User Loged-in Successfully.");
    } else {
      console.log("User not loged in");
    }


  }
};
