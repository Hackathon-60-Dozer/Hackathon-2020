import React from 'react';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import SignInForm from '@components/Form/SignIn';

const SignInPage: NextPage = () => {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  );
};

export default SignInPage;
