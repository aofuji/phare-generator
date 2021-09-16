// import 'tailwindcss/tailwind.css'
import '../styles/styles.css'
import '../styles/reset.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

declare global {
  interface Window {
    gtag: any;
  }
}

function MyPhraseGenerator({ Component, pageProps }) {

  const router = useRouter()

  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;



  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-71QH0L8W6W" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyPhraseGenerator
