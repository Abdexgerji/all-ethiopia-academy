import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../context';
import useCloseWhenClickOutside from '../hooks/useCloseWhenClickOutside';
import DownTriangleSVG from '../public/svg/my-svg/DownTriangleSVG';
import MenuSVG from '../public/svg/my-svg/MenuSVG';
import NextImage from './NextImage';

const NavBar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { lang, setLang } = useContext(Context);

  const langDropdownRef = useRef();
  const sideNavRef = useRef();

  // to close element when clicked outside the element
  useCloseWhenClickOutside(langDropdownRef, function () {
    return setLangDropdownOpen(false);
  });
  useCloseWhenClickOutside(sideNavRef, function () {
    setSideNavOpen(false);
  });

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (langDropdownRef.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    // ... do whatever on click outside here ...
    setLangDropdownOpen(false);
  };

  // router
  const router = useRouter();

  return (
    <header className='horizontal-padding-for-whole-site'>
      <Link href='/'>
        <a>
          <NextImage src='/pictures/logo.jpg' alt='bunna logo' />
          {/* <img src='/pictures/logo.jpg' alt='bunna logo' /> */}
        </a>
      </Link>

      {/* // sxn hamburger menu */}
      <MenuSVG
        onClick={() => {
          setSideNavOpen(true);
        }}
        className='menu-svg'
      />

      {/* // sxn side-nav */}
      <div
        ref={sideNavRef}
        className={`side-nav ${sideNavOpen && 'open-side-nav'}`}
      >
        <span
          className='side-nav-close'
          onClick={() => {
            setSideNavOpen(false);
          }}
        >
          &times;
        </span>
        <nav>
          <ul>
            <li
              onClick={() => {
                setSideNavOpen(false);
              }}
            >
              <Link href='/'>
                <a
                  className={`${
                    router.pathname === '/' ? 'current-page-link' : ''
                  }`}
                >
                  {lang === 'eng' ? 'HOME' : 'ዋና ገጽ'}
                </a>
              </Link>
            </li>
            <li
              onClick={() => {
                setSideNavOpen(false);
              }}
            >
              <Link href='/news'>
                <a
                  className={`${
                    router.pathname === '/news' ? 'current-page-link' : ''
                  }`}
                >
                  {lang === 'eng' ? 'NEWS' : 'ዜናዎች'}
                </a>
              </Link>
            </li>
            <li
              onClick={() => {
                setSideNavOpen(false);
              }}
            >
              <Link href='/about'>
                <a
                  className={`${
                    router.pathname === '/about' ? 'current-page-link' : ''
                  }`}
                >
                  {lang === 'eng' ? 'ABOUT' : 'ስለ እኛ'}
                </a>
              </Link>
            </li>

            <li
              onClick={() => {
                setSideNavOpen(false);
              }}
            >
              <Link href='/contact'>
                <a
                  className={`${
                    router.pathname === '/contact' ? 'current-page-link' : ''
                  }`}
                >
                  {lang === 'eng' ? 'CONTACT US' : 'አግኙን'}
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* // sxn main-nav */}
      <div className='nav-lang-wrapper'>
        <nav className='main-nav'>
          <ul className='nav-ul'>
            <li>
              <Link href='/'>
                <a
                  className={`${router.pathname === '/' ? 'current-page' : ''}`}
                >
                  {lang === 'eng' ? 'HOME' : 'ዋና ገጽ'}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/news'>
                <a
                  className={`${
                    router.pathname === '/news' ? 'current-page' : ''
                  }`}
                >
                  {lang === 'eng' ? 'NEWS' : 'ዜናዎች'}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a
                  className={`${
                    router.pathname === '/about' ? 'current-page' : ''
                  }`}
                >
                  {lang === 'eng' ? 'ABOUT' : 'ስለ እኛ'}
                </a>
              </Link>
            </li>
            {router.pathname !== '/contact' && (
              <li className='nav-contact'>
                <Link href='/contact'>
                  <a
                    className={`${
                      router.pathname === '/contact' ? 'current-page' : ''
                    }`}
                  >
                    {lang === 'eng' ? 'CONTACT US' : 'አግኙን'}
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className='lang-btn-wrapper'>
          <button
            className='lang-btn'
            onClick={() => {
              setLangDropdownOpen((prev) => !prev);
            }}
          >
            <spa>{lang === 'eng' ? 'En' : 'አማ'}</spa>
            <DownTriangleSVG />
          </button>

          {/* // sxn lang dropdown  */}
          <div
            ref={langDropdownRef}
            className={`lang-dropdown ${
              langDropdownOpen ? 'open-lang-dropdown' : ''
            }`}
          >
            <div
              className={`${lang === 'eng' ? 'selected-lang' : ''}`}
              onClick={() => {
                setLang('eng');
                setLangDropdownOpen(false);
              }}
            >
              English
            </div>
            <div
              className={`${lang === 'amh' ? 'selected-lang' : ''}`}
              onClick={() => {
                setLang('amh');
                setLangDropdownOpen(false);
              }}
            >
              አማርኛ
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
