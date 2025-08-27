Patch 4:
- Uses ESM contentlayer.config.mjs
- Forces CLI to use that file via postinstall: contentlayer2 build --config contentlayer.config.mjs
Actions after extracting:
1) Remove any other contentlayer configs:
   git rm -f contentlayer.config.ts || true
   git rm -f contentlayer.config.js || true
2) Merge package.json scripts (ensure postinstall matches patch).
