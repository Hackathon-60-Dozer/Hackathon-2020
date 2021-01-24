import { useContext } from 'react';
import { AuthContext, authContext } from '@src/context/auth';

export const useAuth = (): AuthContext => {
  return useContext(authContext);
};
