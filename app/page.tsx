import Hero from "@/components/Hero"
import NewsletterForm from "@/components/NewsletterForm"
import JsonLd from "@/components/JsonLd"
import { site, absUrl } from "@/lib/seo"

export const metadata = {
  title: "Gentle Ayurvedic Baby Care — Nature Beez",
  description: "Premium, minimal and natural baby care made for delicate skin. Dermatologically tested, ayurvedic-inspired, safe for newborns. Explore lotions, washes, oils and more.",
  alternates: { canonical: "/" }
}

export default function HomePage() {
  const org = {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name": site.name,
    "url": site.url,
    "logo": site.logo,
    "foundingDate": "2025",
    "slogan": site.tagline,
    "brand": { "@type":"Brand", "name":"Nature Beez" }
  }
  return (
    <>
      <JsonLd json={org} />
      <Hero />
      <section id="why" className="container mt-16 grid md:grid-cols-3 gap-6">
        {[
          ["Dermatologically Tested","Safe for newborns, gentle on sensitive skin."],
          ["Natural & Ayurvedic","Thoughtful botanicals with modern science."],
          ["Made in India","Responsible sourcing and high standards."],
        ].map(([title,desc])=>(
          <div key={String(title)} className="card">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm opacity-80">{desc}</p>
          </div>
        ))}
      </section>
      <section className="container mt-16">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {[1,2,3].map(i=>(
            <div key={i} className="card h-52 flex items-center justify-center opacity-60" aria-label={`Featured product placeholder ${i}`}>Product Card {i}</div>
          ))}
        </div>
        <NewsletterForm />
      </section>
    </>
  )
}
