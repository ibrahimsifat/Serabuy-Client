import '@styles/custom.css';
import 'react-multi-carousel/lib/styles.css';
import { CartProvider } from 'react-use-cart';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Router from 'next/router'
//internal import
import { UserProvider } from '@context/UserContext';
import { SidebarProvider } from '@context/SidebarContext';
import DefaultSeo from '@component/common/DefaultSeo';
import { useState } from 'react';
import Loader from './Loader';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || null);


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })
  return (
    <>
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

export default MyApp;
