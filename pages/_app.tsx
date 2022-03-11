import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Nav from '../components/nav';
import client from '../apollo-client';
import Header from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <main>
        <Nav />
        <section className="main-content">
          <Header />
          <Component {...pageProps} />
        </section>
      </main>
    </ApolloProvider>
  );
}

export default MyApp;
