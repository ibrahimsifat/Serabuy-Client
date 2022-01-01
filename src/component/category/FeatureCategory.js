import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

//internal import
import useAsync from '@hooks/useAsync';
import CategoryServices from '@services/CategoryServices';

const FeatureCategory = () => {
  const router = useRouter();
  const { data, error } = useAsync(() => CategoryServices.getAllCategory());

  return (
    <>
      {error ? (
        <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
          <span> {error}</span>
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-3 z-50 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
          {data?.map((item, i) => (
            <li className="group" key={i + 1}>
              <div
                onClick={() =>
                  router.push(
                    `/search?Category=${item.parent
                      .toLowerCase()
                      .replace('&', '')
                      .split(' ')
                      .join('-')}`
                  )
                }
                className="border border-gray-200 bg-white transform p-4 block cursor-pointer "
              >
                <div className="flex flex-col justify-center items-center transition ">
                  <Image className=' duration-200 ease-linear transform group-hover:scale-105 w-16 h-16'
                    src={item.icon}
                    alt={item.parent}
                    width={80}
                    height={80}
                  />
                  <h3 className="pt-4 lg:pl-4 md:text-md lg:text-xl text-sm text-gray-600 font-serif font-medium leading-tight h-12">
                    {item.parent}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FeatureCategory;
