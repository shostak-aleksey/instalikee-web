import { memo } from 'react';
import Icon from '@/shared/assets/icon-instaLikee';
import './Footer.scss'; // Assuming you have a CSS file for styles

export const Footer = memo(() => {



  return (
    <footer className="flex z-10 justify-between items-center w-full p-4 bg-[f3f3f3] shadow-md">
      <div className="flex items-center">
      <Icon className="ml-5 xl:w-64 lg:w-48 lg:ml-4 mr-auto" />
      </div>
      <ul className="flex justify-around w-full">
      <div className="flex space-x-8 mx-auto">
        <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
        <a href="#about" className="relative cool-link fromLeft navbar-border_animated">
          О нас
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
        </a>
        </li>
        <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
        <a href="#contact" className="relative cool-link navbar-border_animated">
          Связаться с нами
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
        </a>
        </li>
        <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
        <a href="#legal" className="relative cool-link fromRight navbar-border_animated">
          Юридическая информация и политика
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
        </a>
        </li>
      </div>
      </ul>
    </footer>
  );
});

export default Footer;