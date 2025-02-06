import { memo, useState } from 'react';
import Icon from '@/shared/assets/icon-instaLikee';
import IconNetwork from '@/shared/assets/IconNetwork';
import './Navbar.scss'; // Assuming you have a CSS file for styles
import { Link } from 'react-scroll';

export const Navbar = memo(() => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="flex z-10 justify-between items-center w-full p-4 bg-white shadow-md">
      <div className="flex items-center">
      <Icon className="ml-5 xl:w-64 lg:w-48 lg:ml-4 mr-auto" />
      </div>

      {/* Burger Menu for smaller screens */}
      <button
      className="lg:hidden xl:hidden flex items-center px-3 py-2 border rounded text-black border-black"
      onClick={toggleSidebar}
      >
      <svg
        className="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
      </svg>
      </button>

      {/* Sidebar for smaller screens */}
      <div
      className={`fixed top-0 left-0 w-64 bg-white h-full shadow-lg transition-transform transform z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:hidden xl:hidden`}
      >
      <button
        className="absolute top-4 right-4"
        onClick={toggleSidebar}
      >
        Close
      </button>
      <ul className="mt-10 space-y-4">
        <li className="px-4 py-2"><a href="#about">О нас</a></li>
        <li className="px-4 py-2"><a href="#contact">Связаться с нами</a></li>
        <li className="px-4 py-2"><a href="#legal">Юридическая информация и политика</a></li>
        <li className="px-4 py-2">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 lg:px-2 lg:py-1"
        >
          <IconNetwork className="ml-4 h-4 w-4 mr-1 lg:ml-3 lg:h-3 lg:w-3 lg:mr-1" />
          <span className="lg:text-sm">Ру</span>
          <svg
          className={`w-3 h-3 ml-1 transition-transform duration-200 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'} lg:w-2 lg:h-2 lg:ml-1`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <ul
          className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg transition-opacity duration-300 ease-in-out ${
          dropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <li className="px-4 py-2 hover:bg-gray-100"><a href="#price1">Русский</a></li>
          <li className="px-4 py-2 hover:bg-gray-100"><a href="#price2">Английский</a></li>
          <li className="px-4 py-2 hover:bg-gray-100"><a href="#price3">Китайский</a></li>
        </ul>
        </li>
      </ul>
      </div>

      {/* Links for larger screens */}
      <ul className="hidden lg:flex lg:justify-around xl:flex w-full">
      <div className="hidden lg:flex xl:flex space-x-8 mx-auto lg:translate-x-8 xl:translate-x-18 2xl:translate-x-48">
        <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
          <Link to="about" offset={350} smooth={true} duration={500} className=''>
            <a href="#about" className="relative cool-link fromLeft navbar-border_animated">
              О нас
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
            </a>         
          </Link>
        </li>
        <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
          <Link to="contact" offset={50} smooth={true} duration={500} className=''>
            <a href="#contact" className="relative cool-link navbar-border_animated">
              Связаться с нами
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
            </a>       
          </Link>
        </li>
        <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
        <Link to="legal" offset={-50} smooth={true} duration={500} className=''>
          <a href="#legal" className="relative cool-link fromRight navbar-border_animated">
            Юридическая информация и политика
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
          </a>
        </Link>
        </li>
      </div>
      <div className="ml-auto">
        <li className="self-center font-bold text-lg leading-[25.2px] tracking-[-0.3px] mb-2">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ml-4 sm:ml-0 md:ml-10 lg:ml-4 xl:ml-6 2xl:ml-24 mr-10"
        >
          <IconNetwork className="ml-5 h-5 w-5 mr-3 lg:text-xl md:text-xl" />
          Ру
          <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <ul
          className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg transition-opacity duration-300 ease-in-out ${
          dropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <li className="px-4 py-2 hover:bg-gray-100"><a href="#price1">Русский</a></li>
          <li className="px-4 py-2 hover:bg-gray-100"><a href="#price2">Английский</a></li>
          <li className="px-4 py-2 hover:bg-gray-100"><a href="#price3">Китайский</a></li>
        </ul>
        </li>
      </div>
      </ul>
    </header>
  );
});

export default Navbar;