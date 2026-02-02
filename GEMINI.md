# TechStack Conference 2026

## Project Overview

This project is a web application for the "TechStack Conference 2026", built as a Single Page Application (SPA). It serves as the main information hub for the conference, featuring details about sessions, speakers, schedule, registration, and travel.

**Tech Stack:**
*   **Framework:** React 19 (via Vite)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS 4, `clsx`, `tailwind-merge`
*   **Routing:** React Router DOM 7
*   **Icons:** Lucide React
*   **Animation:** Framer Motion
*   **Testing:** Vitest, React Testing Library

**Key Features:**
*   **Lazy Loading:** Pages are code-split and lazy-loaded for performance (see `src/lazyLoad.ts` and `src/App.tsx`).
*   **Theming:** Built-in Dark/Light mode toggle using Tailwind's dark mode and local state.
*   **Responsive Design:** Mobile-first navigation and layout.
*   **Data Driven:** Session and conference data are structured in `src/data/`.

## Architecture & Structure

*   **Entry Point:** `src/main.tsx` mounts the application.
*   **Routing:** `src/App.tsx` handles client-side routing and lazy loading of page components.
*   **Layout:** `src/components/Layout.tsx` provides the persistent shell (Header, Navigation, Footer) around page content.
*   **Pages:** Located in `src/pages/`. Each page typically corresponds to a route.
*   **Components:** Reusable UI components in `src/components/`.
*   **Data:** Static data and TypeScript interfaces (like `Session`) are in `src/data/`.

## Building and Running

**Prerequisites:** Node.js (v18+ recommended) and npm.

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Start Development Server:**
    ```bash
    npm run dev
    ```
    Runs the app in development mode with HMR (Hot Module Replacement).

*   **Production Build:**
    ```bash
    npm run build
    ```
    Performs TypeScript type checking (`tsc -b`) and builds the optimized assets via Vite.

*   **Preview Production Build:**
    ```bash
    npm run preview
    ```

## Testing & Quality

*   **Run Unit Tests:**
    ```bash
    npm run test
    ```
    Executes tests using Vitest.

*   **Linting:**
    ```bash
    npm run lint
    ```
    Runs ESLint to check for code quality and style issues.

*   **Preflight Check:**
    ```bash
    npm run preflight
    ```
    Runs linting, tests, and a production build in sequence. Useful before pushing changes.

## Development Conventions

*   **Styling:** Use Tailwind CSS utility classes. Use `clsx` and `tailwind-merge` for conditional classes and resolving conflicts.
*   **Type Safety:** Strict TypeScript mode is enabled. Ensure all props and data structures are typed (see `src/data/sessions.ts` for examples).
*   **Lazy Loading:** New pages should be added to `src/lazyLoad.ts` for consistent prefetching behavior.
*   **File Naming:**
    *   Components: PascalCase (e.g., `Layout.tsx`)
    *   Utilities/Data: camelCase (e.g., `lazyLoad.ts`, `sessions.ts`)
