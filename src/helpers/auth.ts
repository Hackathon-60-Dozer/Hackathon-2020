import cookies from 'js-cookie';
import { Session } from '@types';

export const mapUserData = (user: Record<string, any>): Session => {
  const { uid, email, xa, ya } = user;
  return {
    id: uid,
    email,
    token: xa || ya,
  };
};

export const getUserFromCookie = (): Session => {
  const cookie = cookies.get('auth');
  if (!cookie) {
    return;
  }
  return JSON.parse(cookie);
};

export const setUserCookie = (session: Session): void => {
  cookies.set('auth', session, {
    // firebase id tokens expire in one hour
    // set cookie expiry to match
    expires: 1 / 24,
  });
};

export const removeUserCookie = () => cookies.remove('auth');
