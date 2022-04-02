<<<<<<< HEAD
import Link from 'next/link';
import { useRouter } from "next/router";
import React from 'react';

const LanguageSwitcher = () => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    return (
       
           <div className="language  py-2 mx-auto ">
        <Link
            activeClassName={locale === "es-ES"}
            href={asPath}
            locale="en"
          >
            <a className='mx-1 hover:bg-green-800 text-white bg-green-500 rounded px-2 py-1 text-sm '>English</a>
          </Link>

          <Link
            activeClassName={locale === "en-US"}
            href={asPath}
            locale="ar"
          >
            <a className='mx-1 hover:bg-green-800 text-white bg-green-500 rounded px-2 py-1 text-sm'>Arabic</a>
          </Link>
          <Link
            activeClassName={locale === "fr-FR"}
            href={asPath}
            locale="bn"
          >
           <a className='mx-1 hover:bg-green-800 text-white bg-green-500 rounded px-2 py-1 text-sm'>Bangla</a>
          </Link>
  </div> 
     
=======
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
        <div class="group inline-block">
        <button
          class="outline-none focus:outline-none  px-2 font-bold  bg-white   flex items-center w-32"
        >
          {/* <span class="pr-1 font-semibold flex-1">{t('Language')}</span> */}
          {
             locale === "en"?  
             <Link
             activeClassName={locale === "en"}
             href={asPath}
             locale="en"
           >
           <li class="rounded-sm py-1  flex justify-start cursor-pointer items-center">
         <Image
           src={English_Flag}
           alt='flag'
           width="30px"
           height="25px"
           /> 
           <span className='mx-2 '>English</span>
           
           </li>
           </Link>:locale === "ar"?
            <Link
            activeClassName={locale === "ar"}
            href={asPath}
            locale="ar"
          >
          <li class="rounded-sm  py-1  flex justify-start cursor-pointer items-center">
        <Image
          src={Arabic_Flag}
          alt='flag'
          width="30px"
          height="25px"
          /> 
          <span className='mx-2 '>عربي</span>
          
          </li>
          </Link>:
          <Link
            activeClassName={locale === "bn"}
            href={asPath}
            locale="bn"
          >
          <li class="rounded-sm  py-1 flex justify-start cursor-pointer items-center">
        <Image
          src={Bangla_Flag}
          alt='flag'
          width="30px"
          height="25px"
          /> 
          <span className='mx-2 '>বাংলা</span>
          
          </li>
          </Link>
          }

        </button>
        <ul
          class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top w-32 font-bold"
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
          height="25px"
          /> 
          <span className='mx-2 '>English</span>
          
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
          height="25px"
          /> 
          <span className='mx-2 '>عربي</span>
          
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
          height="25px"
          /> 
          <span className='mx-2 '>বাংলা</span>
          
          </li>
          </Link>
}
        </ul>
      </div>
>>>>>>> otherme
    );
};

export default LanguageSwitcher;