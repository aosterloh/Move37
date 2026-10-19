# Agent Interaction & Execution Protocols

## Operating Modes
1. **DISCUSSION / PLAN MODE (Default when logic/design is mentioned)**
   - Trigger: Any message discussing app logic, architectural concerns, or bug theories without an explicit command to implement or wdyt? question
   - Rule: DO NOT write, touch, or modify any files.
   - Action: Analyze root cause, ask clarifying questions on expected vs. actual behavior, and present an implementation proposal first.

2. **IMPLEMENTATION MODE**
   - Trigger: User explicitly instructs "Apply", "Implement", or says "Proceed with code".
   - Rule: Execute local file edits, run local verification tests, and keep the server running locally.

3. **DEPLOYMENT MODE**
   - Trigger: Explicit command starting with "Deploy to Cloud Run" or "go cloud".
   - Rule: ONLY deploy locally by default. NEVER run deployment scripts, gcloud build/deploy commands, or Docker container pushes to cloud unless the user explicitly commands "go cloud" or "Deploy to Cloud Run".
   - Default: All execution and verification must remain strictly local on http://localhost:8080.

## Dual Environments: Work vs. Private
Always establish and respect the active environment:

### 1. Work Environment (`work`)
- **Identity & Account**: `aosterloh@cloudspace.goog` or `aosterloh@google.com`.
- **Default Projects**:
  - Cloud Run: `ge-app-project-alex` (Region: `europe-west1`)
  - Firebase Hosting: `aosterloh-cs-muc`
  - Firebase Auth: `aosterloh-cs-muc`
- **Authentication**:
  - Mandatory corporate Google SSO restricted strictly to `@google.com` accounts via Firebase Auth (`aosterloh-cs-muc`).
  - Google-branded sign-in screen before rendering app features.
  - Mandatory automated domain authorization in `aosterloh-cs-muc` for Cloud Run and Firebase domains.
- **URL & DRS**:
  - Firebase Hosting URL (`https://<project>.web.app`) is mandatory because raw Cloud Run `*.run.app` URLs return 403 Forbidden due to corporate Domain Restricted Sharing (DRS).

### 2. Private Environment (`private`)
- **Identity & Account**: `aosterloh@gmail.com`.
- **Default Projects**:
  - Personal Google Cloud & Firebase projects owned by `aosterloh@gmail.com` (e.g. `move37-512017`).
  - Region: `europe-west1`.
- **Authentication**:
  - **No `@google.com` login needed**. Open access by default without sign-in barriers, auth modals, or domain checks.
  - Anyone visiting the application can immediately interact with all features.
- **Deployment**:
  - Cloud Run backend deployed to the personal GCP project.
  - Firebase Hosting deployed to the personal project with rewrites forwarding API routes to Cloud Run.
  - Primary URL: `https://<personal-project>.web.app`.

## Cloud Run, Public Deployment & Security Protocols
- **Primary Public URL Requirement (CRITICAL)**:
  - Raw Cloud Run `*.run.app` URLs are restricted by org DRS on work projects or lack custom branding. Always deploy user-facing web apps via Firebase Hosting (`https://<project>.web.app`).
  - The **Firebase Hosting URL (`https://<site-name>.web.app`) is the ONLY primary public URL to share**.
- **No Local Tunnels**:
  - DO NOT use local proxy tunnels (e.g., `gcloud run services proxy`). Always deliver a real, public HTTPS URL via Firebase Hosting that co-workers and users worldwide can open directly.

## Browser & HTML Preview Protocol
- **Opening HTML in Browser**:
  - Whenever the user asks to view, open, click, or test an HTML file or web app, automatically run `open <file.html>` or `open http://localhost:<port>` on macOS to launch their default browser.
  - In chat responses, always provide clickable `http://localhost:<port>/...` URLs (in addition to code file links), because clicking `file://` links in the IDE opens the code editor, while `http://` links open in the web browser.

## Hard Constraints
- If the user says something is "off", "wrong", or "broken", treat this as an investigation prompt. Ask 2-3 targeted diagnostic questions instead of immediately generating replacement code.

## Model use
- use the latest Gemini models or ask user which version to use during initial project setup. Do not use older models.

## AI API Resilience & In-App Quota Diagnostics Protocol
- **Mandatory In-App Error Notification**:
  - Whenever an API call to Gemini, Veo, or Imagen encounters an error (HTTP 401/403 Permission Denied, HTTP 429 Quota/Rate Limit, or API_KEY_INVALID), the app MUST NOT fail silently or hide the error in server logs.
  - The UI MUST immediately display a clear, prominent diagnostic pop-up notification / modal detailing:
    1. The model name that failed (e.g. `veo-3.1-fast-generate-preview`, `gemini-3.8-flash`).
    2. The exact error type (e.g., `429: Quota Limit Exceeded` vs. `403: API Key Missing Model Access`).
    3. An interactive input allowing the user to paste an alternate Gemini API Key directly into the browser (saved to `localStorage`) with a direct link to `https://aistudio.google.com/app/apikey` to resume immediately without editing `.env` or restarting servers.
- **Key Pool Filtering**:
  - Automatically distinguish between Google AI Studio keys (`AIzaSy...`) and Vertex AI tokens (`AQ.Ab8RN6...`) to avoid burning calls on incompatible endpoints.
- **Authenticated Media Downloads**:
  - Generated media download URLs from Google AI Studio (`https://generativelanguage.googleapis.com/...:download?alt=media`) must always append `&key=${apiKey}` to prevent false 403 Forbidden errors.

## Work Environment Authentication Standard (Corporate Pattern)
When working in the **Work Environment**:
1. **Authentication Mechanism**:
   - Google Sign-In via Firebase Auth restricted to `@google.com`.
   - Hardcoded Firebase Configuration pointing to `aosterloh-cs-muc`.
   - Domain allowlisting via Identity Platform in `aosterloh-cs-muc`.

## Private Environment Standard
When working in the **Private Environment**:
1. **No Authentication Required**:
   - Free, instant public access without Google sign-in prompts or accounts.
2. **Personal Deployment Defaults**:
   - GCP & Firebase project owned by `aosterloh@gmail.com`.
   - Single-project Firebase Hosting + Cloud Run architecture.

## Multi-Demo Portal & Showcase Standard
When building multi-app demo showcases or portals:
1. **Top Paging Bar**:
   - Quick navigation with `◀ Prev` and `Next ▶` buttons, dropdown jump menu, and keyboard arrow keys (`ArrowLeft`, `ArrowRight`).
2. **Prompts & Presenter Guides**:
   - **"✨ Original Prompt" button**: Displays the exact prompt used to generate the application.
   - **"📖 Googler Demo Guide" button**: Provides non-expert presenters with:
     - 30-second elevator pitch.
     - "Aha! Moment" (key buttons/inputs to interact with).
     - Customer value / technical highlights.
     - Domain context (e.g. historical background for museum exhibits).


## Light & Dark Theme Protocol
- Every web application built or modified MUST support both **Light Mode** and **Dark Mode**.
- Include a clean, prominent theme toggle switch (e.g. ☀️ Light / 🌙 Dark) in the top navigation or header bar.
- Persist the selected theme in `localStorage` so user preference is remembered across page refreshes and demo switches.
- Respect the system preference (`prefers-color-scheme: dark`) by default when no saved preference exists.
- Ensure all UI components (cards, headers, modals, code blocks, controls, prompt drawers, demo guides) adapt seamlessly with high contrast and readable typography in both themes.
