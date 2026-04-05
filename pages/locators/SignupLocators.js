class SignupLocators {
    constructor(page) {
        this.page = page;
    }

    // Step 1 — "New User Signup" section
    get signupHeading() { return this.page.getByText('New User Signup!'); }
    get nameInput() { return this.page.locator('[data-qa="signup-name"]'); }
    get emailInput() { return this.page.locator('[data-qa="signup-email"]'); }
    get signupButton() { return this.page.locator('[data-qa="signup-button"]'); }
}
module.exports = { SignupLocators };