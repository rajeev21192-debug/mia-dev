import Link from "next/link"
export default function Footer(){
  return(<footer className="mt-16 border-t">
    <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
      <div><div className="font-semibold mb-2">Nature Beez</div><p>Minimal. Natural. Made for Baby Skin.</p></div>
      <div><div className="font-semibold mb-2">Explore</div><ul className="space-y-1">
        <li><Link href="/products">Products</Link></li><li><Link href="/ingredients">Ingredients & Science</Link></li>
        <li><Link href="/journal">Journal</Link></li><li><Link href="/faq">FAQ</Link></li></ul></div>
      <div><div className="font-semibold mb-2">Legal</div><ul className="space-y-1">
        <li><Link href="/legal/privacy">Privacy Policy</Link></li><li><Link href="/legal/terms">Terms of Use</Link></li></ul></div>
      <div><div className="font-semibold mb-2">Contact</div><p>1056, Vikas Nagar, Meerut Road, Ghaziabad — 201003</p><p>Email: hello@naturebeez.com</p></div>
    </div><div className="container py-6 text-xs opacity-70">© Nature Beez {new Date().getFullYear()}</div>
  </footer>)
}
