# Nature Beez — Website (Next.js App Router)

Premium, ultra‑fast, SEO‑first site for Nature Beez. Mobile‑first, inspired by Burt’s Bees Baby aesthetic while remaining uniquely ours.

## Quick Start
```bash
npm i
npm run dev
```
## Deploy
1. Push to GitHub.
2. Import repo in Vercel → set env vars from `.env.example`.
3. Connect custom domain, enable HTTPS.
4. Verify Search Console, submit `/sitemap.xml` (Next serves `app/sitemap.ts`).

## Analytics
- GA4 via GTM. Publish tags for: page_view, scroll, hero_cta_click, form_submit, whatsapp_click, product_view, pdp_view.
- Microsoft Clarity for heatmaps/session replay.
- Daily insights at 09:30 IST via Looker Studio (GA4+GSC).

## CWV
- LCP budget 2.3s, CLS <= 0.05, INP <= 200ms. Use AVIF/WebP, responsive images, minimal JS.
