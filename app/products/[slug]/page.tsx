"use client"
import { useEffect } from "react"
import { pushDL } from "@/lib/track"

interface Props { params: { slug: string } }
export default function ProductPage({ params }: Props) {
  const { slug } = params
  useEffect(()=>{
    const name = slug.replaceAll("-", " ")
    pushDL({event:"view_item", item_id: slug, item_name: name})
  },[slug])
  return (
    <section className="container mt-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-80 bg-white rounded-2xl shadow-soft flex items-center justify-center opacity-60">Product Image</div>
        <div>
          <h1 className="text-3xl font-bold">{slug.replaceAll('-', ' ')}</h1>
          <p className="mt-2 opacity-70">Benefits • Ingredients • How to use • Safety</p>
          <div className="mt-6">
            <a href="#notify" className="btn btn-primary">Notify on Launch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
