import Document,{ Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    render() {
        return <Html>
            <Head>
            <script defer data-domain="ivmet-store.vercel.app" src="https://plausible.io/js/plausible.js"></script>
            </Head>
            <body>
                <Main />
            </body>
            <NextScript />
        </Html>
    }
}