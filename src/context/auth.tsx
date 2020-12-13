import React, { createContext, useCallback, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import {
  getUserFromCookie,
  mapUserData,
  removeUserCookie,
  setUserCookie,
} from '@helpers/auth';
import { Session, Account } from '@types';
import { initializeFirebase } from '@services/firebase/client';
import { setToken } from '@services/apollo/client';
import { gql, useLazyQuery } from '@apollo/client';

initializeFirebase();
const auth = firebase.auth();

export interface AuthContext {
  session: Session;
  account: Account;
  logout: (redirect?: boolean) => Promise<void>;
  signIn: (
    email: string,
    plainPassword: string
  ) => Promise<firebase.auth.UserCredential>;
}

const initialValue = {
  session: null,
  account: null,
  logout: () => null,
  signIn: () => null,
};

export const authContext = createContext<AuthContext>(initialValue);

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useAuthProvider();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuthProvider = (): AuthContext => {
  const [fetchViewer, { data }] = useLazyQuery<{ viewer: Account }>(gql`
    query {
      viewer {
        firstName
        lastName
      }
    }
  `);
  const [session, setSession] = useState<Session>(null);
  const router = useRouter();

  const logout = useCallback(
    async (redirect = true) => {
      return auth
        .signOut()
        .then(() => {
          if (redirect) router.push('/');
        })
        .catch((e) => {
          console.error(e);
        });
    },
    [router]
  );

  // dev only
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // @ts-ignore
      window.logout = logout;
    }
  }, [logout]);

  useEffect(() => {
    if (!!session) {
      fetchViewer();
    }
  }, [fetchViewer, session]);

  const signIn = useCallback(async (email, plainPassword) => {
    return await firebase
      .auth()
      .signInWithEmailAndPassword(email, plainPassword);
  }, []);

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = auth.onIdTokenChanged((user) => {
      if (user) {
        const sessionData = mapUserData(user);
        setUserCookie(sessionData);
        setSession(sessionData);
        setToken(sessionData.token);
      } else {
        removeUserCookie();
        setSession(null);
        setToken(null);
      }
    });

    const userFromCookie = getUserFromCookie();
    setSession(userFromCookie);
    setToken(userFromCookie?.token);

    return () => {
      cancelAuthListener();
    };
  }, []);

  return {
    session,
    account: data?.viewer || null,
    logout,
    signIn,
  };
};

export const withAuth = <P extends Record<string, any>>(
  Component: React.ComponentType<P>
): React.ComponentType<P> =>
  class WithAuth extends React.Component<P> {
    render() {
      return (
        <AuthProvider>
          <Component {...this.props} />
        </AuthProvider>
      );
    }
  };

export default AuthProvider;
