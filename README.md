# L'Équipe Salon

A responsive, multilingual salon website built with React, TypeScript, and Vite. The site includes salon information, services and pricing, a gallery, customer reviews, contact details, and an appointment request modal.

## Features

- Italian, English, German, and French language options
- Responsive salon services, pricing, and gallery sections
- Contact details, opening hours, and appointment request form
- Mobile quick-booking bar

## Tech stack

- React and TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
git clone https://github.com/mahnoorhamad/lequipe-salon-multilingual.git
cd lequipe-salon-multilingual
npm ci
npm run dev
```

Open the local URL printed by Vite (by default, `http://localhost:3000`).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run the TypeScript check |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Deploy to Vercel

Import the GitHub repository into Vercel and use these project settings:

- **Framework preset:** Vite
- **Root directory:** `.` (repository root)
- **Install command:** `npm install` (or `npm ci`)
- **Build command:** `npm run build`
- **Output directory:** `dist`

No environment variables are required for the frontend build.
