//internal import
import { ArabicSliderData, BanglaSliderData, EnglishSliderData } from '@utils/data';
import Locals from '@utils/Locals';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';


const MainCarousel = () => {
  const {IsArabic, IsBangla,IsEnglish}=Locals()
  console.log(IsArabic());
  const whichSlider=IsArabic()&&ArabicSliderData || IsEnglish()&&EnglishSliderData||IsBangla() &&BanglaSliderData
  return (
    <Carousel

      additionalTransform={0}
      autoPlay="false"
      autoPlaySpeed={4000}
      centerMode={false}
      className="carousel-with-custom-dots"
      containerClass=""
      dotListClass=""
      infinite
      itemClass=""
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      keyBoardControl={true}

      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 664,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      arrows={false}
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {whichSlider.map((item, i) => (
        <Link href={item.url}><div className="h-full relative overflow-hidden z-10" key={i + 1}>


          <div className="text-sm text-gray-600 hover:text-green-dark z-10">

            <Image
              layout="responsive"
              width={950}
              height={250}
              src={item.image}
              alt={item.title}
              priority
              className="object-cover "
            />
          </div>

          {/* <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
              <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800">
                {item.title}
              </h1>
              <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1  md:line-clamp-none lg:line-clamp-none">
                {item.info}
              </p>

            </div>
          </div> */}
        </div>
        </Link>
      ))}
    </Carousel>
  );
};

export default React.memo(MainCarousel);
