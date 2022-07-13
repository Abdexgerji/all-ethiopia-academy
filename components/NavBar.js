import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuSVG from '../public/svg/my-svg/MenuSVG';

const NavBar = () => {
  // router
  const router = useRouter();
  return (
    <header className='horizontal-padding-for-whole-site'>
      <Link href='/'>
        <a>
          <img src='/pictures/logo.jpg' alt='bunna logo' />
        </a>
      </Link>

      <MenuSVG className='menu-svg' />
      <nav>
        <ul className='nav-ul'>
          <li>
            <Link href='/'>
              <a className={`${router.pathname === '/' && 'current-page'}`}>
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href='/news'>
              <a className={`${router.pathname === '/news' && 'current-page'}`}>
                NEWS
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a
                className={`${router.pathname === '/about' && 'current-page'}`}
              >
                ABOUT
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a
                className={`${
                  router.pathname === '/contact' && 'current-page'
                }`}
              >
                CONTACT US
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
