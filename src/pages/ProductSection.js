import ProductCard from '@component/product/ProductCard';
import Slider from '@layout/slider/Slider';
import React from 'react';

const ProductSection = ({ title, products, sliderProducts }) => {
    return (
        <div className="  mx-auto max-w-screen-2xl px-3 sm:px-10 py-2">
            {title && <h2 className="text-xl lg:text-2xl pb-2 font-serif font-bold text-gray-800">
                {title}
            </h2>}
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
            {sliderProducts && <div className="mt-6">
                <Slider products={sliderProducts} />
            </div>}
            {/* meatSlider products */}
        </div>
    );
};

export default ProductSection;