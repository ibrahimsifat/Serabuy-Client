import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';

//internal import
// import { sliderData } from '@utils/data';

const CardSlider = ({ sliderData }) => {
    return (
        <Carousel

            additionalTransform={0}
            autoPlay="false"
            autoPlaySpeed={4000}
            centerMode={false}
            className=""
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
                        max: 464,
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

            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {sliderData.map((item, i) => (
                <div className="h  overflow-hidden z-10" key={i + 1}>
                    <div className="text-sm text-gray-600 hover:text-green-dark z-10">
                        <Image
                            layout="responsive"
                            width={950}
                            height={150}
                            src={item.image}
                            alt={item.title}
                            priority
                            className="object-cover "
                        />
                    </div>

                </div>
            ))}
        </Carousel>
    );
};

export default React.memo(CardSlider);
