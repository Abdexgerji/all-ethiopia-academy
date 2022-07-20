import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/home.css';
import '../styles/contact.css';
import '../styles/about.css';
import '../styles/news.css';
import Head from 'next/head';
import { Provider } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Head>
          <title>All Ethiopia Soccer Academy</title>
          <meta name='description' content='All Ethiopia Soccer Academy' />
          <link rel='icon' href='/pictures/logo.ico' />
        </Head>
        <Header />
        <div style={{ minHeight: 'calc(100vh - 97px)' }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
