import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { AppProps } from 'next/app';
import merge from 'deepmerge';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient;
let token;

export const setToken = (newToken: string): void => {
  token = newToken;
};

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_APOLLO_URI,
  credentials: 'include',
});

const logoutLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ extensions }) => {
      switch (extensions.code) {
        case 'UNAUTHENTICATED':
          if (typeof window !== 'undefined') {
            const current = window.localStorage.getItem('logout');
            if (current === undefined || current === null) {
              window.localStorage.setItem('logout', String(Date.now()));
              setToken(null);
            }
          }
      }
    });
  }
});

const authMiddleware = new ApolloLink((operation, forward) => {
  if (token) {
    operation.setContext(({ headers = {} }) => {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      };
    });
  }
  return forward(operation);
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: logoutLink.concat(authMiddleware.concat(httpLink)),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState: NormalizedCacheObject = null
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache);

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps['pageProps']
): AppProps['pageProps'] {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}
