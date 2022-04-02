import {
  FiAlertCircle, FiCreditCard, FiGift, FiHelpCircle, FiMail,
  FiMapPin, FiPhoneCall, FiTruck
} from 'react-icons/fi';
import {
  HiOutlineDocumentText,
  HiOutlinePhoneIncoming,
  HiOutlineShieldCheck,
  HiOutlineUserGroup
} from 'react-icons/hi';
import {
  IoBagCheckOutline,
  IoGridOutline,
  IoListOutline,
  IoSettingsOutline
} from 'react-icons/io5';

const pages = [
  // {
  //   title: 'User',
  //   href: '/user/dashboard',
  //   icon: FiUser,
  // },
  {
    title: 'Offer',
    href: '/offer',
    icon: FiGift,
  },
  {
    title: 'Checkout',
    href: '/checkout',
    icon: IoBagCheckOutline,
  },
  {
    title: 'FAQ',
    href: '/faq',
    icon: FiHelpCircle,
  },
  {
    title: 'About Us',
    href: '/about-us',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
    icon: HiOutlinePhoneIncoming,
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'Terms & Conditions',
    href: '/terms-and-conditions',
    icon: HiOutlineDocumentText,
  },
  {
    title: '404',
    href: '/404',
    icon: FiAlertCircle,
  },
];

const userSidebar = [
  {
    title: 'Dashboard',
    href: '/user/dashboard',
    icon: IoGridOutline,
  },
  {
    title: 'My Orders',
    href: '/user/my-orders',
    icon: IoListOutline,
  },
  {
    title: 'Update Profile',
    href: '/user/update-profile',
    icon: IoSettingsOutline,
  },
  {
    title: 'Change Password',
    href: '/user/change-password',
    icon: HiOutlineDocumentText,
  },
];

const ArabicSliderData = [
  {
    id: 1,
    url: '/search?category=fresh-vegetable',
    image: '/slider/Arabic-banner-1.jpg',
  },
  {
    id: 2,
    url: '/search?category=organic-food',
    image: '/slider/Arabic-banner-2.jpg',
  },
  {
    id: 3,
    url: '/search?category=fresh-vegetable',
    image: '/slider/Arabic-banner-3.jpg',
  }
];
const BanglaSliderData = [
  {
    id: 1,
    url: '/search?category=fresh-vegetable',
    image: '/slider/Bangla-banner-1.jpg',
  },
  {
    id: 2,
    url: '/search?category=organic-food',
    image: '/slider/Bangla-banner-2.jpg',
  },
  {
    id: 3,
    url: '/search?category=fresh-vegetable',
    image: '/slider/Bangla-banner-3.jpg',
  }
];


const EnglishSliderData = [
  {
    id: 1,
    url: '/search?category=fresh-vegetable',
    image: '/slider/English-Banner-1.jpg',
  },
  {
    id: 2,
    url: '/search?category=organic-food',
    image: '/slider/English-Banner-2.jpg',
  },
  {
    id: 3,
    url: '/search?category=fresh-vegetable',
    image: '/slider/English-Banner-3.jpg',
  }
];
const twoBanner1 = [
  {
    id: 1,
    url: '/search?category=energy-drinks',
    image: '/cta/drink-banner.jpg',
  },
  {
    id: 2,
    url: '/search?category=cat-care',
    image: '/cta/pet-banner.jpg',
  },
]
const twoBanner2 = [
  {
    id: 1,
    url: '/search?category=energy-drinks',
    image: '/cta/cleaning-banner.jpg',
  },
  {
    id: 2,
    url: '/search?category=cat-care',
    image: '/cta/babyCare-banner.jpg',
  },
]


const categoryData = [
  {
    id: 1,
    title: 'Taste of',
    subTitle: 'Fresh & Natural',
    image: '/cta/fruitveg.jpg',
    url: '/search?category=fresh-vegetable',
  },
  {
    id: 2,
    title: 'Taste of',
    subTitle: 'Fish & Meat',
    image: '/cta/Ghee.jpg',
    url: '/search?category=butter--ghee',
  },
  {
    id: 3,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/a2milk.jpg',
    url: '/search?category=dairy',
  },
  {
    id: 4,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/caldal.jpg',
    url: '/search?Category=biscuits--cakes',
  },
  {
    id: 5,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/dal.jpg',
    url: '/search?category=flour',
  },
  {
    id: 6,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/greentea.jpg',
    url: '/search?Category=biscuits--cakes',
  },
  {
    id: 7,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/oil.jpg',
    url: '/search?category=oil',
  },
  {
    id: 8,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/imunityboost.jpg',
    url: '/search?category=honey',
  },
  {
    id: 9,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/cosmetics.jpg',
    url: '/search?category=cosmetics',
  },
];
const ctaCardData = [
  {
    id: 1,
    title: 'Taste of',
    subTitle: 'Fresh & Natural',
    image: '/cta/cta-bg-1.jpg',
    url: '/search?category=fresh-vegetable',
  },
  {
    id: 2,
    title: 'Taste of',
    subTitle: 'Fish & Meat',
    image: '/cta/cta-bg-2.jpg',
    url: '/search?Category=fish--meat',
  },
  {
    id: 3,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/cta-bg-3.jpg',
    url: '/search?Category=biscuits--cakes',
  },
];

const featurePromo = [
  {
    id: 1,
    title: 'Free Shipping',
    info: 'From $20.00',
    icon: FiTruck,
    className: 'bg-red-100',
  },
  {
    id: 2,
    title: 'Support 24/7',
    info: 'At Anytime',
    icon: FiPhoneCall,
    className: 'bg-indigo-100',
  },
  {
    id: 3,
    title: 'Secure Payment',
    info: 'Totally Safe',
    icon: FiCreditCard,
    className: 'bg-yellow-100',
  },
  {
    id: 4,
    title: 'Latest Offer',
    info: 'Upto 20% Off',
    icon: FiGift,
    className: 'bg-green-100',
  },
];

const contactData = [
  {
    id: 1,
    title: 'Email Us',
    info: 'Interactively grow empowered for process-centric total linkage.',
    icon: FiMail,
    contact: 'ibsifat900@gmail.com',
    className: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Call Us',
    info: 'Distinctively disseminate focused solutions clicks-and-mortar ministate.',
    icon: FiPhoneCall,
    contact: '0558845503',
    className: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'Location',
    info: 'Al-Balad, 561-4535 Nulla LA, Saudi Arabia 96522',
    icon: FiMapPin,
    contact: '',
    className: 'bg-indigo-100',
  },
];

export {
  ArabicSliderData,
  BanglaSliderData,
  EnglishSliderData,
  pages,
  userSidebar,
  ctaCardData,
  featurePromo,
  contactData,
  categoryData,
  twoBanner1,
  twoBanner2
};

