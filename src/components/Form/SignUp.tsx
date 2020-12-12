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
import yup from '@yup';
import { gql, useMutation } from '@apollo/client';
import translations from '@translations';
import routes, { rootUrl } from '@constants/routes';

initializeFirebase();

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  plainPassword: string;
  plainPasswordConfirm: string;
};

const SIGNUP_MUTATION = gql`
  mutation signUp($input: SignUpInput) {
    signUp(input: $input)
  }
`;

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  plainPassword: yup.string().required(),
  plainPasswordConfirm: yup
    .string()
    .test('equal', 'Les mots de passe de correspondent pas', function (v) {
      // Don't use arrow functions
      const ref = yup.ref('plainPassword');
      return v === this.resolve(ref);
    })
    .required(),
});

export const SignUpForm: React.FC = () => {
  const [signUp] = useMutation(SIGNUP_MUTATION);
  const router = useRouter();
  const [error, setError] = useState();
  const { session, logout } = useAuth();
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInSuccessUrl: rootUrl,
    siteName: 'Toulocal',
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        fullLabel: 'Continuer avec Google',
        requireDisplayName: true,
      },
      {
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        fullLabel: 'Continuer avec Facebook',
        requireDisplayName: true,
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult(
        authResult: any,
        redirectUrl?: string
      ): boolean {
        console.log(
          authResult.additionalUserInfo.profile.family_name,
          authResult.additionalUserInfo.profile.given_name,
          authResult.additionalUserInfo.profile.name
        );
        // "LEPAS" "Benjamin" "Benjamin LEPAS"
        // undefined "Octanium" "Octanium"

        router.push(redirectUrl);
        return true;
      },
      async signInFailure(e: firebaseui.auth.AuthUIError): Promise<void> {
        setError(translations.errors[e.code] || e.message);
      },
    },
  };

  useEffect(() => {
    if (session) {
      router.push(routes.signIn.url);
    }
  }, [router, session]);

  const onSubmit = useCallback(
    ({ email, plainPassword }: FormData) => {
      signUp({
        variables: {
          input: {
            email,
            plainPassword,
          },
        },
      }).then(() => {
        router.push('/');
      });
    },
    [router, signUp]
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label={'Prénom'}
          name={'firstName'}
          id={'firstName'}
          type={'text'}
          error={errors?.firstName?.message}
          inputRef={register}
        />
        <Input
          label={'Nom'}
          name={'lastName'}
          id={'lastName'}
          type={'text'}
          error={errors?.lastName?.message}
          inputRef={register}
        />
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
          Inscription
        </Button>
      </form>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

      {session && <Button onClick={() => logout(false)}>logout</Button>}
    </div>
  );
};

export default SignUpForm;
