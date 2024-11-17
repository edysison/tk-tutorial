# TKE Q.A. Admission Test

## Project Overview

The project is designed to evaluate the quality assurance skills and knowledge. It contains a set of automated tests built using Cypress to validate the functionality of the application.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v23.2.0 or higher)
- [npm](https://www.npmjs.com/)

## Installation

After cloning the project, run the following commands:

```bash
npm install
```

Then, to run the tests:

```bash
npm run cy:open
```

For smoke test run:

```bash
npm run cy:smoke
```

For a complete headless test run:

```bash
npm run cy:critical
```

# Notes
Since I did not have access to the test product's codebase, I was unable to fully leverage my abilities. As a result, there are still improvements to be made in order to make these automated tests more robust and functional. Some of the enhancements that can be made include:

- Replace class selectors with data attributes for more reliable targeting.
- Add component-level testing for better isolation and reliability.
- Integrate the tests with the project’s Continuous Integration (CI) pipeline.