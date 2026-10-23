# Playwright E2E Automation

This project is a Playwright-based end-to-end test automation starter, designed to help you automate browser-based UI testing in a clean and maintainable way.

It includes a sample test suite, configuration for Playwright, and a basic project layout you can extend as your test suite grows.

## What is included

- Playwright test framework
- Example UI test scenarios
- Cross-browser test configuration
- HTML test report generation
- Simple project structure for scalable automation

## Prerequisites

Before running the tests, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

Verify your environment:

```bash
node --version
npm --version
git --version
```

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/qa-automation-learning-hub/playwright-e2e-automation.git
cd playwright-e2e-automation
```

### 2. Install dependencies

```bash
npm install
```

If a lock file is present, you can also use:

```bash
npm ci
```

### 3. Install Playwright browsers

Playwright needs browser binaries to run the tests.

```bash
npx playwright install
```

If you are using Linux and need dependencies for the browser runtime, run:

```bash
npx playwright install --with-deps
```

## Run the tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

This opens the browser so you can visually monitor execution.

```bash
npx playwright test --headed
```

### Run a specific browser project

This project is configured to run on Chromium, Firefox, and WebKit.

```bash
npx playwright test --project=chromium
```

### Run a specific test file

```bash
npx playwright test tests/example.spec.js
```

### Run tests in UI mode

```bash
npx playwright test --ui
```

### Debug tests

```bash
npx playwright test --debug
```

## View the HTML report

After running tests, open the generated HTML report:

```bash
npx playwright show-report
```

This report helps you review failed tests, inspect details, and debug issues faster.

## Project structure

A scalable and maintainable Playwright project structure is:

```text
playwright-e2e-automation/
├── .github/
│   └── workflows/
│       └── ci.yml                 # CI pipeline for test execution
├── tests/
│   ├── smoke/
│   │   └── login.spec.js         # Login and authentication checks
│   ├── regression/
│   │   └── checkout.spec.js      # Regression coverage for cart/checkout flow
│   └── e2e/
│       └── sample-flow.spec.js   # End-to-end purchase journey
├── pages/
│   ├── base-page.js              # Shared page actions and utilities
│   ├── login-page.js             # Login page object model
│   ├── home-page.js              # Inventory/products page model
│   ├── cart-page.js              # Cart page model
│   ├── checkout-page.js          # Checkout page object model
│   └── dashboard-page.js         # Optional legacy dashboard object model
├── fixtures/
│   ├── auth.js                   # Test users and login helpers
│   ├── index.js                  # Shared Playwright fixtures and setup
│   └── ...                       # More reusable fixtures as needed
├── test-data/
│   ├── users.json                # Test user data
│   ├── products.json             # Product data
│   └── ...                       # Additional scenario data
├── utils/
│   ├── helpers.js                # Shared helper methods
│   ├── assertions.js             # Reusable assertion helpers
│   ├── api.js                    # Optional API helper utilities
│   └── ...                       # Additional support utilities
├── config/
│   ├── env.js                    # Shared environment config
│   └── ...                       # Additional config files
├── playwright.config.js          # Browser and test execution config
├── eslint.config.mjs             # Linting configuration
├── .env.example                  # Sample environment variables
├── README.md                     # Project documentation
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Dependency lock file
├── .gitignore                    # Git ignore rules
└── code-structure.md             # Project structure overview
```

You can also review [code-structure.md](./code-structure.md) for a more detailed project layout.

## Useful commands

```bash
# Run all tests
npx playwright test

# Run tests headed
npx playwright test --headed

# Run only Chromium tests
npx playwright test --project=chromium

# Run a specific file
npx playwright test tests/example.spec.js

# Open Playwright report
npx playwright show-report
```

## Troubleshooting

### Browser not found

```bash
npx playwright install
```

### Dependency errors

```bash
npm install
```

### Tests failing to locate elements

- Confirm the correct selector is used
- Check whether the page has fully loaded
- Validate the application state before assertions

### CI issues

If the tests pass locally but fail in CI, check:

- Environment variables
- Browser dependencies
- Timeouts and retries
- Test isolation and shared state

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test Configuration](https://playwright.dev/docs/test-configuration)
- [Playwright Test Runner API](https://playwright.dev/docs/test-api)
- [Playwright HTML Reporter](https://playwright.dev/docs/test-reporters)

## Happy testing

This project is a great starting point for building your own browser automation suite. As you add more pages and scenarios, keep the test structure organized and reusable.
