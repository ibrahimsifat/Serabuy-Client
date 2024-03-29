import dynamic from 'next/dynamic';
import React, { useContext } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { useCart } from 'react-use-cart';

//internal import
import { SidebarContext } from '@context/SidebarContext';

const StickyCart = () => {
  const { totalItems, cartTotal } = useCart();
  const { toggleCartDrawer } = useContext(SidebarContext);
  return (totalItems>=1&&
    <button aria-label="Cart" onClick={toggleCartDrawer} className="absolute">
      <div className="right-0 mt-5 w-35 float-right fixed top-1/6 bottom-3/6 align-middle cursor-pointer z-30 hidden lg:block xl:block">
        <div className="flex flex-col items-center justify-center bg-white opacity-75 p-2 text-gray-700">
          <span className="text-2xl mb-1 text-green-600">
            <IoBagHandleOutline />
          </span>
          <span className="px-2 text-sm font-serif font-bold">
            {totalItems} Items
          </span>
        </div>
        <div className="flex flex-col items-center justify-center bg_green p-2 text-white text-base font-serif font-medium rounded-bl-2xl opacity-75 mx-auto">
          ${cartTotal.toFixed(2)}
        </div>
      </div>
    </button>
  );
};

export default dynamic(() => Promise.resolve(StickyCart), { ssr: false });
