import React from 'react';
import { AppProps } from 'next/app';
import AuthProvider from '@src/context/auth';
import { ApolloProvider } from '@apollo/client';
import { APOLLO_STATE_PROP_NAME } from '@src/services/apollo/client';
import { useApollo } from '@src/hook/useApollo';

import '@src/tailwind.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps[APOLLO_STATE_PROP_NAME]);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <Component {...pageProps} />
        <style jsx global>{`
          html,
          body,
          #__next {
            height: 100%;
          }
        `}</style>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
