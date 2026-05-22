# AdSense Setup

CalcForge does not load real AdSense ads until a real publisher ID is configured.

1. Apply to Google AdSense.
2. Add this site:

   https://calcforge-nine.vercel.app

3. Wait for Google approval.
4. Copy the real publisher ID from AdSense. It should look like `ca-pub-...`.
5. In Vercel, add this environment variable:

   `NEXT_PUBLIC_ADSENSE_CLIENT`

6. Redeploy the site.
7. Enable Auto ads in AdSense if desired.
8. Optional later: add manual ad slot IDs after traffic and policy review.

Do not invent a publisher ID. Do not add ad scripts before AdSense provides a real ID.
