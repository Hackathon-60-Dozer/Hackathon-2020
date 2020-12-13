import React from 'react';
import { AppProps } from 'next/app';
import AuthProvider from '@context/auth';
import { ApolloProvider } from '@apollo/client';
import { APOLLO_STATE_PROP_NAME } from '@services/apollo/client';
import { useApollo } from '@hook/useApollo';
import theme from '@theme';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import '@brainhubeu/react-carousel/lib/style.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps[APOLLO_STATE_PROP_NAME]);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
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
