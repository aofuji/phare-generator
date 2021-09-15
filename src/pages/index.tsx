import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/main'

import Script from 'next/experimental-script'

export default function Home() {
 

  return (
    <div className="">
      <Head>
        <title>Gerador de frases</title>
        <link rel="icon" href="/favicon.ico" />
     
      </Head>

      {/* <Header /> */}
      <Main />
      <Footer />
    </div>
  )
}
