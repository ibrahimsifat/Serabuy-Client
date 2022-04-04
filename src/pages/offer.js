//internal import
import Coupon from '@component/coupon/Coupon';
import PageHeader from '@component/header/PageHeader';
import Layout from '@layout/Layout';
import useTranslation from 'next-translate/useTranslation';
const Offer = () => {
  const { t } = useTranslation('offer')
  return (
    <Layout title="Offer" description="this is discount page">
      <PageHeader title={t("Mega_Offer")} />
      <div className="mx-auto max-w-screen-2xl px-4 py-10 lg:py-20 sm:px-10">
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
          <Coupon />
        </div>
      </div>
    </Layout>
  );
};

export default Offer;
