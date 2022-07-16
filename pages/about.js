import Image from 'next/image';
import Link from 'next/link';
import BallSVG from '../public/svg/my-svg/BallSVG';

const about = () => {
  return (
    <>
      <main className='main-about'>
        {/* // sxn first section */}
        <section className='first-section'>
          <div className='image-wrapper'>
            <Image
              // loader={myLoader}
              src='/pictures/grass-img2.jpg'
              alt='All Ethiopia Soccer Academy Grass'
              layout='fill'
              objectFit='cover'
              objectPosition='0 57.5%'
            />
          </div>
          <h1>ABOUT US</h1>
        </section>
        {/* // sxn second section */}
        <section className='second-section'>
          <h2>Who We Are</h2>
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
          <h2>Objectives</h2>
          <ul>
            <li>
              Creating a community and sustainable center in order to promote
              and enhance the prospects of sports activities in the region.
            </li>
            <li>To adress multiple users in the sport sectors.</li>
            <li>Watching community improve their health.</li>
            <li>
              Making professional players available for the international
              market.
            </li>
            <li>
              Helping the low-income youths to access sport activities and be
              disciplined.
            </li>
            <li>Encourage sports in the community.</li>
          </ul>
          <h2>Goals</h2>
          <ul>
            <li>
              Getting the go-to platform from the government collaborative ways
              for instance land to build this project on.
            </li>
            <li> To expand our offerings to meet audience needs.</li>
            <li>To reach 2 million active users by 2027g.</li>
          </ul>
        </section>
        {/* // sxn third section */}
        <section className='third-section'>
          {/* // sxn third section founders (khalid) section*/}
          <h2>Founders</h2>
          <div className='image-name-position-wrapper'>
            <div className='image-wrapper'>
              <Image
                // loader={myLoader}
                src='/pictures/coach-khalid2.jpg'
                alt='Coach Khalid'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='name-position-wrapper'>
              <h6>Coach Khalid Mohammed</h6>
              <p>Chief Executive Manager</p>
            </div>
            {/* <BallSVG /> */}
          </div>
          <h4>Career</h4>
          <ul>
            <li>Hope for Ethiopia head coach for three years.</li>
            <li>Youth team premier league head coach.</li>
            <li>
              Ethiopian coffee sports club four years Ethiopian premier league
              assistant & head coach.
            </li>
            <li>
              Dashen beer sports club two years Ethiopian premier league
              assistant & head coach.
            </li>
            <li>
              Ethiopian insurances head coach & leading team technic director
              two years higher league & under 17 head coach.
            </li>
            <li>
              Hlaba city sports club two years higher league head coach -
              Butajirra city sports club one year higher league head coach.
            </li>
          </ul>
          <h4>Personal Achievement</h4>
          <p>
            As a <strong>coach</strong>
          </p>
          <ul>
            <li>
              2011 e.c(2003) with Ethiopian coffee Ethiopian premier league
              champion.
            </li>
            <li>2011 e.c supper cup champion.</li>
            <li>2012 e.c Addis Ababa city cup champion as a player’s.</li>
            <li>1994 e.t national label cecfa champion.</li>
            <li>1993 e.t national label cecfa bronze.</li>
            <li>
              1998 e.c club label Ethiopian premier league nock out champion.
            </li>
            <li>2000, 2002,2003 Ethiopian premier league nock out champion.</li>
          </ul>
          {/* // sxn section third founders (Abdulkerim) section*/}{' '}
          <div className='image-name-position-wrapper abdulkerim'>
            <div className='image-wrapper'>
              <Image
                // loader={myLoader}
                src='/pictures/coach-abdulkerim2.jpg'
                alt='Coach Khalid'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='name-position-wrapper'>
              <h6>Coach Abdulkerim Hassen</h6>
              <p>Vice Executive Manager</p>
            </div>
            {/* <BallSVG /> */}
          </div>
          <h4>Career</h4>
          <ul>
            <li>He played for St.George club from 2010-2013 for 4 years.</li>
            <li>
              He also played for Ethiopia coffee club from 2016-2019 for 2 years
              EPA club from 2013- 2015 for 2 years.
            </li>
            <li> Commercial bank of Ethiopia from 2015-2017 for 2 years.</li>
          </ul>
          <h4>Personal Achievement</h4>
          <ul>
            <li>
              One of the key players of the Ethiopian national team of under 17
              in the years 2013-2015.
            </li>
            <li>3 Ethiopian premier league trophies</li>
            <li>
              3 city cup trophies 2 Ethiopian knockout trophies 1 trophy of the
              best player of city cup.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default about;
