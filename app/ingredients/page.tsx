import JsonLd from "@/components/JsonLd"
import { site } from "@/lib/seo"
export const metadata={ title:"Ingredients & Science — Nature Beez", description:"How Nature Beez blends ayurvedic botanicals with modern dermatology.", alternates:{ canonical:"/ingredients" } }
export default function Page(){
  const crumbs={ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    { "@type":"ListItem","position":1,"name":"Home","item": site.url },
    { "@type":"ListItem","position":2,"name":"Ingredients & Science","item": site.url + "/ingredients" }
  ]}
  return(<>
    <JsonLd json={crumbs}/>
    <section className='container mt-10'><h1 className='text-3xl font-bold'>Ingredients & Science</h1><p className='mt-2 opacity-70'>Our Ayurvedic inspiration meets modern dermatology.</p></section>
  </>)
}
