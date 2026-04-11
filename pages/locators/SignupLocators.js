class SignupLocators {
    constructor(page) {
        this.page = page;
    }

    // Step 1 — "New User Signup" section
    get signupHeading() { return this.page.getByText('New User Signup!'); }
    get nameInput() { return this.page.locator('[data-qa="signup-name"]'); }
    get emailInput() { return this.page.locator('[data-qa="signup-email"]'); }
    get signupButton() { return this.page.locator('[data-qa="signup-button"]'); }

    // Step 2 — "Enter Account Information" form
    get accountInfoHeading() { return this.page.getByText('Enter Account Information'); }
    get genderMr() { return this.page.locator('#id_gender1'); }
    get passwordInput() { return this.page.locator('[data-qa="password"]'); }
    get dayDropdown() { return this.page.locator('[data-qa="days"]'); }
    get monthDropdown() { return this.page.locator('[data-qa="months"]'); }
    get yearDropdown() { return this.page.locator('[data-qa="years"]'); }
}
module.exports = { SignupLocators };