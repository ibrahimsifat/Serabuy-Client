import DefaultSeo from '@component/common/DefaultSeo';
import { SidebarProvider } from '@context/SidebarContext';
//internal import
import { UserProvider } from '@context/UserContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '@styles/custom.css';
<<<<<<< HEAD
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import Router from 'next/router';
=======
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
>>>>>>> 6f4e2826b05d51fbf3b76c85514e28a0689c6a82
import NProgress from 'nprogress';
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { CartProvider } from 'react-use-cart';
<<<<<<< HEAD
import nextI18NextConfig from '../../next-i18next.config';
=======
>>>>>>> 6f4e2826b05d51fbf3b76c85514e28a0689c6a82
import Loader from './Loader';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || null);
const APP_NAME =
'Serabuy Organic Food Store';
const APP_DESCRIPTION =
'Serabuy is your neighborhood organic grocer offering everything from organic produce to free-range eggs to health coaching and more.';

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
  const {locale} = useRouter()
  return (
    <>
      <Head>
      <meta name="description" content={APP_DESCRIPTION}/>
<meta property="og:title" content={APP_NAME}/>
<meta property="og:description" content={APP_DESCRIPTION}/>
<meta property="og:url" content="https://serabuy.com/"/>
<meta property="og:type" content="Organic Food Store"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
      </Head>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
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
      </div>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);