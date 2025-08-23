export const site = {
  name: "Nature Beez",
  tagline: "Minimal. Natural. Made for Baby Skin.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
}
export function og(title?: string, desc?: string) {
  return {
    title: title ? `${title} • Nature Beez` : "Nature Beez",
    description: desc || site.tagline,
    openGraph: { title, description: desc, url: site.url, siteName: "Nature Beez" },
    twitter: { card: "summary_large_image" }
  }
}
