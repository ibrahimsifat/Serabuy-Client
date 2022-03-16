import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SingleTwoCategory = ({ pictures }) => {
  return (
    <ul className="grid grid-cols-2 gap-3 z-50  ">
      {pictures?.map((item, i) => (
        <li className="group" key={i + 1}>
          <div className=" transform  block cursor-pointer ">
            <div className="flex flex-col justify-center items-center transition ">
              <Link href={item.url}>
                <Image className=' duration-200 ease-linear transform group-hover:scale-105 rounded'
                  src={item.image}
                  alt={item.title}
                  width={650}
                  height={240}
                />
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SingleTwoCategory;