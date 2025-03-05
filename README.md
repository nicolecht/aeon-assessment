# Aeon Bank Assessment

## Overview
This project is a Next.js App Router (version 15.2.0) web application that implements a responsive navbar, a multi-step login flow with a mock API, and a simple table displaying data fetched from another mock API. It also includes optional unit tests.

This application is also hosted using Vercel and can be accessed at: [https://aeon-assessment-coral.vercel.app/](https://aeon-assessment-coral.vercel.app/)

## Tech Stack
- Frontend Framework: Next.js (App Router) (v15), React (v19)
- Styling: Tailwind CSS (v4)
- Security: bcryptjs (v3)
- Development & Tooling: TypeScript (v5), ESLint (v9)
- API Development: Next.js API Routes
- Unit Testing: Jest (v29), React Testing Library (v16)
- CI/CD & Code Quality: GitHub Workflows for PR checks, Codeowners for strict approval process
- Hosting: Vercel

## Features

### Challenge 1: Basic Navbar
- A collapsible navbar with a title.
- A search input field (non-functional).
- A hamburger icon to toggle the navbar.
- A close `[X]` icon to collapse the navbar.
- A "Login" button that navigates to the login page.

### Challenge 2: Login Flow
- Username input form.
- Calls a mock API (`/api/getSecureWord`) that returns a static secure word.
- Displays the secure word and provides a "Next" button.
- Password input field with masked input.
- Encrypts the password using a bcryptjs hashing library.
- Submits the encrypted password and username to a mock API (`/api/login`).
- Displays a login success message and clears the navbar once login.

### Challenge 3: Data Table
- After successful login, redirects the user to a page displaying a table.
- Fetches and displays data from a mock API (`/api/transaction-history`).
- Displays the transaction history in a structured table.

### Challenge 4 (Optional): Unit Tests
- Unit tests are included for various components and API routes.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (LTS version recommended)
- NPM

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/nicolecht/aeon-assessment
   cd aeon-assessment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application
To start the development server:
```sh
npm run dev
```
The app will be available at `http://localhost:3000`.

### API Endpoints
- `GET /api/getSecureWord` → Returns a static secure word.
- `POST /api/login` → Accepts an encrypted password and username, returns success.
- `GET /api/transaction-history` → Returns mock transaction history data.

### Running Unit Tests
To run unit tests:
```sh
npm run test
```
The test will be run using Jest.

### Viewing V8 Code Coverage Report
Jest is configured to use the V8 coverage provider to generate a code coverage report.
After successfully running Unit Tests, open the code coverage report using:
```sh
open coverage/lcov-report/index.html
```
Opening this file in your browser will display a detailed, interactive coverage report.

---
**Author:** Nicole Chee
**Date:** 5 Mar 2025  
**Framework:** Next.js (App Router) (TypeScript) (Version: 15.2.0)

