import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SingleTwoCategory = ({ pictures }) => {
  return (
    <>
      {pictures?.map((item, i) => (
        <li className="group" key={i + 1}>
          <div className=" transform block cursor-pointer ">
            <div className=" ">
              <Link href={item.url}>
                <Image className=' duration-200 ease-linear transform group-hover:scale-105 rounded'
                  src={item.image}
                  alt={item.title}
                  width={750}
                  height={240}
                />
              </Link>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default SingleTwoCategory;