import "./../styles/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { AnalyticsScripts } from "@/components/AnalyticsScripts"
import { site } from "@/lib/seo"

export const metadata = {
  metadataBase: new URL(site.url),
  title: "Nature Beez",
  description: "Minimal. Natural. Made for Baby Skin.",
  alternates: { canonical: "/" },
  openGraph: { title:"Nature Beez", description:"Minimal. Natural. Made for Baby Skin.", url: site.url, siteName:"Nature Beez", type:"website" },
  twitter: { card: "summary_large_image" }
}
export default function RootLayout({ children }:{ children: React.ReactNode }){
  return(<html lang="en"><body><AnalyticsScripts/><Header/><main>{children}</main><Footer/></body></html>)
}
