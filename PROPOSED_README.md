# FluentPDF-TTS-Converter-Web-App

![Build Status](https://img.shields.io/github/actions/workflow/user/chirag127/FluentPDF-TTS-Converter-Web-App/ci.yml?style=flat-square)
![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/FluentPDF-TTS-Converter-Web-App?style=flat-square)
![Tech Stack](https://img.shields.io/badge/Tech%20Stack-HTML%2C%20CSS%2C%20JavaScript-blue?style=flat-square)
![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-orange?style=flat-square)
![GitHub Stars](https://img.shields.io/github/stars/chirag127/FluentPDF-TTS-Converter-Web-App?style=flat-square)

## Project Overview

A client-side web application designed to convert technical PDFs into human-friendly documents optimized for Text-to-Speech (TTS) conversion. Leveraging the Google Gemini API, it enhances document readability for AI-powered audio applications.

## Architecture Diagram

mermaid
graph TD
    A[User Interface (HTML/CSS/JS)] --> B{PDF Upload & Processing Logic}
    B --> C[Client-side PDF Parser]
    C --> D[Content Extraction]
    D --> E{Google Gemini API Request}
    E --> F[API Response (Optimized Text)]
    F --> G[Text-to-Speech (TTS) Optimization]
    G --> H[Display Formatted Output]
    H --> I[User Download/Playback]


## Table of Contents

*   [Project Overview](#project-overview)
*   [Architecture Diagram](#architecture-diagram)
*   [Features](#features)
*   [Getting Started](#getting-started)
*   [Development Standards](#development-standards)
*   [AI Agent Directives](#ai-agent-directives)
*   [License](#license)
*   [Contribution](#contribution)

## Features

*   **Client-Side PDF Parsing:** Process PDFs directly in the browser without server-side dependencies for core parsing.
*   **AI-Powered Content Optimization:** Utilize Google Gemini API to rephrase technical jargon into more accessible language.
*   **TTS-Optimized Output:** Generate content specifically formatted for clarity when read aloud by TTS engines.
*   **Human-Friendly Documents:** Improve the general readability and flow of converted PDF content.
*   **Interactive Web Interface:** User-friendly UI for uploading PDFs and viewing/downloading results.

## Getting Started

This project is a client-side web application. No server-side setup is required for basic functionality.

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/FluentPDF-TTS-Converter-Web-App.git
    cd FluentPDF-TTS-Converter-Web-App
    

2.  **Install Dependencies:**
    bash
    npm install
    

3.  **Run the Development Server:**
    bash
    npm run dev
    

4.  **Build for Production:**
    bash
    npm run build
    

## Development Standards

*   **Principles:** Adherence to SOLID, DRY, and YAGNI principles.
*   **Code Quality:** Strict adherence to established JavaScript best practices, including semantic HTML, well-structured CSS (using standard practices), and modular JavaScript.
*   **Performance:** Focus on client-side performance optimization, efficient DOM manipulation, and minimized asset loading.
*   **Accessibility:** Ensure the web interface meets WCAG 2.1 AA standards.

## AI Agent Directives

<details>
<summary><code>AGENTS.MD</code> - APEX TECHNICAL AUTHORITY Directives (December 2025 Edition)</summary>

# SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

---

## 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat the `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs.
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards**, **Security Threats**, and **2026 UI Trends**.
    *   **Validation:** Use `docfork` to verify *every* external API signature.
    *   **Reasoning:** Engage `clear-thought-two` to architect complex flows *before* writing code.

---

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** Detect the project type and apply the corresponding **Apex Toolchain**. This repository, `FluentPDF-TTS-Converter-Web-App`, is a client-side web application.

*   **PRIMARY SCENARIO: WEB / APP / EXTENSION (TypeScript/JavaScript)**
    *   **Stack:** This project leverages **HTML5, CSS3, and modern JavaScript (ES2020+)**. For build tooling and development server, **Vite 7** is utilized. For rapid linting and formatting, **Biome** is the standard.
    *   **Architecture:** Employs a **Client-Side Architecture** pattern, prioritizing performance and user experience directly within the browser.
    *   **AI Integration:** Integrates with the **Google Gemini API** (`gemini-3-pro` by default) for intelligent content transformation. Prioritize modular design, clear API contracts, and robust error handling for all AI model interactions.
    *   **UI Framework:** Utilizes **Tailwind CSS v4** for utility-first styling and offers flexibility for component-based structures if needed.
    *   **Testing:** **Vitest** for unit and integration tests, and **Playwright** for end-to-end testing.

*   **SECONDARY SCENARIO B: SYSTEMS / PERFORMANCE (Rust / Go) - *Not applicable for this project's primary function.***
    *   **Stack:** Rust (Cargo), Go (Modules).
    *   **Lint:** Clippy / GolangCI-Lint.
    *   **Architecture:** Hexagonal Architecture (Ports & Adapters).

*   **TERTIARY SCENARIO C: DATA / AI / SCRIPTS (Python) - *Not applicable for this project's primary function.***
    *   **Stack:** uv (Manager), Ruff (Linter), Pytest (Test).
    *   **Architecture:** Modular Monolith or Microservices.

---

## 4. CODE QUALITY & VERIFICATION MANDATES
*   **Linting & Formatting:** **Biome** is mandatory for all code committed. Automated checks will be performed via GitHub Actions.
*   **Testing:**
    *   **Unit/Integration:** **Vitest** is the standard. All new features must include comprehensive unit and integration tests.
    *   **End-to-End:** **Playwright** for E2E scenarios. Critical user flows must be covered.
*   **Type Safety:** Utilize TypeScript's strict mode where applicable, and ensure JavaScript code follows robust patterns to minimize runtime errors.

---

## 5. SECURITY & COMPLIANCE
*   **API Keys:** NEVER commit API keys directly into the codebase. Utilize environment variables (`.env` files locally, CI/CD secrets for production).
*   **Dependencies:** Regularly audit dependencies for known vulnerabilities using `npm audit` or equivalent tools. The CI pipeline will enforce checks.
*   **Data Privacy:** As a client-side app, minimize the collection and transmission of personally identifiable information (PII). Ensure compliance with GDPR and other relevant privacy regulations.
*   **Third-Party Services:** Carefully vet all third-party services, especially AI APIs, for their security practices and data handling policies.

---

## 6. OPERATIONAL EXCELLENCE
*   **CI/CD:** A GitHub Actions workflow (`ci.yml`) will automate linting, testing, and building on every push/pull request.
*   **Documentation:** Maintain up-to-date `README.md` and `AGENTS.md`. All critical logic should be commented.

---

## 7. ARCHIVAL PROTOCOL
*   **Retired Products:** Archived repositories are **NOT** junk. They are "Retired Products." Elevate metadata (Name, Description, Topics) to the highest professional standard. Tone: Dignified, historical, and valuable.

---

</details>

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0).

## Contribution

Contributions are welcome! Please refer to the [.github/CONTRIBUTING.md](/.github/CONTRIBUTING.md) file for detailed guidelines on how to contribute to this project.
