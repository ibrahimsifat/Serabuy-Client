//internal import
import { SidebarContext } from '@context/SidebarContext';
import Locals from '@utils/Locals';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { IoChevronBackOutline, IoChevronDownOutline, IoChevronForwardOutline, IoRemoveSharp } from 'react-icons/io5';

const CategoryCard = ({ title, icon, nested }) => {
  const { IsArabic } = Locals()
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
        className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-green-600"
        role="button"
      >
        <Image

          src={icon}
          width={18}
          height={18}
          alt={title}
          aria-hidden="true"
        />
        <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-green-600 text-black rtl:mr-2">
          {title}
          <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
            {show ? <IoChevronDownOutline /> : IsArabic ? <IoChevronBackOutline /> : <IoChevronForwardOutline />}
          </span>
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
