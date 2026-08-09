# Mahammad Rafi Shaik — Portfolio

A personal portfolio website built with **React**, **TypeScript**, and **Create React App**. It features a responsive flexbox layout, a sticky navigation bar with a mobile menu, a hero section with a profile photo, an about section, a skills section, an experience section, and a dark theme with violet–fuchsia–cyan accents.

## Tech Stack

- React 18
- TypeScript
- Create React App 5 (Webpack, Babel, ESLint)
- CSS (flexbox-based responsive layout)
- lucide-react, react-icons

## Features

- Sticky navbar with anchor links (Home, About, Skills, Experience, Projects, Resume, Contact) and a working Resume PDF link that opens in a new tab
- Mobile hamburger menu that toggles a slide-down panel
- Hero section with greeting, name, role, description, CTA buttons, social links (GitHub, LinkedIn, Email), and a circular profile photo with a gradient ring
- About section with a bio, tech highlights (Frontend, Backend, Databases, Mobile), and icons
- Skills section with grouped icon chips for each technology (brand icons with hover glow)
- Experience section with role, company, duration, location, responsibilities, and tech tags
- Responsive flexbox layout — content stacks and centers on mobile
- Dark theme driven by CSS custom properties

## Components

### Navbar
- **`components/Navbar/Navbar.tsx`** — sticky navigation bar
- Renders the logo, desktop nav links, and a hamburger button
- **`components/Navbar/Navbar.css`** — fixed header with backdrop blur and a slide-down mobile menu (hidden until toggled)

### Hero
- **`components/Hero/Hero.tsx`** — the home landing section
- Shows greeting, name, role, description, CTA buttons (View Projects / Contact Me), social links, and the profile photo
- **`components/Hero/Hero.css`** — two-column flexbox (text left, image right) that stacks below 900px; circular image with a gradient ring

### About
- **`components/About/About.tsx`** — the About section
- Shows a bio and highlight cards for Frontend (React.js & React Native), Backend (Node.js & Express.js), Databases (MongoDB & PostgreSQL), and Mobile (React Native)
- **`components/About/About.css`** — section heading, bio layout, and responsive highlight cards

### Skills
- **`components/Skills/Skills.tsx`** — the Skills section
- Renders skill categories from `data/Skills.ts` as icon chips; each skill shows a brand or generic icon (from `react-icons`) beside its name
- **`components/Skills/Skills.css`** — icon-chip grid with hover lift, pink icon accent, and purple glow

### Experience
- **`components/Experience/Experience.tsx`** — the Experience section
- Renders a timeline of work history from `data/Experience.ts` with role, company, duration, location, description, responsibilities, and technology tags
- **`components/Experience/Experience.css`** — timeline cards with an icon badge, hover lift, and responsive single-column layout

### Shared
- **`components/icons.tsx`** — typed `react-icons` GitHub/LinkedIn components used across sections

## Project Structure

```
src/
├── App.tsx                 # App shell: navbar + main content
├── App.css                 # Global layout styles
├── index.css               # Theme variables, base styles, background
├── declarations.d.ts       # Ambient module declarations (e.g. *.css)
├── Assets/
│   └── Hero.jpeg           # Hero profile image
├── data/
│   ├── Skills.ts           # Skills section data (skill categories)
│   └── Experience.ts       # Experience section data (work history)
└── components/
    ├── icons.tsx           # Shared typed social icons
    ├── Navbar/
    │   ├── Navbar.tsx      # Navbar component
    │   └── Navbar.css      # Navbar styles
    ├── Hero/
    │   ├── Hero.tsx        # Hero section component
    │   └── Hero.css        # Hero styles
    ├── About/
    │   ├── About.tsx       # About section component
    │   └── About.css       # About styles
    ├── Skills/
    │   ├── Skills.tsx      # Skills section component
    │   └── Skills.css      # Skills styles
    └── Experience/
        ├── Experience.tsx  # Experience section component
        └── Experience.css  # Experience styles

public/
└── resume.pdf              # Resume file served at /resume.pdf
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
