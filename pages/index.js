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
import { primaryYellow } from '../components/css-variables';

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

      <main className='home-main'>
        <div
          className='first-view'
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              position: 'absolute',
              width: '98vw',
              zIndex: '2',
              marginTop: '-370px',
            }}
          >
            <h1
              style={{
                marginBlock: '0',
                fontSize: 'max(4vw,30px)',
                fontFamily: 'serif',
                textAlign: 'center',
                color: 'white',
                boxShadow: '0 0 11px #00000094',
                display: 'inline-block',
                margin: 'auto',
                padding: '2px',
                backdropFilter: 'blur(1px)',
              }}
              // className='yellow-red-font-style'
            >
              All Ethiopia Soccer Academy
            </h1>
          </div>
          {/* // sxn carousel */}
          <div
            style={{
              marginTop: '10px',
            }}
          >
            <CarouselComponent />
          </div>
        </div>
        {/* // sxn short about */}
        <div className='second-view full-vh'>
          <div className='text-wrapper'>
            <h2>Best Soccer Academy In Ethiopia</h2>
            <p>
              We are different. We strive to make the best out of our trainees
              and help them compete in the best leagues!
            </p>
          </div>
          <div
            className='image-wrapper'
            style={{
              position: 'relative',
              width: '50%',
              aspectRatio: '7/5',
            }}
          >
            <Image
              // loader={myLoader}
              src='/pictures/training-image.jpg'
              alt='Training Image'
              layout='fill'
              style={{}}
              objectFit='cover'
            />
          </div>
        </div>

        {/* // sxn stats*/}
        <div className='stat-wrapper'>
          {/* background image of grass*/}
          {/* //future should try parallax with this one instead of using background-image*/}
          <div
            style={{
              background: 'url(/pictures/soccer-field.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              backgroundAttachment: 'fixed',
            }}
            className='next-image-wrapper'
          >
            {/* <Image
              // loader={myLoader}
              src='/pictures/soccer-field.jpg'
              alt='Training Image'
              layout='fill'
              style={{ position: 'absolute' }}
              objectFit='cover'
              objectPosition='bottom'
            /> */}
          </div>

          <div
            style={{
              paddingInline: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              height: '100%',
            }}
          >
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2
              style={{
                margin: '3px 0',
                fontSize: '37px',
                marginBottom: '20px',
              }}
              className='yellow-red-font-style'
            >
              Stats
            </h2>
          </div> */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className='stats-card'>
                <div className='icon-wrapper'>
                  {/* svg */}
                  <PlayerSVG
                    // fill='#008001'
                    fill='white'
                    width={'50%'}
                    className='icon'
                  />
                </div>
                {/* Name */}
                <h3 className='stat-name'>Trainees</h3>
                {/* Number */}

                <span className='stat-number'> 100+</span>
              </div>
              <div className='stats-card'>
                <div className='icon-wrapper'>
                  {/* svg */}
                  <CoachSVG
                    // fill='#008001'
                    fill='white'
                    width={'50%'}
                    className='icon'
                    style={{ padding: '5px 0' }}
                  />
                </div>
                {/* Name */}
                <h3 className='stat-name'>Training Staff</h3>
                {/* Number */}

                <span className='stat-number'> 5+</span>
              </div>
              <div className='stats-card'>
                <div className='icon-wrapper'>
                  {/* svg */}
                  <StadiumSVG
                    // fill='#008001'
                    fill='white'
                    width={'50%'}
                    className='icon'
                  />
                  {/* <img
                  style={{ width: '66%' }}
                  // src='/svg/stadium-green-edited.jpg'
                  src='/svg/stadium-black-edited.jpg'
                  alt='stadium'
                /> */}
                </div>
                {/* Name */}
                <h3 className='stat-name'>Location</h3>
                {/* Number */}

                <span className='stat-number' style={{ fontSize: '150%' }}>
                  {' '}
                  Abebe Bikila Stadium
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* // sxn coach*/}

        <div
          style={{
            minHeight: '100vh',
            // backdropFilter: 'blur(4px)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2
              style={{ margin: '3px 0', fontSize: '37px' }}
              className='yellow-red-font-style'
            >
              Training Staff
            </h2>
          </div>
          {/* //sxn coach cards */}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '25%',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
              className='coach-card'
            >
              <div
                className='image-wrapper'
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '7/5',
                }}
              >
                <Image
                  // loader={myLoader}
                  src='/pictures/coach-khalid.jpg'
                  alt='Coach Khalid'
                  layout='fill'
                  style={{
                    borderTopRightRadius: '16px',
                    borderTopLeftRadius: '16px',
                  }}
                  objectFit='cover'
                />
              </div>
              <h3 style={{ color: primaryYellow, marginBlock: '2px' }}>
                Khalid MOHAMMED
              </h3>
              <p style={{ fontWeight: 'bold', color: 'white' }}>
                Chief excutive manager
              </p>
              <p>About</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '25%',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
              className='coach-card'
            >
              <div
                className='image-wrapper'
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '7/5',
                }}
              >
                <Image
                  // loader={myLoader}
                  src='/pictures/coach-abdulkerim.jpg'
                  alt='Coach Khalid'
                  layout='fill'
                  style={{
                    borderTopRightRadius: '16px',
                    borderTopLeftRadius: '16px',
                    padding: '9px !important',
                  }}
                  objectFit='cover'
                  objectPosition='top'
                />
              </div>
              <h3 style={{ color: primaryYellow, marginBlock: '2px' }}>
                ABDULKERIM HASSEN
              </h3>
              <p>Vice excutive manager</p>
              <p>About</p>
            </div>
          </div>
          <button
            className='news-button'
            style={{
              padding: '9px 22px',
              margin: 'auto',
              display: 'block',
              marginBlock: '39px',
              color: 'white',
              fontSize: '22px',
              fontWeight: '600',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
            }}
          >
            Learn More
          </button>
        </div>

        {/* // sxn news*/}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2
            style={{ margin: '3px 0', fontSize: '37px', marginBottom: '10px' }}
            className='yellow-red-font-style'
          >
            Latest News
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div className='news-card'>
            {/* <img
              className='news-card-image'
              src='/pictures/logo.jpg'
              alt='news image'
            /> */}
            <div
              className='image-wrapper'
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '7/5',
              }}
            >
              <Image
                // loader={myLoader}
                src='/pictures/ethiopia-vs-egypt.jpg'
                alt='Ethiopia Vs Egypt'
                layout='fill'
                style={{
                  borderTopRightRadius: '16px',
                  borderTopLeftRadius: '16px',
                }}
                objectFit='cover'
              />
            </div>
            <h5
              className='text-center yellow-red-font-style'
              style={{ fontSize: '25px', margin: '5px 0' }}
            >
              Ethiopia vs Egypt
            </h5>
            <p style={{ color: 'white' }} className='text-center'>
              Ethiopia defeated egypt for AFCON qualifiers
            </p>
          </div>
          <div className='news-card'>
            <div
              className='image-wrapper'
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '7/5',
              }}
            >
              <Image
                // loader={myLoader}
                src='/pictures/logo.jpg'
                alt='All Ethiopia Soccer Academy'
                layout='fill'
                style={{
                  borderTopRightRadius: '16px',
                  borderTopLeftRadius: '16px',
                }}
                objectFit='cover'
              />
            </div>

            <h5
              className='text-center yellow-red-font-style'
              style={{ fontSize: '25px', margin: '5px 0' }}
            >
              All Ethiopia Soccer Academy
            </h5>
            <p style={{ color: 'white' }} className='text-center'>
              Our organization is planning on a mega project
            </p>
          </div>
          <div className='news-card'>
            <div
              className='image-wrapper'
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '7/5',
              }}
            >
              <Image
                // loader={myLoader}
                src='/pictures/logo.jpg'
                alt='All Ethiopia Soccer Academy'
                layout='fill'
                style={{
                  borderTopRightRadius: '16px',
                  borderTopLeftRadius: '16px',
                }}
                objectFit='cover'
              />
            </div>
            <h5
              className='text-center yellow-red-font-style'
              style={{ fontSize: '25px', margin: '5px 0' }}
            >
              News 3
            </h5>
            <p style={{ color: 'white' }} className='text-center'>
              News 3 details.....
            </p>
          </div>
        </div>
        <button
          className='news-button'
          style={{
            padding: '9px 22px',
            margin: 'auto',
            display: 'block',
            marginBlock: '39px',
            color: 'white',
            fontSize: '22px',
            fontWeight: '600',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
          }}
        >
          More News
        </button>
      </main>
    </>
  );
}
