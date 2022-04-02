import { useRouter } from 'next/router';
const Locals = () => {

    const { locale } = useRouter();
    // console.log(locale);
const IsArabic=()=>locale==='ar';
const IsEnglish=()=> locale==='en';
const IsBangla=()=>locale==='bn';

    return {IsArabic,IsBangla,IsEnglish}
};

export default Locals;