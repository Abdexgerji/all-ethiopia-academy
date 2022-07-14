import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PlayerSVG from '../public/svg/my-svg/PlayerSVG';
import CoachSVG from '../public/svg/my-svg/CoachSVG';
import StadiumSVG from '../public/svg/my-svg/StadiumSVG';
import StarsUnderlineSVG from '../public/svg/my-svg/StarsUnderlineSVG';
import ArrowDownSVG from '../public/svg/my-svg/ArrowDownSVG';

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

const galleryImages = [
  '/pictures/img13-croped.jpg',
  '/pictures/img5.jpg',
  '/pictures/img12.jpg',
  '/pictures/img1.jpg',
  '/pictures/img4.jpg',
  '/pictures/img15-croped.jpg',
  '/pictures/img17-croped.jpg',
  '/pictures/img3.jpg',
];

export default function Home() {
  // router
  const router = useRouter();

  return (
    <>
      <main className='home-main'>
        {/* // sxn 1st section */}
        <section className='first-section '>
          <div className='first-section-wrapper horizontal-padding-for-whole-site'>
            <div className='left-content'>
              <h3>All Ethiopia Soccer Academy</h3>
              <h1 className='full-headline'>
                The home of future football{' '}
                <span style={{ position: 'relative' }}>
                  stars
                  <StarsUnderlineSVG className='underline-svg' />
                </span>
              </h1>
              {/* down icon*/}
              <ArrowDownSVG className='arrow-down-svg' />
            </div>
          </div>
        </section>
        {/* // sxn 2nd / short about */}
        <section className='second-section full-vh'>
          <div className='image-wrapper'>
            <Image
              // loader={myLoader}
              src='/pictures/training-image.jpg'
              alt='Training Image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='text-wrapper horizontal-padding-for-whole-site'>
            <h2>Best Soccer Academy In Ethiopia</h2>
            <p>
              We are different. We strive to make the best out of our trainees
              and help them compete in the best leagues!
            </p>
          </div>
        </section>

        {/* // sxn 3rd / stats*/}
        <section className='third-section'>
          {/* background image of grass*/}
          {/* //future should try parallax with this one instead of using background-image*/}
          <div className='next-image-wrapper parallax-image'></div>

          {/* to center vertically */}
          <div className='cards-first-wrapper horizontal-padding-for-whole-site'>
            {/* to arrange cards horizontally, to d-flex*/}
            <div className='cards-second-wrapper'>
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

                <span className='stat-number stadium-name'>
                  {' '}
                  Abebe Bikila Stadium
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* // sxn 4th / the team*/}

        <section className='fourth-section'>
          <h2 className='section-heading'>The Team</h2>
          <div className='khalid-grid'>
            <div>
              <div className='image-wrapper margin-left-auto'>
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
            <div className='vertical-divider'></div>
            <div className='coach-khalid-description'>
              <div>
                <h3>Coach Khalid Mohammed</h3>
                <h5>Chief Executive Manager</h5>
                <ul>
                  <li>Former Bunna Player</li>
                  <li>Former Bunna Coach </li>
                  <li>Youth team premier league head coach</li>
                  <li>Ethiopian premier league champion</li>
                </ul>
                <button>More</button>
              </div>
            </div>
          </div>
          <div className='abdulkerim-grid'>
            <div className='coach-abdulkerim-description'>
              <div>
                <h3>Coach Abdulkerim Hassen</h3>
                <h5>Vice Executive Manager</h5>
                <ul>
                  <li>Former Bunna Player</li>
                  <li>Former Bunna Coach </li>
                  <li>Youth team premier league head coach</li>
                  <li>Ethiopian premier league champion</li>
                </ul>
                <button>More</button>
              </div>
            </div>
            {/*vertical divider line  */}
            <div className='vertical-divider'></div>
            <div>
              {' '}
              <div className='image-wrapper margin-right-auto'>
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

        {/* // sxn gallery*/}
        <section className='fifth-section horizontal-padding-for-whole-site'>
          {/* THE WATERMARK */}
          <p className='gallery-watermark'>GALLERY</p>
          <div className='gallery-images-wrapper'>
            {galleryImages.map((image) => (
              <>
                <div
                  className='image-wrapper'
                  style={{
                    position: 'relative',
                    aspectRatio: '5/5',
                  }}
                >
                  <Image
                    // loader={myLoader}
                    src={image}
                    alt='Ethiopia Vs Egypt'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </>
            ))}
          </div>
        </section>

        {/* // sxn news*/}
        <section className='sixth-section'>
          <h2 className='section-heading'>Latest News</h2>

          <div className='news-cards-wrapper horizontal-padding-for-whole-site'>
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
                  src='/pictures/ethiopia-vs-egypt.jpg'
                  alt='Ethiopia Vs Egypt'
                  layout='fill'
                  className='news-card-image'
                  objectFit='cover'
                />
              </div>
              <h5 className=' news-card-header'>Ethiopia vs Egypt</h5>
              <p className='news-card-description '>
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
                  src='/pictures/img7.jpg'
                  alt='All Ethiopia Soccer Academy'
                  layout='fill'
                  className='news-card-image'
                  objectFit='cover'
                />
              </div>

              <h5 className=' news-card-header'>Our Interview</h5>
              <p className='news-card-description '>
                We were interviewed by Kana TV
              </p>
              <p className='news-card-date'>Mar 05, 2022</p>
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
                  src='/pictures/img11.jpg'
                  alt='All Ethiopia Soccer Academy'
                  layout='fill'
                  className='news-card-image'
                  objectFit='cover'
                />
              </div>
              <h5 className=' news-card-header'>Class Based Trainings</h5>
              <p className='news-card-description '>
                We offer in-class trainings to our players
              </p>
              <p className='news-card-date'>Feb 12, 2022</p>
            </div>
          </div>
          <button className='news-button'>More News</button>
        </section>

        {/*  // sxn seventh section / contact */}
        <section className='seventh-section horizontal-padding-for-whole-site'>
          <div className='wrapper'>
            <div className='image-wrapper'>
              <Image
                // loader={myLoader}
                src='/pictures/grass-img.jpg'
                alt='All Ethiopia Soccer Academy'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <button>CONTACT US</button>
          </div>
        </section>
      </main>
    </>
  );
}

// ! old stuff

// sxn section 1
//   {/* h1 wrapper */}
//   <div
//   style={{
//     display: 'flex',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     position: 'absolute',
//     width: '98vw',
//     zIndex: '2',
//     marginTop: '-370px',
//   }}
// >
//   <h1
//     className='animate-fade-in-up'
//     style={{
//       marginBlock: '0',
//       fontSize: 'max(4vw,30px)',
//       fontFamily: 'serif',
//       textAlign: 'center',
//       color: 'white',
//       boxShadow: '0 0 11px #00000094',
//       display: 'inline-block',
//       margin: 'auto',
//       padding: '2px',
//       backdropFilter: 'blur(1px)',
//     }}
//     // className=''
//   >
//     All Ethiopia Soccer Academy
//   </h1>
// </div>
// {/* // sxn carousel */}
// <div
//   style={{
//     marginTop: '10px',
//   }}
// >
//   <CarouselComponent />
// </div>

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
