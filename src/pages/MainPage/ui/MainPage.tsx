import phone1 from '@/shared/assets/phone1.png';
import phone2 from '@/shared/assets/phone2.png';
import phone3 from '@/shared/assets/phone3.png';
import rustore from '@/shared/assets/rustore-apk.png';
import CircleWithArrow from "@/shared/assets/circleWithArrow";
import IconGroup from "@/shared/assets/IconGroup";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link, Element } from 'react-scroll';

function MainPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
        });
    }
  };

  return (
    <div>
      <section id="home" className='relative flex xl:mt-0 m-auto pr-10 max-w-[1920px]'>
        <div className='relative mr-10'>
          <img src={phone1} className='w-[50vw] h-[50vw] max-w-[960px] max-h-[960px] relative top-[4vw] left-[5vw]'></img>
          <div className='w-[40vw] h-[40vw] max-w-[768px] max-h-[768px] z-[-1] absolute top-[7vw] left-[8vw] rounded-full bg-gradient-to-r from-yellow-500 to-[#FC01C6]'></div>
          <div className='w-[40vw] h-[40vw] max-w-[768px] max-h-[768px] z-[-1] absolute top-[7vw] left-[8vw] rounded-full border-4 border-transparent border-gradient-to-r from-yellow-500 to-[#FC01C6]'></div>
        </div>
        <div className='flex flex-col self-center justify-end items-end'>
  
          <h2 className='text-[75px] font-extrabold leading-[90px] tracking-[-0.3px] text-right underline decoration-skip-ink-none font-golos-text text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-[#FC01C6] sm:text-[50px] sm:leading-[60px] md:text-[60px] md:leading-[70px] lg:text-[65px] lg:leading-[80px] xl:text-[70px] xl:leading-[85px] whitespace-nowrap'>
            INSTA LIKEE
          </h2>

          <p className='w-[42vw] max-w-[806px] mt-8 mb-4 font-golos-text text-[23px] font-normal leading-[27.6px] tracking-[-0.3px] text-right decoration-skip-ink-none sm:text-[18px] sm:leading-[22px] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px]'>
            InstaLikee — ведущая платформа для создания и просмотра коротких видео, обмена фотографиями и сообщениями.
          </p>          
          <Link to="about" offset={350} smooth={true} duration={500} className=''>
            <button
              className='w-[172px] h-[35px] max-w-[172px] max-h-[35px] mt-[20px] text-white rounded-tl-[8.05px] bg-gradient-to-r from-yellow-500 to-[#FC01C6] font-golos-text text-[17px] font-normal leading-[20.4px] tracking-[-0.3px] text-center decoration-skip-ink-none sm:w-[120px] sm:h-[30px] sm:text-[14px] md:w-[140px] md:h-[32px] md:text-[15px] lg:w-[150px] lg:h-[33px] lg:text-[16px] xl:w-[160px] xl:h-[34px] xl:text-[16.5px]'
            >
              Узнать больше
            </button>
          </Link>
          <Link to="about" offset={350} smooth={true} duration={500} className='absolute bottom-[-10px] left-[49.5%] cursor-pointer mt-10'>
            <CircleWithArrow />
          </Link>
        </div>
      </section>
      <Element name="about">
        <section className='flex lg:flex-row md:flex-col xl:flex-row sm:flex-col pt-48 lg:mt-0 sm:mt-24 m-auto pr-10 pl-[8vw] max-w-[1920px] relative'>
          <div className='flex flex-col self-center justify-start items-start lg:mr-[-150px] xl:mr-[-190px]'>
            <h2 className='text-[75px] mb-12 font-extrabold leading-[90px] tracking-[-0.3px] text-right underline decoration-skip-ink-none font-golos-text text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-[#FC01C6] sm:text-[50px] sm:leading-[60px] md:text-[60px] md:leading-[70px] lg:text-[65px] lg:leading-[80px] xl:text-[70px] xl:leading-[85px]'>
              О нас
            </h2>
            <p className='lg:w-[40vw] md:w-[80vw] max-w-[1060px] mt-8 mb-4 font-golos-text text-[23px] font-normal leading-[27.6px] tracking-[-0.3px] text-left decoration-skip-ink-none sm:text-[24px] sm:leading-[22px] sm:w-[80vw] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px] xl:w-[53vw]'>
              Наша миссия — вдохновлять пользователей на творчество и приносить радость. Головные офисы InstaLikee расположены в России. InstaLikee — делаем вас ближе к людям и всему что ты любишь. Мы стремимся создать безопасное
               <br/><br/>приложение и поддерживающее сообщество для каждого. Найди что-то новое. Открой для себя контент и пользователей на основе ваших интересов. Общайтесь с большим количеством людей, создавайте привлекательный контент,
               <br/><br/>который станет вашим. Расти вместе с нами. Мы ставим людей на первое место и ценим мастерство и простоту в нашей работе. Наши команды вдохновляют творчество по всему миру, помогая более 1 миллиарду человек творить и делиться.
               <br/><br/> Присоединяйтесь к нам! Загрузите логотип InstaLikee и другие ресурсы для использования на своем веб-сайте, в витрине магазина или в других маркетинговых материалах.
            </p>
          </div>
          <img src={phone2} className='xl:mt-[-50px] lg:mt-[-130px] sm:m-0 md:m-0 xl:w-[768px] xl:h-[1152px] lg:w-[800px] lg:h-[1060px] lg:top-[140px] lg:right-[-78px] md:w-[100vw] md:h-[1228px] sm:right-16 sm:relative sm:justify-self-center md:right-9 md:relative md:justify-self-center w-[800px] h-[1200px] max-w-[961px] max-h-[1177.5px] xl:relative lg:relative object-contain ml-14 md:mx-auto sm:mx-auto'></img>
        </section>
      </Element>
      <Element name="contact">
      <section id="contact" className='mb-64 flex flex-row-reverse lg:flex-col md:flex-col xl:flex-row-reverse sm:flex-col pt-48 lg:mt-0 sm:mt-24 m-auto pr-10 pl-[8vw] max-w-[1920px] relative'>
          <form className='flex mr-14 mt-32 flex-col w-[50vw] sm:w-full sm:order-2' ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Имя' className='mb-4 p-2 border border-gray-300 rounded' />
            <input type='email' placeholder='Email' className='mb-4 p-2 border border-gray-300 rounded' />
            <input type='text' placeholder='Телефон' className='mb-4 p-2 border border-gray-300 rounded' />
            <textarea placeholder='Сообщение' className='mb-4 p-2 border border-gray-300 rounded h-32'></textarea>
            <button className='w-[172px] h-[35px] max-w-[172px] max-h-[35px] mt-[20px] text-white rounded-tl-[8.05px] bg-gradient-to-r from-yellow-500 to-[#FC01C6] font-golos-text text-[17px] font-normal leading-[20.4px] tracking-[-0.3px] text-center decoration-skip-ink-none sm:w-[120px] sm:h-[30px] sm:text-[14px] md:w-[140px] md:h-[32px] md:text-[15px] lg:w-[150px] lg:h-[33px] lg:text-[16px] xl:w-[160px] xl:h-[34px] xl:text-[16.5px]'>
              отправить
            </button>
          </form>
        <div className='flex mb-[-15px] flex-col w-[50vw] items-center justify-center sm:w-full sm:order-1'>
          <h2 className='mb-14 text-[75px] font-extrabold leading-[90px] tracking-[-0.3px] text-right underline decoration-skip-ink-none font-golos-text text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-[#FC01C6] sm:text-[50px] sm:leading-[60px] md:text-[60px] md:leading-[70px] lg:text-[65px] lg:leading-[80px] xl:text-[70px] xl:leading-[85px] whitespace-nowrap'>
            Связаться с нами
          </h2>
          <IconGroup />
        </div>      
      </section>
        </Element>
        <Element name="legal">
      <section className='p-6 mb-64 flex flex-col items-center justify-center text-left'>
        <h2 className='text-[72px] mb-12 font-extrabold leading-[90px] tracking-[-0.3px] underline decoration-skip-ink-none font-golos-text text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-[#FC01C6] sm:text-[35px] sm:leading-[60px] md:text-[39px] md:leading-[70px] lg:text-[45px] lg:leading-[80px] xl:text-[55px] xl:leading-[72px]'>
          Юридическая информация и политика
        </h2>
        <p className='w-[90vw] max-w-[1800px] mt-8 mb-4 font-golos-text text-[23px] font-normal leading-[27.6px] tracking-[-0.3px] decoration-skip-ink-none sm:text-[24px] sm:leading-[22px] sm:w-[80vw] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px]'>
        Политика конфиденциальности: Мы уважаем вашу конфиденциальность и стремимся защищать ваши личные данные. Все данные, которые вы предоставляете через наш сервис, обрабатываются в соответствии с действующим законодательством о защите данных. Мы используем ваши данные только для предоставления и улучшения наших услуг. Вы имеете право запросить доступ к вашим данным, их исправление или удаление в любое время.
        <br /><br />Условия использования: Используя наш сервис, вы соглашаетесь соблюдать все применимые законы и правила. Вы обязуетесь не использовать наш сервис для незаконных целей или в целях, которые могут нанести ущерб нашему сервису или другим пользователям. Мы оставляем за собой право приостановить или прекратить ваш доступ к нашему сервису в случае нарушения вами этих условий.
        <br /><br />Авторские права: Все материалы, представленные на нашем сайте, включая текст, изображения и логотипы, защищены авторским правом. Вы не можете использовать, копировать или распространять эти материалы без нашего предварительного письменного согласия. Любое несанкционированное использование может привести к юридическим последствиям.
        <br /><br />Пользовательское соглашение: Мы стремимся обеспечить вам наилучший опыт использования нашего сервиса. Ваша безопасность и удовлетворенность являются нашими приоритетами. Мы постоянно работаем над улучшением функциональности и удобства нашего приложения, чтобы сделать ваше взаимодействие с InstaLikee максимально приятным и продуктивным. Мы ценим ваше мнение и всегда открыты для предложений и обратной связи. Присоединяйтесь к нашему сообществу и наслаждайтесь уникальными возможностями, которые предлагает InstaLikee.
        </p>
      </section>
      </Element>
      <section  className='flex lg:flex-row mb-64 md:flex-col xl:flex-row sm:flex-col pt-48 lg:mt-0 sm:mt-24 m-auto max-w-[1920px] relative'>
        <div className='hidden xl:block w-[100%] h-[352px] pl-14 pt-4 relative bg-gradient-to-r from-yellow-500 to-[#FC01C6]'>
          <div className='flex flex-col self-center justify-start items-start lg:mr-[-150px] xl:mr-[-190px]'>
            <h2 className='text-[52px] font-extrabold leading-[90px] tracking-[-0.3px] text-right decoration-skip-ink-none font-golos-text text-transparent bg-clip-text text-white sm:text-[25px] sm:leading-[60px] md:text-[30px] md:leading-[70px] lg:text-[45px] lg:leading-[80px] xl:text-[45px] xl:leading-[85px]'>
              Скачайте приложение, пользуйтесь
            </h2>
            <p className='max-w-[1060px] text-white mt-8 mb-4 font-golos-text text-[23px] font-normal leading-[27.6px] tracking-[-0.3px] text-left decoration-skip-ink-none sm:text-[24px] sm:leading-[22px] md:text-[20px] md:leading-[24px] lg:text-[21px] lg:leading-[25px] xl:text-[22px] xl:leading-[26px] w-[50vw]'>
              Привлекайте новых клиентов с помощью рекламы в InstaLikee. Развивайте компанию, создавайте эффективные креативы и выстраивайте долгосрочные отношения с клиентами — всё это в одном месте.
            </p>
          </div>
          <img src={phone3} className='xl:mt-[-50px] lg:mt-[-230px] sm:m-0 md:m-0 xl:h-[579.95px] xl:w-[75vw] lg:h-[500px] lg:w-[75vw] lg:right-[-78px] md:h-[40vw] md:w-[75vw] sm:right-16 sm:absolute sm:justify-self-center md:right-9 md:absolute md:justify-self-center max-h-[739.95px] max-w-[1688.64px] xl:absolute lg:absolute top-[-70px] left-[35vw] object-contain ml-14 md:mx-auto sm:mx-auto'></img>
          <div className='flex justify-start'>
            <img src={'https://s3-alpha-sig.figma.com/img/94b6/dad7/ba21b150dedfcda9eba39caf7f5778c1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l6L8S7kDbo4zs2SujZY7QxjY6aWDq~uCfOUw3CZeWOw49-qGwRBUseQNO71zUG7RLF-02INbg8XIYme-ZC5kuNhBV6ansxj4YudpbTyBp5StyEHxc394g2LWvDazcy~k87ekVxIbavEB43faord1TWUxGGqcgivmWiREHYQqEJdlRb3kK1Nscx9suetrKYdlAGtwb5By7VSrfXTUIkg9eAMo33bdYYIFJU40WYlZDRaMom~zgQzrturZxB6anhf4E4Wgfy0dNKGqyUHl9cJWNnf~Dgm416m5VZss5iq~Lo1hz5XUnm4~cbSu45zW-36Vr6rRoVeK5d0OPHVWDDXsog__'}
            className=' h-[53px] w-[193px] object-contain mt-5 ml-[-10px]'></img>
            <img src={'https://s3-alpha-sig.figma.com/img/c534/4b05/5772939794a569e1e5bc72e8dade9753?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NSSDMxehQyFc8j2bEh6GcrFJuH8EDEOivYCv3FG7VrB0gu9ND3m~RtEzNIsocrk3Q-NWb~TBaUo5X8~GJJSVlXEhbwRQjQ0hjZ9ZsnmKy2EBH6aAYh7tlhGtMXM8mRuifHtOwtTjmpJEyylPesj5Pml3TgFd1kQC8GzBo2d~70WfOxexBHzg1FbKc4MZ8OVnQ9-jBAtz2h-WB~kCOGzT05hSxp2qoiHx~Y2qoc7POXmk~E9fFxDqVRAfI9pQ9AVmVKdYoJw5srvfv7XsTm-YQsdXFJFScGHTQ0HZDqE3u~~1-7ltioZ~ySTUt9uMuaC2QKRMcHiYIQrAn9EyBXruug__'}
            className=' h-[53px] w-[193px] object-contain mt-5 ml-[-10px]'></img>
            <img src={rustore}
            className=' h-[53px] w-[193px] object-contain mt-5 ml-[-10px]'></img>
          </div>
        </div>
        <div className='block xl:hidden w-[100%] h-[302px] pl-14 pt-4 relative bg-gradient-to-r from-yellow-500 to-[#FC01C6]'>
          <div className='flex flex-col self-center justify-start items-start lg:mr-[-150px] xl:mr-[-190px]'>
            <h2 className='text-[52px] text-left font-extrabold leading-[90px] tracking-[-0.3px] decoration-skip-ink-none font-golos-text text-transparent bg-clip-text text-white sm:text-[25px] sm:leading-[60px] md:text-[30px] md:leading-[70px] lg:text-[35px] lg:leading-[80px] xl:text-[45px] xl:leading-[85px]'>
              Скачайте приложение, пользуйтесь
            </h2>
            <p className='max-w-[1060px] text-white mt-8 mb-4 font-golos-text text-[23px] font-normal leading-[27.6px] tracking-[-0.3px] text-left decoration-skip-ink-none sm:text-[24px] sm:leading-[22px] md:text-[20px] md:leading-[24px] lg:text-[18px] lg:leading-[21px] xl:text-[22px] xl:leading-[26px] w-[50vw]'>
              Привлекайте новых клиентов с помощью рекламы в InstaLikee. Развивайте компанию, создавайте эффективные креативы и выстраивайте долгосрочные отношения с клиентами — всё это в одном месте.
            </p>
          </div>
          <img src={phone3} className='lg:hidden md:hidden sm:hidden xl:mt-[-50px] lg:mt-[-20px] sm:m-0 md:m-0 xl:h-[579.95px] xl:w-[75vw] lg:h-[500px] lg:w-[75vw] lg:right-[-78px] md:h-[40vw] md:w-[75vw] sm:right-16 sm:absolute sm:justify-self-center md:right-9 md:absolute md:justify-self-center max-h-[739.95px] max-w-[1688.64px] xl:absolute lg:absolute top-[-70px] left-[35vw] object-contain ml-14 md:mx-auto sm:mx-auto'></img>
          <img src={'https://s3-alpha-sig.figma.com/img/f689/8dc2/988df1d65895d2e93e37e484abcd50e2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Oa93HYf3DI6YzxuIeYDOmNfOsgrUb9ndKAnIsaHqH94~XG5W58K6W4lAvivqgy7zaYo6DAuvdq-rbjJRCpni4jNOMpxy~gSdrqFXumys49wQckKlzR3UnPQt5-euOm9Le6kvGlwybQyIVwk26U-nhA2YXxHbsa1O8UWAu3M7RCYQuv8i5R~fUclVVK~s0eExpNZ~-l5H~KwY7oo4-ZClTTrkgNaEYiNSyvFBEXstIUEU7ENf7bqXV~fYDqlNW1beASGWVoZa21p~kYaXCuF6PvBDcf6-bTHqIdH1EG8Utz7wALGK1lVFNqHhUn6Xodar8MqfLFX4KDcaITL9UdWW0w__'}
          className='xl:hidden 2xl:hidden lg:mt-[-20px] sm:m-0 md:m-0 xl:h-[579.95px] xl:w-[75vw] lg:h-[500px] lg:w-[75vw] lg:right-[-300px] md:right-[-300px] md:h-[450px] md:w-[75vw] sm:right-16 sm:absolute sm:justify-self-center md:absolute md:justify-self-center max-h-[739.95px] max-w-[1688.64px] xl:absolute lg:absolute top-[-70px] left-[35vw] object-contain ml-14 md:mx-auto sm:mx-auto'></img>

          <div>
            <div className='justify-start flex'>
              <img src={'https://s3-alpha-sig.figma.com/img/94b6/dad7/ba21b150dedfcda9eba39caf7f5778c1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l6L8S7kDbo4zs2SujZY7QxjY6aWDq~uCfOUw3CZeWOw49-qGwRBUseQNO71zUG7RLF-02INbg8XIYme-ZC5kuNhBV6ansxj4YudpbTyBp5StyEHxc394g2LWvDazcy~k87ekVxIbavEB43faord1TWUxGGqcgivmWiREHYQqEJdlRb3kK1Nscx9suetrKYdlAGtwb5By7VSrfXTUIkg9eAMo33bdYYIFJU40WYlZDRaMom~zgQzrturZxB6anhf4E4Wgfy0dNKGqyUHl9cJWNnf~Dgm416m5VZss5iq~Lo1hz5XUnm4~cbSu45zW-36Vr6rRoVeK5d0OPHVWDDXsog__'}
              className='h-[53px] w-[193px] object-contain mt-5 ml-[-10px]'></img>
              <img src={'https://s3-alpha-sig.figma.com/img/c534/4b05/5772939794a569e1e5bc72e8dade9753?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NSSDMxehQyFc8j2bEh6GcrFJuH8EDEOivYCv3FG7VrB0gu9ND3m~RtEzNIsocrk3Q-NWb~TBaUo5X8~GJJSVlXEhbwRQjQ0hjZ9ZsnmKy2EBH6aAYh7tlhGtMXM8mRuifHtOwtTjmpJEyylPesj5Pml3TgFd1kQC8GzBo2d~70WfOxexBHzg1FbKc4MZ8OVnQ9-jBAtz2h-WB~kCOGzT05hSxp2qoiHx~Y2qoc7POXmk~E9fFxDqVRAfI9pQ9AVmVKdYoJw5srvfv7XsTm-YQsdXFJFScGHTQ0HZDqE3u~~1-7ltioZ~ySTUt9uMuaC2QKRMcHiYIQrAn9EyBXruug__'}
              className='h-[53px] w-[193px] object-contain mt-5 ml-[-10px]'></img>
              <img src={rustore}
              className='h-[53px] w-[193px] object-contain mt-5 ml-[-10px]'></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage;