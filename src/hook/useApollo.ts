import { useMemo } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from '@services/apollo/client';

export function useApollo(
  state?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  return useMemo<ApolloClient<NormalizedCacheObject>>(
    () => initializeApollo(state),
    [state]
  );
}
