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

      {/* // ! */}
      <div className='grass-background'>
        <Image
          // loader={myLoader}
          src='/pictures/daniel-norin-lBhhnhndpE0-unsplash.jpg'
          alt='Grass background'
          className='grass-background'
          width={500}
          height={500}
          priority={true} //image will appear first
          style={{ display: 'none !important' }}
        />
      </div>

      <main className='home-main'>
        <div
          className='first-view'
          style={{
            display: 'flex',
            backdropFilter: 'blur(4px)',
            marginTop: '75px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <h1
              style={{
                marginBlock: '0',
                fontSize: '60px',
                textAlign: 'center',
                color: 'yellow',
                textShadow: '6px 4px 4px #ff1f1f5e',
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
              opacity: '0.9',
            }}
          >
            <CarouselComponent />
          </div>
        </div>
        {/* // sxn stats*/}

        <div
          style={{
            paddingInline: '30px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                  fill='yellow'
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
                Trainees
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
                  fill='yellow'
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
                  fill='yellow'
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
