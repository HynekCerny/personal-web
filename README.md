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

## Deployment

Automatically deployed to **Azure Static Web Apps** via GitHub Actions on every push to `main`. Pull requests get an isolated preview environment with a unique URL posted as a PR comment.
