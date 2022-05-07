import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='sq'>
                <Head>
                    {/* Global Styles */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap" rel="stylesheet" />
                                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
                            </Head>

                            <body>
                                <Main />
                                <NextScript />
                            </body>
                        </Html>
                        )
    }
}