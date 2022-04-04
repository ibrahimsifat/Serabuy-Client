import PageHeader from '@component/header/PageHeader';
//internal import
import Layout from '@layout/Layout';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import React from 'react';


const AboutUs = () => {
  const { t } = useTranslation('aboutUs')
  return (
    <Layout title="About Us" description="This is about us page">
      <PageHeader title={t("About_Us")} />

      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
            <div className="">
              <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                {t("Welcome_Serabuy")}
              </h3>
              <div className="mt-3 text-base opacity-90 leading-7">
                <p>
                {t("Holisticly_about")}
                </p>

                <p>
                  {t("Dynamically")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">
                    {t("10K")}
                  </span>
                  <h4 className="text-lg font-serif font-bold mb-1">
                    {t("Listed_Products")}
                  </h4>
                  <p className="mb-0 opacity-90 leading-7">
                    {t("Dynamically_morph")}{' '}
                  </p>
                </div>
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">
                    {t("8K")}
                  </span>
                  <h4 className="text-lg font-serif font-bold mb-1">
                    {t("Lovely_Customer")}
                  </h4>
                  <p className="mb-0 opacity-90 leading-7">
                    {t("Competently_productize")}{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <Image width={920} height={750} src="/about-us.jpg" alt="logo" />
            </div>
          </div>
          <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
            <p>
              {t("Holisticly_about")}{' '}
            </p>

            <p>
              {' '}
              {t("AppropriatelyV")}
            </p>
          </div>
          <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
            <Image
              width={1920}
              height={570}
              src="/about-banner.jpg"
              alt="logo"
              className="block rounded-lg"
            />
          </div>
        </div>
        <div className="bg-gray-50 lg:py-20 py-10">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div className="max-w-2xl">
                <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                  {t("Our_Founder")}
                </h3>
                <p className="mt-2 md:mt-3 font-normal block text-base">
                  {t("We’re_impartial")}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8">
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-1.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Ibrahim Sifat
                  </h5>
                  <span className="opacity-75 text-sm">
                    Co-founder & Executive
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-2.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Orla Dwyer
                  </h5>
                  <span className="opacity-75 text-sm">Chief Executive</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-3.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Danien James
                  </h5>
                  <span className="opacity-75 text-sm">
                    Co-founder, Chairman
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-4.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Dara Frazier
                  </h5>
                  <span className="opacity-75 text-sm">
                    Chief Strategy Officer
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-5.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Glenda Arvidson
                  </h5>
                  <span className="opacity-75 text-sm">HR Officer</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-6.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Melvin Davis
                  </h5>
                  <span className="opacity-75 text-sm">Lead Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
