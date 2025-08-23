"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
const nav=[
  {href:"/",label:"Home"},{href:"/products",label:"Products"},{href:"/ingredients",label:"Ingredients & Science"},
  {href:"/journal",label:"Journal"},{href:"/faq",label:"FAQ"},{href:"/contact",label:"Contact"}
]
export default function Header(){
  const path=usePathname()
  return(<header className="sticky top-0 z-50 bg-[rgba(255,255,255,0.8)] backdrop-blur border-b">
    <div className="container flex items-center justify-between h-16">
      <Link href="/" className="font-bold text-lg">Nature Beez</Link>
      <nav className="hidden md:flex gap-6">
        {nav.map(n=>(<Link key={n.href} href={n.href} className={clsx("hover:opacity-80",path===n.href&&"font-semibold underline")}>{n.label}</Link>))}
      </nav>
      <Link href="/contact" className="btn btn-primary">Get Updates</Link>
    </div></header>)
}
