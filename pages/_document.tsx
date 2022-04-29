import Document,{ Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    render() {
        return <Html>
            <Head>
            <script defer data-domain="ivmet.com" src="https://plausible.io/js/plausible.js"></script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8358664070447163"
     crossorigin="anonymous"></script>
            </Head>
            <body>
                <Main />
            </body>
            <NextScript />
        </Html>
    }
}
