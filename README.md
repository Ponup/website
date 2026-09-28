# Ponup website

Static marketing site for Ponup, built with Next.js and exported as plain HTML.

```bash
npm install
npm run dev
```

Create a production export with `npm run build`. The deployable files are
written to `out/`.

For a Render Web Service, use `npm run build` as the build command and
`npm start` as the start command. The start script serves the static `out/`
directory rather than running `next start`, which is incompatible with static
exports.

The canonical site URL, repository links, contact email, plans, and usage limits
are product settings represented directly in the site copy. Review them before
publishing to a production domain.
