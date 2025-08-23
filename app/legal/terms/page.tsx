import JsonLd from "@/components/JsonLd"
import { site } from "@/lib/seo"
export const metadata={ title:"Terms of Use — Nature Beez", description:"Terms and conditions for using the Nature Beez website.", alternates:{ canonical:"/legal/terms" } }
export default function Page(){
  const crumbs={ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    { "@type":"ListItem","position":1,"name":"Home","item": site.url },
    { "@type":"ListItem","position":2,"name":"Terms of Use","item": site.url + "/legal/terms" }
  ]}
  return(<>
    <JsonLd json={crumbs}/>
    <section className='container mt-10'><h1 className='text-3xl font-bold'>Terms of Use</h1><p className='mt-2 opacity-70'>Use of this website indicates agreement to terms.</p></section>
  </>)
}
