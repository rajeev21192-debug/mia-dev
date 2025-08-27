'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Item = { slug:string; name:string; price:number; image:string; qty:number }
type CartCtx = {
  items: Item[]
  add: (item: Omit<Item,'qty'>, qty?:number)=>void
  remove: (slug:string)=>void
  update: (slug:string, qty:number)=>void
  clear: ()=>void
  total: number
  count: number
}
const Ctx = createContext<CartCtx | null>(null)

export default function CartProvider({ children }:{ children: React.ReactNode }){
  const [items, setItems] = useState<Item[]>([])
  useEffect(()=>{
    if(typeof window==='undefined') return
    const saved = localStorage.getItem('nb_cart')
    if(saved) setItems(JSON.parse(saved))
  },[])
  useEffect(()=>{
    if(typeof window==='undefined') return
    localStorage.setItem('nb_cart', JSON.stringify(items))
  },[items])
  const api = useMemo<CartCtx>(()=>{
    const add: CartCtx['add'] = (item, qty=1) => {
      setItems(prev=>{
        const i = prev.findIndex(p=>p.slug===item.slug)
        if(i>-1){ const next=[...prev]; next[i]={...next[i], qty: next[i].qty+qty}; return next }
        return [...prev, {...item, qty}]
      })
      try{ (window as any).dataLayer=(window as any).dataLayer||[]; (window as any).dataLayer.push({event:'nb_add_to_cart', slug:item.slug, qty}) }catch{}
    }
    const remove = (slug:string)=> setItems(prev=> prev.filter(p=>p.slug!==slug))
    const update = (slug:string, qty:number)=> setItems(prev=> prev.map(p=> p.slug===slug? {...p, qty}: p))
    const clear = ()=> setItems([])
    const total = items.reduce((s,i)=> s + i.price*i.qty, 0)
    const count = items.reduce((s,i)=> s + i.qty, 0)
    return { items, add, remove, update, clear, total, count }
  },[items])
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}

export function useCart(){
  const c = useContext(Ctx)
  if(!c) throw new Error('useCart must be used within CartProvider')
  return c
}
