const { HomeLocators } = require("../locators/HomeLocators");
const { expect } = require("@playwright/test");

class HomeActions {
    constructor(page) {
        this.page = page;
        this.loc = new HomeLocators(page);
    }
    async goto() {
        await this.page.goto('/');
    }
    async verifyHomePageIsVisible() {
        await expect(this.loc.logo).toBeVisible();
    }

    async clickSignupLogin() {
        await this.loc.navSignupLogin.click();
    }

    async clickDeleteAccount() {
        await this.loc.navDeleteAccount.click();
    }

    async verifyLoggedInAs(name) {
        await expect(this.loc.loggedInAsText).toContainText(name);
    }

    async verifyAccountDeleted() {
        await expect(this.loc.accountDeletedText).toBeVisible();
    }


}
module.exports = { HomeActions };