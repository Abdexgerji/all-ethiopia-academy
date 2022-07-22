import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { Context } from '../context';
import FacebookSVG from '../public/svg/my-svg/FacebookSVG';
import LocationSVG from '../public/svg/my-svg/LocationSVG';
import MailSVG from '../public/svg/my-svg/MailSVG';
import TelegramSVG from '../public/svg/my-svg/TelegramSVG';
import TelephoneSVG from '../public/svg/my-svg/TelephoneSVG';
import YoutubeSVG from '../public/svg/my-svg/YoutubeSVG';

const Footer = () => {
  const { lang, setLang } = useContext(Context);

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
            <h5>
              {lang === 'eng'
                ? 'All Ethiopia Soccer Academy'
                : 'ኦል ኢትዮጵያ ሶከር አካዳሚ'}
            </h5>
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
                  <a>{lang === 'eng' ? 'Home' : 'ዋና ገጽ'}</a>
                </li>
              </Link>

              <Link href='/about'>
                <li className='nav-list'>
                  <a>{lang === 'eng' ? 'About' : 'ስለ እኛ'}</a>
                </li>
              </Link>
              <Link href='/news'>
                <li className='nav-list'>
                  <a>{lang === 'eng' ? 'News' : 'ዜናዎች'}</a>
                </li>
              </Link>
              <Link href='/contact'>
                <li className='nav-list'>
                  <a>{lang === 'eng' ? 'Contact' : 'አግኙን'}</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className='col-3-wrapper'>
            <ul>
              <li>
                <LocationSVG />{' '}
                {lang === 'eng'
                  ? 'Mesalemiya, Addis Ababa, Ethiopia'
                  : 'መሰሌሚያ, አዲስ አበባ, ኢትዮጵያ'}
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
