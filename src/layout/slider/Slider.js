import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 256
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 100
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 200
  }
};


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Slider = ({ deviceType, products }) => {
  // console.log(products);
  return (
    <Carousel

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
                className="cursor-pointer py-3 bg-white m-0 px-4 group-hover:scale-110 transition duration-150 ease-linear"
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
