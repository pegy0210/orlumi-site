# Angel Answers Oracle · Orlumi

Standalone Cloudflare Worker for `angel.orlumi.app`. This keeps the 44-card reading and physical-card interpretation app together with a server-side password gate. No public link appears on the Orlumi homepage.

## Deploy

1. In the Cloudflare account containing the `orlumi.app` zone, install dependencies with `npm install`.
2. Deploy once. Without secrets, the Worker returns HTTP 503 and does not reveal the app. Set Worker secrets using `npx wrangler secret put ORACLE_PASSWORD_HASH` and `npx wrangler secret put ORACLE_SESSION_KEY`. The first value is the SHA-256 hex digest of the chosen access password; the second is an independent random 32-byte or longer signing secret. Keep both out of Git.
3. Run `npm test` and `npm run deploy` again after the secrets are set. Wrangler attaches `angel.orlumi.app` as a Custom Domain and Cloudflare creates the DNS record. The account needs permission to deploy Workers and modify the domain's DNS.
4. Verify that an anonymous GET shows only the password form, a wrong password is rejected, and the correct password displays both app modes. Once verified, update the unlisted `orlumi.app/angel-answers/` entry to point here, then retire the former ChatGPT Site.

The app stores reading history only in the visitor's own browser. It does not send reading questions to a third-party AI API. All readings remain symbolic prompts rather than factual forecasts.
