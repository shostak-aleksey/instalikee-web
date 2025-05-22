import { memo } from 'react';
import Icon from '@/shared/assets/icon-instaLikee';
import './Footer.scss'; // Assuming you have a CSS file for styles
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export const Footer = memo(() => {
  const { t } = useTranslation();


  return (
    <footer className="flex  z-10 justify-between items-center w-full  bg-[f3f3f3] ">
      <div className="flex items-center">
        <Icon className="ml-5 xl:w-64 lg:w-48 lg:ml-4 mr-auto" />
      </div>
      <div className=' mx-auto font-semibold text-[18px]'><a href="https://instalikee.com/privacy"> 2025 &copy;</a> </div>
      <ul className="hidden lg:flex justify-around w-full">
        <div className="flex space-x-8 mx-auto">
          <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
            <Link to="about" offset={350} smooth={true} duration={500} className="relative  cool-link fromLeft navbar-border_animated">
             {t('About Us')}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
            </Link>
          </li>
          <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
            <Link to="contact" offset={50} smooth={true} duration={500} className="relative  cool-link navbar-border_animated">
            {t('contact')}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
            </Link>
          </li>
          <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
            <Link to="legal" offset={-50} smooth={true} duration={500} className="relative  cool-link fromRight navbar-border_animated">
               {t('legal')}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
            </Link>
          </li>
        </div>
      </ul>
    </footer>
  );
});

export default Footer;