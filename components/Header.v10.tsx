'use client'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from '@/components/CartIcon'

export default function HeaderV10(){
  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,255,255,0.85)] backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Nature Beez" width={120} height={40} />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/products" className="hover:opacity-80">Shop</Link>
          <Link href="/journal" className="hover:opacity-80">Journal</Link>
          <Link href="/about" className="hover:opacity-80">About</Link>
          <Link href="/faq" className="hover:opacity-80">FAQ</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/products" className="btn-amber hidden sm:inline-flex">Shop Now</Link>
          <CartIcon />
        </div>
      </div>
    </header>
  )
}
