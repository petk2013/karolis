# Websites

Two static marketing sites built with HTML + Tailwind CSS. No framework, no runtime dependencies.

| Site | Live at | Source |
|------|---------|--------|
| **Leadwell** — lead generation agency | [/](https://petk2013.github.io/karolis/) | `index.html` |
| **Ascendra Futures** — funded trader program | [/funded/](https://petk2013.github.io/karolis/funded/) | `funded/index.html` |

Both share one compiled stylesheet at `assets/main.css`, built from `src/input.css` and `tailwind.config.js`.

## Structure

```
index.html              Leadwell landing page
privacy.html            Leadwell legal pages
terms.html
funded/index.html       Ascendra Futures landing page
funded/privacy.html     Ascendra legal pages
funded/terms.html
assets/main.css         compiled Tailwind (committed, so the sites deploy as-is)
src/input.css           Tailwind source
tailwind.config.js      design tokens + content globs
```

## Activating the forms

Both sites post to Formspree via AJAX, with client-side validation, a loading state, and accessible success/error feedback. To make a form deliver:

1. Create a free form at [formspree.io](https://formspree.io)
2. Replace `YOUR_FORM_ID` in that page's form `action` with your form ID (e.g. `https://formspree.io/f/abcdwxyz`)

Until then, submissions show a graceful error message.

## Editing styles

After changing Tailwind classes in any `.html` or tokens in `tailwind.config.js`, rebuild:

```bash
npm install
npm run build    # one-off build
npm run watch    # rebuild on change
```

## Deploying

Pushing to `claude/gallant-cori-tuadik` or `master` runs `.github/workflows/deploy-pages.yml`, which publishes to the `gh-pages` branch. GitHub serves it within about a minute.

## Before either site goes into real use

**Both sites:** replace the placeholder testimonials, statistics and client names with real ones, set up the Formspree form ID, swap the placeholder email addresses, and review the Privacy/Terms pages against your jurisdiction.

**Ascendra Futures** additionally: the brand name, account sizes, fees, profit split and trading rules are all invented for the template — rename and replace them throughout. A real funded-trader program is a regulated-adjacent financial product; the marketing claims, risk disclosure and terms need review by a lawyer in your jurisdiction before you take a single customer.
