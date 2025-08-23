export const site = {
  name: "Nature Beez",
  tagline: "Minimal. Natural. Made for Baby Skin.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logo: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") + "/logo.png",
}
export function absUrl(path: string){ const base=(site.url||'').replace(/\/$/,''); return path?.startsWith('http')?path:`${base}${path?.startsWith('/')?'':'/'}${path||''}` }
