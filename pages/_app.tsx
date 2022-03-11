import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Nav from '../components/nav';
import client from '../apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <main>
        <Nav />
        <div className="main-content">
          <Component {...pageProps} />
        </div>
      </main>
    </ApolloProvider>
  );
}

export default MyApp;
