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

## Contact form email setup

The contact form now sends `name`, `email`, and `message` to a Google Apps Script web app.

1. Deploy the script in `google-apps-script/Code.gs` as a Web App.
2. Set a Script Property named `TARGET_EMAIL` to the inbox that should receive submissions.
3. Copy the deployed Web App URL into `VITE_GAS_WEB_APP_URL` in your local `.env` file.

Example `.env`:

```bash
VITE_GAS_WEB_APP_URL=https://script.google.com/macros/s/your-deployment-id/exec
```

The frontend validates the same three fields used by the form:
- `name`
- `email`
- `message`

The Apps Script sends the sender's email as `replyTo`, so replies go back to the visitor directly.
