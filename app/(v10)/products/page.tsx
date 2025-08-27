'use client'
import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS } from '@/lib/products'
import AddToCartButton from '@/components/AddToCartButton'

export default function ProductsPage(){
  return (
    <section className="container mt-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Shop All</h1>
        <div className="text-sm opacity-70">Sort: <span className="font-medium">Featured</span></div>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 nb-card h-fit sticky top-24">
          {['Price','Type','Concern','Age','Availability'].map(s => (
            <details key={s} className="border-b py-2">
              <summary className="font-semibold">{s}</summary>
              <div className="mt-2 text-sm opacity-70">Filters coming soon</div>
            </details>
          ))}
        </aside>
        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map(p => (
            <div key={p.slug} className="nb-card">
              <Link href={`/products/${p.slug}`}>
                <div className="rounded-2xl overflow-hidden bg-white">
                  <Image src={p.image} alt={p.name} width={600} height={600}/>
                </div>
                <div className="mt-3 font-semibold">{p.name}</div>
              </Link>
              <div className="text-sm opacity-70">₹{p.price}</div>
              <div className="mt-2"><AddToCartButton product={p as any}/></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
