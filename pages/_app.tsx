import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Nav />
      <div className="main-content">
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;
