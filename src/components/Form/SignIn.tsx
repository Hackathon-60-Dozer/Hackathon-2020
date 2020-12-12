import React, { useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { initializeFirebase } from '@services/firebase/client';
import { useAuth } from '@hook/useAuth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Input from '@components/Input';

initializeFirebase();
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

type FormData = {
  email: string;
  plainPassword: string;
};

export const SignInForm: React.FC = () => {
  const router = useRouter();
  const { session } = useAuth();
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName);
  });

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [router, session]);

  return (
    <div>
      <Input
        label={'Nom'}
        name={'email'}
        id={'email'}
        type={'email'}
        inputRef={register}
      />
      <Input
        label={'Nom'}
        name={'name'}
        id={'name'}
        type={'password'}
        inputRef={register}
      />
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignInForm;
