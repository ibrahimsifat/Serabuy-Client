import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
//internal import
import { UserContext } from '@context/UserContext';

const Footer = () => {
  const {
    state: { userInfo },
  } = useContext(UserContext);

  return (
    <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-20 justify-between">
          <div className="lg:pb-10 sm:pb-0 col-span-full sm:col-span-1 md:col-span-3 lg:col-span-6 lg:pr-20 mb-4 sm:mb-0">
            <Link href="/">
              <a className="mr-3 lg:mr-12 xl:mr-12" rel="noreferrer">
                <Image
                  width={180}
                  height={30}
                  src="/logo/logo-color.png"
                  alt="logo"
                />
              </a>
            </Link>
            <p className="leading-7 font-sans text-base text-gray-600 mt-3">
              There are many popular products you will find our shop, Choose
              your daily necessary product from our Serabuy shop and get some
              special offer.
            </p>

            <div className="mt-6">
              <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                Follow Us
              </span>
              <ul className="text-sm flex">
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.facebook.com/profile.php?id=100015218562560" target='_blank'>
                    <button title='Follow Us' id="facebook" className="bg-white  sticky duration-500 border-2 border-blue-600 fixed  w-9 transform hover:-translate-y-2   h-9 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 flex justify-center items-center">
                      <FaFacebookF className='icon-font' />
                    </button>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="mailto:ibsifat900@gmail.com" target='_blank'>
                    <button id="linkedin" className="bg-white transform hover:-translate-y-2  border-2 w-9 h-9 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl flex justify-center items-center">
                      <IoMdMail className='icon-font' />
                    </button>

                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://twitter.com/ibsifat900">
                    <button id="twitter" className="bg-white  transform hover:-translate-y-2  border-2 w-9 h-9 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl flex justify-center items-center">
                      <FaTwitter className='icon-font' />
                    </button>
                  </Link>
                </li>
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.instagram.com/ibsifat900/">
                    <button id="instagram" className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-9 h-9  transform hover:-translate-y-2 rounded-full duration-500 flex justify-center items-center ">
                      <FaInstagram className='icon-font' />
                    </button>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.linkedin.com/in/ibrahim-sifat-221358200/">
                    <button id="linkedin" className="bg-white transform hover:-translate-y-2  border-2 w-9 h-9 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl flex justify-center items-center">
                      <FaLinkedinIn className='icon-font' />
                    </button>

                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://wa.me/0558845503">
                    <button id="whatsapp" className="bg-white duration-500    w-9 h-9 border-2 rounded-full border-green-600 transform hover:-translate-y-2  text-2xl text-green-500 hover:bg-green-600 hover:text-white flex justify-center items-center">
                      <FaWhatsapp className='icon-font' />
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              Company
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/about-us">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/contact-us">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Contact us
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="#">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Careers
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="#">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Latest news
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/offer">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Latest Discount
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              Top Category
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/search?Category=fish--meat">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Fish & Meat
                  </a>
                </Link>
              </li>

              <li className="flex items-baseline">
                <Link href="/search?Category=drinks">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Soft Drinks
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="search?Category=baby-care">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Baby Care
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="search?Category=beauty--health">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Beauty & Health
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/search?Category=fruits--vegetable">
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Fruits & Vegetable
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              My Account
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? '/user/dashboard' : '#'}`}>
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? '/user/my-orders' : '#'}`}>
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    My Orders
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? '/user/dashboard' : '#'}`}>
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Recent Orders
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link
                  href={`${userInfo?.email ? '/user/update-profile' : '#'}`}
                >
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Updated Profile
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link
                  href={`${userInfo?.email ? '/user/change-password' : '#'}`}
                >
                  <a className="text-gray-600 inline-block w-full hover:text-green-500">
                    Change Password
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-green-100 bg-gray-100">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex flex-col-reverse md:flex-row text-center items-center md:justify-between py-4">
          <p className="text-sm text-gray-500 eading-6">
            Copyright 2022 @{' '}
            <Link href="https://subah.xyz/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500"
              >
                serabuy
              </a>
            </Link>
            , All rights reserved.
          </p>
          <ul className="hidden md:flex flex-wrap justify-center items-center space-s-4 xs:space-s-5 lg:space-s-7 -mb-1.5 md:mb-0 mx-auto md:mx-0 pt-3.5 md:pt-0">
            <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
              <Image
                width={240}
                height={28}
                className="object-cover rounded"
                src="/payment-method/payment-logo.png"
                alt="payment method"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
