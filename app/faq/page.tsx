import JsonLd from "@/components/JsonLd"
import { site } from "@/lib/seo"
export const metadata={ title:"FAQ — Nature Beez", description:"Answers to common questions about Nature Beez products, safety, and usage.", alternates:{ canonical:"/faq" } }
const faqJsonLd={ "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
  { "@type":"Question","name":"Is Nature Beez safe for newborns?","acceptedAnswer":{ "@type":"Answer","text":"Yes. Our formulas are dermatologically tested and designed for delicate baby skin." } },
  { "@type":"Question","name":"Are your products ayurvedic or natural?","acceptedAnswer":{ "@type":"Answer","text":"We blend ayurvedic botanicals with modern dermatology. We avoid parabens, phthalates, and harsh dyes." } },
  { "@type":"Question","name":"When will products be available for purchase?","acceptedAnswer":{ "@type":"Answer","text":"We are preparing for launch. Subscribe on the site to be notified as soon as we go live." } }
]}
export default function Page(){
  const crumbs={ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    { "@type":"ListItem","position":1,"name":"Home","item": site.url },
    { "@type":"ListItem","position":2,"name":"FAQ","item": site.url + "/faq" }
  ]}
  return(<>
    <JsonLd json={crumbs}/><JsonLd json={faqJsonLd}/>
    <section className='container mt-10'>
      <h1 className='text-3xl font-bold'>FAQ</h1>
      <div className='mt-4 space-y-3'>
        <details className='card'><summary>Is it safe for newborns?</summary><p>Yes, our formulas are dermatologically tested.</p></details>
        <details className='card'><summary>Are your products ayurvedic or natural?</summary><p>We blend ayurvedic botanicals with modern dermatology. We avoid parabens, phthalates, and harsh dyes.</p></details>
        <details className='card'><summary>When will products be available?</summary><p>We are preparing for launch. Subscribe for updates.</p></details>
      </div>
    </section>
  </>)
}
