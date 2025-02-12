import { memo, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '@/shared/assets/icon-instaLikee';
import IconNetwork from '@/shared/assets/IconNetwork';
import './Navbar.scss';
import { Link } from 'react-scroll';

export const Navbar = memo(() => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const handleSidebarLinkClick = () => {
    setSidebarOpen(false);
  };

  const getOffset = (id: string) => {
    if (id === 'about') {
      return 120;
    } else if (id === 'legal') {
      return -80;
    }
    return 70;
  };

  const renderLanguageList = () => (
    <ul
      ref={dropdownRef}
      className={`absolute overflow-auto max-h-[310px] mt-2 w-48 bg-white border z-100 border-gray-200 rounded shadow-lg transition-opacity duration-300 ease-in-out ${
        dropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } top-full left-0`}
      style={{ left: 0 }}
    >
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('ru')}>Русский</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('en')}>English</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('zh')}>中文</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('ko')}>한국어</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('ja')}>日本語</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('pt')}>Português</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('it')}>Italiano</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('de')}>Deutsch</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('fr')}>Français</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('es')}>Español</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('ar')}>العربية</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('hi')}>हिन्दी</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('bn')}>বাংলা</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('pa')}>ਪੰਜਾਬੀ</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('ur')}>اردو</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('id')}>Bahasa Indonesia</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('tr')}>Türkçe</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('vi')}>Tiếng Việt</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('th')}>ไทย</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('fa')}>فارسی</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('pl')}>Polski</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('nl')}>Nederlands</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('uk')}>Українська</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('ro')}>Română</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('el')}>Ελληνικά</li>
      <li className="px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('ms')}>Bahasa Melayu </li>
    </ul>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 bg-white shadow-md z-20 transition-transform duration-300 ${
        isSticky ? 'transform translate-y-0' : 'transform translate-y-0'
      } sm:relative md:relative lg:relative xl:relative`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Icon className="ml-5 xl:w-64 lg:w-48 lg:ml-4 mr-auto" />
        </div>

        <button
          className="lg:hidden xl:hidden  flex items-center px-3 py-2 border rounded text-black border-black"
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

        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 w-[100vw] pl-14 pt-6 font-bold text-[20px] gap-14 sm:w-full bg-white h-[100vh] md:w-[400px] shadow-lg transition-transform transform z-50 ${
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
            <li className="px-4 py-2">
              <Link to="about" offset={getOffset('about')} smooth={true} duration={500} onClick={handleSidebarLinkClick}>
                {t('About Us')}
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link to="contact" offset={getOffset('contact')} smooth={true} duration={500} onClick={handleSidebarLinkClick}>
                {t('contact')}
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link to="legal" offset={getOffset('legal')} smooth={true} duration={500} onClick={handleSidebarLinkClick}>
                {t('legal')}
              </Link>
            </li>
            <li className="px-4 py-2">
              <div className="relative">
                <button
                  ref={languageButtonRef}
                  onClick={toggleDropdown}
                  className="language-button flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 lg:px-2 lg:py-1"
                >
                  <IconNetwork className="ml-4 h-4 w-4 mr-1 lg:ml-3 lg:h-3 lg:w-3 lg:mr-1" />
                  <span className="lg:text-sm">{t('language')}</span>
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
                {dropdownOpen && renderLanguageList()}
              </div>
            </li>
          </ul>
        </div>

        <ul className="hidden lg:flex lg:justify-around xl:flex w-full">
          <div className="hidden lg:flex xl:flex space-x-8 mx-auto lg:translate-x-8 xl:translate-x-18 2xl:translate-x-48">
            <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
              <Link to="about" offset={350} smooth={true} duration={500} className=''>
                <a href="#about" className="relative cool-link fromLeft navbar-border_animated">
                  {t('About Us')}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
                </a>
              </Link>
            </li>
            <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
              <Link to="contact" offset={50} smooth={true} duration={500} className=''>
                <a href="#contact" className="relative cool-link navbar-border_animated">
                  {t('contact')}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
                </a>
              </Link>
            </li>
            <li className="self-center font-bold leading-tight tracking-tight mb-2 text-xs sm:text-sm md:text-l 2xl:text-xl xl:text-lg whitespace-nowrap">
              <Link to="legal" offset={-50} smooth={true} duration={500} className=''>
                <a href="#legal" className="relative cool-link fromRight navbar-border_animated">
                  {t('legal')}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out origin-left"></span>
                </a>
              </Link>
            </li>
          </div>
          <div className="ml-auto">
            <li className="self-center font-bold text-lg leading-[25.2px] tracking-[-0.3px] mb-2">
              <div className="relative">
                <button
                  ref={languageButtonRef}
                  onClick={toggleDropdown}
                  className="language-button flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ml-4 sm:ml-0 md:ml-10 lg:ml-4 xl:ml-6 2xl:ml-24 mr-10"
                >
                  <IconNetwork className="ml-5 h-5 w-5 mr-3 lg:text-xl md:text-xl" />
                  {t('language')}
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
                {dropdownOpen && renderLanguageList()}
              </div>
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
});

export default Navbar;
