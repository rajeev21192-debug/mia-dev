import "./../styles/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { AnalyticsScripts } from "@/components/AnalyticsScripts"

export const metadata = {
  title: "Nature Beez",
  description: "Minimal. Natural. Made for Baby Skin."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
