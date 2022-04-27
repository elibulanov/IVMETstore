import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
       
        <script defer data-domain="ivmet-store.vercel.app" src="https://plausible.io/js/plausible.js"></script>

      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
