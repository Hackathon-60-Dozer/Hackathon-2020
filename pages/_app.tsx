import React from 'react';
import { AppProps } from 'next/app';
import AuthProvider from '@context/auth';
import { ApolloProvider } from '@apollo/client';
import { APOLLO_STATE_PROP_NAME } from '@services/apollo/client';
import { useApollo } from '@hook/useApollo';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps[APOLLO_STATE_PROP_NAME]);

  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
