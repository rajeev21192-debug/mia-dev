import JsonLd from "@/components/JsonLd"
import { site } from "@/lib/seo"
export const metadata={ title:"All Baby Care Products — Nature Beez", description:"Explore Nature Beez baby lotion, wash, shampoo, massage oil, tummy roll-on and more.", alternates:{ canonical:"/products" } }
export default function ProductsPage(){
  const crumbs={ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    { "@type":"ListItem","position":1,"name":"Home","item": site.url },
    { "@type":"ListItem","position":2,"name":"Products","item": site.url + "/products" }
  ]}
  return(<>
    <JsonLd json={crumbs}/>
    <section className="container mt-10">
      <h1 className="text-3xl font-bold">All Products</h1>
      <p className="opacity-70 mt-2">Store launching soon. Explore our line-up preview.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {["Baby Lotion","Baby Wash","Baby Shampoo","Baby Massage Oil","Tummy Roll-On","Fabric Roll-On"].map(n=>(<div key={n} className="card" aria-label={`${n} placeholder`}>{n}</div>))}
      </div>
    </section>
  </>)
}
