// All test data in one place
// We use Date.now() so the email is always unique on every run

const userData = {
    name: 'John Doe',
    email: `john_${Date.now()}@mailtest.com`,   // unique every run
    password: 'Test@1234',
    firstName: 'John',
    lastName: 'Doe',
    company: 'Acme Corp',
    address1: '123 Main Street',
    address2: 'Apt 4B',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobileNumber: '9876543210',
    day: '10',
    month: 'March',
    year: '1995',
};

module.exports = { userData };
