import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@hook/useAuth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, TextField } from '@material-ui/core';
import routes from '@constants/routes';

type FormData = {
  email: string;
  plainPassword: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  plainPassword: yup.string().required(),
});

export const AddShopForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState();
  const { session } = useAuth();
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (!session) {
      router.push(routes.signIn.url);
    }
  }, [router, session]);

  const onSubmit = useCallback((values: FormData) => {}, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label={'Email'}
          name={'email'}
          id={'email'}
          type={'email'}
          error={errors.email && !!errors.email.message}
          helperText={errors?.email?.message}
          inputRef={register}
        />
        <TextField
          label={'Mot de passe'}
          name={'plainPassword'}
          id={'plainPassword'}
          type={'password'}
          error={errors.plainPassword && !!errors.plainPassword}
          helperText={errors?.plainPassword?.message}
          inputRef={register}
        />

        {error && <span style={{ color: 'red' }}>{error}</span>}
        <Button disabled={Object.keys(errors).length > 0} type={'submit'}>
          Connexion
        </Button>
      </form>
    </div>
  );
};

export default AddShopForm;
