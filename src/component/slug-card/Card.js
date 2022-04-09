import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import {
  FiDollarSign,
  FiHome,
  FiMapPin,
  FiRepeat,
  FiShieldOff,
  FiSun,
  FiTruck
} from 'react-icons/fi';

const Card = () => {
  const { t } = useTranslation('common')
  return (
    <ul className="my-0">
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start ltr:mr-4 rtl:ml-4">
          <FiTruck />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          {t("Free_shipping")}{' '}
          <span className="font-semibold">SAR 400</span>
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start ltr:mr-4 rtl:ml-4">
          <FiHome />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          {t("Home_Delivery_within")} <span className="font-semibold">{t("4_Hour")}</span>
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start ltr:mr-4 rtl:ml-4">
          <FiDollarSign />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          {t("Cash_Delivery")}
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start ltr:mr-4 rtl:ml-4">
          <FiRepeat />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          <span className="font-semibold">2</span> {t("Days_returns")}
        </p>
      </li>

      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start ltr:mr-4 rtl:ml-4">
          <FiShieldOff />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          {t("Warranty_not")}
        </p>
      </li>
      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start ltr:mr-4 rtl:ml-4">
          <FiSun />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          {t("Guaranteed_100")}%
        </p>
      </li>

      <li className="flex items-center py-3">
        <span className="text-xl text-gray-400 items-start ltr:mr-4 rtl:ml-4">
          <FiMapPin />
        </span>
        <p className="font-sans leading-5 text-sm text-gray-500">
          {t("Delivery_from")}
        </p>
      </li>
    </ul>
  );
};

export default Card;
