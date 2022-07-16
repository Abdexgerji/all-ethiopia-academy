import Image from 'next/image';
import Link from 'next/link';

const news = () => {
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
            <h1>NEWS</h1>
            <h5>Follow our latest news and updates</h5>
          </div>
        </section>
        {/* // sxn second section */}
        <section className='second-section'>
          <div className='section-wrapper'>
            <h2>Latest News</h2>
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
                  <h5>Egypt vs Ethiopia</h5>
                  <p>Ethiopia defeated egypt for AFCON qualifiers</p>
                </div>
                <p className='date'>June 22, 2022</p>
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
                  <h5>Our Interview</h5>
                  <p>We were interviewed by Kana TV</p>
                </div>
                <p className='date'>Mar 05, 2022</p>
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
                  <h5>Class Based Trainings </h5>
                  <p>We offer in class trainings to our players</p>
                </div>
                <p className='date'>Feb 12, 2022</p>
              </div>
            </div>{' '}
          </div>
        </section>
      </main>
    </>
  );
};

export default news;
