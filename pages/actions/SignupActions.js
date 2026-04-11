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

    async enterNameAndEmail(name, email) {
        await this.loc.nameInput.fill(name);
        await this.loc.emailInput.fill(email);
        await this.loc.signupButton.click();
    }

    async verifyAccountInfoFormIsVisible() {
        await expect(this.loc.accountInfoHeading).toBeVisible();
    }
}

module.exports = { SignupActions };