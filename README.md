# Carwash Bossque Landing Page

A bilingual Next.js landing page for Carwash Bossque with local SEO, service pricing calculator, location details, and a promotional queue-skipping feature.

## Key Features

- Next.js 16 app router
- Bilingual support: Malay (`ms`) and English (`en`)
- Local SEO content for Padang Besar / Perlis
- Price calculator for vehicles and services
- Google Business Profile / social links integration
- Right-side promo popup with optional "Don't show again"
- Scroll reveal animations for sections
- Full site metadata and structured data JSON-LD

## Tech Stack

- Next.js 16.2.6
- React 19
- TypeScript 5.7.3
- Tailwind CSS v4
- `react-icons`, `lucide-react`
- `@vercel/analytics`

## Local Setup

```bash
cd carwash-bossque-seo
npm install
npm run dev
```

Alternatively, if you use pnpm:

```bash
pnpm install
pnpm dev
```

Open the site at `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deployment

### GitHub

1. Push the repository to GitHub.
2. Use the default branch or create a deployment branch.
3. Add a GitHub repository description and tags.

### Vercel

1. Connect your GitHub repository to Vercel.
2. Choose the repository and set the root directory to `/`.
3. Ensure the framework preset is Next.js.
4. Set build command: `npm run build` and output directory is default.
5. Add any required environment variables in Vercel if needed.

### Notes

- Keep the `public/` assets in place for favicons and hero images.
- If you change the WhatsApp business number, update `lib/data.ts`.
- The popup language is driven by the selected site language and translation object in `lib/i18n.ts`.

## Useful Files

- `app/layout.tsx` — metadata, fonts, JSON-LD, icons
- `app/page.tsx` — page composition and promotion popup
- `lib/i18n.ts` — translation strings
- `lib/data.ts` — business details, pricing, hours, social links
- `components/hero.tsx` — hero section
- `components/local-seo.tsx` — location and map block
- `components/promo-popup.tsx` — promotional popup

## Troubleshooting

- If the promo popup shows stale text, clear browser cache and localStorage key `promoDontShowAgain`.
- Run `npx tsc --noEmit` to check TypeScript errors.

---

Built for official deployment on GitHub + Vercel.
