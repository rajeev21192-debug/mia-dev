'use client'
import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
export default function CartIcon(){
  const { count } = useCart()
  return (
    <Link href="/cart" className="relative">
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white" style={{boxShadow:'0 10px 20px rgba(0,0,0,0.06)'}}>🛒</span>
      {count>0 && <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-2">{count}</span>}
    </Link>
  )
}
