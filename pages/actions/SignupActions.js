// SIGNUP PAGE — ACTIONS ONLY
// This file uses SignupLocators to perform actions and assertions.
// Tests call these methods — they never touch locators directly.

const { expect } = require('@playwright/test');
const { SignupLocators } = require('../locators/SignupLocators');

class SignupActions {
    constructor(page) {
        this.page = page;
        this.loc = new SignupLocators(page);
    }

    async verifySignupPageIsVisible() {
        await expect(this.loc.signupHeading).toBeVisible();
    }
}

module.exports = { SignupActions };