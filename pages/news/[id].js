import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import newsData from '../../data/newsData';

const SingleNews = () => {
  const router = useRouter();
  const { id } = router.query;

  const { lang } = useContext(Context);

  const [currentNews, setCurrentNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // find the news based on the slug id
      const currentNews1 = newsData.find((news) => news.id === Number(id));

      setCurrentNews(currentNews1);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // setCurrentNews(currentNews1);

  // if (id) console.log({ currentNews, newsData, id });

  if (loading)
    return (
      <main className='main-news-id'>
        <div className='spinner'></div>
      </main>
    );
  if (!currentNews)
    return (
      <main className='main-news-id'>
        <h1>
          {lang === 'eng'
            ? 'No news found! Try a different URL.'
            : 'ምንም ዜና አልተገኘም! የተለየ URL ይሞክሩ።'}
        </h1>
      </main>
    );
  return (
    <main className='main-news-id'>
      <iframe
        // width='560'
        height='315'
        // src='https://www.youtube.com/embed/LBzevHPDGag'
        src={currentNews?.iframeUrl}
        // title='YouTube video player'
        title={currentNews?.title}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>

      <h2 className='title'>
        {lang === 'eng' ? currentNews?.title : currentNews.amharic.title}
      </h2>
      <p className='description'>
        {lang === 'eng'
          ? currentNews?.description
          : currentNews.amharic.description}
      </p>
      <p className='date'>
        {lang === 'eng' ? currentNews?.date : currentNews.amharic.date}
      </p>
    </main>
  );
};

export default SingleNews;
