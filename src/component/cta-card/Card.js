//internal import
import { ctaCardData } from '@utils/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Card = () => {
  return (
    <>
      {ctaCardData.map((item) => (
        <div
          key={item.id}
          className="mx-auto w-full relative overflow-hidden transition ease-out duration-400 delay-150 transform border-2 border-white carousel-with-custom-dots"
        >
          <Link href={item.url}>
            <a className="block border2 shadow-md">
              <Image
                layout="responsive"
                width={550}
                height={154}
                src={item.image}
                alt={item.title}
                className="object-cover"
              />
              <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
                <div className="pl-4 pr-12 sm:pl-10 sm:pr-16">
                  <h2 className="font-serif text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-800 hidden md:block">
                    {item.title} <br />
                    <span className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text_green">
                      {item.subTitle}
                    </span>
                  </h2>
                  <p className="text-sm font-sans">Weekend discount offer</p>
                  <button className="hidden sm:block lg:block text-xs leading-6 font-serif font-medium mt-5 px-4 py-1 bg-gray-50 text-center rounded-full hover:text-white bg_hover">
                    Shop Now
                  </button>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
