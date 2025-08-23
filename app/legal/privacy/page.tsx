import JsonLd from "@/components/JsonLd"
import { site } from "@/lib/seo"
export const metadata={ title:"Privacy Policy — Nature Beez", description:"Nature Beez privacy policy aligned with DPDP India and GDPR standards.", alternates:{ canonical:"/legal/privacy" } }
export default function Page(){
  const crumbs={ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    { "@type":"ListItem","position":1,"name":"Home","item": site.url },
    { "@type":"ListItem","position":2,"name":"Privacy Policy","item": site.url + "/legal/privacy" }
  ]}
  return(<>
    <JsonLd json={crumbs}/>
    <section className='container mt-10'><h1 className='text-3xl font-bold'>Privacy Policy</h1><p className='mt-2 opacity-70'>Placeholder for DPDP‑India & GDPR aligned policy.</p></section>
  </>)
}
