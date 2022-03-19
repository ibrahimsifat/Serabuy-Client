import { useState } from 'react';
import Image from 'next/image';
import { useCart } from 'react-use-cart';
import { IoBagAddSharp, IoAdd, IoRemove } from 'react-icons/io5';
import Price from '@component/common/Price';
import Discount from '@component/common/Discount';
import ProductModal from '@component/modal/ProductModal';
import Link from 'next/link';
import { AiFillEye } from "react-icons/ai";
const ProductCard = ({ product }) => {
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
      <ProductModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        product={product}
      />

      <div className="group box-border overflow-hidden flex   pe-0 flex-col items-center bg-white relative ">

        <Link href={`/product/${product.slug}`} passHref>
          <div

            className="relative flex justify-center w-full cursor-pointer"
          >
            {product.quantity === 0 && (
              <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4">
                Stock Out
              </span>
            )}
            <Discount product={product} />

            <Image

              src={product.image}
              width={160}
              height={160}
              alt={product.title}
              className="object-cover transition duration-150 ease-linear transform group-hover:scale-110"
            />

          </div>
        </Link>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden bg-gray-100">
          <div className="relative mb-1">
            <span className="text-gray-500 font-medium text-xs d-block mb-1">
              {product.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-800">
              <span className="line-clamp-2">{product.title}</span>
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
            <Price product={product} card={true} />
            {inCart(product._id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === product._id && (
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
                          disabled={product.quantity === item.quantity}
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
                  className="h-5 w-5 flex items-center justify-center text_green  hover:green-500 hover:text-green-500 transition-all "
                >
                  {' '}
                  <span className="text-xl ">
                    <AiFillEye size={26} />
                  </span>{' '}
                </button>
                <button
                  onClick={() => generateCartItem(product)}
                  disabled={product.quantity < 1}
                  aria-label="cart"
                  className="h-5 w-5 flex items-center justify-center   rounded text_green hover:green-500 hover:text-green-500 transition-all absolute top-36 right-5"
                >
                  {' '}
                  <span className="text-xl border hover:border-green-500 p-2 rounded-full bg-white">
                    <IoBagAddSharp size={26} />
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
