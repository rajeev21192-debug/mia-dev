export const site = {
  name: "Nature Beez",
  tagline: "Minimal. Natural. Made for Baby Skin.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logo: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") + "/logo.png",
}

export function og(title?: string, desc?: string) {
  return {
    title: title ? `${title} • Nature Beez` : "Nature Beez",
    description: desc || site.tagline,
    openGraph: { title, description: desc || site.tagline, url: site.url, siteName: "Nature Beez" },
    twitter: { card: "summary_large_image" }
  }
}

export function absUrl(path: string) {
  const base = site.url?.replace(/\/$/,"") || ""
  if (!path) return base
  return path.startsWith("http") ? path : `${base}${path.startsWith("/")?"":"/"}${path}`
}
