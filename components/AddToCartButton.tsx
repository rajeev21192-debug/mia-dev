'use client'
import { useCart } from '@/components/CartProvider'

export default function AddToCartButton({ product }:{ product:{slug:string; name:string; price:number; image:string} }){
  const { add } = useCart()
  return <button className='btn-amber' onClick={()=> add(product, 1)}>Add to Cart</button>
}
