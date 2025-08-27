import Image from 'next/image'
import Link from 'next/link'

export const metadata={ title:'Nature Beez — Minimal. Natural. Made for Baby Skin.' }

export default function HomeV10(){
  return (
    <>
      <section className="nb-hero">
        <div className="container py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center text-white bg-[var(--nb-red)] text-xs px-2 py-1 rounded-full">NEW</div>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 honey-title">Boosted Body Care for Delicate Baby Skin</h1>
            <p className="mt-3 text-lg opacity-90">Lightweight, pH 5.5, and fragrance-light formulas designed for newborn comfort.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/products" className="btn-amber">Shop All</Link>
              <Link href="/journal" className="rounded-2xl px-4 py-2 bg-white">Read Journal</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{boxShadow:'0 10px 20px rgba(0,0,0,0.06)'}}>
            <Image src="/images/hero-lotion.png" alt="Nature Beez Baby Lotion" width={900} height={600} priority sizes="(max-width:768px) 100vw, 50vw"/>
          </div>
        </div>
      </section>
      <section className="container py-10 grid md:grid-cols-3 gap-6">
        {[
          {t:'pH 5.5 Balanced', s:'supports skin barrier'},
          {t:'Dermatologist Reviewed', s:'formulated with care'},
          {t:'Minimal Ingredients', s:'clean & gentle'}
        ].map(x=> (
          <div key={x.t} className="nb-card">
            <div className="text-2xl font-bold" style={{color:'var(--nb-red)'}}>{x.t}</div>
            <div className="opacity-70 mt-1">{x.s}</div>
          </div>
        ))}
      </section>
      <section className="container grid md:grid-cols-3 gap-6">
        {[
          {img:'/images/hero-lotion.png', t:'Skin Care', href:'/products?cat=skin'},
          {img:'/images/hero-shampoo.png', t:'Hair Care', href:'/products?cat=hair'},
          {img:'/images/hero-wash.png', t:'Bath Time', href:'/products?cat=bath'},
        ].map(x=> (
          <Link key={x.t} href={x.href} className="relative rounded-2xl overflow-hidden" style={{boxShadow:'0 10px 20px rgba(0,0,0,0.06)'}}>
            <Image src={x.img} alt={x.t} width={900} height={600}/>
            <div className="absolute bottom-3 left-3 nb-chip bg-white/90">{x.t}</div>
          </Link>
        ))}
      </section>
      <section className="container py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold" style={{color:'var(--nb-red)'}}>By nature. For nature. For all.</h2>
          <p className="mt-3">We craft minimal, nature-powered formulas that baby skin actually needs — nothing extra. Thoughtfully designed, dermatologically reviewed, and made for everyday comfort.</p>
          <a href="/about" className="btn-amber mt-4 inline-flex">Our Story</a>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{boxShadow:'0 10px 20px rgba(0,0,0,0.06)'}}>
          <Image src="/images/hero-wash.png" alt="Brand" width={900} height={600}/>
        </div>
      </section>
      <section className="container pb-16">
        <h3 className="text-2xl font-bold mb-4">From the Journal</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=> (
            <article key={i} className="nb-card">
              <div className="text-lg font-semibold">Baby Skincare Tip #{i}</div>
              <p className="opacity-70 mt-1">Short, safe routines beat crowded shelves. Less is more.</p>
              <a href="/journal" className="underline mt-2 inline-block">Read more</a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
