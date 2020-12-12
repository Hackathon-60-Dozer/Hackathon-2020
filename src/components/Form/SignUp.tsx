import React, { useCallback, useEffect, useState } from 'react';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { initializeFirebase } from '@services/firebase/client';
import { useAuth } from '@hook/useAuth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@components/Input';
import Button from '@components/Button';
import translations from '@translations';
import yup from '@yup';

initializeFirebase();
const uiConfig: firebaseui.auth.Config = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  siteName: 'Toulocal',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      fullLabel: 'Continuer avec Google',
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      fullLabel: 'Continuer avec Facebook',
    },
  ],
};

type FormData = {
  email: string;
  plainPassword: string;
  plainPasswordConfirm: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  plainPassword: yup.string().required(),
  plainPasswordConfirm: yup
    .string()
    .test('equal', 'Les mots de passe de correspondent pas', function (v) {
      // Don't use arrow functions
      const ref = yup.ref('plainPassword');
      return v !== this.resolve(ref);
    })
    .required(),
});

export const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState();
  const { session, signIn, logout } = useAuth();
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [router, session]);

  const onSubmit = useCallback(
    ({ email, plainPassword }: FormData) => {
      console.log({ email, plainPassword });
      signIn(email, plainPassword)
        .then((val) => {
          console.log(val);
        })
        .catch((e) => {
          setError(translations.errors[e.code] || e.message);
        });
    },
    [signIn]
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label={'Email'}
          name={'email'}
          id={'email'}
          type={'email'}
          error={errors?.email?.message}
          inputRef={register}
        />
        <Input
          label={'Mot de passe'}
          name={'plainPassword'}
          id={'plainPassword'}
          type={'password'}
          error={errors?.plainPassword?.message}
          inputRef={register}
        />
        <Input
          label={'Confirmer le mot de passe'}
          name={'plainPasswordConfirm'}
          id={'plainPasswordConfirm'}
          type={'password'}
          error={errors?.plainPasswordConfirm?.message}
          inputRef={register}
        />

        {error && <span style={{ color: 'red' }}>{error}</span>}
        <Button disabled={Object.keys(errors).length > 0} type={'submit'}>
          Connexion
        </Button>
      </form>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

      {session && <Button onClick={() => logout(false)}>logout</Button>}
    </div>
  );
};

export default SignUpForm;
