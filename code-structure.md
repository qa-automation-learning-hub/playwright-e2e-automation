# Project Structure

This repository follows a clean and scalable Playwright test automation structure. Each folder has a specific purpose to keep tests readable, maintainable, and reusable.

```text
playwright-e2e-automation/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Continuous integration pipeline for running tests
├── tests/
│   ├── smoke/
│   │   └── login.spec.js         # Authentication and login validations
│   ├── regression/
│   │   └── checkout.spec.js      # Cart and checkout regression coverage
│   └── e2e/
│       └── sample-flow.spec.js   # End-to-end purchase flow
├── pages/
│   ├── base-page.js              # Shared actions and base logic
│   ├── login-page.js             # Login page object model
│   ├── home-page.js              # Inventory/products page object model
│   ├── cart-page.js              # Cart page object model
│   ├── checkout-page.js          # Checkout page object model
│   ├── dashboard-page.js         # Optional legacy dashboard page object
│   └── ...                       # Additional page objects for other app screens
├── fixtures/
│   ├── auth.js                   # User data and login helper functions
│   ├── index.js                  # Shared Playwright fixtures and reusable setup
│   └── ...                       # Additional custom fixtures if needed
├── test-data/
│   ├── users.json                # User credentials and roles
│   ├── products.json             # Product catalog and test data
│   └── ...                       # Scenario-based datasets and JSON payloads
├── utils/
│   ├── helpers.js                # Generic helper functions
│   ├── assertions.js             # Shared assertion utilities
│   ├── api.js                    # Optional API helper utilities
│   └── ...                       # Additional reusable utility modules
├── config/
│   ├── env.js                    # Environment configuration values
│   └── ...                       # Optional config files for different environments
├── playwright.config.js          # Playwright browser and test configuration
├── eslint.config.mjs             # Linting and code-quality rules
├── README.md                     # Setup instructions, standards, and run commands
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Locked dependency versions
├── .gitignore                    # Ignored files and directories
├── .env.example                  # Example environment variables
└── code-structure.md             # Overview of the project layout
```

## Folder responsibilities

- `tests/`  
  Contains all automated test scenarios and assertions. This is where feature-level behavior is validated.

- `pages/`  
  Holds the Page Object Model (POM) classes. These files represent application pages and encapsulate page interactions.

- `fixtures/`  
  Stores reusable Playwright fixtures and setup logic for test isolation and consistent execution.

- `test-data/`  
  Contains structured test inputs such as users, product data, and scenario-specific payloads.

- `utils/`  
  Includes helper functions and reusable logic that support tests without duplicating code.

- `config/`  
  Keeps environment and configuration settings such as base URLs, credentials, and runtime options.

- `.github/workflows/`  
  Contains CI pipeline definitions for automated execution in GitHub Actions.

- `playwright.config.ts`  
  Defines browsers, timeouts, reporters, base URL, and test execution settings.

- `eslint.config.mjs`  
  Holds linting rules to maintain code quality and consistency.

- `README.md`  
  Documents setup instructions, project conventions, and how to run the test suite.

This structure helps keep the project organized, easier to scale, and simpler to maintain as the automation suite grows.