# Mahammad Rafi Shaik — Portfolio

A personal portfolio website built with **React**, **TypeScript**, and **Create React App**. It features a responsive flexbox layout, a sticky navigation bar with a mobile menu, and a dark theme with violet–fuchsia–cyan accents.

## Tech Stack

- React 18
- TypeScript
- Create React App 5 (Webpack, Babel, ESLint)
- CSS (flexbox-based responsive layout)
- react-icons, lucide-react

## Features

- Sticky navbar with smooth scroll links (Home, About, Skills, Experience, Projects, Certifications, Contact)
- Mobile hamburger menu that toggles a slide-down panel
- Social links (GitHub, LinkedIn)
- Responsive hero section using flexbox and fluid `clamp()` typography
- Dark theme driven by CSS custom properties

## Project Structure

```
src/
├── App.tsx                 # App shell: navbar + main content
├── App.css                 # Hero/layout styles
├── index.css               # Global styles, theme variables, background
├── declarations.d.ts       # Ambient module declarations (e.g. *.css)
└── components/
    └── Navbar/
        ├── Navbar.tsx      # Navbar component
        └── Navbar.css      # Navbar styles
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page reloads when you make edits and lint errors are shown in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command removes the single build dependency from your project.

Instead, it copies all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. You don't have to ever use `eject` — the curated feature set is suitable for small and middle deployments.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
