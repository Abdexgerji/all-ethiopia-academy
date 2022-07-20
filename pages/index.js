import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import PlayerSVG from '../public/svg/my-svg/PlayerSVG';
import CoachSVG from '../public/svg/my-svg/CoachSVG';
import StadiumSVG from '../public/svg/my-svg/StadiumSVG';
import StarsUnderlineSVG from '../public/svg/my-svg/StarsUnderlineSVG';
import ArrowDownSVG from '../public/svg/my-svg/ArrowDownSVG';
import { Context } from '../context';

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
  const { lang, setLang } = useContext(Context);
  setLang('amh');
  console.log({ lang });
  // router
  const router = useRouter();

  return (
    <>
      <main className='home-main'>
        {/* // sxn 1st section */}
        <section className='first-section '>
          <div className='first-section-wrapper horizontal-padding-for-whole-site'>
            <div className='left-content'>
              <h3>
                {lang === 'eng'
                  ? 'All Ethiopia Soccer Academy'
                  : 'ኦል ኢትዮጵያ ሶከር አካዳሚ'}
              </h3>

              {lang === 'eng' ? (
                <>
                  {' '}
                  <h1 className='full-headline'>
                    The home of future football{' '}
                    <span style={{ position: 'relative' }}>
                      stars
                      <StarsUnderlineSVG className='underline-svg' />
                    </span>
                  </h1>
                </>
              ) : (
                <>
                  <h1 className='full-headline'>የወደፊቱ የእግር ኳስ ኮከቦች ምንጭ </h1>
                </>
              )}
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
            <h2>
              {lang === 'eng'
                ? 'Best Soccer Academy In Ethiopia'
                : 'በኢትዮጵያ ምርጡ የእግር ኳስ አካዳሚ'}
            </h2>
            <p>
              {lang === 'eng'
                ? 'We are different. We strive to make the best out of our trainees and help them compete in the best leagues! '
                : 'እኛ የተለያዩ ነን። ሰልጣኞቻችንን አንደኛ ለማድረግ እና በምርጥ ሊጎች እንዲወዳደሩ ለመርዳት እንተጋለን!'}
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
                <h3 className='stat-name'>
                  {lang === 'eng' ? 'Trainees' : 'ሰልጣኞች'}
                </h3>
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
                <h3 className='stat-name'>
                  {lang === 'eng' ? 'Training Staff' : 'አሰልጣኞች'}
                </h3>
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
                <h3 className='stat-name'>
                  {lang === 'eng' ? 'Stadium' : 'ስታዲየም'}
                </h3>
                {/* Number */}

                <span className='stat-number stadium-name'>
                  {lang === 'eng' ? 'Abebe Bikila Stadium' : ' አበበ ቢቂላ ስታዲየም'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* // sxn 4th / the team*/}

        <section className='fourth-section'>
          <h2 className='section-heading'>
            {lang === 'eng' ? 'The Team' : 'መስራቾቹ'}
          </h2>
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
                <h3>
                  {lang === 'eng' ? 'Coach Khalid Mohammed' : 'አሰልጣኝ ካሊድ መሀመድ'}
                </h3>
                <h5>
                  {lang === 'eng' ? 'Chief Executive Manager' : 'ዋና ሥራ አስኪያጅ'}
                </h5>
                <ul>
                  <li>
                    {lang === 'eng' ? 'Former Bunna Player' : 'የቀድሞ የቡና ተጫዋች'}
                  </li>
                  <li>
                    {lang === 'eng' ? 'Former Bunna Coach' : 'የቀድሞ የቡና አሰልጣኝ'}
                  </li>
                  <li>
                    {lang === 'eng'
                      ? ' Youth team premier league head coach'
                      : 'የወጣት ቡድን ፕሪሚየር ሊግ ዋና አሰልጣኝ'}
                  </li>
                  <li>
                    {lang === 'eng'
                      ? 'Ethiopian premier league champion'
                      : 'የኢትዮጵያ ፕሪምየር ሊግ ሻምፒዮን'}
                  </li>
                </ul>
                <button>{lang === 'eng' ? 'More' : 'ተጨማሪ'}</button>
              </div>
            </div>
          </div>
          <div className='abdulkerim-grid'>
            <div className='coach-abdulkerim-description'>
              <div>
                <h3>
                  {lang === 'eng'
                    ? 'Coach Abdulkerim Hassen'
                    : 'አሰልጣኝ አብዱልከሪም ሀሰን'}
                </h3>
                <h5>
                  {lang === 'eng' ? 'Vice Executive Manager' : 'ምክትል ሥራ አስኪያጅ'}
                </h5>
                <ul>
                  <li>
                    {lang === 'eng'
                      ? ' Former St. George Player'
                      : 'የቀድሞ የቅዱስ ጊዮርጊስ ተጫዋች'}
                  </li>
                  <li>
                    {lang === 'eng' ? 'Former Bunna Player' : 'የቀድሞ የቡና ተጫዋች'}
                  </li>
                  <li>
                    {lang === 'eng'
                      ? 'Key Player Ethiopian national team of under 17'
                      : 'ቁልፍ የኢትዮጵያዊ ከ17 አመት በታች ብሄራዊ ቡድን ተጫዋች'}
                  </li>
                  <li>
                    {lang === 'eng'
                      ? 'Ethiopian premier league trophies'
                      : 'የኢትዮጵያ ፕሪምየር ሊግ ዋንጫዎች'}
                  </li>
                </ul>
                <button>{lang === 'eng' ? 'More' : 'ተጨማሪ'}</button>
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
          <p className='gallery-watermark'>
            {lang === 'eng' ? 'GALLERY' : 'ፎቶዎች'}
          </p>
          <div className='gallery-images-wrapper'>
            {galleryImages.map((image, index) => (
              <>
                <div
                  key={index}
                  className='image-wrapper'
                  style={{
                    position: 'relative',
                    aspectRatio: '5/5',
                  }}
                >
                  <Image
                    // loader={myLoader}
                    src={image}
                    alt='All Ethiopia Soccer Academy'
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
          <h2 className='section-heading'>
            {lang === 'eng' ? 'Latest News' : 'አዳዲስ ዜናዎች'}
          </h2>

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
              <h5 className=' news-card-header'>
                {lang === 'eng' ? 'Ethiopia vs Egypt' : 'ኢትዮጵያ vs ግብፅ'}
              </h5>
              <p className='news-card-description '>
                {lang === 'eng'
                  ? 'Ethiopia defeated egypt for AFCON qualifiers'
                  : 'ኢትዮጵያ በአፍሪካ ዋንጫ ማጣሪያ ግብፅን አሸንፋለች'}
              </p>
              <p className='news-card-date'>
                {lang === 'eng' ? 'June 22, 2021' : 'ጁን 22, 2021'}
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
                  src='/pictures/img7.jpg'
                  alt='All Ethiopia Soccer Academy Interview'
                  layout='fill'
                  className='news-card-image'
                  objectFit='cover'
                />
              </div>

              <h5 className=' news-card-header'>
                {lang === 'eng' ? 'Our Interview' : 'የኛ ቃለ ምልልስ'}
              </h5>
              <p className='news-card-description '>
                {lang === 'eng'
                  ? 'We were interviewed by Kana TV'
                  : 'በቃና ቃለ መጠይቅ ተደረገልን'}
                TV
              </p>
              <p className='news-card-date'>
                {lang === 'eng' ? 'Mar 05, 2022' : 'ማርች 05, 2022'}
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
                  src='/pictures/img11.jpg'
                  alt='All Ethiopia Soccer Academy Class Training'
                  layout='fill'
                  className='news-card-image'
                  objectFit='cover'
                />
              </div>
              <h5 className=' news-card-header'>
                {lang === 'eng'
                  ? 'Class Based Trainings'
                  : 'ክፍል ውስጥ የተመሰረቱ ስልጠናዎች'}
              </h5>
              <p className='news-card-description '>
                {lang === 'eng'
                  ? 'We offer in-class trainings to our players'
                  : 'ለተጫዋቾቻችን በክፍል ውስጥ ስልጠናዎችን እንሰጣለን'}
              </p>
              <p className='news-card-date'>
                {lang === 'eng' ? 'Feb 12, 2022' : 'ፌብሩዋሪ 12, 2022'}
              </p>
            </div>
          </div>
          <button className='news-button'>
            {lang === 'eng' ? 'More News' : 'ተጨማሪ ዜናዎች'}
          </button>
        </section>

        {/*  // sxn seventh section / contact */}
        <section className='seventh-section horizontal-padding-for-whole-site'>
          <div className='wrapper'>
            <div className='image-wrapper'>
              <Image
                // loader={myLoader}
                src='/pictures/grass-img.jpg'
                alt='Grass Image'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <button>{lang === 'eng' ? 'CONTACT US' : 'አግኙን'}</button>
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
