import { notFound } from 'next/navigation'
import Image from 'next/image'
import AddToCartButton from '@/components/AddToCartButton'
import { findProduct, PRODUCTS } from '@/lib/products'

export async function generateStaticParams(){ return PRODUCTS.map(p => ({ slug: p.slug })) }
export async function generateMetadata({ params }:{ params:{slug:string} }){
  const p = findProduct(params.slug); if(!p) return {}
  return { title: `${p.name} — Nature Beez`, description: p.short || p.name }
}

export default function ProductPage({ params }:{ params:{ slug:string } }){
  const p = findProduct(params.slug)
  if(!p) return notFound()
  return (
    <section className="container mt-10 grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl overflow-hidden bg-white" style={{boxShadow:'0 10px 20px rgba(0,0,0,0.06)'}}>
        <Image src={p.image} alt={p.name} width={900} height={900}/>
      </div>
      <div>
        <h1 className="text-3xl font-bold">{p.name}</h1>
        <div className="mt-1 text-sm opacity-70">⭐ {p.rating} ({p.reviews} reviews)</div>
        <div className="mt-4 text-2xl font-semibold">₹{p.price}</div>
        <div className="mt-3 flex gap-2">{(p.badges||[]).map(b=> <span key={b} className="nb-chip">{b}</span>)}</div>
        <p className="mt-4">Gentle, nature-powered formula for daily comfort. Dermatologist reviewed. pH 5.5.</p>
        <div className="mt-6"><AddToCartButton product={p as any}/></div>
        <div className="mt-8">
          <h3 className="font-semibold">Highlights</h3>
          <ul className="list-disc pl-6 mt-2 opacity-90 text-sm">
            <li>Minimal ingredient list designed for delicate skin</li>
            <li>Fragrance-light, dye-free, sulfate-free</li>
            <li>Dermatologist reviewed • pH balanced</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
