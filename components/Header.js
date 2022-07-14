import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import MenuSVG from '../public/svg/my-svg/MenuSVG';

const NavBar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  // router
  const router = useRouter();

  return (
    <header className='horizontal-padding-for-whole-site'>
      <Link href='/'>
        <a>
          <img src='/pictures/logo.jpg' alt='bunna logo' />
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
      <div className={`side-nav ${sideNavOpen && 'open-side-nav'}`}>
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
                  HOME
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
                  NEWS
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
                  ABOUT
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
                  CONTACT US
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* // sxn main-nav */}
      <nav className='main-nav'>
        <ul className='nav-ul'>
          <li>
            <Link href='/'>
              <a className={`${router.pathname === '/' ? 'current-page' : ''}`}>
                HOME
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
                NEWS
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
                ABOUT
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
                  CONTACT US
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
