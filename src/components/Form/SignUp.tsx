import React, { useCallback, useEffect, useState } from 'react';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { initializeFirebase } from '@src/services/firebase/client';
import { useAuth } from '@src/hook/useAuth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@src/yup';
import { gql, useMutation } from '@apollo/client';
import translations from '@src/translations';
import routes, { rootUrl } from '@src/constants/routes';
import { setToken } from '@src/services/apollo/client';
import { Button, TextField } from '@material-ui/core';

initializeFirebase();

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  plainPassword: string;
  plainPasswordConfirm: string;
};

const SIGNUP_MUTATION = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(input: $input)
  }
`;

const ADD_USER_INFO_MUTATION = gql`
  mutation addUserInfo($input: AddUserInfoInput!) {
    addUserInfo(input: $input)
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
      const ref = yup.ref('plainPassword');
      return v === this.resolve(ref);
    })
    .required(),
});

export const SignUpForm: React.FC = () => {
  const [addUserInfo] = useMutation(ADD_USER_INFO_MUTATION);
  const [signUp] = useMutation(SIGNUP_MUTATION);
  const router = useRouter();
  const [error, setError] = useState<string>();
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
    ],
    callbacks: {
      signInSuccessWithAuthResult(
        authResult: any,
        redirectUrl?: string
      ): boolean {
        if (authResult.additionalUserInfo.isNewUser) {
          firebase
            .auth()
            .currentUser.getIdToken()
            .then((token) => {
              setToken(token);

              addUserInfo({
                variables: {
                  input: {
                    firstName: authResult.additionalUserInfo.profile.given_name,
                    lastName: authResult.additionalUserInfo.profile.family_name,
                  },
                },
              })
                .then(() => {
                  router.push(redirectUrl);
                })
                .catch(() => {
                  setError('Erreur interne.');
                });
            });
        }
        return false;
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
  }, [logout, router, session]);

  const onSubmit = useCallback(
    ({ plainPasswordConfirm, ...input }: FormData) => {
      signUp({
        variables: {
          input,
        },
      })
        .then(() => {
          router.push('/');
        })
        .catch((e) => {
          setError('Erreur interne');
        });
    },
    [router, signUp]
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label={'Prénom'}
          name={'firstName'}
          id={'firstName'}
          type={'text'}
          helperText={errors?.firstName?.message}
          inputRef={register}
        />
        <TextField
          label={'Nom'}
          name={'lastName'}
          id={'lastName'}
          type={'text'}
          helperText={errors?.lastName?.message}
          inputRef={register}
        />
        <TextField
          label={'Email'}
          name={'email'}
          id={'email'}
          type={'email'}
          helperText={errors?.email?.message}
          inputRef={register}
        />
        <TextField
          label={'Mot de passe'}
          name={'plainPassword'}
          id={'plainPassword'}
          type={'password'}
          helperText={errors?.plainPassword?.message}
          inputRef={register}
        />
        <TextField
          label={'Confirmer le mot de passe'}
          name={'plainPasswordConfirm'}
          id={'plainPasswordConfirm'}
          type={'password'}
          helperText={errors?.plainPasswordConfirm?.message}
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
