NYRA PWA — starter project

WHAT THIS IS
- Installable web app (PWA) starter for Android.
- Chat UI is ready.
- AI endpoint is included as a Cloudflare Pages Function.
- No Discord integration.

DEPLOY
1. Upload this folder's contents to a GitHub repository.
2. In Cloudflare Dashboard, open Workers & Pages > Create > Pages > Connect to Git.
3. Select the repository. Framework preset: None. Build command: leave empty. Build output directory: / (root).
4. Deploy.
5. In the Pages project settings, add a Workers AI binding named AI (Settings > Functions > Workers AI bindings; dashboard wording may vary), then redeploy.
6. Open the deployed HTTPS site on Android Chrome > menu > Add to Home screen / Install app.

NOTES
- The AI endpoint uses Cloudflare Workers AI and requires an AI binding.
- Do not put private API keys in index.html or any browser-side code.
- This is the first PWA stage, not an APK yet. A native APK wrapper can be added after the PWA works.
- Voice, 3D avatar, and Android device actions are later stages and need explicit permissions/support.
