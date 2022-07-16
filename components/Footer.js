import Image from 'next/image';
import Link from 'next/link';
import FacebookSVG from '../public/svg/my-svg/FacebookSVG';
import LocationSVG from '../public/svg/my-svg/LocationSVG';
import MailSVG from '../public/svg/my-svg/MailSVG';
import TelegramSVG from '../public/svg/my-svg/TelegramSVG';
import TelephoneSVG from '../public/svg/my-svg/TelephoneSVG';
import YoutubeSVG from '../public/svg/my-svg/YoutubeSVG';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-wrapper'>
          <div className='col-1-wrapper'>
            <div className='image-wrapper'>
              <Image
                // loader={myLoader}
                src='/pictures/logo-copy.jpg'
                alt='Ethiopia Vs Egypt'
                layout='fill'
                className='news-card-image'
                objectFit='cover'
              />
            </div>
            <h5>All Ethiopia Soccer Academy</h5>
            <div className='svgs-wrapper'>
              <YoutubeSVG className='svg' />
              <TelegramSVG className='svg' />
              <FacebookSVG className='svg' />
            </div>
          </div>
          <div className='col-2-wrapper'>
            <ul>
              <Link href='/'>
                <li className='nav-list'>
                  <a>Home</a>
                </li>
              </Link>

              <Link href='/about'>
                <li className='nav-list'>
                  <a>About</a>
                </li>
              </Link>
              <Link href='/news'>
                <li className='nav-list'>
                  <a>News</a>
                </li>
              </Link>
              <Link href='/contact'>
                <li className='nav-list'>
                  <a>Contact</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className='col-3-wrapper'>
            <ul>
              <li>
                <LocationSVG /> Mesalemiya, Addis Ababa, Ethiopia
              </li>
              <li>
                <TelephoneSVG /> +251-911111111
              </li>
              <li>
                <MailSVG /> allethiopiaacademy@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* // sxn copyright */}
        <div className='copyright-wrapper'>
          &copy; All Ethiopia Soccer Academy
        </div>
      </footer>
    </>
  );
};

export default Footer;
