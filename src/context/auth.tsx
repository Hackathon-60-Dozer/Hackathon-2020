import React, { createContext, useCallback, useEffect, useState } from 'react';
import firebase from 'firebase';
import { useRouter } from 'next/router';
import {
  getUserFromCookie,
  mapUserData,
  removeUserCookie,
  setUserCookie,
} from '@helpers/auth';
import { Session } from '@types';
import { initializeFirebase } from '@services/firebase/client';

initializeFirebase();
const auth = firebase.auth();

export interface AuthContext {
  session: Session;
  logout: (redirect?: boolean) => Promise<void>;
  signIn: (
    email: string,
    plainPassword: string
  ) => Promise<firebase.auth.UserCredential>;
}

const initialValue = {
  session: null,
  logout: () => null,
  signIn: () => null,
};

export const authContext = createContext<AuthContext>(initialValue);

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useAuthProvider();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuthProvider = (): AuthContext => {
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
      } else {
        removeUserCookie();
        setSession(null);
      }
    });

    const userFromCookie = getUserFromCookie();
    setSession(userFromCookie);

    return () => {
      cancelAuthListener();
    };
  }, []);

  return {
    session,
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
