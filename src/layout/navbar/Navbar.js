import CartDrawer from '@component/drawer/CartDrawer';
import LoginModal from '@component/modal/LoginModal';
import { SidebarContext } from '@context/SidebarContext';
import { UserContext } from '@context/UserContext';
//internal import
import NavbarPromo from '@layout/navbar/NavbarPromo';
import Cookies from 'js-cookie';
// translation
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { useCart } from 'react-use-cart';
import LanguageSwitcher from './LanguageSwitcher';
const Navbar = () => {
  const { t } = useTranslation('common')
  const [imageUrl, setImageUrl] = useState('');
  const [searchText, setSearchText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const { toggleCartDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();
  const navBerBgColor = {
    backgroundColor: '#131921'
  }
  const {
    state: { userInfo },
  } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText('');
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText('');
    }
  };

  useEffect(() => {
    if (Cookies.get('userInfo')) {
      const user = JSON.parse(Cookies.get('userInfo'));
      setImageUrl(user.name);
    }
  }, []);
  // console.log(userInfo);
  return (
    <>
      <CartDrawer />
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}

      <div className=" sticky top-0  bg-green-600 nav_z_index font-arabic">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-14  lg:h-16 flex items-center justify-between py-4 mx-auto">
            <Link href="/">
              <a className="sm:mr-3 mr-1 lg:ltr:mr-12  lg:rtl:ml-12 mt-3 sm:block hidden">
                <Image
                  width={150}
                  height={30}
                  src="/logo/serabuylogo.png"
                  alt="logo"
                />
              </a>
            </Link>
            
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[500px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-5 lg:mx-4 xl:mx-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form
                    onSubmit={handleSubmit}
                    className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm w-full rounded-md md:rounded carousel-with-custom-dots"
                  >
                    <label className="flex items-center py-0.5">
                      <input
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        className="form-input w-full md:pl-5 pl-2 appearance-none transition ease-in-out border text-input text-sm font-arabic  min-h-4 h-6 md:h-8 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                        placeholder={t('searchPlaceHolder')}
                      />
                    </label>
                    <button
                      aria-label="Search"
                      type="submit"
                      className="bg-gray-100 outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-6 md:w-14 p-1 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none">
                      <IoSearchOutline className='text-black s' />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <LanguageSwitcher/>
            <div className="hidden md:hidden md:items-center md:justify-center lg:flex absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ltr:ml-6 sm:rtl:mr-6 sm:pr-0">

              {/* Profile dropdown */}

              <button className=" text-white text-2xl font-bold  group"
                aria-label="Login"
              >
                {imageUrl || userInfo?.name ? (
                  <Link href="/user/dashboard">
                    <a className="relative  w-6 h-6 group-hover:text-gray-300 ">
                      <span className='text-xs ltr:mr-2 '>{t('Hala')}</span>
                      <span className='text-white text-xs font-sans group-hover:text-gray-300 rtl:mr-1'>{userInfo?.name.split(' ')}</span>
                      <div className="flex">
                        <p className='text-sm ml-auto -mt-1' >{t('My_Account')}</p>
                        <IoMdArrowDropdown className='-mt-1' />
                      </div>
                    </a>
                  </Link>
                ) : userInfo?.name ? (
                  <Link href="/user/dashboard">
                    <a className="leading-none font-bold font-arabic block">
                      {userInfo?.name[0]}
                    </a>
                  </Link>
                ) : (
                  <span className='flex justify-center items-center ' onClick={() => setModalOpen(!modalOpen)}>
                    <span className='text-sm mr-1'>{t('Sign_In')}</span>
                    <FiUser className="w-5 h-5 drop-shadow-xl" />
                  </span>
                )}
              </button>

              <span className='text-[#d4d4d4] lg:px-2 px-1 '>|</span>
              <button
                aria-label="Total"
                onClick={toggleCartDrawer}
                className="relative pr-5 flex  text-white text-2xl font-bold rtr:-mt-1"
              >
                {totalItems >= 1 && <span className="absolute  z-10 top-0  ltr:right-0 rtl:left-0 inline-flex items-center justify-center  h-4 w-4 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full ">
                  {totalItems}
                </span>}
                <span className='text-sm ltr:mr-1 rtl:ml-1'>{t('Cart')}</span>
                <FiShoppingCart className="w-4 h-4 drop-shadow-xl inline " />
              </button>

            </div>
          </div>
        </div>

        {/* second header */}
        <NavbarPromo />
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
