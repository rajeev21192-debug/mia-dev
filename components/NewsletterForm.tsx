"use client"
import { useState } from "react"
import { pushDL } from "@/lib/track"
export default function NewsletterForm(){
  const [email,setEmail]=useState(""); const [submitted,setSubmitted]=useState(false)
  return(<form className="card mt-8" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true); pushDL({event:"nb_form_submit", form_id:"newsletter"})}}>
    <h3 className="font-semibold text-lg">Get early access and launch offers</h3>
    <div className="mt-3 flex gap-2">
      <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 rounded-2xl border px-4 py-3 outline-none"/>
      <button className="btn btn-primary" type="submit">Notify Me</button>
    </div>
    {submitted && <p className="text-sm mt-2">Thanks! We’ll be in touch.</p>}
  </form>)
}
