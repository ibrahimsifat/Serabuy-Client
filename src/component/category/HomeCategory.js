import React from 'react';
import {categoryData} from '../../utils/data'
import Image from 'next/image';
import Link from 'next/link';


const HomeCategory = () => {
 
    return (
        <>
          <ul className="grid grid-cols-2 gap-3 z-50 md:grid-cols-3 lg:grid-cols-3 ">
          {categoryData?.map((item, i) => (
            <li className="group" key={i + 1}>
              <div className=" transform  block cursor-pointer ">
                <div className="flex flex-col justify-center items-center transition ">
                <Link href={item.url}>
                  <Image className=' duration-200 ease-linear transform group-hover:scale-105 rounded'
                    src={item.image}
                    alt={'item.parent'}
                    width={650}
                    height={340}
                  />
                  </Link>
                  {/* <h3 className="pt-4 lg:pl-4 md:text-md lg:text-xl text-sm text-gray-600 font-serif font-medium leading-tight h-12">
                    {item.title}
                  </h3> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
        </>
    );
};

export default HomeCategory;