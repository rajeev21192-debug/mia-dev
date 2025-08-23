import { notFound } from "next/navigation"
import { allJournalPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"

export async function generateStaticParams(){
  return allJournalPosts.map(p => ({ slug: p.slug }))
}
export async function generateMetadata({ params }:{ params:{ slug:string } }){
  const post = allJournalPosts.find(p => p.slug === params.slug)
  if(!post) return {}
  return { title: `${post.title} — Nature Beez`, description: post.description, alternates:{ canonical:`/journal/${post.slug}` } }
}
export default function JournalPostPage({ params }:{ params:{ slug:string } }){
  const post = allJournalPosts.find(p => p.slug === params.slug)
  if(!post) return notFound()
  const MDX = useMDXComponent(post.body.code)
  return (
    <section className="container mt-10 prose">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="opacity-70">{post.description}</p>
      <div className="mt-8"><MDX /></div>
    </section>
  )
}
