import JsonLd from "@/components/JsonLd"
import { site } from "@/lib/seo"
export const metadata={ title:"Journal — Baby Skincare Guides & Tips | Nature Beez", description:"Explore baby skincare routines, ingredient explainers, and safe care tips from Nature Beez.", alternates:{ canonical:"/journal" } }
export default function Page(){
  const crumbs={ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    { "@type":"ListItem","position":1,"name":"Home","item": site.url },
    { "@type":"ListItem","position":2,"name":"Journal","item": site.url + "/journal" }
  ]}
  return(<>
    <JsonLd json={crumbs}/>
    <section className='container mt-10'><h1 className='text-3xl font-bold'>Journal</h1><p className='mt-2 opacity-70'>Guides and tips for baby skincare.</p></section>
  </>)
}
