"use client"
import Link from "next/link"
import { pushDL } from "@/lib/track"

export default function Hero() {
  return (
    <section className="container mt-10 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Minimal. Natural. Made for Baby Skin.</h1>
        <p className="mt-4 text-lg">Gentle, ayurvedic-inspired care that’s dermatologically tested and safe for newborns.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/products" className="btn btn-primary" onClick={()=>pushDL({event:"nb_hero_cta_click", cta_text:"Shop Coming Soon"})}>Shop Coming Soon</Link>
          <Link href="#why" className="btn bg-white">Why Nature Beez</Link>
        </div>
      </div>
      <div className="h-64 md:h-80 bg-white rounded-2xl shadow-soft flex items-center justify-center">
        <span className="opacity-60">Product hero image</span>
      </div>
    </section>
  )
}
