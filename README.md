# LoomKit

**Your brain's backup. Lives in Telegram.**

LoomKit (`@Loomkit_bot`) is a personal life assistant bot on Telegram. Log expenses, calories, and reminders using natural language — no app download, no sign-up friction, no learning curve. Just type.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Astro | ^5.7.0 | Static site framework |
| Tailwind CSS | ^4.1.6 | Utility-first styling |
| @tailwindcss/vite | ^4.1.6 | Tailwind v4 Vite integration |
| GSAP | ^3.12.5 | Chat demo scroll animations |
| TypeScript | ^5.8.3 | Type safety |
| Inter (Google Fonts) | — | Typography |

---

## Local Development

### Prerequisites

- Node.js 18+ installed
- npm 9+

### Setup

```bash
# Clone the repo (or navigate to the project directory)
cd "LoomKit Landing"

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The dev server runs at `http://localhost:4321` by default.

### Other Commands

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Deploy to Vercel

### Via GitHub (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Vercel auto-detects Astro — no configuration needed.
5. Click **Deploy**.

Every push to `main` will trigger a new deployment automatically.

### Framework preset

Vercel detects Astro automatically. Build command: `astro build`. Output directory: `dist`.

---

## Telegram Bot

Start chatting with LoomKit on Telegram: [@Loomkit_bot](https://t.me/Loomkit_bot)

---

## Project Structure

```
LoomKit Landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── ChatDemo.astro
│   │   ├── Features.astro
│   │   ├── WhyTelegram.astro
│   │   ├── ComingSoon.astro
│   │   ├── Feedback.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
└── package.json
```
