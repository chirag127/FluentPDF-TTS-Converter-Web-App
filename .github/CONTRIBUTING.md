# Contributing to FluentPDF-TTS-Converter-Web-App

As the Apex Technical Authority, we enforce a **Zero-Defect, High-Velocity, Future-Proof** development standard. Contributions that elevate code quality, security, and architectural clarity are highly valued.

This repository operates under the principles defined in `.github/AGENTS.md` and adheres to the FAANG-level standards of robust engineering.

## 1. Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. All participants are expected to uphold these standards. For details, see the full [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## 2. Architectural Alignment

Before submitting code, ensure your changes align with the project's core technologies and patterns:

*   **Primary Stack:** Client-side HTML/JavaScript, leveraging Google Gemini API for server-side processing initiated client-side.
*   **Principles:** All new functionality must strictly adhere to **SOLID**, **DRY**, and **YAGNI** principles.
*   **Readability:** Prioritize clear, modern JavaScript syntax. Avoid complex, nested logic.

## 3. Workflow: From Fork to Pull Request

We utilize the standard GitHub Flow integrated with robust CI/CD validation.

### Step 1: Setup and Environment

1.  **Fork the Repository:** Create your own fork of `chirag127/FluentPDF-TTS-Converter-Web-App`.
2.  **Clone:** Clone your fork locally:
    bash
    git clone https://github.com/YOUR_USERNAME/FluentPDF-TTS-Converter-Web-App.git
    cd FluentPDF-TTS-Converter-Web-App
    
3.  **Create a Feature Branch:** Never work directly on `main`.
    bash
    git checkout -b feature/short-descriptive-name
    

### Step 2: Development and Verification

Since this is a client-side web application heavily reliant on external APIs, local testing verification is paramount:

1.  **Implement Changes:** Apply your enhancements or fixes.
2.  **Local Verification:** Ensure the application functions correctly in a modern browser (Chrome/Firefox/Edge).
3.  **API Key Management:** If changes involve configuration or environment variables for the Gemini API proxy/handler, ensure no secrets are committed. Use placeholders or reference the required environment variables documented in the `README.md`.

### Step 3: Commit and Push

1.  **Commit:** Write clear, atomic commits following the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/).
    bash
    git add .
    git commit -m "feat: added client-side document processing module"
    
2.  **Push:** Push your feature branch to your fork.
    bash
    git push origin feature/short-descriptive-name
    

### Step 4: Pull Request (PR) Submission

1.  Navigate to the original repository (`chirag127/FluentPDF-TTS-Converter-Web-App`).
2.  Open a new Pull Request from your feature branch to `main`.
3.  **Use the PR Template:** Fill out the `.github/PULL_REQUEST_TEMPLATE.md` completely. Ensure you detail:
    *   *What* was changed.
    *   *Why* it was changed (linking to issues if applicable).
    *   *How* you verified the change.

## 4. Testing and Quality Gates

All contributions **MUST** pass automated checks defined in `.github/workflows/ci.yml`.

*   **Linting/Formatting:** Code quality is enforced via standard tooling (e.g., ESLint/Biome, if integrated into the JS pipeline). Your code must be automatically style-compliant before submission.
*   **Browser Testing:** End-to-End testing simulation (though Playwright/E2E setup may be omitted for pure HTML/JS UI updates, functional validation is required).

## 5. Security Disclosures

If you discover a security vulnerability, **DO NOT** open a public issue. Follow the guidelines in `.github/SECURITY.md` for responsible disclosure.