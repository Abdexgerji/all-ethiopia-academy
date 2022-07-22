import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { Context } from '../../context';

const News = () => {
  const { lang } = useContext(Context);

  return (
    <>
      <main className='main-news'>
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
          <div className='text-wrapper'>
            <h1> {lang === 'eng' ? 'NEWS' : 'ዜናዎች'}</h1>
            <h5>
              {lang === 'eng'
                ? 'Follow our latest news and updates'
                : 'የቅርብ ጊዜ ዜናዎቻችን እና አዳዲስ ነገሮችን ይከተሉ'}
            </h5>
          </div>
        </section>
        {/* // sxn second section */}
        <section className='second-section'>
          <div className='section-wrapper'>
            <h2>{lang === 'eng' ? 'Latest News' : 'አዳዲስ ዜናዎች'} </h2>
            <div className='news-cards-wrapper'>
              <div className='news-card'>
                <div className='image-wrapper'>
                  <Image
                    // loader={myLoader}
                    src='/pictures/ethiopia-vs-egypt.jpg'
                    alt='Ethiopia vs Egypt'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='content-wrapper'>
                  <h5>
                    {lang === 'eng' ? 'Egypt vs Ethiopia' : 'ኢትዮጵያ vs ግብፅ'}
                  </h5>
                  <p>
                    {lang === 'eng'
                      ? 'Ethiopia defeated egypt for AFCON qualifiers'
                      : 'ኢትዮጵያ በአፍሪካ ዋንጫ ማጣሪያ ግብፅን አሸንፋለች'}
                  </p>
                </div>
                <p className='date'>
                  {lang === 'eng' ? 'June 22, 2022' : 'ጁን 22, 2021'}
                </p>
              </div>
              <div className='news-card'>
                <div className='image-wrapper'>
                  <Image
                    // loader={myLoader}
                    src='/pictures/img7.jpg'
                    alt='Kana Interview'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='content-wrapper'>
                  <h5>{lang === 'eng' ? 'Our Interview' : 'የኛ ቃለ ምልልስ'}</h5>
                  <p>
                    {lang === 'eng'
                      ? 'We were interviewed by Kana TV'
                      : 'በቃና ቲቪ ቃለ መጠይቅ ተደረገልን'}
                  </p>
                </div>
                <p className='date'>
                  {lang === 'eng' ? 'Mar 05, 2022' : 'ማርች 05, 2022'}
                </p>
              </div>
              <div className='news-card'>
                <div className='image-wrapper'>
                  <Image
                    // loader={myLoader}
                    src='/pictures/img11.jpg'
                    alt='Class Based Training'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='content-wrapper'>
                  <h5>
                    {lang === 'eng'
                      ? 'Class Based Trainings '
                      : 'ክፍል ውስጥ የተመሰረቱ ስልጠናዎች'}
                  </h5>
                  <p>
                    {lang === 'eng'
                      ? 'We offer in class trainings to our players'
                      : 'ለተጫዋቾቻችን በክፍል ውስጥ ስልጠናዎችን እንሰጣለን'}
                  </p>
                </div>
                <p className='date'>
                  {lang === 'eng' ? 'Feb 12, 2022' : 'ፌብሩዋሪ 12, 2022'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default News;
