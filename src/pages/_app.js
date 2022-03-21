import DefaultSeo from '@component/common/DefaultSeo';
import { SidebarProvider } from '@context/SidebarContext';
//internal import
import { UserProvider } from '@context/UserContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '@styles/custom.css';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { CartProvider } from 'react-use-cart';
import nextI18NextConfig from '../../next-i18next.config';
import Loader from './Loader';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || null);


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
    NProgress.done();
  })
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      {loading && <Loader />}
      <UserProvider>
        <SidebarProvider>
          <Elements stripe={stripePromise}>
            <CartProvider>
              <DefaultSeo />
              <Component {...pageProps} />
            </CartProvider>
          </Elements>
        </SidebarProvider>
      </UserProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);