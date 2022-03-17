import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME =
  'Serabuy Organic Food Store';
const APP_DESCRIPTION =
  'Serabuy is your neighborhood organic grocer offering everything from organic produce to free-range eggs to health coaching and more.';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <meta
            property="og:title"
            content="Serabuy Grocery & Organic Food Store"
          />
          <meta property="og:type" content="eCommerce Website" />
          <meta
            property="og:url"
            content="https://Serabuy.com"
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/6rLYMzc/serabuymuckp.jpg"
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

export default MyDocument;
