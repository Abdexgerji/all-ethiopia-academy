import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Context } from '../context';
import MenuSVG from '../public/svg/my-svg/MenuSVG';

const NavBar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const { lang, setLang } = useContext(Context);

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
                  {lang === 'eng' ? 'HOME' : 'ቤት'}
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
      <nav className='main-nav'>
        <ul className='nav-ul'>
          <li>
            <Link href='/'>
              <a className={`${router.pathname === '/' ? 'current-page' : ''}`}>
                {lang === 'eng' ? 'HOME' : 'ቤት'}
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
    </header>
  );
};

export default NavBar;
