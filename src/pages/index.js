//internal import
import MainCarousel from "@component/carousel/MainCarousel";
// import OfferCard from '@component/offer/OfferCard';
import StickyCart from "@component/cart/StickyCart";
import HomeCategory from "@component/category/HomeCategory";
import SingleTwoCategory from "@component/category/SingleTwoCategory";
// import useFilter from '@hooks/useFilter';
import Card from "@component/cta-card/Card";
import Layout from "@layout/Layout";
// import FeatureCategory from '@component/category/FeatureCategory';
// import FeatureCard from '@component/feature-card/FeatureCard';
import Slider from "@layout/slider/Slider";
import ProductServices from "@services/ProductServices";
<<<<<<< HEAD
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js';
import { twoBanner1, twoBanner2 } from "../utils/data";
import ProductSection from "./ProductSection";

// export const getStaticProps = async ({ locale }) => ({
  //   props: {
    //     ...(await serverSideTranslations(
      //       locale,
      //       ['common',],
      //       nextI18NextConfig
      //     )),
      //   },
 
// })


=======
import Head from 'next/head';
import { twoBanner1, twoBanner2 } from "../utils/data";
import ProductSection from "./ProductSection";
const APP_NAME =
  'Serabuy Organic Food Store';
const APP_DESCRIPTION =
  'Serabuy is your neighborhood organic grocer offering everything from organic produce to free-range eggs to health coaching and more.';
>>>>>>> 6f4e2826b05d51fbf3b76c85514e28a0689c6a82
const Home = ({
  popularProduct: firstSlideProducts,
  vegetableProducts,
  petProducts,
  babyCareProducts,
  cleaningProduct,
  firstProducts,
  meatProducts,
  drinkProducts,
  cosmeticProducts,
  saucesProducts,
  popularSliderProducts
}) => {
  // const { productData } = useFilter(products);
     const { t } = useTranslation('common');
  const ProductBg = {
    backgroundColor: "#EAEDED",
  };
  return (
    <>

    <Head>
    <meta name="description" content={APP_DESCRIPTION}/>
<meta property="og:title" content={APP_NAME}/>
<meta property="og:description" content={APP_DESCRIPTION}/>
<meta property="og:url" content="https://serabuy.com/"/>
<meta property="og:type" content="Organic Food Store"/>
    </Head>
      <Layout>
        <div style={ProductBg} className="min-h-screen">
          <StickyCart />
          <div className="">
            <div className="mx-auto  max-w-screen-2xl px-3 sm:px-10">
              <div className="flex w-full">
                <div className="flex- lg:block w-full ">
                  <MainCarousel />
                </div>
              </div>
            </div>
          </div>

          <div style={{ ProductBg }} className="pt-3">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <HomeCategory />
              <h1 className='s'>{t('hello')}</h1>
            </div>
          </div>

          {/* firstSlideProducts */}
          <div style={{ ProductBg }} className="mt-3 ">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <Slider products={firstSlideProducts} />
            </div>
          </div>
          {/* firstSlideProducts */}


          {/* popular products */}
          <ProductSection products={firstProducts} title={'Popular Products'} sliderProducts={popularSliderProducts} />
          {/* popular products */}


          {/* promotional banner card */}
          <div className="block pb-2">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 ">
              <div className="grid gap-3 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 ">
                <Card />
              </div>
            </div>
          </div>

          {/* vegetableProducts products */}
          <ProductSection products={vegetableProducts} sliderProducts={meatProducts} />
          {/* vegetableProducts products */}

          <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 -mt-1">
            <ul className="md:grid grid-cols-2 gap-3">
              <SingleTwoCategory pictures={twoBanner1} />
            </ul>
          </div>
          {/* single two banner */}

          {/* drinkProducts products */}
          <ProductSection products={drinkProducts} sliderProducts={petProducts} />
          {/* drinkProducts products */}

          {/* cleaningProduct banner's */}
          <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 -mt-1">
            <ul className="md:grid grid-cols-2 gap-3">
              <SingleTwoCategory pictures={twoBanner2} />
            </ul>
          </div>
          {/* cleaningProduct banner's */}

          {/* cleaningProduct products */}
          <ProductSection products={cleaningProduct} sliderProducts={babyCareProducts} />
          {/* cleaningProduct products */}

          {/* cosmeticProducts products */}
          <ProductSection products={cosmeticProducts} sliderProducts={saucesProducts} title={'Cosmetic Products'} />
          {/* cosmeticProducts products */}
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const products = await ProductServices.getAllProducts();

  return {
    props: {
      
      popularProduct: products.slice(251, 275),
      firstProducts: products.slice(41, 51),
      popularSliderProducts: products.slice(61, 85),
      vegetableProducts: products.slice(20, 30),
      meatProducts: products.slice(100, 115),
      drinkProducts: products.slice(125, 135),
      petProducts: products.slice(340, 360),
      cleaningProduct: products.slice(305, 315),
      babyCareProducts: products.slice(435, 446),
      cosmeticProducts: products.slice(420, 435),
      saucesProducts: products.slice(201, 250),
      ...(await serverSideTranslations(
        locale,
        ['common','navber'],
        nextI18NextConfig
      )),
    },
    revalidate: 20,
  };
};

// export const getServerSideProps = async () => {
//   const products = await ProductServices.getAllProducts();

//   return {
//     props: {
//       products,
//     },
//   };
// };

export default Home;
