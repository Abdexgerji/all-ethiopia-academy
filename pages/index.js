import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import SimpleImageSlider from 'react-simple-image-slider';
import { useEffect, useState } from 'react';

const images = [
  {
    url: '/pictures/131671999_129624305632242_8101065752514849759_n.jpg',
  },
  {
    url: '/pictures/download6.jpg',
  },
  {
    url: '/pictures/images.jpg',
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
        <meta name='description' content='Ethiopia Bunna"s website' />
        <link rel='icon' href='/favicon.ico' />
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
      <main className='home-main'>
        {/* // sxn carousel */}
        {/* {innerWidth} */}
        <div
          style={{
            marginBlock: '15px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <SimpleImageSlider
            // autoPlay={true}
            width={innerWidth > 950 ? 944 : '90%'}
            bgColor='transparent'
            height={innerWidth > 500 ? 400 : 180}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
        {/* <div className='stadium-image'>
          <img src='/pictures/download (7).jpg' alt='bunna logo' />
          <h1 className='bunna-heading'>Ethiopia Bunna F.C.</h1>
        </div> */}
        {/* // sxn news*/}
        <h2
          style={{ margin: '3px 0', fontSize: '37px' }}
          className='font-gradient'
        >
          Latest News
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '90%',
          }}
        >
          <div className='news-card'>
            <img
              className='news-card-image'
              src='/pictures/download (7).jpg'
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
              src='/pictures/download (7).jpg'
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
              src='/pictures/download (7).jpg'
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
        <h2
          style={{ margin: '3px 0', fontSize: '17px' }}
          className='font-gradient'
        >
          Accomplishments
        </h2>
        <br />
        {/* // sxn players*/}
        <h2
          style={{ margin: '3px 0', fontSize: '37px' }}
          className='font-gradient'
        >
          Players
        </h2>
        <br />
        {/* // sxn coach*/}
        <h2
          style={{ margin: '3px 0', fontSize: '37px' }}
          className='font-gradient'
        >
          Coach
        </h2>
        <br />
      </main>

      <footer>footer</footer>
    </div>
  );
}
