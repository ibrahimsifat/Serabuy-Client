import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import React from 'react';
const English_Flag='/english_flag.png'
const Bangla_Flag='/bangladesh_flag.png'
const Arabic_Flag='/saudi_flag.png'

const LanguageSwitcher = () => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { t } = useTranslation('common')
    return (
        <div class="group inline-block md:rtl:mr-2">
        <button
          class="outline-none focus:outline-none  px-2 font-bold     flex items-center md:w-28 w-14"
        >
          {/* <span class="pr-1 font-semibold flex-1">{t('Language')}</span> */}
          {
             locale === "en"?  
             <Link
             activeClassName={locale === "en"}
             href={asPath}
             locale="en"
           >
           <li class="rounded-sm py-1 text-white flex justify-start cursor-pointer items-center">
         <Image
           src={English_Flag}
           alt='flag'
           width="30px"
           height="30px"
           /> 
           <span className='md:mx-1 hidden md:block '>English</span>
           
           </li>
           </Link>:locale === "ar"?
            <Link
            activeClassName={locale === "ar"}
            href={asPath}
            locale="ar"
          >
          <li class="rounded-sm  py-1 text-white flex justify-start cursor-pointer items-center">
        <Image
          src={Arabic_Flag}
          alt='flag'
          width="30px"
          height="30px"
          /> 
          <span className='md:mx-1 hidden md:block '>عربي</span>
          
          </li>
          </Link>:
          <Link
            activeClassName={locale === "bn"}
            href={asPath}
            locale="bn"
          >
          <li class="rounded-sm  py-1 flex text-white justify-start cursor-pointer items-center">
        <Image
          src={Bangla_Flag}
          alt='flag'
          width="30px"
          height="30px"
          /> 
          <span className=' md:mx-1 hidden md:block '>বাংলা</span>
          
          </li>
          </Link>
          }

        </button>
        <ul
          class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top md:w-28 w-14 font-bold"
        >
            { locale === "en"||
            <Link
            activeClassName={locale === "en"}
            href={asPath}
            locale="en"
          >
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100 flex justify-start cursor-pointer items-center">
        <Image
          src={English_Flag}
          alt='flag'
          width="30px"
          height="30px"
          /> 
          <span className='mx-2 hidden md:block '>English</span>
          
          </li>
          </Link>
}{ locale === "ar"||
          <Link
            activeClassName={locale === "ar"}
            href={asPath}
            locale="ar"
          >
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100 flex justify-start cursor-pointer items-center">
        <Image
          src={Arabic_Flag}
          alt='flag'
          width="30px"
          height="30px"
          /> 
          <span className='mx-2 hidden md:block '>عربي</span>
          
          </li>
          </Link>
}

{ locale === "bn"||
          <Link
            activeClassName={locale === "bn"}
            href={asPath}
            locale="bn"
          >
          <li class="rounded-sm px-3 py-1 hover:bg-gray-100 flex justify-start cursor-pointer items-center">
        <Image
          src={Bangla_Flag}
          alt='flag'
          width="30px"
          height="30px"
          /> 
          <span className='mx-2 hidden md:block '>বাংলা</span>
          
          </li>
          </Link>
}
        </ul>
      </div>
    );
};

export default LanguageSwitcher;