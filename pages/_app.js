import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 97px)' }}>
        <Component {...pageProps} />;
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
