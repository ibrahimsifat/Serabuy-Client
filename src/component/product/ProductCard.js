import Discount from '@component/common/Discount';
import Price from '@component/common/Price';
import ProductModal from '@component/modal/ProductModal';
import Locals from '@utils/Locals';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillEye, AiOutlinePlus } from "react-icons/ai";
import { IoAdd, IoRemove } from 'react-icons/io5';
import { useCart } from 'react-use-cart';
const ProductCard = ({ product }) => {
  const { IsArabic, IsBangla, IsEnglish } = Locals()
  const { title, description, slug, quantity, image, unit, _id } = product
  // console.log(IsArabic());
  let LangTitle = IsArabic() && product.titleAR || IsEnglish() && product.title || IsBangla() && product.titleBN
  const [modalOpen, setModalOpen] = useState(false);
  const { items, addItem, updateItemQuantity, inCart } = useCart();

  const generateCartItem = (p) => {
    const newItem = {
      ...p,
      id: p._id,
    };
    addItem(newItem);
  };

  return (
    <>
      <Head>

        <meta name="description" content={`Learn more about ${LangTitle}`} />
        <meta property="og:title" content={`${LangTitle} - My Clothing Store`} />
        <meta property="og:description" content={`Learn more about ${description}`} />
        <meta property="og:url" content={`https://www.serabuy.com/product/${slug}`} />
        <meta property="og:type" content="website" />
      </Head>
      <ProductModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        product={product}
      />

      <div className="group box-border overflow-hidden flex   pe-0 flex-col items-center bg-white relative ">

        <Link href={`/product/${slug}`} passHref>
          <div

            className="relative flex justify-center w-full cursor-pointer"
          >
            {quantity === 0 && (
              <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4">
                Stock Out
              </span>
            )}
            <Discount product={product} />

            <Image

              src={image}
              width={160}
              height={160}
              alt={title}
              className="object-cover transition duration-150 ease-linear transform group-hover:scale-110"
            />

          </div>
        </Link>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden bg-indigo-50">
          <div className="relative mb-1">
            <span className="text-gray-500 font-medium text-xs d-block mb-1">
              {unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-800">
              <span className="line-clamp-2">{LangTitle}</span>
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <Price product={product} card={true} />
            {inCart(_id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === _id && (
                      <div
                        key={item.id}
                        className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-3 bg_green text-white rounded absolute top-36 right-5 transition-all group"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span className="text-white text-base  ">
                            <IoRemove />
                          </span>
                        </button>
                        <p className="text-sm text-dark px-2 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          disabled={quantity === item.quantity}
                        >
                          <span className="text-white text-base">
                            <IoAdd />
                          </span>
                        </button>
                      </div>
                    )
                )}{' '}
              </div>
            ) : (
              <div className='flex items-center justify-center '>
                <button
                  onClick={() => setModalOpen(!modalOpen)}
                  aria-label="cart"
                  className="h-5 w-5 flex items-center justify-center text-green-500  hover:green-500 hover:text-green-600 transition-all "
                >
                  {' '}
                  <span className="text-xl ">
                    <AiFillEye size={26} />
                  </span>{' '}
                </button>
                <button
                  onClick={() => generateCartItem(product)}
                  disabled={quantity < 1}
                  aria-label="cart"
                  className="h-5 w-5 flex items-center justify-center   rounded text-white hover:green-500 hover:text-purple-200 transition-all absolute top-36 mt-1 ltr:right-5 rtl:left-5"
                >
                  {' '}
                  <span className="text-xl border-2 hover:border-green-500 duration-100 transform ease-linear p-2 rounded-full bg-green-500">
                    <AiOutlinePlus size={26} />
                  </span>{' '}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
