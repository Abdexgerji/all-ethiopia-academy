import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import NextImage from '../components/NextImage';
import { Context } from '../context';
import BallSVG from '../public/svg/my-svg/BallSVG';

const About = () => {
  const { lang } = useContext(Context);

  return (
    <>
      <main className='main-about'>
        {/* // sxn first section */}
        <section className='first-section'>
          <NextImage
            src='/pictures/grass-img2.jpg'
            alt='All Ethiopia Soccer Academy Grass'
            layout='fill'
            objectFit='cover'
            objectPosition='0 57.5%'
            placeholder='blur'
            blurDataURL='/pictures/placeholder.jpg'
          />

          <h1>{lang === 'eng' ? 'ABOUT US' : 'ስለ እኛ'}</h1>
        </section>
        {/* // sxn second section */}
        <section className='second-section'>
          <h2>{lang === 'eng' ? 'Who We Are' : 'ማን ነን'}</h2>

          {lang === 'eng' ? (
            <p>
              We are <strong>All Ethiopia Soccer Academy</strong>. It is an
              academy withSport complex, fitness center and youth education
              facilities. It is founded by Khalid Mohammed and Abdulkerim Hassen
              in 2021. The center will provide health and fitness services that
              are good in quality and low in cost. All the facilities would be
              developed with no significant funding, rather relying on the hard
              work, dedication and donations from members, players, supporters,
              sponsors and the local community.
            </p>
          ) : (
            <p>
              እኛ <strong>ኦል ኢትዮጵያ ሶከር አካዳሚ</strong> ነን። አካዳሚው የስፖርት ማእከል ፣ የአካል
              ብቃት ማእከል እና የወጣቶች ትምህርት ተቋማት ይይዛል። በ2021 በካሊድ መሀመድ እና አብዱልከሪም ሀሰን
              የተመሰረተ ነው። ማዕከሉ ጥሩ የጤና እና የአካል ብቃት አገልግሎት ይሰጣል። እንዲሁም በጥራት እና
              በዝቅተኛ ወጪ፣ ሁሉም መገልገያዎች ይዘጋጃሉ። የገንዘብ ድጋፍ ሳይኖር፣ ይልቁንም በትጋት ላይ በመተማመን፣
              ከአባላት፣ ከተጫዋቾች፣ ከደጋፊዎች የተሰጡ ድጎማዎች፣ ስፖንሰሮች እና የአካባቢው ማህበረሰብ የተገኘ ነው።
            </p>
          )}

          <h2>{lang === 'eng' ? 'Objectives' : 'ዓላማዎች'}</h2>
          <ul>
            <li>
              {lang === 'eng'
                ? ' Creating a community and sustainable center in order to promote and enhance the prospects of sports activities in the region.'
                : 'ቀጣይነት ያለው ማእከል በመፍጠር እና በክልሉ ውስጥ የስፖርት እንቅስቃሴዎችን ያሳድጋል.'}
            </li>
            <li>
              {lang === 'eng'
                ? 'To adress multiple users in the sport sectors.'
                : 'በስፖርት ዘርፎች ውስጥ ብዙ ተጠቃሚዎችን ለማድረስ።'}
            </li>
            <li>
              {lang === 'eng'
                ? 'Watching community improve their health.'
                : 'የህብረተሰቡን ጤንነታቸውን ያሻሽላል።'}
            </li>
            <li>
              {lang === 'eng'
                ? ' Making professional players available for the international market.'
                : 'ፕሮፌሽናል ተጫዋቾችን ለአለም አቀፍ ገበያ ማቅረብ።'}
            </li>
            <li>
              {lang === 'eng'
                ? ' Helping the low-income youths to access sport activities and be disciplined.'
                : 'ዝቅተኛ ገቢ ያላቸውን ወጣቶች ስፖርታዊ እንቅስቃሴዎችን እንዲያገኙ እና በሥርዓት እንዲመሩ መርዳት።'}
            </li>
            <li>
              {lang === 'eng'
                ? 'Encourage sports in the community.'
                : 'በማህበረሰቡ ውስጥ የአካል ብቃት እንቅስቃሴዎች ማበረታታት።'}
            </li>
          </ul>
          <h2>{lang === 'eng' ? 'Goals' : 'ግቦች'}</h2>
          <ul>
            <li>
              {lang === 'eng'
                ? ' Getting the go-to platform from the government collaborative ways, for instance land to build this project on.'
                : 'ይህንን ፕሮጀክት ለመገንባት ከመንግስት የትብብር መንገዶች ወደ ማግኘት።'}
            </li>
            <li>
              {lang === 'eng'
                ? 'To expand our offerings to meet audience needs.'
                : 'የታዳሚ ፍላጎቶችን ለማሟላት የእኛን አቅርቦቶች ለማስፋት።'}
            </li>
            <li>
              {lang === 'eng'
                ? 'To reach 2 million active users by 2027g.'
                : 'በ2019 2 ሚሊዮን ንቁ ተጠቃሚዎችን ለመድረስ።'}
            </li>
          </ul>
        </section>
        {/* // sxn third section */}
        <section className='third-section'>
          {/* // sxn third section founders (khalid) section*/}
          <h2>{lang === 'eng' ? 'Founders' : 'መስራቾች'}</h2>
          <div id='khalid' className='image-name-position-wrapper'>
            <NextImage
              src='/pictures/coach-khalid2.jpg'
              alt='Coach Khalid'
              layout='fill'
              objectFit='cover'
              placeholder='blur'
              blurDataURL='/pictures/placeholder.jpg'
            />

            <div className='name-position-wrapper'>
              <h6 id='khalid'>
                {lang === 'eng' ? 'Coach Khalid Mohammed' : 'አሰልጣኝ ካሊድ መሀመድ'}
              </h6>
              <p>
                {lang === 'eng' ? 'Chief Executive Manager' : 'ዋና ሥራ አስኪያጅ'}
              </p>
            </div>
            {/* <BallSVG /> */}
          </div>
          <h4>{lang === 'eng' ? 'Career' : 'የተጫዋች ጊዜ'}</h4>
          <ul>
            <li>
              {lang === 'eng'
                ? 'Hope for Ethiopia head coach for three years.'
                : 'የኢትዮጵያ ዋና አሰልጣኝ ተስፋ ለሦስት ዓመታት።'}
            </li>
            <li>
              {lang === 'eng'
                ? 'Youth team premier league head coach.'
                : 'የወጣት ቡድን ፕሪሚየር ሊግ ዋና አሰልጣኝ።'}
            </li>
            <li>
              {lang === 'eng'
                ? '  Ethiopian coffee sports club four years Ethiopian premier league assistant & head coach.'
                : 'የኢትዮጵያ ቡና ስፖርት ክለብ የአራት አመት የኢትዮጵያ ፕሪምየር ሊግ ረዳት እና ዋና አሰልጣኝ'}
            </li>
            <li>
              {lang === 'eng'
                ? ' Dashen beer sports club two years Ethiopian premier league assistant & head coach.'
                : 'የዳሽን ቢራ ስፖርት ክለብ የሁለት አመት የኢትዮጵያ ፕሪምየር ሊግ ረዳት እና ዋና አሰልጣኝ'}
            </li>
            <li>
              {lang === 'eng'
                ? 'Ethiopian insurances head coach & leading team technic director two years higher league & under 17 head coach.'
                : 'የኢትዮጵያ ኢንሹራንስ ዋና አሰልጣኝ እና መሪ የቡድን ቴክኒክ ዳይሬክተር የሁለት አመት ከፍተኛ ሊግ እና ከ17 አመት በታች ዋና አሰልጣኝ።'}
            </li>
            <li>
              {lang === 'eng'
                ? '  Hlaba city sports club two years higher league head coach - Butajirra city sports club one year higher league head coach.'
                : 'የሃላባ ከተማ ስፖርት ክለብ የሁለት አመት ከፍተኛ ሊግ ዋና አሰልጣኝ - የቡታጅራ ከተማ ስፖርት ክለብ የአንድ አመት ከፍተኛ ሊግ ዋና አሰልጣኝ።'}
            </li>
          </ul>
          <h4>{lang === 'eng' ? 'Personal Achievement' : 'የግል ስኬት'}</h4>
          {lang ===
          (
            <p>
              As a <strong>coach</strong>
            </p>
          ) ? (
            ''
          ) : (
            <p>
              እንደ <strong>አሰልጣኝ</strong>
            </p>
          )}
          <ul>
            <li>
              {lang === 'eng'
                ? '   2011 e.c(2003) with Ethiopian coffee Ethiopian premier league champion.'
                : '2003 ከኢትዮጵያ ቡና ጋር የኢትዮጵያ ፕሪምየር ሊግ ሻምፒዮን ።'}
            </li>
            <li>
              {lang === 'eng'
                ? '2011 super cup champion.'
                : 'የ2003 ሱፐር ካፕ ሻምፒዮን'}
            </li>
            <li>
              {lang === 'eng'
                ? '2012 e.c Addis Ababa city cup champion as a player.'
                : 'የ2004 የአዲስ አበባ ከተማ ዋንጫ አሸናፊ'}
            </li>
            <li>
              {lang === 'eng'
                ? '1994 e.t national label cecfa champion.'
                : '1994  ብሔራዊ መለያ ሴካፋ ሻምፒዮን።'}
            </li>
            <li>
              {lang === 'eng'
                ? '1993 e.t national label cecfa bronze.'
                : '1993 ብሔራዊ መለያ ሴካፋ ነሐስ።'}
            </li>
            <li>
              {lang === 'eng'
                ? ' 1998 e.c club label Ethiopian premier league knockout champion.'
                : '1998 የኢትዮጵያ ፕሪምየር ሊግ የጥሎ ማለፍ አሸናፊ።'}
            </li>
            <li>
              {lang === 'eng'
                ? '2000, 2002,2003 Ethiopian premier league knockout champion.'
                : '2000 ፣ 2002 ፣ 2003 የኢትዮጵያ ፕሪምየር ሊግ የጥሎ ማለፍ ሻምፒዮን ።'}
            </li>
          </ul>
          {/* // sxn section third founders (Abdulkerim) section*/}{' '}
          <div
            id='abdulkerim'
            className='image-name-position-wrapper abdulkerim'
          >
            <NextImage
              src='/pictures/coach-abdulkerim2.jpg'
              alt='Coach Khalid'
              layout='fill'
              objectFit='cover'
              placeholder='blur'
              blurDataURL='/pictures/placeholder.jpg'
            />

            <div className='name-position-wrapper'>
              <h6>
                {lang === 'eng'
                  ? 'Coach Abdulkerim Hassen'
                  : 'አሰልጣኝ አብዱልከሪም ሀሰን'}
              </h6>
              <p>
                {lang === 'eng' ? 'Vice Executive Manager' : 'ምክትል ሥራ አስኪያጅ'}
              </p>
            </div>
            {/* <BallSVG /> */}
          </div>
          <h4>{lang === 'eng' ? 'Career' : 'የተጫዋች ጊዜ'}</h4>
          <ul>
            <li>
              {lang === 'eng'
                ? 'He played for St.George club from 2010-2013 for 4 years.'
                : 'በቅዱስ ጊዮርጊስ ክለብ ከ2010-2013 ለ4 ዓመታት ተጫውቷል።'}
            </li>
            <li>
              {lang === 'eng'
                ? 'He also played for Ethiopia coffee club from 2016-2019 for 2 years EPA club from 2013- 2015 for 2 years.'
                : 'በኢትዮጵያ ቡና ክለብ ከ2016-2019 ለ2 አመት የኢ.ፓ ክለብ ከ2013-2015 ለ2 አመታት ተጫውቷል።'}{' '}
              {/* //! check the above translation */}
            </li>
            <li>
              {' '}
              {lang === 'eng'
                ? 'Commercial bank of Ethiopia from 2015-2017 for 2 years.'
                : 'የኢትዮጵያ ንግድ ባንክ ክለብ ከ2015-2017 ለ2 ዓመታት።'}
            </li>
          </ul>
          <h4>{lang === 'eng' ? 'Personal Achievement' : 'የግል ስኬት'}</h4>
          <ul>
            <li>
              {lang === 'eng'
                ? 'One of the key players of the Ethiopian national team of under 17 in the years 2013-2015.'
                : 'በ2013-2015 ከ17 አመት በታች የኢትዮጵያ ብሄራዊ ቡድን ቁልፍ ተጫዋቾች መካከል አንዱ።'}
            </li>
            <li>
              {lang === 'eng'
                ? '3 Ethiopian premier league trophies'
                : '3 የኢትዮጵያ ፕሪምየር ሊግ ዋንጫዎች'}
            </li>
            <li>
              {lang === 'eng'
                ? '3 city cup trophies 2 Ethiopian knockout trophies 1 trophy of the best player of city cup.'
                : '3 የሲቲ ካፕ ዋንጫዎች 2 የኢትዮጵያ የጥሎ ማለፍ ዋንጫዎች 1 ዋንጫ የከተማ ዋንጫ ምርጥ ተጫዋች።'}
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default About;
