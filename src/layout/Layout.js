import Footer from '@layout/footer/Footer';
import FooterTop from '@layout/footer/FooterTop';
import MobileFooter from '@layout/footer/MobileFooter';
//internal import
import Navbar from '@layout/navbar/Navbar';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

const Layout = ({ title, description, children }) => {
  const { t } = useTranslation('offer')
  return (
    <>
      <ToastContainer />
      <div className="font-sans">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>
            {title
              ? `Serabuy | ${title}`
              : 'Serabuy - Grocery & Organic Food Store'}
          </title>
          {description && <meta name="description" content={description} />}
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Navbar />

        <div className="bg-gray-50">{children}</div>
        <MobileFooter />
        <div className="w-full">
          <FooterTop />
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
