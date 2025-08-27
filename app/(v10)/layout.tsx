import '../../styles/globals.css'
import '../../styles/v10.css'
import HeaderV10 from '@/components/Header.v10'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { AnalyticsScripts } from '@/components/AnalyticsScripts'

export default function V10Layout({ children }:{ children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts/>
        <CartProvider>
          <HeaderV10/>
          <main>{children}</main>
          <WhatsAppFloat/>
          <Footer/>
        </CartProvider>
      </body>
    </html>
  )
}
