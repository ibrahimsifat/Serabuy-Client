import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 220
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 230
  },
  mobile: {
    breakpoint: { max: 264, min: 0 },
    items: 1,
    paritialVisibilityGutter: 170
  }
};


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Slider = ({ deviceType, products }) => {
  // console.log(products);
  return (
    <Carousel
      className="carousel-with-custom-dots bg-indigo-100"
      partialVisible
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {products.map(image => {

        return (
          <div className='group'>
            <Link href={`/product/${image.slug}`}  >
              <Image
                key={image.slug}
                className="cursor-pointer py-3 bg-white m-0 px group-hover:scale-110 transition duration-150 ease-linear"
                width={230}
                height={230}

                src={image.image}
              />
            </Link>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
