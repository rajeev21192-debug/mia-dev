import JsonLd from "@/components/JsonLd"
import { site } from "@/lib/seo"
export const metadata={ title:"Contact — Nature Beez", description:"Get in touch with Nature Beez for product queries, partnerships, and support.", alternates:{ canonical:"/contact" } }
export default function Page(){
  const crumbs={ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    { "@type":"ListItem","position":1,"name":"Home","item": site.url },
    { "@type":"ListItem","position":2,"name":"Contact","item": site.url + "/contact" }
  ]}
  return(<>
    <JsonLd json={crumbs}/>
    <section className='container mt-10'><h1 className='text-3xl font-bold'>Contact</h1><p className='mt-2'>Email: hello@naturebeez.com</p></section>
  </>)
}
