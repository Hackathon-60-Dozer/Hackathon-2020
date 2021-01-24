import React, { useCallback, useEffect, useState } from 'react';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import { initializeFirebase } from '@src/services/firebase/client';
import { useAuth } from '@src/hook/useAuth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import translations from '@src/translations';
import {
  Button,
  TextField,
  InputAdornment,
  Link as MUILink,
  Grid,
  Typography,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import routes from '@src/constants/routes';

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
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Veuillez enter une adresse mail valide.')
    .required('Veuillez entrer une adresse email.'),
  plainPassword: yup.string().required('Veuillez enter un mot de passe.'),
});

export const SignInForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState();
  const { session, signIn } = useAuth();
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={4} style={{ margin: 'auto' }}>
        <Grid item xs={6}>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Grid>

        <Grid item xs={6} container spacing={4}>
          <Grid item xs={12}>
            <TextField
              placeholder={'Email'}
              name={'email'}
              id={'email'}
              type={'email'}
              color={'secondary'}
              error={errors.email && !!errors.email.message}
              helperText={errors?.email?.message}
              inputRef={register}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder={'Mot de passe'}
              name={'plainPassword'}
              id={'plainPassword'}
              type={'password'}
              color={'secondary'}
              error={errors.plainPassword && !!errors.plainPassword.message}
              helperText={errors?.plainPassword?.message}
              inputRef={register}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faLock} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item container spacing={2} style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <Link href={routes.signUp.url} passHref>
                <MUILink style={{ textTransform: 'uppercase' }}>
                  Je m'inscrit
                </MUILink>
              </Link>
            </Grid>
            <Grid item xs={12}>
              {error && (
                <Typography variant={'body2'} color={'error'}>
                  {error}
                </Typography>
              )}
              <Button
                disabled={Object.keys(errors).length > 0}
                type={'submit'}
                variant={'outlined'}
                color={'primary'}>
                Connexion
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignInForm;
