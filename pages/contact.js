import Image from 'next/image';
import Link from 'next/link';
import FacebookSVG from '../public/svg/my-svg/FacebookSVG';
import LocationSVG from '../public/svg/my-svg/LocationSVG';
import MailSVG from '../public/svg/my-svg/MailSVG';
import TelegramSVG from '../public/svg/my-svg/TelegramSVG';
import TelephoneSVG from '../public/svg/my-svg/TelephoneSVG';
import YoutubeSVG from '../public/svg/my-svg/YoutubeSVG';

const contact = () => {
  return (
    <>
      <main className='main-contact'>
        {/* // sxn 1 */}
        <section className='first-section'>
          <div className='image-wrapper'>
            <Image
              // loader={myLoader}
              src='/pictures/img5.jpg'
              alt='All Ethiopia Soccer Academy'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <h1>CONTACT US</h1>
        </section>

        {/* // sxn 2 */}
        <section className='second-section'>
          <div className='wrapper'>
            <div className='send-message'>
              <div>
                <h3>Send Message</h3>
                <div className='inputs-wrapper'>
                  <label>Name</label>
                  <input type='text' />
                  <label>Email</label>
                  <input type='text' />
                  <label>Message</label>
                  <textarea></textarea>
                </div>
                <button>Send</button>
              </div>
            </div>
            <div className='address'>
              <div>
                <h3>Address</h3>
                <div className='info-wrapper'>
                  <div className='contact-info'>
                    <div className='sub-info'>
                      <LocationSVG fill='black' /> <span>Location</span>{' '}
                    </div>
                    <span className='main-info'>
                      Mesalemiya, Addis Ababa, Ethiopia
                    </span>
                  </div>
                  <hr />
                  <div className='contact-info'>
                    <div className='sub-info phone'>
                      <TelephoneSVG fill='black' /> <span>Phone</span>{' '}
                    </div>

                    <div className='main-info phone'>
                      <div>+251-911111111</div>
                      <div>+251-922222222</div>
                    </div>
                  </div>
                  <hr />
                  <div className='contact-info'>
                    <div className='sub-info'>
                      <MailSVG fill='black' /> <span>Mail</span>{' '}
                    </div>
                    <span className='main-info mail'>
                      allethiopiaacademy@gmail.com
                    </span>
                  </div>
                  <hr />
                </div>
                <div className='icons-wrapper'>
                  <YoutubeSVG className='yt' fill='black' />
                  <TelegramSVG className='tg' fill='black' />
                  <FacebookSVG className='fb' fill='black' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // sxn 3 / map */}
        <section className='third-section'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27441.56061849931!2d38.72200746369189!3d9.040055265094436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b88a67e9b380b%3A0x8c5b9441be02495e!2zQWJlYmUgQmlraWxhIFN0YWRpdW0gfCBLdWFzZSBNZWRhIHwg4Yqg4Ymg4YmgIOGJouGJguGIiyDhiqXhiLXhibPhi7Xhi6jhiJ0gfCDhirPhiLUg4Yic4Yuz!5e0!3m2!1sen!2set!4v1657823531489!5m2!1sen!2set'
            width='800'
            height='400'
            style={{ border: 0, width: '100%', marginBottom: '-4px' }}
            allowFullScreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          >
            Loading map ...
          </iframe>
        </section>
      </main>
    </>
  );
};

export default contact;
