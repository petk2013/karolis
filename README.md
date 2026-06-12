# Leadwell — Lead Generation Agency Website

A fast, single-page marketing site for a lead generation agency. Static HTML + Tailwind CSS, no framework, no runtime dependencies.

## Structure

- `index.html` — the main site (hero with pipeline dashboard, services, process, testimonials, lead capture form, FAQ)
- `privacy.html` / `terms.html` — legal pages
- `assets/main.css` — compiled Tailwind stylesheet (committed, so the site deploys as-is)
- `src/input.css` + `tailwind.config.js` — Tailwind source and design tokens

## Activating the contact form

The form posts to Formspree via AJAX (with client-side validation, loading state, and success/error feedback). To make it deliver:

1. Create a free form at [formspree.io](https://formspree.io)
2. In `index.html`, replace `YOUR_FORM_ID` in the form's `action` with your form ID (e.g. `https://formspree.io/f/abcdwxyz`)

Until then, submissions show a graceful error message with the fallback email.

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
- Set up the Formspree form ID (see above)
- Update the contact email (`hello@leadwell.agency`) to a real address everywhere
- Review the Privacy Policy and Terms pages and adapt them to your jurisdiction
