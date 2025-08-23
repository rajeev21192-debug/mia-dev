import JsonLd from "@/components/JsonLd"
import { site } from "@/lib/seo"
export const metadata={ title:"Article — Nature Beez", description:"In-depth baby skincare reads from Nature Beez.", alternates:{ canonical:"/journal" } }
export default function Page(){
  const crumbs={ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    { "@type":"ListItem","position":1,"name":"Home","item": site.url },
    { "@type":"ListItem","position":2,"name":"Journal","item": site.url + "/journal" },
    { "@type":"ListItem","position":3,"name":"Article","item": site.url + "/journal/article" }
  ]}
  return(<>
    <JsonLd json={crumbs}/>
    <section className='container mt-10'><h1 className='text-3xl font-bold'>Article</h1><article className='prose max-w-none'>Coming soon.</article></section>
  </>)
}
