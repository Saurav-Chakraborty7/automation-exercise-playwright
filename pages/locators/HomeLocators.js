class HomeLocators {
    constructor(page) {
        this.page = page;
    }

    get logo() {
        return this.page.locator('img[alt="Website for automation practice"]');
    }

    get navSignupLogin() {
        return this.page.locator('a[href="/login"]');
    }

    get navDeleteAccount() {
        return this.page.locator('a[href="/delete_account"]');
    }

    get loggedInAsText() {
        return this.page.locator('a:has-text("Logged in as")');
    }

}
module.exports = { HomeLocators };