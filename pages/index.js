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
        <link rel='icon' href='/pictures/logo.ico' />
      </Head>

      <main className='home-main'>
        <section
          className='first-view'
          style={{
            display: 'flex',
          }}
        >
          {/* h1 wrapper */}
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
              className='animate-fade-in-up'
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
              // className=''
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
        </section>
        {/* // sxn short about */}
        <section className='second-view full-vh'>
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
        </section>

        {/* // sxn stats*/}
        <section className='stat-wrapper'>
          {/* background image of grass*/}
          {/* //future should try parallax with this one instead of using background-image*/}
          <div
            style={{
              background: 'url(/pictures/soccer-field.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              backgroundAttachment: 'fixed', //for parallx effect
            }}
            className='next-image-wrapper'
          ></div>

          <div
            style={{
              paddingInline: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              height: '100%',
            }}
          >
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
                </div>
                {/* Name */}
                <h3 className='stat-name'>Stadium</h3>
                {/* Number */}

                <span className='stat-number' style={{ fontSize: '150%' }}>
                  {' '}
                  Abebe Bikila Stadium
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* // sxn the team*/}

        <section style={{ marginBottom: '30px' }}>
          <h2
            style={{ margin: '23px 0', fontSize: '37px', textAlign: 'center' }}
          >
            The Team
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1px 1fr',
              gridColumnGap: '50px',
            }}
          >
            <div>
              {' '}
              <div
                className='image-wrapper'
                style={{
                  position: 'relative',
                  width: '42%',
                  aspectRatio: '440/500',
                  marginLeft: 'auto',
                }}
              >
                <Image
                  // loader={myLoader}
                  src='/pictures/coach-khalid-cropped.jpg'
                  alt='Coach Khalid'
                  layout='fill'
                  style={
                    {
                      // transform: 'scaleX(-1)', // to flip image horizontally
                    }
                  }
                  objectFit='cover'
                  objectPosition='top'
                />
              </div>
            </div>

            {/*vertical divider line  */}
            <div
              style={{ width: '1px', height: '100%', background: '#00000033' }}
            ></div>
            <div>
              {' '}
              <div style={{ width: '50%' }}>
                <h3 style={{ fontSize: 'max(1.7vw,18px)' }}>
                  Coach Khalid Mohammed
                </h3>
                <h5
                  style={{
                    marginTop: '-14px',
                    color: '#9e9e9ead',
                    fontWeight: '500',
                    fontSize: '17px',
                    marginBottom: '2px',
                  }}
                >
                  Chief Executive Manager
                </h5>
                <ul style={{ marginLeft: '25px', marginBlock: '32px' }}>
                  <li>Former Bunna Player</li>
                  <li>Former Bunna Coach </li>
                  <li>Youth team premier league head coach</li>
                  <li>Ethiopian premier league champion</li>
                </ul>
                <button
                  style={{
                    border: 'none',
                    background: 'none',
                    color: '#920b00',
                    textDecoration: 'underline 2px',
                    textUnderlinePosition: 'under',
                    fontSize: '15px',
                    cursor: 'pointer',
                    marginLeft: '32px',
                  }}
                >
                  More
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1px 1fr',
              gridColumnGap: '50px',
              marginTop: '50px',
            }}
          >
            <div>
              {' '}
              <div style={{ width: '50%', marginLeft: 'auto' }}>
                <h3 style={{ fontSize: 'max(1.7vw,18px)' }}>
                  Coach Abdulkerim Hassen
                </h3>
                <h5
                  style={{
                    marginTop: '-14px',
                    color: '#9e9e9ead',
                    fontWeight: '500',
                    fontSize: '17px',
                    marginBottom: '2px',
                  }}
                >
                  Vice Executive Manager
                </h5>
                <ul style={{ marginLeft: '25px', marginBlock: '32px' }}>
                  <li>Former Bunna Player</li>
                  <li>Former Bunna Coach </li>
                  <li>Youth team premier league head coach</li>
                  <li>Ethiopian premier league champion</li>
                </ul>
                <button
                  style={{
                    border: 'none',
                    background: 'none',
                    color: '#920b00',
                    textDecoration: 'underline 2px',
                    textUnderlinePosition: 'under',
                    fontSize: '15px',
                    cursor: 'pointer',
                    marginLeft: '32px',
                  }}
                >
                  More
                </button>
              </div>
            </div>
            {/*vertical divider line  */}
            <div
              style={{ width: '1px', height: '100%', background: '#00000033' }}
            ></div>
            <div>
              {' '}
              <div
                className='image-wrapper'
                style={{
                  position: 'relative',
                  width: '42%',
                  aspectRatio: '440/500',
                  marginRight: 'auto',
                }}
              >
                <Image
                  // loader={myLoader}
                  src='/pictures/coach-abdulkerim.jpg'
                  alt='Coach Abdulkerim'
                  layout='fill'
                  style={
                    {
                      // transform: 'scaleX(-1)', // to flip image horizontally
                    }
                  }
                  objectFit='cover'
                  objectPosition='top'
                />
              </div>
            </div>
          </div>
        </section>

        {/* // sxn news*/}
        <section style={{ background: '#00000005', paddingBottom: '1px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2
              style={{
                margin: '23px 0',
                fontSize: '37px',
                marginBottom: '10px',
              }}
              className=''
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
                  className='news-card-image'
                  objectFit='cover'
                />
              </div>
              <h5 className='text-center news-card-header'>
                Ethiopia vs Egypt
              </h5>
              <p className='news-card-description text-center'>
                Ethiopia defeated egypt for AFCON qualifiers
              </p>
              <p className='news-card-date'>June 22, 2021</p>
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
                  className='news-card-image'
                  objectFit='cover'
                />
              </div>

              <h5 className='text-center news-card-header'>
                All Ethiopia Soccer Academy
              </h5>
              <p className='news-card-description text-center'>
                Our organization is planning on a mega project
              </p>
              <p className='news-card-date'>Jan 02, 2022</p>
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
                  className='news-card-image'
                  objectFit='cover'
                />
              </div>
              <h5 className='text-center news-card-header'>News 3</h5>
              <p className='news-card-description text-center'>
                News 3 details.....
              </p>
              <p className='news-card-date'>Dec 17, 2021</p>
            </div>
          </div>
          <button className='news-button'>More News</button>
        </section>
      </main>
    </>
  );
}

// ! old stuff
{
  /* <div
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
<h3 style={{ marginBlock: '2px' }}>Khalid MOHAMMED</h3>
<p style={{ fontWeight: 'bold' }}>Chief excutive manager</p>
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
<h3 style={{ marginBlock: '2px' }}>ABDULKERIM HASSEN</h3>
<p>Vice excutive manager</p>
<p>About</p>
</div> */
}
