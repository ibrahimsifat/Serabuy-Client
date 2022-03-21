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
     
    );
};

export default LanguageSwitcher;