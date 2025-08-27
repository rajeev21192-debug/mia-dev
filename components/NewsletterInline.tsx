'use client'
import { useState } from 'react'
export default function NewsletterInline(){
  const [email,setEmail]=useState(''); const [submitted,setSubmitted]=useState(false)
  return(<div className='card mt-10'>
    <h3 className='text-lg font-semibold'>Get baby skincare tips & launch offers</h3>
    <form className='mt-3 flex gap-2' onSubmit={(e)=>{e.preventDefault(); setSubmitted(true); try{ (window as any).dataLayer=(window as any).dataLayer||[]; (window as any).dataLayer.push({event:'nb_form_submit', form_id:'newsletter_inline'}) }catch{} }}>
      <input required type='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='you@example.com' className='flex-1 rounded-2xl border px-4 py-3 outline-none'/>
      <button className='btn btn-primary' type='submit'>Subscribe</button>
    </form>
    {submitted && <p className='text-sm mt-2'>Thanks! You’re on the list.</p>}
  </div>)
}
