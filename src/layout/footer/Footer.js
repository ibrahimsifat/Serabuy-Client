//internal import
import { UserContext } from '@context/UserContext';
import {
  ARCompanyFooter, ARMyAccountFooter, ARTopCategory, BNCompanyFooter, BNMyAccountFooter, BNTopCategory, ENCompanyFooter, ENMyAccountFooter, ENTopCategory
} from '@utils/data';
import Locals from '@utils/Locals';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  const { t } = useTranslation('common')

  const {IsArabic, IsBangla,IsEnglish}=Locals()
  console.log(IsArabic());
  const companyFooter=IsArabic()&&ARCompanyFooter || IsEnglish()&&ENCompanyFooter||IsBangla() &&BNCompanyFooter
  const topCategory=IsArabic()&&ARTopCategory || IsEnglish()&&ENTopCategory||IsBangla() &&BNTopCategory
  const myAccountFooter=IsArabic()&&ARMyAccountFooter || IsEnglish()&&ENMyAccountFooter||IsBangla() &&BNMyAccountFooter

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
             {t('There_are')}
            </p>

          <div className="mt-6  ">
              <span className="text-base font-medium block mb-2 pb-0.5">
                {t('Follow_Us')}
              </span>
              <ul className="text-sm flex">
              <li className="flex items-center mr-3 transition ease-in-out duration-500">
               <Link href="https://www.facebook.com/profile.php?id=100015218562560" target='_blank'>
                  <p title='Follow Us' id="facebook"className="bg-white  sticky duration-500 border-2 border-blue-600   w-9  hover:-translate-y-1   h-9 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 flex justify-center items-center">
                  <FaFacebookF className='icon-font'/>
            </p>  
            </Link>     
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="mailto:ibsifat900@gmail.com" target='_blank'>
                    <p id="linkedin" className="bg-white transform hover:-translate-y-1  border-2 w-9 h-9 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl flex justify-center items-center">
                      <IoMdMail className='icon-font' />
                    </p>

                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://twitter.com/ibsifat900">
                    <p id="twitter" className="bg-white  transform hover:-translate-y-1  border-2 w-9 h-9 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl flex justify-center items-center">
                      <FaTwitter className='icon-font' />
                    </p>
                  </Link>
                </li>
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.instagram.com/ibsifat900/">
                    <p id="instagram" className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-9 h-9  transform hover:-translate-y-1 rounded-full duration-500 flex justify-center items-center ">
                      <FaInstagram className='icon-font' />
                    </p>
                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.linkedin.com/in/ibrahim-sifat-221358200/">
                    <p id="linkedin" className="bg-white transform hover:-translate-y-1  border-2 w-9 h-9 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl flex justify-center items-center">
                      <FaLinkedinIn className='icon-font' />
                    </p>

                  </Link>
                </li>
                <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://wa.me/0558845503">
                    <p id="whatsapp" className="bg-white duration-500    w-9 h-9 border-2 rounded-full border-green-600 transform hover:-translate-y-1  text-2xl text-green-500 hover:bg-green-600 hover:text-white flex justify-center items-center">
                      <FaWhatsapp className='icon-font' />
                    </p>
                  </Link>
                </li>
              </ul>
        </div>
      </div>

          
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              {t("Company")}
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
            {companyFooter.map(item=>(
             <SingleText item={item}/>
              ))}
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              {t("Top_Category")}
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
            {topCategory.map(item=>(
             <SingleText item={item}/>
              ))}
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
            <h3 className="text-lg lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              {t("My_Account")}
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
            {myAccountFooter.map(item=>(
             <SingleText item={item}/>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-green-100 bg-gray-100">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex flex-col-reverse md:flex-row text-center items-center md:justify-between py-4">
          <p className="text-sm text-gray-500 eading-6">
            <Link href="https://ibrahimsifat.me/">
             <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500"
              >
              {t("All_rights")}
              </a>
            </Link>
           
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

const SingleText=({item:{title,url}})=>{
  // console.log(item);
return(
  <li className="flex items-baseline">
    <Link href={url}>
      <a className="text-gray-600 inline-block w-full hover:text-green-500">
        {title}
      </a>
    </Link>
  </li>
)
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
