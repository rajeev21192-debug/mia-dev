import Link from 'next/link'

export default function SuccessPage(){
  return (
    <section className="container mt-20 text-center">
      <h1 className="text-3xl font-bold" style={{color:'var(--nb-red)'}}>Order Placed 🎉</h1>
      <p className="mt-2">Thank you! Your Nature Beez order was recorded (mock checkout). You’ll receive an email shortly.</p>
      <div className="mt-6">
        <Link href="/products" className="btn-amber">Continue Shopping</Link>
      </div>
    </section>
  )
}
