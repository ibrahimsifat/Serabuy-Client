import Error from '@component/form/Error';
import InputArea from '@component/form/InputArea';
import Label from '@component/form/Label';
import PageHeader from '@component/header/PageHeader';
//internal import
import Layout from '@layout/Layout';
import {
  ARcontactData,
  BNcontactData, ENcontactData
} from '@utils/data';
import Locals from '@utils/Locals';
import { notifySuccess } from '@utils/toast';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
const ContactUs = () => {
  const {IsArabic, IsBangla,IsEnglish}=Locals()
  // console.log(IsArabic());
  const contactData=IsArabic()&&ARcontactData || IsEnglish()&&ENcontactData||IsBangla() &&BNcontactData
  const { t } = useTranslation('contactUs')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ name, email, subject, message }) => {
    // you can use this data
    // console.log(name, email, subject, message);
    notifySuccess(
      'your message sent successfully. We will contact you shortly.'
    );
  };

  return (
    <Layout title="Contact Us" description="This is contact us page">
      <PageHeader title={t("Contact_Us")} />

      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          {/* contact promo */}
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif">
            {contactData.map((data) => (
              <div key={data.id} className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-green-500 mb-4">
                  <data.icon />
                </span>
                <h5 className="text-xl mb-2 font-bold">{data.title}</h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <a href={`mailto:${data.contact}`} className="text-green-500">
                    {data.contact}
                  </a>{' '}
                  {data.info}
                </p>
              </div>
            ))}
          </div>

          {/* contact form */}
          <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
            <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
              <Image
                width={874}
                height={874}
                src="/contact-us.png"
                alt="logo"
                className="block w-auto"
              />
            </div>
            <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="w-full mx-auto flex flex-col justify-center"
              >
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-3">
                    {t("For_support")}
                  </h3>
                  <p className="text-base opacity-90 leading-7">
                    {t("Collaboratively")}
                  </p>
                </div>

                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <div className="w-full md:w-1/2 ">
                      <InputArea
                        register={register}
                        label={t("Your_Name")}
                        name="name"
                        type="text"
                        placeholder={t("Inter_Name")}
                      />
                      <Error errorName={errors.name} />
                    </div>
                    <div className="w-full md:w-1/2 md:ltr:ml-2.5 md:rtl:mr-2.5 lg:ml-5 mt-2 md:mt-0">
                      <InputArea
                        register={register}
                        label={t("Your_Email")}
                        name="email"
                        type="email"
                        placeholder={t("Inter_Email")}
                      />
                      <Error errorName={errors.email} />
                    </div>
                  </div>
                  <div className="relative">
                    <InputArea
                      register={register}
                      label={t("Subject")}
                      name="subject"
                      type="text"
                      placeholder={t("Inter_Subject")}
                    />
                    <Error errorName={errors.subject} />
                  </div>
                  <div className="relative mb-4">
                    <Label label={t("Message")} />
                    <textarea
                      {...register('message', {
                        required: `Message is required!`,
                      })}
                      name="message"
                      className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-green-500 placeholder-body"
                      autoComplete="off"
                      spellCheck="false"
                      rows="4"
                      placeholder={t("Write_message")}
                    ></textarea>
                    <Error errorName={errors.message} />
                  </div>
                  <div className="relative">
                    <button
                      data-variant="flat"
                      className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg_green text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-green-600 h-12 mt-1 text-sm lg:text-base w-full sm:w-auto"
                    >
                      {t("Send_Message")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
