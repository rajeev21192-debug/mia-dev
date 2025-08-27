import { Metadata } from "next"

interface Props{ params:{ slug:string } }

export async function generateMetadata({ params }: Props): Promise<Metadata>{
  const name = params.slug.replaceAll("-", " ")
  return {
    title: `${name} — Nature Beez`,
    description: `${name} by Nature Beez — gentle, ayurvedic-inspired and dermatologically tested for delicate baby skin.`,
    alternates: { canonical: `/products/${params.slug}` }
  }
}

export default function ProductPage({ params }: Props){
  const name = params.slug.replaceAll("-", " ")
  return (
    <section className="container mt-10">
      <h1 className="text-3xl font-bold capitalize">{name}</h1>
      <p className="opacity-70 mt-2">Product page is coming soon.</p>
    </section>
  )
}
