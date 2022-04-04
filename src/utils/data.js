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


/**?
 * Home First Banner Data
 */
const ArabicSliderData = [
  {
    id: 1,
    url: '/search?category=fresh-vegetable',
    image: '/slider/Arabic-banner-1-min.jpg',
  },
  {
    id: 2,
    url: '/search?category=organic-food',
    image: '/slider/Arabic-banner-2-min.jpg',
  },
  {
    id: 3,
    url: '/search?category=fresh-vegetable',
    image: '/slider/Arabic-banner-3-min.jpg',
  }
];
const BanglaSliderData = [
  {
    id: 1,
    url: '/search?category=fresh-vegetable',
    image: '/slider/Bangla-banner-1-min.jpg',
  },
  {
    id: 2,
    url: '/search?category=organic-food',
    image: '/slider/Bangla-banner-2-min.jpg',
  },
  {
    id: 3,
    url: '/search?category=fresh-vegetable',
    image: '/slider/Bangla-banner-3-min.jpg',
  }
];


const EnglishSliderData = [
  {
    id: 1,
    url: '/search?category=fresh-vegetable',
    image: '/slider/English-Banner-1-min.jpg',
  },
  {
    id: 2,
    url: '/search?category=organic-food',
    image: '/slider/English-Banner-2-min.jpg',
  },
  {
    id: 3,
    url: '/search?category=fresh-vegetable',
    image: '/slider/English-Banner-3-min.jpg',
  }
];
const ENtwoBannerFirst = [ 
  {
    id: 2,
    title: 'Taste of nature',
    subTitle: 'Organic Food',
    url: '/search?category=cat-care',
    image: '/banner-2.jpg',
    btnTitle:'Shop Now',
    ExtraSubtile:'Weekend discount offer'
  },
  {
    id: 1,
    title: 'Fresh Vegetable',
    subTitle: 'Every Day',
    url: '/search?category=energy-drinks',
    image: '/banner-1.jpg',
    btnTitle:'Shop Now',
    ExtraSubtile:'Weekend discount offer'
  }
 
]
const ARtwoBannerFirst = [ 
  {
    id: 2,
    title: 'طعم الطبيعة',
    subTitle: 'طعام عضوي',
    url: '/search?category=cat-care',
    image: '/banner-2.jpg',
    btnTitle:'تسوق',
    ExtraSubtile:'عرض خصم عطلة نهاية الأسبوع'
  },
  {
    id: 1,
    title: 'خضروات طازجة',
    subTitle: 'كل يوم',
    url: '/search?category=energy-drinks',
    image: '/banner-1.jpg',
    btnTitle:'تسوق',
    ExtraSubtile:'عرض خصم عطلة نهاية الأسبوع'
  }
 
]
const BNtwoBannerFirst = [ 
  {
    id: 2,
    title: 'প্রকৃতির স্বাদ',
    subTitle: 'অর্গানিক ফুড',
    url: '/search?category=cat-care',
    image: '/banner-2.jpg',
    btnTitle:'কিনুন',
    ExtraSubtile:'সপ্তাহান্তে ডিসকাউন্ট অফার'
  },
  {
    id: 1,
    title: 'তাজা সবজি',
    subTitle: 'প্রতিদিন',
    url: '/search?category=energy-drinks',
    image: '/banner-1.jpg',
    btnTitle:'কিনুন',
    ExtraSubtile:'সপ্তাহান্তে ডিসকাউন্ট অফার'
  }
 
]

const twoBanner1 = [
  {
    id: 1,
    url: '/search?category=energy-drinks',
    image: '/cta/drink-banner-min.jpg',
  },
  {
    id: 2,
    url: '/search?category=cat-care',
    image: '/cta/pet-banner-min.jpg',
  },
]
const twoBanner2 = [
  {
    id: 1,
    url: '/search?category=energy-drinks',
    image: '/cta/cleaning-banner-min.jpg',
  },
  {
    id: 2,
    url: '/search?category=cat-care',
    image: '/cta/babyCare-banner-min.jpg',
  },
]
const ENctaCardData = [
  {
    id: 1,
    title: 'Taste of',
    subTitle: 'Fresh & Natural',
    image: '/cta/cta-bg-1-min.jpg',
    url: '/search?category=fresh-vegetable',
    btnTitle:'Shop Now',
    ExtraSubtile:'Weekend discount offer'
  },
  {
    id: 2,
    title: 'Taste of',
    subTitle: 'Fish & Meat',
    image: '/cta/cta-bg-2-min.jpg',
    url: '/search?Category=fish--meat',
    btnTitle:'Shop Now',
    ExtraSubtile:'Weekend discount offer'
  }
];
const ARctaCardData = [
  {
    id: 1,
    title: 'المذاق',
    subTitle: 'طازجة وطبيعية',
    image: '/cta/cta-bg-1-min.jpg',
    url: '/search?category=fresh-vegetable',
    btnTitle:'تسوق',
    ExtraSubtile:'عرض خصم عطلة نهاية الأسبوع'
  },
  {
    id: 2,
    title: 'المذاق',
    subTitle: 'لحم سمك',
    image: '/cta/cta-bg-2-min.jpg',
    url: '/search?Category=fish--meat',
    btnTitle:'تسوق',
    ExtraSubtile:'عرض خصم عطلة نهاية الأسبوع'
  }
];
const BNctaCardData = [
  {
    id: 1,
    title: 'স্বাদের',
    subTitle: 'তাজা এবং প্রাকৃতিক',
    image: '/cta/cta-bg-1-min.jpg',
    url: '/search?category=fresh-vegetable',
    btnTitle:'কিনুন',
    ExtraSubtile:'সপ্তাহান্তে ডিসকাউন্ট অফার'
  },
  {
    id: 2,
    title: 'স্বাদের',
    subTitle: 'মাছ মাংস',
    image: '/cta/cta-bg-2-min.jpg',
    url: '/search?Category=fish--meat',
    btnTitle:'কিনুন',
    ExtraSubtile:'সপ্তাহান্তে ডিসকাউন্ট অফার'
  }
];





/**?
 * Home First category Data
 */
const EnglishCategoryData = [
  {
    id: 1,
    image: '/cta/fruitveg-min.jpg',
    url: '/search?category=fresh-vegetable',
  },
  {
    id: 2,
    image: '/cta/Ghee-min.jpg',
    url: '/search?category=butter--ghee',
  },
  {
    id: 3,
    image: '/cta/a2milk-min.jpg',
    url: '/search?category=dairy',
  },
  {
    id: 4,
    image: '/cta/caldal-min.jpg',
    url: '/search?Category=biscuits--cakes',
  },
  {
    id: 5,
    image: '/cta/dal-min.jpg',
    url: '/search?category=flour',
  },
  {
    id: 6,
    image: '/cta/greentea-min.jpg',
    url: '/search?Category=biscuits--cakes',
  },
  {
    id: 7,
    image: '/cta/oil-min.jpg',
    url: '/search?category=oil',
  },
  {
    id: 8,
    image: '/cta/imunityboost-min.jpg',
    url: '/search?category=honey',
  },
  {
    id: 9,
    image: '/cta/cosmetics-min.jpg',
    url: '/search?category=cosmetics',
  },
];

const ArabicCategoryData = [
  {
    id: 1,
    image: '/cta/Arabic-fruitveg-min.jpg',
    url: '/search?category=fresh-vegetable',
  },
  {
    id: 2,
    image: '/cta/Arabic-Ghee-min.jpg',
    url: '/search?category=butter--ghee',
  },
  {
    id: 3,
    image: '/cta/Arabic-a2milk-min.jpg',
    url: '/search?category=dairy',
  },
  {
    id: 4,
    image: '/cta/Arabic-caldal-min.jpg',
    url: '/search?Category=biscuits--cakes',
  },
  {
    id: 5,
    image: '/cta/Arabic-dal-min.jpg',
    url: '/search?category=flour',
  },
  {
    id: 6,
    image: '/cta/Arabic-greentea-min.jpg',
    url: '/search?Category=biscuits--cakes',
  },
  {
    id: 7,
    image: '/cta/Arabic-oil-min.jpg',
    url: '/search?category=oil',
  },
  {
    id: 8,
    image: '/cta/Arabic-imunityboost-min.jpg',
    url: '/search?category=honey',
  },
  {
    id: 9,
    image: '/cta/Arabic-cosmetics-min.jpg',
    url: '/search?category=cosmetics',
  },
];
const BanglaCategoryData = [
  {
    id: 1,
    image: '/cta/Bangla-fruitveg-min.jpg',
    url: '/search?category=fresh-vegetable',
  },
  {
    id: 2,
    image: '/cta/Bangla-Ghee-min.jpg',
    url: '/search?category=butter--ghee',
  },
  {
    id: 3,
    image: '/cta/Bangla-a2milk-min.jpg',
    url: '/search?category=dairy',
  },
  {
    id: 4,
    image: '/cta/Bangla-caldal-min.jpg',
    url: '/search?Category=biscuits--cakes',
  },
  {
    id: 5,
    image: '/cta/Bangla-dal-min.jpg',
    url: '/search?category=flour',
  },
  {
    id: 6,
    image: '/cta/Bangla-greentea-min.jpg',
    url: '/search?Category=biscuits--cakes',
  },
  {
    id: 7,
    image: '/cta/Bangla-oil-min.jpg',
    url: '/search?category=oil',
  },
  {
    id: 8,
    image: '/cta/Bangla-imunityboost-min.jpg',
    url: '/search?category=honey',
  },
  {
    id: 9,
    image: '/cta/Bangla-cosmetics-min.jpg',
    url: '/search?category=cosmetics',
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

const ENcontactData = [
  {
    id: 1,
    title: 'Email Us',
    info: 'Feel free to contact us.',
    icon: FiMail,
    contact: 'ibsifat900@gmail.com',
    className: 'bg-green-100',
  },
  {
    id: 2,
    title: 'Call Us',
    info: 'Feel free to contact us.',
    icon: FiPhoneCall,
    contact: '0558845503',
    className: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'Location',
    info: 'Al-Balad, Jeddah, Saudi Arabia 22333',
    icon: FiMapPin,
    contact: '',
    className: 'bg-indigo-100',
  },
];
const ARcontactData = [
  {
    id: 1,
    title: 'راسلنا عبر البريد الإلكتروني',
    info: 'لا تتردد في الاتصال بنا.',
    icon: FiMail,
    contact: 'ibsifat900@gmail.com',
    className: 'bg-green-100',
  },
  {
    id: 2,
    title: 'إتصل بنا',
    info: 'لا تتردد في الاتصال بنا.',
    icon: FiPhoneCall,
    contact: '0558845503',
    className: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'موقع',
    info: 'البلاد, جدة سعودي عربية ٢٢٣٣٣',
    icon: FiMapPin,
    contact: '',
    className: 'bg-indigo-100',
  },
];
const BNcontactData = [
  {
    id: 1,
    title: 'আমাদের ইমেইল করুন',
    info: 'আমাদের সাথে যোগাযোগ করুন মুক্ত মনে',
    icon: FiMail,
    contact: 'ibsifat900@gmail.com',
    className: 'bg-green-100',
  },
  {
    id: 2,
    title: 'আমাদের কল করুন',
    info: 'আমাদের সাথে যোগাযোগ করুন মুক্ত মনে',
    icon: FiPhoneCall,
    contact: '0558845503',
    className: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'অবস্থান',
    info: 'আলবিলাদ, জেদ্দা, সৌদি আরব 22333',
    icon: FiMapPin,
    contact: '',
    className: 'bg-indigo-100',
  },
];

/**
 * user Dashboard data
 */
 const ENuserSidebar = [
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
 const ARuserSidebar = [
  {
    title: 'لوحة القيادة',
    href: '/user/dashboard',
    icon: IoGridOutline,
  },
  {
    title: 'أوامري',
    href: '/user/my-orders',
    icon: IoListOutline,
  },
  {
    title: 'تحديث الملف الشخصي',
    href: '/user/update-profile',
    icon: IoSettingsOutline,
  },
  {
    title: 'تغيير كلمة المرور',
    href: '/user/change-password',
    icon: HiOutlineDocumentText,
  },
];
 const BNuserSidebar = [
  {
    title: 'ড্যাশবোর্ড',
    href: '/user/dashboard',
    icon: IoGridOutline,
  },
  {
    title: 'আমার নির্দেশনা',
    href: '/user/my-orders',
    icon: IoListOutline,
  },
  {
    title: 'আপডেট প্রোফাইল',
    href: '/user/update-profile',
    icon: IoSettingsOutline,
  },
  {
    title: 'পাসওয়ার্ড বদলান',
    href: '/user/change-password',
    icon: HiOutlineDocumentText,
  },
];


/**
 * Footer Components
 */

 const ENCompanyFooter=[
  {
    id: 1,
    title: 'About',
    url: '/about-us',
  },
  {
    id: 1,
    title: 'Contact US',
    url: '/contact-us',
  },
  {
    id: 1,
    title: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    id: 1,
    title: 'Terms & Conditions',
    url: '/Terms-and-Conditions',
  },
  {
    id: 1,
    title: 'Latest Discount',
    url: '/offer',
  }
]
 const ARCompanyFooter=[
  {
    id: 1,
    title: 'معلومات عنا',
    url: '/about-us',
  },
  {
    id: 1,
    title: 'اتصل بنا',
    url: '/contact-us',
  },
  {
    id: 1,
    title: 'سياسة خاصة',
    url: '/privacy-policy',
  },
  {
    id: 1,
    title: 'البنود و الظروف',
    url: '/Terms-and-Conditions',
  },
  {
    id: 1,
    title: 'أحدث خصم',
    url: '/offer',
  }
]
 const BNCompanyFooter=[
  {
    id: 1,
    title: 'আমাদের সম্পর্কে',
    url: '/about-us',
  },
  {
    id: 1,
    title: 'যোগাযোগ করুন',
    url: '/contact-us',
  },
  {
    id: 1,
    title: 'গোপনীয়তা নীতি',
    url: '/privacy-policy',
  },
  {
    id: 1,
    title: 'শর্তাবলী',
    url: '/Terms-and-Conditions',
  },
  {
    id: 1,
    title: 'সর্বশেষ ছাড়',
    url: '/offer',
  }
]


const ENTopCategory=[
  {
    id: 1,
    title: 'Fish & Meat',
    url: '/search?Category=fish--meat',
  },
  {
    id: 1,
    title: 'Soft Drinks',
    url: '/search?Category=drinks',
  },
  {
    id: 1,
    title: 'Baby Care',
    url: '/search?Category=baby-care',
  },
  {
    id: 1,
    title: 'Beauty & Health',
    url: '/search?Category=beauty--health',
  },
  {
    id: 1,
    title: 'Fruits & Vegetable',
    url: '/search?Category=fruits--vegetable',
  }
]
const ARTopCategory=[
  {
    id: 1,
    title: 'لحم سمك',
    url: '/search?Category=fish--meat',
  },
  {
    id: 1,
    title: 'لحم سمك',
    url: '/search?Category=drinks',
  },
  {
    id: 1,
    title: 'عناية الطفل',
    url: '/search?Category=baby-care',
  },
  {
    id: 1,
    title: 'الصحة والجمال',
    url: '/search?Category=beauty--health',
  },
  {
    id: 1,
    title: 'فواكه وخضروات',
    url: '/search?Category=fruits--vegetable',
  }
]
const BNTopCategory=[
  {
    id: 1,
    title: 'মাছ মাংস',
    url: '/search?Category=fish--meat',
  },
  {
    id: 1,
    title: 'কোমল পানীয়',
    url: '/search?Category=drinks',
  },
  {
    id: 1,
    title: 'বেবি কেয়ার',
    url: '/search?Category=baby-care',
  },
  {
    id: 1,
    title: 'সৌন্দর্য ও স্বাস্থ্য',
    url: '/search?Category=beauty--health',
  },
  {
    id: 1,
    title: 'ফল ও সবজি',
    url: '/search?Category=fruits--vegetable',
  }
]

const ENMyAccountFooter=[
  {
    id: 1,
    title: 'Dashboard',
    url: '/search?Category=fish--meat',
  },
  {
    id: 1,
    title: 'My Orders',
    url: '/search?Category=drinks',
  },
  {
    id: 1,
    title: 'Recent Orders',
    url: '/search?Category=baby-care',
  },
  {
    id: 1,
    title: 'Updated Profile',
    url: '/search?Category=beauty--health',
  },
  {
    id: 1,
    title: 'Change Password',
    url: '/search?Category=fruits--vegetable',
  }
]
const ARMyAccountFooter=[
  {
    id: 1,
    title: 'لوحة المراقبة',
    url: '/search?Category=fish--meat',
  },
  {
    id: 1,
    title: 'أوامري',
    url: '/search?Category=drinks',
  },
  {
    id: 1,
    title: 'الطلبيات الأخيرة',
    url: '/search?Category=baby-care',
  },
  {
    id: 1,
    title: 'ملف تعريف محدث',
    url: '/search?Category=beauty--health',
  },
  {
    id: 1,
    title: 'تغيير كلمة السر',
    url: '/search?Category=fruits--vegetable',
  }
]
const BNMyAccountFooter=[
  {
    id: 1,
    title: 'ড্যাশবোর্ড',
    url: '/search?Category=fish--meat',
  },
  {
    id: 1,
    title: 'আমার নির্দেশনা',
    url: '/search?Category=drinks',
  },
  {
    id: 1,
    title: 'সাম্প্রতিক আদেশ',
    url: '/search?Category=baby-care',
  },
  {
    id: 1,
    title: 'আপডেট প্রোফাইল',
    url: '/search?Category=beauty--health',
  },
  {
    id: 1,
    title: 'পাসওয়ার্ড বদলান',
    url: '/search?Category=fruits--vegetable',
  }
]





export {
  ArabicSliderData,
  BanglaSliderData,
  EnglishSliderData,
  EnglishCategoryData,
  ArabicCategoryData,
  BanglaCategoryData,
  ENtwoBannerFirst,
  ARtwoBannerFirst,
  BNtwoBannerFirst,
  ARctaCardData,
  ENctaCardData,
  BNctaCardData,
  pages,
  ARuserSidebar,
  ENuserSidebar,
  BNuserSidebar,
  featurePromo,
  ENcontactData,
  ARcontactData,
  BNcontactData,
  twoBanner1,
  twoBanner2,
  ENTopCategory,
  ARTopCategory,
  BNTopCategory,
  ENMyAccountFooter,
  ARMyAccountFooter,
  BNMyAccountFooter,
  ENCompanyFooter,
  ARCompanyFooter,
  BNCompanyFooter
};

