import { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/products`, priority: 0.8 },
    { url: `${base}/ingredients`, priority: 0.7 },
    { url: `${base}/journal`, priority: 0.6 },
    { url: `${base}/faq`, priority: 0.6 },
    { url: `${base}/contact`, priority: 0.5 },
    { url: `${base}/legal/privacy`, priority: 0.2 },
    { url: `${base}/legal/terms`, priority: 0.2 },
  ]
}
