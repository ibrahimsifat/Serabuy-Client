//internal import
import MainCarousel from "@component/carousel/MainCarousel";
// import OfferCard from '@component/offer/OfferCard';
import StickyCart from "@component/cart/StickyCart";
import HomeCategory from "@component/category/HomeCategory";
import SingleTwoCategory from "@component/category/SingleTwoCategory";
import HomeCategoryCard from "@component/cta-card/HomeCategoryCard";
import Layout from "@layout/Layout";
// import FeatureCategory from '@component/category/FeatureCategory';
// import FeatureCard from '@component/feature-card/FeatureCard';
import Slider from "@layout/slider/Slider";
import ProductServices from "@services/ProductServices";
import Locals from "@utils/Locals";
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { ARctaCardData, ARtwoBannerFirst, BNctaCardData, BNtwoBannerFirst, ENctaCardData, ENtwoBannerFirst, twoBanner1, twoBanner2 } from "../utils/data";
import ProductSection from "./ProductSection";

const APP_NAME =
  'Serabuy Organic Food Store';
const APP_DESCRIPTION =
  'Serabuy is your neighborhood organic grocer offering everything from organic produce to free-range eggs to health coaching and more.';
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
  const { t } = useTranslation('common')
  const { IsArabic, IsBangla, IsEnglish } = Locals()
  const twoBannerFirst = IsArabic() && ARtwoBannerFirst || IsEnglish() && ENtwoBannerFirst || IsBangla() && BNtwoBannerFirst
  const ctaCardData = IsArabic() && ARctaCardData || IsEnglish() && ENctaCardData || IsBangla() && BNctaCardData
  const ProductBg = {
    backgroundColor: "#f7f8fc",
  };
  return (
    <>

      <Head>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:url" content="https://serabuy.com/" />
        <meta property="og:type" content="Organic Food Store" />
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

          <div style={{ ProductBg }} className="md:pt-3 pt-1">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <HomeCategory />
            </div>
          </div>
          {/* single two banner */}
          <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 mt-3">
            <ul className="md:grid grid-cols-2 gap-3">
              <HomeCategoryCard ctaCardData={twoBannerFirst} />
            </ul>
          </div>
          {/* firstSlideProducts */}
          <div style={{ ProductBg }} className="md:mt-3 mt-1 ">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <Slider products={firstSlideProducts} />
            </div>
          </div>
          {/* firstSlideProducts */}


          {/* popular products */}
          <ProductSection products={firstProducts} title={t('Popular Products')} sliderProducts={popularSliderProducts} />
          {/* popular products */}


          {/* promotional banner card */}
          <div className="block pb-2">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 ">
              <div className="grid gap-3 grid-cols-1 2xl:gap-6  md:grid-cols-2 ">
                <HomeCategoryCard ctaCardData={ctaCardData} />
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
          <ProductSection products={cosmeticProducts} sliderProducts={saucesProducts} title={t('Cosmetic Products')} />
          {/* cosmeticProducts products */}
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const products = await ProductServices.getAllProducts();

  return {
    props: {
      popularProduct: products.slice(263, 280),
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
