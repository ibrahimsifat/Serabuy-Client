import FeatureCategory from '@component/category/FeatureCategory';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
<<<<<<< HEAD
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Fragment } from 'react';

const NavbarPromo = () => {
  const { t } = useTranslation('navber');
=======
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { Fragment } from 'react';





const NavbarPromo = () => {
  const { t } = useTranslation('common',)
>>>>>>> otherme
  return (
    <>
      <div className="hidden lg:block xl:block bg-white shadow z-50	">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-10 flex justify-between items-center">
          <div className="inline-flex">
            <Popover className="relative">
              <div className="max-w-7xl mx-auto ">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                  <Popover.Group
                    as="nav"
                    className="md:flex space-x-10 items-center"
                  >
                    <Popover className="relative font-serif">
                      <Popover.Button className="group inline-flex items-center py-2   focus:outline-none">
                        <span className="font-serif text-sm font-medium">
<<<<<<< HEAD
                          <h1 className='s'>{t('category_text')}</h1>
=======
                          {t('category_text')}
>>>>>>> otherme
                        </span>
                        <ChevronDownIcon
                          className="ml-1 h-3 w-3 group- "
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-screen-xl	  bg-white">
                          <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full p-4">
                            <FeatureCategory />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>

                    <Link href="/about-us">
                      <a className="font-serif mx-4 py-2 text-sm font-medium  ">
<<<<<<< HEAD
                         {t('About Us')}
=======
                      {t('About Us')}
>>>>>>> otherme
                      </a>
                    </Link>
                    <Link href="/contact-us">
                      <a className="font-serif mx-4 py-2 text-sm font-medium  ">
<<<<<<< HEAD
                         {t('Contact Us')}
=======
                      {t('Contact Us')}
>>>>>>> otherme
                      </a>
                    </Link>



                    {/* <Popover className="relative font-serif ">
                      <Popover.Button className="group inline-flex items-center py-2 text-sm font-medium   focus:outline-none ">
                        <span>vagitable</span>
                        <ChevronDownIcon
                          className="ml-1 h-3 w-3 group- "
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="fixed z-10 -ml-1 mt-1 left-0 transform w-screen h-44  bg-white text-black">
                          <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 rounded-lg shadow-lg ring-black ring-opacity-5  flex-grow scrollbar-hide w-full h-full">
                            hello
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover> */}





                    <Link href="/offer">
                      <a className="relative inline-flex items-center h-6 bg-green-500 font-serif ml-4 py-0 px-2 rounded text-sm font-medium text-white hover:bg-green-600">
<<<<<<< HEAD
                             {t('Offers')}
=======
                        {t('Offers')}
>>>>>>> otherme
                        <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </div>
                      </a>
                    </Link>
                  </Popover.Group>
                </div>
              </div>
            </Popover>
          </div>

        </div>
      </div>
    </>
  );
};

export default NavbarPromo;
