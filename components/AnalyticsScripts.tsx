/* Inserts GA4 via GTM and Microsoft Clarity when env vars are present */
export function AnalyticsScripts() {
  const ga4 = process.env.NEXT_PUBLIC_GA4_ID
  const gtm = process.env.NEXT_PUBLIC_GTM_ID
  const clarity = process.env.NEXT_PUBLIC_CLARITY_ID
  return (
    <>
      {gtm && (
        <>
          <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtm}');`}} />
          <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtm}`} height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        </>
      )}
      {clarity && (
        <script dangerouslySetInnerHTML={{__html:`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarity}");`}} />
      )}
      {ga4 && !gtm && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}></script>
          <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config','${ga4}');`}}/>
        </>
      )}
    </>
  )
}
