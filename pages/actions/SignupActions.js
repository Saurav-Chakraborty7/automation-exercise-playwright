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

    async fillAccountInfoForm(password, day, month, year) {
        await this.loc.genderMr.check();
        await this.loc.passwordInput.fill(password);
        await this.loc.dayDropdown.selectOption(day);
        await this.loc.monthDropdown.selectOption(month);
        await this.loc.yearDropdown.selectOption(year);
    }

    async fillAddressForm(user) {
        await this.loc.firstNameInput.fill(user.firstName);
        await this.loc.lastNameInput.fill(user.lastName);
        await this.loc.companyInput.fill(user.company);
        await this.loc.address1Input.fill(user.address1);
        await this.loc.address2Input.fill(user.address2);
        await this.loc.countryDropdown.selectOption(user.country);
        await this.loc.stateInput.fill(user.state);
        await this.loc.cityInput.fill(user.city);
        await this.loc.zipcodeInput.fill(user.zipcode);
        await this.loc.mobileInput.fill(user.mobileNumber);
        await this.loc.createAccountBtn.click();
    }

    async verifyAccountCreated() {
        await expect(this.loc.accountCreatedText).toBeVisible();
    }

    async clickContinue() {
        await this.loc.continueButton.click();
    }
}

module.exports = { SignupActions };