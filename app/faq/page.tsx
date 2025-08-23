export const metadata = {
  title: "FAQ — Nature Beez",
  description: "Answers to common questions about Nature Beez products, safety, and usage.",
  alternates: { canonical: "/faq" }
}
export default function Page(){
  return (<section className='container mt-10'>
    <h1 className='text-3xl font-bold'>FAQ</h1>
    <div className='mt-4 space-y-3'>
      <details className='card'>
        <summary>Is it safe for newborns?</summary>
        <p>Yes, our formulas are dermatologically tested.</p>
      </details>
    </div>
  </section>)
}
