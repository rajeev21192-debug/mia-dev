'use client'
export default function WhatsAppFloat(){
  const num=process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||''
  if(!num) return null
  const msg=encodeURIComponent('Hi Nature Beez! I have a quick question.')
  const href=`https://wa.me/${num}?text=${msg}`
  const onClick=()=>{ try{ (window as any).dataLayer=(window as any).dataLayer||[]; (window as any).dataLayer.push({event:'nb_whatsapp_click',link_url:href}) }catch{} }
  return(<a onClick={onClick} href={href} target='_blank' rel='noopener noreferrer' aria-label='Chat on WhatsApp' className='fixed bottom-5 right-5 rounded-full shadow-soft bg-green-500 text-white px-5 py-3 font-medium hover:opacity-90'>WhatsApp</a>)
}
