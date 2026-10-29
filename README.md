# Clean YouTube — landing

Landing page for the [Clean YouTube](https://chromewebstore.google.com/detail/clean-youtube-remove-shor/kalhfjomailhflienkfajocjodgjipie) Chrome extension.

Vue 3 + Vite + vite-ssg (pre-rendered static HTML), deployed to GitHub Pages.

```sh
pnpm install
pnpm start    # dev server
pnpm build    # static build into dist/
```

## Deploy

Every push to `master` builds and publishes the site via `.github/workflows/deploy.yml`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
