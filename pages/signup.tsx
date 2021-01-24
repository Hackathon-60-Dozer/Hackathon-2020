import React from 'react';
import { NextPage } from 'next';
import Layout from '@src/components/Layout/Layout';
import SignUpForm from '@src/components/Form/SignUp';

const SignInPage: NextPage = () => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
};

export default SignInPage;
