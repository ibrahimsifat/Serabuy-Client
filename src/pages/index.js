//internal import
import Layout from '@layout/Layout';
// import useFilter from '@hooks/useFilter';
import Card from '@component/cta-card/Card';
// import OfferCard from '@component/offer/OfferCard';
import StickyCart from '@component/cart/StickyCart';
import ProductServices from '@services/ProductServices';
import ProductCard from '@component/product/ProductCard';
import MainCarousel from '@component/carousel/MainCarousel';
// import FeatureCategory from '@component/category/FeatureCategory';
// import FeatureCard from '@component/feature-card/FeatureCard';
import Slider from '@layout/slider/Slider'
import HomeCategory from '@component/category/HomeCategory';
import SingleTwoCategory from '@component/category/SingleTwoCategory';
import {twoBanner1} from '../utils/data'
import {twoBanner2} from '../utils/data'
const Home = ({ popularProduct,vegetableProducts,breadProducts,glocaryProduct,cleaningProduct}) => {
  // const { productData } = useFilter(products);




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
              </div>
            </div>
          </div>

          <div style={{ProductBg}} className="pb-4 pt-6">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <HomeCategory />
            </div>
          </div>


          <div style={{ProductBg}} className=" ">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
            <p className=" px-5 pt-2  md:text-2xl text-xl font-bold "></p>
              {/* <Slider products={healthProducts}/> */}
            </div>
          </div>

          {/* popular products */}
          <div className="  mx-auto max-w-screen-2xl px-3 sm:px-10 -mt-3">
            <h2 className="text-xl lg:text-2xl  font-serif font-bold pt-6 pb-2 text-gray-800">Popular Products</h2>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-3 ">
                  {popularProduct?.slice(57, 72).map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* promotional banner card */}
          <div className="block pt-6 ">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 ">
              <div className="grid gap-3 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 pb-10">
                <Card />
              </div>
            </div>
          </div>
{/* single two banner */}
<div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
<div style={{ProductBg}} className="pb-4 pt-6">
            <div className="mx-auto max-w-screen-2xl ">
              <SingleTwoCategory pictures={twoBanner1} />
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
                  {/* {popularProduct?.slice(90, 120).map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                    
                  ))} */}
                </div>
              </div>
            </div>
          </div>
           {/* feature category's */}
           <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
<div style={{ProductBg}} className="pb-4 pt-6">
            <div className="mx-auto max-w-screen-2xl ">
              <SingleTwoCategory pictures={twoBanner2} />
            </div>
          </div>
          </div>
          {/* cosmatics products */}
          
          <div className="  mx-auto max-w-screen-2xl px-3 mt-6 sm:px-10">
                <h2 className="text-xl lg:text-2xl pb-1 font-serif font-bold text-gray-800">Cosmetics & Skin Care</h2>
            
            <div className="flex pt-2">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-3 lg:gap-3">
                  {glocaryProduct?.map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex pt-2">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-3 lg:gap-3">
                  {cleaningProduct?.map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex pt-2">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-3 lg:gap-3">
                  {breadProducts?.map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex pt-2">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-3 lg:gap-3">
                  {vegetableProducts?.map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex pt-2">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-3 lg:gap-3">
                  {/* {products2?.slice(117, 135).map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))} */}
                </div>
              </div>
            </div>
          </div>
           {/* feature category's */}
           <div style={{ProductBg}} className="  mt-4">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
            <p className="bg-white px-5 pt-4  md:text-2xl text-xl font-bold "> Latest Products</p>
              {/* <Slider products={latestProducts}/> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const products = await ProductServices.getAllProducts();

  return {
    props: {
      vegetableProducts:products.slice(0,100),
      breadProducts:products.slice(150,200),
      glocaryProduct:products.slice(201,250),
      popularProduct: products.slice(251,300),
      cleaningProduct:products.slice(301,445)

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
