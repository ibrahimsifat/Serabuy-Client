import Carousel from "react-multi-carousel";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 100
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 100
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 100
  }
};


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Slider = ({ deviceType ,products}) => {

  return (
    <Carousel
    
    partialVisible
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {products.map(image => {
        return (
                   
            <Link href={`/product/${image.slug}`} > 
             <Image
      
          className="cursor-pointer p-0 m-0 hover:bg-gray-100"
            width={700}
            height={700}
         
            src={image.image}
          />
          </Link>

        );
      })}
    </Carousel>
  );
};

export default Slider;
