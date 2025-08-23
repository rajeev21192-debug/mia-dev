import { allJournalPosts } from "contentlayer/generated"
import Link from "next/link"

export const metadata={ title:"Journal — Nature Beez", description:"Baby skincare guides, routines and ingredient explainers." }

export default function JournalPage(){
  const posts = allJournalPosts.sort((a,b)=> (b.date||"").localeCompare(a.date||"") || a.title.localeCompare(b.title))
  return(
    <section className="container mt-10">
      <h1 className="text-3xl font-bold">Journal</h1>
      <div className="mt-6 grid gap-4">
        {posts.map(p=> (
          <article key={p._id} className="card">
            <h2 className="text-xl font-semibold"><Link href={p.url}>{p.title}</Link></h2>
            <p className="opacity-80 mt-1">{p.description}</p>
            <div className="text-sm opacity-60 mt-2">{p.readingTime || ""}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
