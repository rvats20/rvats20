# Rahul Vats — Modern Portfolio Website

This repository now contains a clean, modular, and market-ready personal portfolio site focused on current AI/ML + Cloud hiring expectations.

## What Changed

- Replaced the legacy single-file resume page with a modern responsive layout.
- Added semantic sections that recruiters and clients usually scan first:
  - Value proposition
  - Skills aligned to market demand
  - Experience snapshot
  - Featured projects
  - Contact links
- Split static assets by responsibility:
  - `index.html` for structure/content
  - `styles/main.css` for styling and responsive behavior
  - `scripts/main.js` for lightweight interaction

## Run Locally

Because this is a static site, you can open `index.html` directly in a browser.

Or serve it locally:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Suggested Next Steps

- Add a downloadable one-page PDF resume in an `/assets` folder.
- Connect featured projects to a JSON source for easy updates.
- Add analytics + contact form backend if this is used for lead generation.
