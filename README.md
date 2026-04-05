# 🎭 Automation Exercise — Playwright Test Suite

End-to-end automation test suite for [automationexercise.com](https://automationexercise.com), built with [Playwright](https://playwright.dev/). The project follows the **Page Object Model (POM)** design pattern, separating locators, actions, and test logic into distinct layers for better maintainability and scalability.

---

##  Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running Tests](#-running-tests)
- [Test Cases](#-test-cases)
- [Configuration](#-configuration)

---

##  Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Node.js](https://nodejs.org/) | LTS | Runtime environment |
| [@playwright/test](https://playwright.dev/) | ^1.58.2 | Test framework & browser automation |
| [@types/node](https://www.npmjs.com/package/@types/node) | ^25.5.0 | TypeScript type definitions for Node |

---

##  Project Structure

```
automation-exercise-playwright/
│
├── pages/
│   ├── actions/              # Page action classes (user interactions)
│   │   └── HomeActions.js
│   └── locators/             # Page locator classes (element selectors)
│       └── HomeLocators.js
│
├── tests/                    # Test spec files
│   └── tc01_registerUser.spec.js
│
├── utils/                    # Shared utilities
│   └── testData.js           # Reusable test data
│
├── playwright.config.js      # Playwright configuration
├── package.json
└── .gitignore
```

### Design Pattern: Page Object Model

| Layer | Location | Responsibility |
|-------|----------|---------------|
| **Locators** | `pages/locators/` | CSS/XPath selectors, grouped by page |
| **Actions** | `pages/actions/` | Methods that interact with the page (click, fill, verify) |
| **Tests** | `tests/` | Test logic — composes actions into test scenarios |
| **Utils** | `utils/` | Shared constants, test data, helpers |

---

## Prerequisites

- **Node.js** (v18 or higher recommended) — [Download](https://nodejs.org/)
- **npm** (bundled with Node.js)
- **Git**

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Saurav-Chakraborty7/automation-exercise-playwright.git
   cd automation-exercise-playwright
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/tc01_registerUser.spec.js
```

### Run tests in headed mode (see the browser)

```bash
npx playwright test --headed
```

### Run tests on a specific browser

```bash
npx playwright test --project=chromium
```

### Open the HTML report after a run

```bash
npx playwright show-report
```

---

## Test Cases

| ID | Test Case | Status |
|----|-----------|--------|
| TC01 | Register User | 🚧 In Progress |

### TC01 — Register User

**File:** `tests/tc01_registerUser.spec.js`

Automates the full user registration and cleanup flow on [automationexercise.com](https://automationexercise.com):

1. Launch browser & navigate to home page
2. Verify home page is visible
3. Click **Signup / Login**
4. Verify **"New User Signup!"** is visible
5. Enter name and email, click **Signup**
6. Verify **"Enter Account Information"** is visible
7. Fill account info (title, password, date of birth)
8. Fill address info and click **Create Account**
9. Verify **"Account Created!"** is visible, click Continue
10. Verify **"Logged in as `<name>`"** is visible
11. Click **Delete Account**
12. Verify **"Account Deleted!"** is visible

---

##  Configuration

Configuration is defined in `playwright.config.js`:

| Setting | Value |
|---------|-------|
| **Base URL** | `https://automationexercise.com` |
| **Browser** | Chromium (Desktop Chrome) |
| **Viewport** | 1280 × 720 |
| **Timeout** | 60,000 ms (60s) |
| **Retries** | 1 |
| **Headless** | `false` (browser window visible by default) |
| **Screenshots** | On failure only |
| **Reporter** | HTML + List |

To run tests headlessly (CI-friendly), override via CLI:

```bash
npx playwright test --headless
```

---

##  License

ISC — see [package.json](./package.json) for details.
