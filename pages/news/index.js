import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import NextImage from '../../components/NextImage';
import { Context } from '../../context';
import newsData from '../../data/newsData';

const News = () => {
  const { lang } = useContext(Context);

  return (
    <>
      <main className='main-news'>
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
              {/* newsData */}

              {newsData.map((news, index) => (
                <Link href={`news/${news.id}`} key={index}>
                  <div className='news-card'>
                    <NextImage
                      src={news.imageLocation}
                      alt={news.title}
                      layout='fill'
                      objectFit='cover'
                      placeholder='blur'
                      blurDataURL='/pictures/placeholder.jpg'
                    />

                    <div className='content-wrapper'>
                      <h5>
                        {lang === 'eng' ? news.title : news.amharic.title}
                      </h5>
                      <p>
                        {lang === 'eng'
                          ? news.description
                          : news.amharic.description}
                      </p>
                    </div>
                    <p className='date'>
                      {lang === 'eng' ? news.date : news.amharic.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default News;
