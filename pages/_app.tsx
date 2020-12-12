import React from 'react';
import { AppProps } from 'next/app';
import AuthProvider from '@context/auth';
import { ApolloProvider } from '@apollo/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { APOLLO_STATE_PROP_NAME } from '@services/apollo/client';
import { useApollo } from '@hook/useApollo';
import theme from '@theme';

const GlobalStyle = createGlobalStyle`
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
`;

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps[APOLLO_STATE_PROP_NAME]);

  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
