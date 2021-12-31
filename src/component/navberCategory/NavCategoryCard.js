import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  IoChevronForwardOutline,
  IoChevronDownOutline,
  IoRemoveSharp,
} from 'react-icons/io5';

//internal import
import { SidebarContext } from '@context/SidebarContext';

const CategoryCard = ({ title, icon, nested }) => {
  const [show, setShow] = useState(false);
  const showCategory = () => setShow(!show);
  const router = useRouter();
  const { closeCategoryDrawer } = useContext(SidebarContext);

  const handleSubCategory = (children) => {
    router.push(
      `/search?category=${children
        .toLowerCase()
        .replace('&', '')
        .split(' ')
        .join('-')}`
    );
    closeCategoryDrawer();
  };

  return (
    <>
      <a
        onClick={showCategory}
        className=" "
        role="button"
      >
        <div className='border flex justify-center items-center p-5 bg-white  '>
        <Image
          src={icon}
          width={60}
          height={60}
          alt={title}
          aria-hidden="true"
        />
        <div className=" text-sm hover:text-green-600 text-black w-full  mx-auto ml-2">
          {title}
          {/* <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
            {show ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
          </span> */}
        </div>
        </div>
      </a>
      {show ? (
        <ul className="pl-6 pb-3 pt-1 -mt-1">
          {nested.map((children) => (
            <li key={children}>
              <a
                onClick={() => handleSubCategory(children)}
                className="flex items-center font-serif py-1 text-sm text-gray-600 hover:text-green-600 cursor-pointer"
              >
                <span className="text-xs text-gray-500 pr-1">
                  <IoRemoveSharp />
                </span>
                {children}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default CategoryCard;
