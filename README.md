# Leadwell — Lead Generation Agency Website

A fast, single-page marketing site for a lead generation agency. Static HTML + Tailwind CSS, no framework, no runtime dependencies.

## Structure

- `index.html` — the entire site (hero, services, process, testimonials, lead capture form, FAQ)
- `assets/main.css` — compiled Tailwind stylesheet (committed, so the site deploys as-is)
- `src/input.css` + `tailwind.config.js` — Tailwind source and design tokens

## Editing styles

After changing Tailwind classes in `index.html` or tokens in `tailwind.config.js`, rebuild the CSS:

```bash
npm install
npm run build    # one-off build
npm run watch    # rebuild on change
```

## Deploying

Any static host works — GitHub Pages, Netlify, Vercel, Cloudflare Pages. Just serve `index.html` and `assets/`.

## To do before launch

- Replace placeholder client names, testimonials, and stats with real ones
- Point the contact form `action` at a form backend (Formspree, Netlify Forms, Tally) or your CRM
- Set the real booking link ("Book a 20-min intro call")
- Update the contact email and add Privacy/Terms pages
