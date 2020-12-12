import Input from '@components/Input';
import { useForm } from 'react-hook-form';
import React from 'react';

type FormData = {};

export const SignInForm: React.FC = () => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName);
  });

  return (
    <form>
      <Input label={'Nom'} name={'name'} id={'name'} inputRef={register} />
      <Input label={'Nom'} name={'name'} id={'name'} inputRef={register} />
    </form>
  );
};
