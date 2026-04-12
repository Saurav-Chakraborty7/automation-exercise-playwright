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

    // Step 3 — Address information
    get firstNameInput() { return this.page.locator('[data-qa="first_name"]'); }
    get lastNameInput() { return this.page.locator('[data-qa="last_name"]'); }
    get companyInput() { return this.page.locator('[data-qa="company"]'); }
    get address1Input() { return this.page.locator('[data-qa="address"]'); }
    get address2Input() { return this.page.locator('[data-qa="address2"]'); }
    get countryDropdown() { return this.page.locator('[data-qa="country"]'); }
    get stateInput() { return this.page.locator('[data-qa="state"]'); }
    get cityInput() { return this.page.locator('[data-qa="city"]'); }
    get zipcodeInput() { return this.page.locator('[data-qa="zipcode"]'); }
    get mobileInput() { return this.page.locator('[data-qa="mobile_number"]'); }
    get createAccountBtn() { return this.page.locator('[data-qa="create-account"]'); }
}
module.exports = { SignupLocators };