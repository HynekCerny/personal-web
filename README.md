# hynekcerny.cz

Personal portfolio website built with Next.js and deployed to Azure Static Web Apps.

## Stack

- **[Next.js 15](https://nextjs.org/)** (Pages Router, static export)
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS 4](https://tailwindcss.com/)**
- **[lucide-react](https://lucide.dev/)** + **[react-icons](https://react-icons.github.io/react-icons/)** for icons

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # static export → /out
npm run lint
```

## Project structure

```
pages/          # Next.js routes (_app, _document, index, 404)
src/
  components/   # Header, Hero, About, Skills, Experiences, Contact, Footer
  types/        # Global TypeScript declarations (gtm.d.ts)
  index.css     # Global styles, custom font, animations
public/
  assets/       # Fonts, images, favicon
```

## Cookie consent

Google Tag Manager is loaded only after an explicit analytics opt-in. Accept and reject have equal visual prominence. The versioned local preference expires after 180 days; malformed, expired or inaccessible storage fails closed. Settings are available at the bottom of every page. The default banner has one short sentence and two side-by-side actions using the existing outlined button style. Privacy information expands in place under Details; there is no separate privacy route. Withdrawal clears accessible first-party Google analytics cookies and reloads to stop already-running tags; other tabs synchronize via storage events. Consent expiry is also checked on focus and every minute while the page is open. If saving a withdrawal fails, the stale local grant is removed. If removal also fails while that grant remains readable, `analytics-consent=denied` is added to the current URL before reloading; this denial overrides stored consent on reload of that URL and is cleared by a later explicit opt-in. With storage blocked, this last-resort override is URL-scoped, not a durable device-wide preference.

Run browser regression tests (desktop/light and mobile/dark):

```bash
npx playwright install chromium
npm test
```

Tests intercept the external GTM script to exercise consent deterministically without sending test visits to Google. They do not validate the contents of the remotely managed GTM container. Before publishing, the site owner should verify that the container contains only the intended analytics tags, review Analytics data-retention/transfer settings, and approve the privacy notice. Advertising consent signals remain denied, but arbitrary custom tags must still be governed in GTM.

## Deployment

Automatically deployed to **Azure Static Web Apps** via GitHub Actions on every push to `main`. Pull requests get an isolated preview environment with a unique URL posted as a PR comment.
