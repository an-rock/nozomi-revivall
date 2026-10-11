# Nozomi Revival — static preservation

This repository preserves a visual recreation of Nozomi's captured homepage, with local CSS, fonts, logos, icons, and JavaScript resources. It is a static archive, not a replacement for the original backend.

## What's included

- **Home page** — reconstructed landing page and navigation.
- **Preservation Archive** (`archive.html`) — a searchable index of the pages and assets available in this repository, with a link to the separate shutdown-reference repository.
- **Local account, privacy, and terms pages** — visual/static recreations only.
- **Responsive archive styling** — includes a compact layout for mobile screens and respects reduced-motion preferences.
- **Static archive notice** — explains the preservation status without calling the original alert API.

## GitHub Pages

1. Upload the contents of this folder to the repository root.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**, choose `main`, and choose `/(root)`.
4. Save and wait for the deployment to finish.

Open `archive.html` to view the preservation index.

## Limitations

Account login, live game listings, purchases, search services, and server-powered routes are not functional without the original backend. The local archive search filters only the entries shown on `archive.html`; it does not query a server. No credentials are collected or transmitted by the archive index.

The separate [NozomiShutdownLeaks repository](https://github.com/adamh83717-cpu/NozomiShutdownLeaks) is linked as historical reference. This project does not bundle its captured HTML pages as executable site source.

Nozomi is an independent game-preservation community. It is not affiliated with or endorsed by the original platform.
