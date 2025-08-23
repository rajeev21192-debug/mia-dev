"use client"
import { useEffect } from "react"
import JsonLd from "@/components/JsonLd"
import { site } from "@/lib/seo"
import { pushDL } from "@/lib/track"

interface Props{ params:{ slug:string } }
export async function generateMetadata({ params }: Props){
  const name=params.slug.replaceAll("-"," ")
  return { title: `${name} — Nature Beez`, description: `${name} by Nature Beez — gentle, ayurvedic-inspired and dermatologically tested for delicate baby skin.`, alternates:{ canonical:`/products/${params.slug}` } }
}
export default function ProductPage({ params }: Props){
  const { slug }=params; const name=slug.replaceAll("-"," ")
  useEffect(()=>{ pushDL({event:"view_item", item_id:slug, item_name:name}) },[slug,name])
  const productLd={ "@context":"https://schema.org","@type":"Product","name":name, "brand":{ "@type":"Brand","name":"Nature Beez" }, "description":"Gentle, ayurvedic-inspired baby care product by Nature Beez. Dermatologically tested and safe for delicate skin.", "url": site.url + `/products/${slug}`, "offers":{ "@type":"Offer","availability":"https://schema.org/PreOrder","price":"0.00","priceCurrency":"INR" } }
  const crumbs={ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    { "@type":"ListItem","position":1,"name":"Home","item": site.url },
    { "@type":"ListItem","position":2,"name":"Products","item": site.url + "/products" },
    { "@type":"ListItem","position":3,"name": name,"item": site.url + `/products/${slug}` }
  ]}
  return(<section className="container mt-10">
    <JsonLd json={productLd}/><JsonLd json={crumbs}/>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="h-80 bg-white rounded-2xl shadow-soft flex items-center justify-center opacity-60" aria-label={`${name} image placeholder`}>Product Image</div>
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="mt-2 opacity-70">Benefits • Ingredients • How to use • Safety</p>
        <div className="mt-6"><a href="#notify" className="btn btn-primary" aria-label="Notify on launch">Notify on Launch</a></div>
      </div>
    </div>
  </section>)
}
