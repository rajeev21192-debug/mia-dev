'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/components/CartProvider'

export default function CartPage(){
  const { items, total, remove, update, clear } = useCart()
  return (
    <section className="container mt-10">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      {items.length===0 ? (
        <p className="mt-4">Your cart is empty. <Link href="/products" className="underline">Shop products</Link></p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="md:col-span-2 space-y-4">
            {items.map(i=> (
              <div key={i.slug} className="nb-card flex gap-4 items-center">
                <Image src={i.image} alt={i.name} width={100} height={100}/>
                <div className="flex-1">
                  <div className="font-semibold">{i.name}</div>
                  <div className="text-sm opacity-70">₹{i.price}</div>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    Qty:
                    <input type="number" min={1} value={i.qty} onChange={e=> update(i.slug, Math.max(1, parseInt(e.target.value||'1')))} className="w-16 border rounded px-2 py-1"/>
                    <button className="underline" onClick={()=> remove(i.slug)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
            <button className="text-sm underline opacity-70" onClick={clear}>Clear cart</button>
          </div>
          <aside className="nb-card h-fit">
            <div className="text-lg font-semibold">Order Summary</div>
            <div className="flex justify-between mt-3"><span>Subtotal</span><span>₹{total}</span></div>
            <div className="text-xs opacity-70 mt-1">Taxes & shipping calculated at checkout</div>
            <Link href="/checkout" className="btn-amber mt-4 inline-flex w-full justify-center">Checkout</Link>
          </aside>
        </div>
      )}
    </section>
  )
}
