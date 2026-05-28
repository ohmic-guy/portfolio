# Portfolio

Build & preview (production):

```bash
npm install
npm run build
npm run preview -- --port 5173
```

Dev:

```bash
npm install
npm run dev
```

Notes:
- I added manual chunking in `vite.config.ts` to reduce large bundle sizes; further optimization may be needed (dynamic imports, route-based code-splitting).
- If you want me to pin all `*` entries in `package.json` to exact versions, I can do that.
