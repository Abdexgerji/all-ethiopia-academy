import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CarouselComponent from '../components/Carousel';

const images = [
  {
    url: '/pictures/img4-croped.jpg',
  },
  {
    url: '/pictures/img5.jpg',
  },
  {
    url: '/pictures/img18-croped.jpg',
  },
];

export default function Home() {
  // router
  const router = useRouter();

  // ! the functionality here helps get width of window
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== 'undefined' && window?.innerWidth
  ); // check width size of the window
  const handleWindowSizeChange = () => {
    setInnerWidth(window?.innerWidth);
  };

  // call your useEffect
  useEffect(() => {
    if (typeof window !== 'undefined' && window?.innerWidth) {
      window?.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window?.removeEventListener('resize', handleWindowSizeChange);
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ethiopian Bunna</title>
        <meta name='description' content='All Ethiopia Soccer Academy' />
        <link rel='icon' href='/pictures/logo.jpg' />
      </Head>
      <nav>
        <img src='/pictures/logo.jpg' alt='bunna logo' />
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
              <Link href='/contact'>
                <a
                  className={`${router.pathname === '/NEWS' && 'current-page'}`}
                >
                  NEWS
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a
                  className={`${
                    router.pathname === '/about' && 'current-page'
                  }`}
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1
          style={{ marginBlock: '0', fontSize: '40px' }}
          className='font-gradient'
        >
          All Ethiopia Soccer Academy
        </h1>
      </div>
      {/* // sxn carousel */}
      <div style={{ marginTop: '10px' }}>
        <CarouselComponent />
      </div>
      <main className='home-main'>
        {/* // sxn news*/}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2
            style={{ margin: '3px 0', fontSize: '37px', marginBottom: '10px' }}
            className='font-gradient'
          >
            Latest News
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '90%',
            marginBlock: 'auto',
          }}
        >
          <div className='news-card'>
            <img
              className='news-card-image'
              src='/pictures/logo.jpg'
              alt='news image'
            />
            <h5
              className='text-center'
              style={{ fontSize: '25px', margin: '5px 0' }}
            >
              News 1
            </h5>
            <p className='text-center'>News 1 details.....</p>
          </div>
          <div className='news-card'>
            <img
              className='news-card-image'
              src='/pictures/logo.jpg'
              alt='news image'
            />
            <h5
              className='text-center'
              style={{ fontSize: '25px', margin: '5px 0' }}
            >
              News 2
            </h5>
            <p className='text-center'>News 2 details.....</p>
          </div>
          <div className='news-card'>
            <img
              className='news-card-image'
              src='/pictures/logo.jpg'
              alt='news image'
            />
            <h5
              className='text-center'
              style={{ fontSize: '25px', margin: '5px 0' }}
            >
              News 3
            </h5>
            <p className='text-center'>News 3 details.....</p>
          </div>
        </div>
        {/* // sxn accomplishment*/}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2
            style={{ margin: '3px 0', fontSize: '37px' }}
            className='font-gradient'
          >
            Accomplishments
          </h2>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>More than 100 players training</div>
          <div>5+ professional training staff</div>
          <div>Location: Abebe Bikila Stadium</div>
        </div>
        {/* // sxn players*/}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2
            style={{ margin: '3px 0', fontSize: '37px' }}
            className='font-gradient'
          >
            Players
          </h2>
        </div>
        <br />
        {/* // sxn coach*/}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2
            style={{ margin: '3px 0', fontSize: '37px' }}
            className='font-gradient'
          >
            Coach
          </h2>
        </div>
        <br />
      </main>

      <footer>footer</footer>
    </div>
  );
}
