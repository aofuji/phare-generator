// import 'tailwindcss/tailwind.css'
import '../styles/styles.css'
import '../styles/reset.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

declare global {
  interface Window {
    gtag:any;
  }
}

function MyPhraseGenerator({ Component, pageProps }) {

  const router = useRouter()
  const GA_TRACKING_ID = 'G-71QH0L8W6W';

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
  
  return <Component {...pageProps} />
}

export default MyPhraseGenerator
