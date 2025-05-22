import React, { useRef, useState } from 'react';
import phone1 from '@/shared/assets/phone1.png';
import phone2 from '@/shared/assets/phone2.png';
import phone3 from '@/shared/assets/phone3.png';
import phone4 from '@/shared/assets/phone4.png';
import rustore from '@/shared/assets/rustore-apk.png';
import CircleWithArrow from "@/shared/assets/circleWithArrow";
import IconGroup from "@/shared/assets/IconGroup";
import emailjs from 'emailjs-com';
import { Link, Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const getOffset = (id: string) => {
    if (id === 'about') {
      return 120;
    } else if (id === 'legal') {
      return -80;
    }
    return 70;
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    if (form.current) {
      const formData = new FormData(form.current);
      const formValues = Object.fromEntries(formData);

      // Простая валидация
      if (!formValues.name || !formValues.email || !formValues.phone || !formValues.message) {
        setFormStatus({
          message: 'Пожалуйста, заполните все поля',
          isError: true
        });
        setIsSubmitting(false);
        return;
      }

      try {
        const emailData = {
          // to: 'meta-group@inbox.ru',
          to: 'instalikee123@gmail.com',
          from: formValues.email as string,
          subject: 'Новое сообщение с формы контактов',
          text: `
            Имя: ${formValues.name}
            Email: ${formValues.email}
            Телефон: ${formValues.phone}
            Сообщение: ${formValues.message}
          `,
          ...formValues
        };

        await emailjs.send(
          'service_2ycxoel',
          'template_igsrlyp',
          emailData,
          'oSrts0UzsRR7dkpVn'
        );

        setFormStatus({
          message: 'Сообщение успешно отправлено!',
          isError: false
        });
        form.current.reset();
      } catch (error) {
        console.error('Ошибка при отправке:', error);
        setFormStatus({
          message: 'Ошибка при отправке сообщения. Пожалуйста, попробуйте снова.',
          isError: true
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
<div className='overflow-x-hidden'>
  <section id="home" className='md:flex-row  lg:flex-row xl:flex-row 2xl:flex-row flex flex-col-reverse items-center gap-14 sm:gap-0 pr-0 sm:flex-col-reverse mt-[10px] relative xl:mt-0 m-auto md:pr-10 max-w-[1920px]'>
    <div className='relative mr-10'>
      <img src={phone1} className='sm:w-[400px] sm:h-[400px] h-[350px] w-[350px] md:w-[50vw] md:h-[50vw] max-w-[960px] max-h-[960px] relative top-[4vw] left-[5vw]'></img>
      <div className='  sm:w-[350px] sm:h-[350px] w-[300px] h-[300px] md:w-[40vw] md:h-[40vw] max-w-[768px] max-h-[768px] z-[-1] absolute top-[7vw] left-[8vw] rounded-full bg-gradient-to-r from-yellow-500 to-[#FC01C6]'></div>
      <div className='  sm:w-[350px] sm:h-[350px] md:w-[40vw] md:h-[40vw]  max-w-[768px] max-h-[768px] z-[-1] absolute top-[7vw] left-[8vw] rounded-full border-4 border-transparent border-gradient-to-r from-yellow-500 to-[#FC01C6]'></div>
    </div>
    <div className='flex flex-col self-center  md:justify-end m-0 sm:m-0 md:m-[-30px] md:items-end xl:justify-end xl:items-end sm:justify-center sm:items-center lg:justify-end lg:items-end  justify-center items-center'>
      <h2 className='text-[50px] font-extrabold leading-[60px] tracking-[-0.3px] xl:text-right text-left sm:text-left   underline decoration-skip-ink-none font-golos-text text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-[#FC01C6] sm:text-[50px] md:text-[60px] md:leading-[70px] lg:text-[65px] lg:leading-[80px] xl:text-[70px] xl:leading-[85px] whitespace-nowrap'>
        {t('INSTA LIKEE')}
      </h2>

      <p className='lg:w-[42vw] text-left sm:w-[320px] w-[300px] xl:w-[42vw] 2xl:w-[42vw] md:w-[42vw] text-justify- sm:text-left md:text-right max-w-[806px] mt-8 mb-4 font-golos-text text-[16px] font-normal leading-[22px] tracking-[-0.3px] mb:text-right lg:text-right xl:text-right  decoration-skip-ink-none sm:text-[16px] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px]'>
        {t('InstaLikee — leading platform')}
      </p>
      <Link to="about" offset={getOffset('about')} smooth={true} duration={500} className=''>

            <button
              className='w-[80vw] h-[40px] max-w-[300px] max-h-[35px] mt-[20px] sm:mt-[20px] text-white rounded-tl-[8.05px] bg-gradient-to-r from-yellow-500 to-[#FC01C6] font-golos-text text-[14px] font-normal leading-[20.4px] tracking-[-0.3px] text-center decoration-skip-ink-none sm:w-[80vw] sm:h-[40px] md:w-[140px] md:h-[32px] md:text-[15px] lg:w-[150px] lg:h-[33px] lg:text-[16px] xl:w-[160px] xl:h-[34px] xl:text-[16.5px]'
            >
              {t('Learn More')}
            </button>
      </Link>
      <Link to="about" offset={getOffset('about')} smooth={true} duration={500} className='absolute lg:bottom-[0px] xl:bottom-[50px] left-[49.5%] hidden md:block md:absolute md:bottom-[-100px] cursor-pointer mt-10'>
        <CircleWithArrow />
      </Link>
    </div>
  </section>
  <Element name="about">
  <section className='flex lg:flex-row md:flex-col flex-col items-center pt-48 lg:mt-0 sm:mt-24 m-auto  pl-10 lg:pl-[8vw] pr-10 max-w-[1920px] relative'>
    <div className='flex flex-col self-center justify-center items-center lg:mr-[-150px] xl:mr-[-190px]'>
        <h2 className='text-[50px] mb-12 font-extrabold leading-[60px] tracking-[-0.3px] text-right underline decoration-skip-ink-none font-golos-text text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-[#FC01C6] sm:text-[50px] md:text-[60px] md:leading-[70px] lg:text-[65px] lg:leading-[80px] xl:text-[70px] xl:leading-[85px]'>
          {t('About Us')}
        </h2>
        <p className='lg:w-[40vw] md:w-[80vw]  max-w-[1060px] mt-8 mb-4 font-golos-text text-[24px] font-normal leading-[22px] tracking-[-0.3px] text-left decoration-skip-ink-none sm:text-[24px] sm:w-[80vw] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px] xl:w-[53vw]'>
          {t('Mission Statement')}
        </p>
        <p className='lg:w-[40vw] md:w-[80vw] max-w-[1060px] mt-8 mb-4 font-golos-text text-[24px] font-normal leading-[22px] tracking-[-0.3px] text-left decoration-skip-ink-none sm:text-[24px] sm:w-[80vw] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px] xl:w-[53vw]'>
          {t('Discover New Content')}
        </p>
        <p className='lg:w-[40vw] md:w-[80vw] max-w-[1060px] mt-8 mb-4 font-golos-text text-[24px] font-normal leading-[22px] tracking-[-0.3px] text-left decoration-skip-ink-none sm:text-[24px] sm:w-[80vw] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px] xl:w-[53vw]'>
          {t('Global Creativity')}
        </p>
      </div>
      <img src={phone2} className='xl:mt-[-50px] lg:mt-[-130px] m-0 w-[600px] h-[800px] max-w-[961px] max-h-[1177.5px] object-contain ml-14 md:ml-14 lg:ml-0 xl:relative lg:relative md:mx-auto sm:mx-auto relative md:items-self-center   md:justify-center md:w-[800px] md:h-[1228px] xl:w-[768px] xl:h-[1152px] lg:w-[800px] lg:h-[1060px] lg:top-[140px] lg:right-[-78px]'></img>
      </section>
  </Element>
  <Element name="contact">
    <section id="contact" className='mb-64 flex flex-col lg:flex-col md:flex-col xl:flex-row-reverse sm:flex-col pt-48 lg:mt-0 sm:mt-24 m-auto pr-10 pl-[8vw] max-w-[1920px] relative'>
      <form
        className='flex mr-14 mt-32 flex-col  sm:w-full w-full sm:order-2 order-2'
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type='text'
          name="name"
          placeholder={t('Name')}
          className='mb-4 p-2 border border-gray-300 border-solid rounded'
          disabled={isSubmitting}
          required
        />
        <input
          type='email'
          name="email"
          placeholder={t('Email')}
          className='mb-4 p-2 border border-gray-300 border-solid rounded'
          disabled={isSubmitting}
          required
        />
        <input
          type='tel'
          name="phone"
          placeholder={t('Phone')}
          className='mb-4 p-2 border border-gray-300 border-solid rounded'
          disabled={isSubmitting}
          required
        />
        <textarea
          name="message"
          placeholder={t('Message')}
          className='mb-4 p-2 border border-gray-300 border-solid rounded h-32'
          disabled={isSubmitting}
          required
        ></textarea>

        {formStatus && (
          <div className={`mb-4 p-2 rounded ${formStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {formStatus.message}
          </div>
        )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-[80vw] h-[40px] max-h-[35px] mt-[20px] sm:mt-[20px] text-white rounded-tl-[8.05px] bg-gradient-to-r from-yellow-500 to-[#FC01C6] font-golos-text text-[14px] font-normal leading-[20.4px] tracking-[-0.3px] text-center decoration-skip-ink-none sm:w-[130px] sm:h-[40px] md:w-[140px] md:h-[32px] md:text-[15px] lg:w-[150px] lg:h-[33px] lg:text-[16px] xl:w-[160px] xl:h-[34px] xl:text-[16.5px] mx-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? t('Sending...') : t('Send')}
            </button>
      </form>
      <div className='flex mb-[-15px] flex-col  items-center justify-center sm:w-full w-full order-1 sm:order-1'>
        <h2 className='mb-14 text-[42px] font-extrabold leading-[60px] tracking-[-0.3px] text-right underline decoration-skip-ink-none font-golos-text text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-[#FC01C6] sm:text-[50px] md:text-[60px] md:leading-[70px] lg:text-[65px] lg:leading-[80px] xl:text-[70px] xl:leading-[85px] whitespace-nowrap'>
          {t('Contact Us')}
        </h2>
        <IconGroup />
      </div>
    </section>
  </Element>
  <Element name="legal">
    <section className=' mb-64 flex flex-col items-center justify-center text-left'>
      <h2 className='text-[35px] text-center  mb-12 font-extrabold leading-[60px] tracking-[-0.3px] underline decoration-skip-ink-none font-golos-text text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-[#FC01C6] sm:text-[35px] md:text-[39px] md:leading-[70px] lg:text-[45px] lg:leading-[80px] xl:text-[55px] xl:leading-[72px]'>
        {t('Legal Information and Policy')}
      </h2>
      <p className='w-[90vw] max-w-[1800px] mt-8 mb-4 font-golos-text text-[24px] font-normal leading-[22px] tracking-[-0.3px] decoration-skip-ink-none sm:text-[24px] sm:w-[80vw] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px]'>
        {t('Privacy Policy')} <a className='text-violet-900' href="privacy">{t('читать всё')}</a>
      </p>
      <p className='w-[90vw] max-w-[1800px] mt-8 mb-4 font-golos-text text-[24px] font-normal leading-[22px] tracking-[-0.3px] decoration-skip-ink-none sm:text-[24px] sm:w-[80vw] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px]'>
        {t('Terms of Use')} <a className='text-violet-900' href="terms-of-use">{t('читать всё')}</a>
      </p>
      <p className='w-[90vw] max-w-[1800px] mt-8 mb-4 font-golos-text text-[24px] font-normal leading-[22px] tracking-[-0.3px] decoration-skip-ink-none sm:text-[24px] sm:w-[80vw] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px]'>
        {t('Copyright')} <a className='text-violet-900' href="copyright">
          {/* {t('читать всё')} */}
          </a>
      </p>
      <p className='w-[90vw] max-w-[1800px] mt-8 mb-4 font-golos-text text-[24px] font-normal leading-[22px] tracking-[-0.3px] decoration-skip-ink-none sm:text-[24px] sm:w-[80vw] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px]'>
        {t('User Agreement')} <a className='text-violet-900' href="agreement">{t('читать всё')}</a> 
      </p>
    </section>
  </Element>
  <section className='flex lg:flex-row mb-64 md:flex-col xl:flex-row sm:flex-col pt-48 lg:mt-0 sm:mt-24 m-auto max-w-[1920px] relative'>
    <div className='hidden xl:block w-[100%] h-[352px] pl-14 pt-4 relative bg-gradient-to-r from-yellow-500 to-[#FC01C6]'>
      <div className='flex flex-col self-center justify-start items-start lg:mr-[-150px] xl:mr-[-190px]'>
        <h2 className='text-[25px] font-extrabold leading-[60px] tracking-[-0.3px] text-right decoration-skip-ink-none font-golos-text text-transparent bg-clip-text text-white sm:text-[25px] md:text-[30px] md:leading-[70px] lg:text-[45px] lg:leading-[80px] xl:text-[45px] xl:leading-[85px]'>
          {t('Download the app, use it')}
        </h2>
        <p className='max-w-[1060px] text-white mt-8 mb-4 font-golos-text text-[24px] font-normal leading-[22px] tracking-[-0.3px] text-left decoration-skip-ink-none sm:text-[24px] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px] w-[50vw]'>
          {t('new customers')}
        </p>
      </div>
      <img src={phone3} className='xl:mt-[-50px] lg:mt-[-230px] sm:m-0 md:m-0 xl:h-[579.95px] xl:w-[75vw] lg:h-[500px] lg:w-[75vw] lg:right-[-78px] md:h-[40vw] md:w-[75vw] sm:right-16 sm:absolute sm:justify-self-center md:right-9 md:absolute md:justify-self-center max-h-[739.95px] max-w-[1688.64px] xl:absolute lg:absolute top-[-70px] left-[35vw] object-contain ml-14 md:mx-auto sm:mx-auto'></img>
      <div className='flex justify-start'>
        <a href="https://support.google.com/googleplay" target="_blank" rel="noopener noreferrer">
          <img src={'https://www.tulpar-card.kg/wp-content/uploads/2020/06/google.png'}
            className=' h-[154px] w-[310px] object-contain mt-[-26px] ml-[-10px] translate-x-12' alt="Google Play"></img>
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={'https://www.freestylelibre.com.au/media/wysiwyg/2022_Icon_Apple_Store.png'}
            className=' h-[73px] w-[193px] object-contain mt-[12px] ml-[-10px]' alt="App Store"></img>
        </a>
        <a href="https://www.rustore.ru/" target="_blank" rel="noopener noreferrer">
          <img src={rustore}
            className=' h-[55px] w-[193px] object-contain mt-5 ml-[-10px]' alt="RuStore"></img>
        </a>
      </div>
    </div>
   <div className='block xl:hidden w-[100%] h-[100%] sm:h-[330px] md:w-[100%] md:h-[318px] pl-14 pt-4 pr-14 md:pr-0 relative bg-gradient-to-r from-yellow-500 to-[#FC01C6]'>
      
      <div className='flex flex-col self-center justify-center items-start lg:mr-[-150px] xl:mr-[-190px] ml-0 sm:ml-[-10px]  '>
        
        <h2 className='text-[25px] text-center font-extrabold leading-[32px] tracking-[-0.3px] decoration-skip-ink-none font-golos-text text-transparent bg-clip-text text-white sm:text-[25px] md:text-[30px] md:leading-[70px] lg:text-[35px] lg:leading-[80px] xl:text-[45px] xl:leading-[85px]'>
          {t('Download the app, use it')}
        </h2>
        <p className='max-w-[1060px] md:w-[550px] w-[75vw] text-white mt-[14px] md-14 font-golos-text text-[24px] font-normal leading-[22px] tracking-[-0.3px] text-left decoration-skip-ink-none sm:text-[24px] sm:w-[460px] md:text-[20px] md:leading-[24px] lg:text-[18px] lg:leading-[21px] xl:text-[22px] xl:leading-[26px] '>
          {t('new customers')}
        </p>
      </div>
      <img src={phone3} className='lg:hidden hidden md md:hidden sm:hidden xl:mt-[-50px] lg:mt-[-20px] sm:m-0 md:m-0 xl:h-[579.95px] xl:w-[75vw] lg:h-[500px] lg:w-[75vw] lg:right-[-78px] md:h-[40vw] md:w-[75vw] sm:right-16 sm:absolute sm:justify-self-center md:right-9 md:absolute md:justify-self-center max-h-[739.95px] max-w-[1688.64px] xl:absolute lg:absolute top-[-70px] left-[35vw] object-contain ml-14 md:mx-auto sm:mx-auto'></img>
    
        <div className='flex items-center justify-start sm:justify-start flex-col sm:flex-row sm:flex-nowrap md:flex-nowrap md:flex-row mt-6 gap-2 mb:justify-start md:ml-[-15px] ml-0'>
          <a href="https://support.google.com/googleplay" target="_blank" rel="noopener noreferrer">
            <img src={'https://www.tulpar-card.kg/wp-content/uploads/2020/06/google.png'}
              className=' h-[150px] w-[310px] object-contain mt-[-70px] ml-[-14px]   sm:translate-x-[-73px] translate-y-[43px]' alt="Google Play"></img>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={'https://www.freestylelibre.com.au/media/wysiwyg/2022_Icon_Apple_Store.png'}
              className=' h-[73px] w-[193px] object-contain mt-[12px] translate-x-[-8px] sm:ml-[15px] sm:translate-x-[-133px] ' alt="App Store"></img>
          </a>
          <a href="https://www.rustore.ru/" target="_blank" rel="noopener noreferrer">
            <img src={rustore}
              className=' h-[56px] w-[193px] object-contain mt-3 ml-[-10px]   sm:translate-x-[-103px]   ' alt="RuStore"></img>
          </a>
        </div>
      <img src={phone4}
        className='xl:hidden sm:hidden ml-[-15px] 2xl:hidden lg:mt-[-20px] sm:m-0 md:m-0 xl:h-[579.95px] xl:w-[75vw] lg:h-[500px] lg:w-[75vw] lg:right-[-300px] md:right-[-300px] md:h-[450px] md:w-[75vw] sm:right-[-300px] sm:h-[450px] sm:w-[75vw] sm:absolute justify-self-center sm:justify-self-center md:absolute md:justify-self-center max-h-[739.95px] max-w-[1688.64px] xl:absolute lg:absolute top-[-70px] left-[35vw] object-contain md:mx-auto sm:mx-auto'></img>
    </div>
    <img src={phone4}
        className='xl:hidden hidden sm:translate-y-[193px]  sm:block 2xl:hidden lg:mt-[-20px] sm:m-0 md:m-0 xl:h-[579.95px] xl:w-[75vw] lg:h-[500px] lg:w-[75vw] lg:right-[-300px] md:right-[-300px] md:h-[450px] md:w-[75vw] sm:right-[-300px] sm:h-[950px] sm:w-[750px] sm:ml-[-25px] justify-self-center sm:justify-self-center md:absolute md:justify-self-center max-h-[1050.95px] max-w-[1688.64px] xl:absolute lg:absolute top-[-70px] left-[35vw] object-contain md:mx-auto sm:mx-auto'></img>
    
  </section>
</div>
  )
}

export default MainPage;