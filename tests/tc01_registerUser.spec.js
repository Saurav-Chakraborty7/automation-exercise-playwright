// TEST CASE 01 — Register User
// Steps:
//  1. Launch browser & navigate to home page
//  2. Verify home page is visible
//  3. Click 'Signup / Login'
//  4. Verify 'New User Signup!' is visible
//  5. Enter name and email, click Signup
//  6. Verify 'Enter Account Information' is visible
//  7. Fill account info (title, password, date of birth)
//  8. Fill address info and click 'Create Account'
//  9. Verify 'Account Created!' is visible, click Continue
// 10. Verify 'Logged in as <name>' is visible
// 11. Click 'Delete Account'
// 12. Verify 'Account Deleted!' is visible

const { test } = require('@playwright/test');
const { HomeActions } = require('../pages/actions/HomeActions');
const { SignupActions } = require('../pages/actions/SignupActions');
const { userData } = require('../utils/testData');

test('TC01 - Register User', async ({ page }) => {
    const home = new HomeActions(page);
    const signup = new SignupActions(page);

    // Step 1-2: Open home page and verify it loaded
    await home.goto();
    await home.verifyHomePageIsVisible();

    // Step 3-4: Go to Signup/Login and verify signup section
    await home.clickSignupLogin();
    await signup.verifySignupPageIsVisible();

    // Step 5: Enter name + email and submit
    await signup.enterNameAndEmail(userData.name, userData.email);

    // Step 6: Verify account info form appeared
    await signup.verifyAccountInfoFormIsVisible();
});