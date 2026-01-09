# Vacations with Character

Website for [www.vacationswithcharacter.com](https://www.vacationswithcharacter.com).

## Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.x
- **CMS**: [Storyblok](https://www.storyblok.com/)
- **Forms**: [Formspree](https://formspree.io/)
- **Hosting**: [Vercel](https://vercel.com/)
- **Language**: TypeScript

## Prerequisites

- Node.js 18+
- pnpm

## Environment Variables

| Variable | Context | Description |
|----------|---------|-------------|
| `PUBLIC_FORMSPREE_FORM_ID` | Client | Formspree form ID (8 chars) |
| `STORYBLOK_ACCESS_TOKEN` | Server | Storyblok API token |

## Getting Started

1. Clone the repo
2. Create `.env` with required variables
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start dev server:
   ```bash
   pnpm dev
   ```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server at localhost:4321 |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm format:check` | Check code formatting |
| `pnpm format:write` | Fix code formatting |

## Project Structure

```
src/
├── assets/       # Images, fonts
├── components/   # Astro components
├── layouts/      # Page layouts
├── lib/          # Utilities, Storyblok client
├── pages/        # Routes
└── styles/       # Global CSS
```

## Branches

- **main**: Production (www.vacationswithcharacter.com)
- **preview**: Staging (preview.vacationswithcharacter.com)

## Path Aliases

- `@assets/*` → `src/assets/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@lib/*` → `src/lib/*`
