import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/main'

import Script from 'next/experimental-script'

export default function Home() {
  const GA_TRACKING_ID = 'G-71QH0L8W6W';

  return (
    <div className="">
      <Head>
        <title>Gerador de frases</title>
        <link rel="icon" href="/favicon.ico" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-71QH0L8W6W" />
        <Script
        strategy="afterInteractive"
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
      </Head>

      {/* <Header /> */}
      <Main />
      <Footer />
    </div>
  )
}
