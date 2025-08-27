'use client'
import { useRouter } from 'next/navigation'
import { useCart } from '@/components/CartProvider'

export default function CheckoutPage(){
  const { total, items, clear } = useCart()
  const r = useRouter()
  function onSubmit(e: any){
    e.preventDefault()
    try{ (window as any).dataLayer=(window as any).dataLayer||[]; (window as any).dataLayer.push({event:'nb_purchase', value: total, items}) }catch{}
    clear(); r.push('/checkout/success')
  }
  return (
    <section className="container mt-10 grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold">Checkout</h1>
        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
          <input required placeholder="Full name" className="w-full border rounded-2xl px-4 py-3"/>
          <input required type="email" placeholder="Email" className="w-full border rounded-2xl px-4 py-3"/>
          <input required placeholder="Address" className="w-full border rounded-2xl px-4 py-3"/>
          <input required placeholder="City" className="w-full border rounded-2xl px-4 py-3"/>
          <input required placeholder="Pincode" className="w-full border rounded-2xl px-4 py-3"/>
          <button className="btn-amber">Pay on Delivery (Mock)</button>
        </form>
      </div>
      <aside className="nb-card h-fit">
        <div className="text-lg font-semibold">Total</div>
        <div className="text-2xl font-bold mt-2">₹{total}</div>
        <div className="text-sm opacity-70">Secure payment will be integrated later.</div>
      </aside>
    </section>
  )
}
