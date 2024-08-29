const { test, expect } = require('@playwright/test');
const homePageActions = require('../actions/homePageActions');

// test('Verify the default status of Create New Customer Account page', async ({ page }) => {
//     await page.goto(process.env.baseURL);
//     //await page.goto('https://magento.softwaretestingboard.com/');
//     await page.getByRole('link', { name: 'Create an Account' }).click();
//     await expect(page.getByRole('heading')).toContainText('Create New Customer Account');
//     await expect(page.locator('#form-validate')).toContainText('Personal Information');
//     await expect(page.locator('#password-strength-meter')).toContainText('Password Strength: No Password');
//     await expect(page.getByRole('button', { name: 'Create an Account' })).toBeVisible();
//     await expect(page.locator('small')).toContainText('We know you have an assignment to complete. If this site is not functioning as expected, drop us an email. Copyright © 2013-present Magento, Inc. All rights reserved.');
// });

//   test('Verify a user can create an account with valid details', async ({ page }) => {
//     await page.goto(process.env.baseURL);
//     //await page.goto('https://magento.softwaretestingboard.com/');
//     await page.getByRole('link', { name: 'Create an Account' }).click();
//     await expect(page.getByRole('heading')).toContainText('Create New Customer Account');
//     await page.getByLabel('First Name').click();
//     await page.getByLabel('First Name').fill('Test User John');
//     await page.getByLabel('Last Name').click();
//     await page.getByLabel('Last Name').fill('Dow');
//     await page.getByLabel('Email', { exact: true }).click();
//     await page.getByLabel('Email', { exact: true }).fill('johndow@gmail.com');
//     await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
//     await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('John1234');
//     await page.getByLabel('Confirm Password').click();
//     await page.getByLabel('Confirm Password').fill('John1234');
//     await page.getByRole('button', { name: 'Create an Account' }).click();
//   });