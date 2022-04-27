import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

// extending classes in Javascript?! The official suggestion from the Next.js team:
// https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          
          <script defer data-domain="ivmet-store.vercel.app" src="https://plausible.io/js/plausible.js"></script>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}