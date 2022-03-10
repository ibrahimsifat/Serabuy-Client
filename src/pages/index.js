//internal import
import Layout from '@layout/Layout';
import useFilter from '@hooks/useFilter';
import Card from '@component/cta-card/Card';
// import OfferCard from '@component/offer/OfferCard';
import StickyCart from '@component/cart/StickyCart';
import ProductServices from '@services/ProductServices';
import ProductCard from '@component/product/ProductCard';
import MainCarousel from '@component/carousel/MainCarousel';
import FeatureCategory from '@component/category/FeatureCategory';
// import FeatureCard from '@component/feature-card/FeatureCard';
import Slider from '@layout/slider/Slider'
const Home = ({ products }) => {
  const { productData } = useFilter(products);
  const healthProducts=products.slice(78,100)
  const latestProducts=products.slice(4,100)



  const ProductBg={
    backgroundColor: '#EAEDED'
  }
  return (
    <>
      <Layout  >
        <div style={ProductBg} className="min-h-screen">
          <StickyCart />
          <div className="">
            <div className="mx-auto py-t max-w-screen-2xl px-3 sm:px-10">
              <div className="flex w-full">
                <div className="flex- lg:block w-full ">
                  <MainCarousel />
                </div>
                {/* <div className="w-full hidden lg:flex">
                  <OfferCard />
                </div> */}
              </div>
            </div>
            {/* <div className="hidden relative lg:block mx-auto max-w-screen-2xl px-3 sm:px-10">
              <FeatureCard />
            </div> */}
          </div>

          
          <div style={{ProductBg}} className=" ">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
            <p className=" px-5 pt-4  md:text-2xl text-xl font-bold "></p>
              <Slider products={healthProducts}/>
            </div>
          </div>

          {/* popular products */}
          <div className="  mx-auto max-w-screen-2xl px-3 sm:px-10 -mt-3">
            <div className="mb-10 flex lg:py-6 py-3">
              <div className=" w-full lg:w-3/5 -mb-2 lg:px-5 px-4">
                <h2 className="text-xl lg:text-2xl pb-1 font-serif font-bold text-gray-800">
                  Popular Products
                </h2>
                
                {/* <p className="text-base font-sans text-gray-600 leading-6">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p> */}
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 -mt-6 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-3 ">
                  {products?.slice(57, 72).map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* promotional banner card */}
          <div className="block pt-4  ">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 ">
              <div className="grid gap-3 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 pb-10">
                <Card />
              </div>
            </div>
          </div>

          {/* discounted products */}
          
          <div className="  mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex ">
              <div className=" w-full lg:w-2/5 lg:px-5 px-4 pb-3 pt-6 -mt-5 ">
                <h2 className="text-xl lg:text-2xl pb-1 font-serif font-bold text-gray-800">
                  Latest Discounted Products
                </h2>
              
                {/* <p className="text-base font-sans text-gray-600 leading-6">
                  See Our latest discounted products below. Choose your daily
                  needs from here and get a special discount with free shipping.
                </p> */}
              </div>
            </div>
            <div className="flex -mt-6">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-3 lg:gap-3">
                  {products?.slice(90, 120).map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
           {/* feature category's */}
           <div style={{ProductBg}} className="  mt-4">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
            <p className="bg-white px-5 pt-4  md:text-2xl text-xl font-bold "> Latest Products</p>
              <Slider products={latestProducts}/>
            </div>
          </div>

          {/* feature category's */}
          <div style={{ProductBg}} className="pb-4 pt-2">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              {/* <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl uppercase lg:text-4xl md:text-2xl text-xl  mb-2 font-serif font-bold">
                    Featured Categories
                  </h2>
                  <p className="text-base font-sans text-gray-600 leading-6">
                    Choose your necessary products from categories.
                  </p>
                </div>
              </div> */}
              <FeatureCategory />
            </div>
          </div>
          {/* feature category's */}
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const products = await ProductServices.getAllProducts();

  return {
    props: {
    
      products: products.slice(200,300),

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
