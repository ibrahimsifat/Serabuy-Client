import ProductCard from '@component/product/ProductCard';
import Slider from '@layout/slider/Slider';
import Link from 'next/link';
import React from 'react';

const ProductSection = ({ title, products, sliderProducts, btnLink }) => {
    const Link = btnLink
    return (
        <div className="  mx-auto max-w-screen-2xl px-3 sm:px-10 my-2">
            {title &&

                <div className='flex justify-between items-center pt-2 pb-3'>
                    <h2 className="text-xl lg:text-2xl  font-serif font-bold text-gray-800 uppercase ">{title}</h2>

                    <button className='text-[#6be004] hover:text-white hover:bg-[#6be004] border-2 border-[#6be004] py-1 px-4 uppercase duration-300 rounded'>View All

                    </button>

                </div>
            }
            <div className="flex">
                <div className="w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-3 ">
                        {products?.map((product, i) => (
                            <ProductCard key={i + 1} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            {/* meatSlider products */}
            {sliderProducts && <div className=" my-3">
                <Slider products={sliderProducts} />
            </div>}
            {/* meatSlider products */}
        </div>
    );
};

export default ProductSection;