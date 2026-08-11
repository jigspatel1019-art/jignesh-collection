# Jignesh Collection — Version 2

## What is new?

This version includes a simple **Product Manager** at:

`/admin.html`

You can:
- Add product
- Edit product
- Delete product
- Set category
- Set selling price
- Set MRP / old price
- Add badge
- Add image path
- Add description
- Add product details
- Mark featured
- Download a ready-to-upload `products.js`
- Copy `products.js`

## Important architecture note

This is a **static GitHub + Netlify website**. The browser Product Manager stores its working catalogue in that browser's `localStorage`.

It does NOT directly write to GitHub, because putting a GitHub access token inside a public website would expose the token.

### Recommended workflow

1. Open your deployed website and go to `/admin.html`.
2. Add/edit your products.
3. Put product photos in `assets/products/` in your GitHub repository.
4. Click **Download products.js**.
5. Replace the repository's `products.js` with the downloaded file.
6. Commit the changes to GitHub.
7. Netlify automatically deploys the update.

## GitHub + Netlify setup

Netlify supports importing a project from a GitHub repository and can automatically redeploy when repository changes are pushed.

For a simple static site:
- Build command: leave blank
- Publish directory: `.`
- Production branch: `main`

## Files

- `index.html` — public shop
- `admin.html` — product manager
- `products.js` — live catalogue data
- `admin.js` — product manager logic
- `styles.css` — public website design
- `admin.css` — admin design
- `script.js` — public website logic
- `assets/products/` — product photos
- `netlify.toml` — Netlify configuration

## Product image example

If your GitHub file is:

`assets/products/red-saree.jpg`

enter exactly:

`assets/products/red-saree.jpg`

Recommended product image:
- Vertical
- Around 1000 × 1250 px
- JPG, PNG or WebP
- Keep file size reasonably small

## WhatsApp

Change the number at the top of `products.js`:

`whatsappNumber: "919714316584"`

Use country code + phone number, with no `+`, spaces or brackets.

## Future upgrade

If you want a true online admin panel where you log in and press **Save Product**, and the product is immediately committed to GitHub without downloading `products.js`, use a secure backend/serverless function with GitHub authentication. This version deliberately avoids exposing a GitHub token in the browser.
