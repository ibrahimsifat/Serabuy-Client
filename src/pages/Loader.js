import React from 'react';

const Loader = () => {
    return (
        <button className="absolute">
            <div className="right-1/2 mt-5 w-72  float-right fixed top-1/2 bottom-3/6 align-middle cursor-pointer z-30 hidden lg:block xl:block">
                <div className="flex flex-col items-center justify-center bg-green-500 opacity-75 p-2 text-gray-700">
                    <span className="text-2xl mb-1 text-green-600">
                        asldfkj
                    </span>
                    <span className="px-2 text-sm font-serif font-bold">
                        Items
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center bg_green p-2 text-white text-base font-serif font-medium rounded-bl-2xl opacity-75 mx-auto">

                </div>
            </div>
        </button>
    );
};

export default Loader;