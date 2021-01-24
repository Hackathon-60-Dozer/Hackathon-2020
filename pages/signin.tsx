import React from 'react';
import { NextPage } from 'next';
import Layout from '@src/components/Layout/Layout';
import SignInForm from '@src/components/Form/SignIn';

const SignInPage: NextPage = () => {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  );
};

export default SignInPage;
