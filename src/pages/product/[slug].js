import Discount from '@component/common/Discount';
import Price from '@component/common/Price';
import Stock from '@component/common/Stock';
import Tags from '@component/common/Tags';
import ProductCard from '@component/product/ProductCard';
import Card from '@component/slug-card/Card';
//internal import
import Layout from '@layout/Layout';
import ProductServices from '@services/ProductServices';
import Locals from '@utils/Locals';
import { notifySuccess } from '@utils/toast';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiChevronRight } from 'react-icons/fi';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';
import { useCart } from 'react-use-cart';

const ProductScreen = ({ product, relatedProduct }) => {

  // for translation
  // const {,titleAR}=product;
  const { t } = useTranslation('common')
  const { IsArabic, IsBangla, IsEnglish } = Locals()
  // let LangTitle = IsArabic() && product.titleAR || IsEnglish() && product.title || IsBangla() && product?.titleBN
  // let LangDescription = IsArabic() && product.descriptionAR || IsEnglish() && product.description || IsBangla() && product?.descriptionBN

  const router = useRouter();
  const { addItem, totalItems } = useCart();

  //comment this when using getServerSideProps
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleAddItem = () => {
    const newItem = {
      ...product,
      id: product._id,
    };
    addItem(newItem);
    notifySuccess(`Added "${product.title}" To Cart!`);
  };

  return (
    <Layout title={product.title} description={product.description}>
      <div className="px-0 py-10 lg:py-10">
        <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
          <div className="flex items-center pb-4">
            <ol className="flex items-center w-full overflow-hidden font-serif">
              <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-green-500 font-semibold">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="text-sm mt-[1px]">
                {' '}
                <FiChevronRight />{' '}
              </li>
              <li className="text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-green-500 font-semibold line-clamp-1">
                <a
                  onClick={() =>
                    router.push(
                      `/search?category=${product.children
                        .toLowerCase()
                        .replace('&', '')
                        .split(' ')
                        .join('-')}`
                    )
                  }
                >
                  {product.children}
                </a>
              </li>
              <li className="text-sm mt-[1px]">
                {' '}
                <FiChevronRight />{' '}
              </li>
              <li className="text-sm px-1 transition duration-200 ease-in line-clamp-1">
                {product.title}
              </li>
            </ol>
          </div>
          <div className="w-full rounded-lg p-3 lg:p-12 bg-white">
            <div className="flex flex-col xl:flex-row">
              <div className="flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5/12 xl:w-4/12">
                <Discount product={product} slug={true} />
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="responsive"
                  width={650}
                  height={650}
                  priority
                ></Image>
              </div>
              <div className="w-full">
                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                  <div className="w-full md:w-7/12 md:pr-4 lg:pr-4 xl:pr-12">
                    <div className="mb-6">
                      <h1 className="leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold font-serif text-gray-800">
                        {IsArabic() && product.titleAR || IsEnglish() && product.title || IsBangla() && product?.titleBN}
                      </h1>
                      <p className="uppercase font-serif font-medium text-gray-500 text-sm">
                        SKU :{' '}
                        <span className="font-bold text-gray-600">
                          {product._id.substring(18, 24)}
                        </span>
                      </p>
                    </div>
                    <Price product={product} />
                    <div className="mb-4 md:mb-5 block">
                      <Stock product={product} />
                    </div>
                    <div>
                      <p className="text-sm leading-6 text-gray-500 md:leading-7 line-clamp-6">
                        {IsArabic() && product.descriptionAR || IsEnglish() && product.description || IsBangla() && product?.descriptionBN}
                      </p>
                      <button
                        onClick={handleAddItem}
                        disabled={product.quantity === totalItems}
                        className="leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg_green text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-6 hover:text-white hover:bg-green-600 h-12 text-sm lg:text-base w-full sm:w-auto"
                      >
                        {t("Add_to_Cart")}
                      </button>

                      <div className="flex flex-col mt-4">
                        <span className="font-serif font-semibold py-1 text-sm d-block">
                          <span className="text-gray-700">{t("Category")}:</span>{' '}
                          <span className="text-gray-500">
                            {product.children}
                          </span>
                        </span>
                        <Tags product={product} />
                      </div>

                      {/* social share */}
                      <div className="mt-8">
                        <h3 className="text-base font-semibold mb-1 font-serif">
                          {t("Share_network")}
                        </h3>
                        <p className="font-sans text-sm text-gray-500">
                          {t("For_this_product")}
                        </p>
                        <ul className="flex mt-4">
                          <span className="flex items-center text-center border border-gray-100 rounded-full hover:bg_green  mr-2 transition ease-in-out duration-500">
                            <FacebookShareButton
                              url={`https://serabuy.com/product/${router.query.slug}`}
                              quote="Serabuy"
                            >
                              <FacebookIcon size={32} round />
                            </FacebookShareButton>
                          </span>
                          <span className="flex items-center text-center border border-gray-100 rounded-full hover:bg_green  mr-2 transition ease-in-out duration-500">
                            <TwitterShareButton
                              url={`https://serabuy.com/product/${router.query.slug}`}
                              quote="Serabuy"
                            >
                              <TwitterIcon size={32} round />
                            </TwitterShareButton>
                          </span>
                          <span className="flex items-center text-center border border-gray-100 rounded-full hover:bg_green  mr-2 transition ease-in-out duration-500">
                            <RedditShareButton
                              url={`https://serabuy.com/product/${router.query.slug}`}
                              quote="Serabuy"
                            >
                              <RedditIcon size={32} round />
                            </RedditShareButton>
                          </span>
                          <span className="flex items-center text-center border border-gray-100 rounded-full hover:bg_green  mr-2 transition ease-in-out duration-500">
                            <WhatsappShareButton
                              url={`https://serabuy.com/product/${router.query.slug}`}
                              quote="Serabuy"
                            >
                              <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                          </span>
                          <span className="flex items-center text-center border border-gray-100 rounded-full hover:bg_green  mr-2 transition ease-in-out duration-500">
                            <LinkedinShareButton
                              url={`https://serabuy.com/product/${router.query.slug}`}
                              quote="Serabuy"
                            >
                              <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                          </span>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:w-5/12 lg:w-6/12 md:w-5/12">
                    <div className="mt-6 md:mt-0 lg:mt-0 border-2 bg-green-50 border-green-200 p-4 lg:p-8 rounded">
                      <Card />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* related products */}
          <div className="pt-10 lg:pt-20 lg:pb-10">
            <h3 className="leading-7 text-lg lg:text-xl mb-3 font-semibold font-serif hover:text-gray-600">
              {t("Related_Products")}
            </h3>
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                  {relatedProduct?.slice(1, 13).map((product, i) => (
                    <ProductCard key={i + 1} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

//you can use getServerSideProps alternative for getStaticProps and getStaticPaths

// export const getServerSideProps = async (context) => {
//   const { slug } = context.params;
//   const products = await ProductServices.getAllProducts();
//   const product = await ProductServices.getProductBySlug(slug);

//   let relatedProduct= [];
//   if (slug) {
//     const selectProduct = products.find((product) => product.slug === slug);
//     relatedProduct = products.filter(
//       (product) => product.children === selectProduct.children
//     );
//   }

//   return {
//     props: {
//       product,
//       relatedProduct,
//     },
//   };
// };

//use getStaticPaths and getStaticProps when in production this will make faster load data

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const product = await ProductServices.getProductBySlug(slug);
  const products = await ProductServices.getAllProducts();

  let relatedProduct = [];
  if (slug) {
    const selectProduct = products.find((product) => product.slug === slug);
    relatedProduct = products.filter(
      (product) => product.children === selectProduct.children
    );
  }

  return {
    props: {
      product,
      relatedProduct,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const products = await ProductServices.getAllProducts();

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: true };
};

export default ProductScreen;