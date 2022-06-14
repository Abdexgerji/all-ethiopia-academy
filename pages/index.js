import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CarouselComponent from '../components/Carousel';
import NavBar from '../components/NavBar';
import PlayerSVG from '../public/svg/my-svg/PlayerSVG';
import CoachSVG from '../public/svg/my-svg/CoachSVG';
import StadiumSVG from '../public/svg/my-svg/StadiumSVG';

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
    <>
      <Head>
        <title>Ethiopian Bunna</title>
        <meta name='description' content='All Ethiopia Soccer Academy' />
        <link rel='icon' href='/pictures/logo.jpg' />
      </Head>

      {/* // ! */}
      <div className='grass-background'></div>

      <main className='home-main'>
        <div className='first-view'>
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
        </div>
        {/* // sxn stats*/}

        <div
          style={{
            // marginBlock: '70px',
            minHeight: '100vh',
            paddingInline: '30px',
            // backgroundImage:
            //   'url(/pictures/daniel-norin-lBhhnhndpE0-unsplash.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2
              style={{
                margin: '3px 0',
                fontSize: '37px',
                marginBottom: '20px',
              }}
              className='font-gradient'
            >
              Stats
            </h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              className='stats-card'
              style={{
                width: '30%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #0080001c',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: ' center',
                }}
              >
                {/* svg */}
                <PlayerSVG
                  // fill='#008001'
                  fill='black'
                  width={'50%'}
                />
              </div>
              {/* Name */}
              <h3
                style={{
                  fontSize: ' 37px',
                  marginBlock: '0',
                  marginBottom: '10px',
                  color: 'yellow',
                }}
              >
                Trainers
              </h3>
              {/* Number */}

              <span
                style={{ fontSize: '52px', fontWeight: '900', color: 'red' }}
              >
                {' '}
                100+
              </span>
            </div>
            <div
              className='stats-card'
              style={{
                width: '30%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #0080001c',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: ' center',
                }}
              >
                {/* svg */}
                <CoachSVG
                  // fill='#008001'
                  fill='black'
                  width={'50%'}
                />
              </div>
              {/* Name */}
              <h3
                style={{
                  fontSize: ' 37px',
                  marginBlock: '0',
                  marginBottom: '10px',
                  color: 'yellow',
                }}
              >
                Training Staff
              </h3>
              {/* Number */}

              <span
                style={{ fontSize: '52px', fontWeight: '900', color: 'red' }}
              >
                {' '}
                5+
              </span>
            </div>
            <div
              className='stats-card'
              style={{
                width: '30%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #0080001c',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: ' center',
                }}
              >
                {/* svg */}
                <StadiumSVG
                  // fill='#008001'
                  fill='black'
                  width={'50%'}
                />
                {/* <img
                  style={{ width: '66%' }}
                  // src='/svg/stadium-green-edited.jpg'
                  src='/svg/stadium-black-edited.jpg'
                  alt='stadium'
                /> */}
              </div>
              {/* Name */}
              <h3
                style={{
                  fontSize: ' 37px',
                  marginBlock: '0',
                  marginBottom: '10px',
                  color: 'yellow',
                }}
              >
                Location
              </h3>
              {/* Number */}

              <span
                style={{ fontSize: '150%', fontWeight: '900', color: 'red' }}
              >
                {' '}
                Abebe Bikila Stadium
              </span>
            </div>
          </div>
        </div>
        {/* // sxn coach*/}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2
            style={{ margin: '3px 0', fontSize: '37px' }}
            className='font-gradient'
          >
            Training Staff
          </h2>
        </div>
        <br />
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
      </main>
    </>
  );
}
