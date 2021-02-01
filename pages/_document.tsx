import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          {/*<link*/}
          {/*  rel="stylesheet"*/}
          {/*  href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"*/}
          {/*/>*/}
          {/*<link*/}
          {/*  href="https://unpkg.com/leaflet-geosearch@latest/assets/css/leaflet.css"*/}
          {/*  rel="stylesheet"*/}
          {/*/>*/}

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;0,800;1,500;1,700;1,800&family=Teko&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
