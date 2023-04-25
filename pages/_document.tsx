import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#40526c" />
        <meta name="msapplication-TileColor" content="#40526c" />
        <meta name="theme-color" content="#40526c" />

        <title>Aloento's Blog</title>
      </Head>

      <body style={{ margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
