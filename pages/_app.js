import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';
import '../styles/contact.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ethiopian Bunna</title>
        <meta name='description' content='All Ethiopia Soccer Academy' />
        <link rel='icon' href='/pictures/logo.ico' />
      </Head>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 97px)' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
