import { site } from "@/lib/seo"
export default function robots(){ return { rules:[{ userAgent:"*", allow:"/" }], sitemap: `${site.url}/sitemap.xml`, host: site.url } }
