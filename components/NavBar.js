import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  // router
  const router = useRouter();
  return (
    <nav>
      <li>
        <Link href='/'>
          <a>
            <img src='/pictures/logo.jpg' alt='bunna logo' />
          </a>
        </Link>
      </li>
      <div className='nav-div'>
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
      </div>
    </nav>
  );
};

export default NavBar;
