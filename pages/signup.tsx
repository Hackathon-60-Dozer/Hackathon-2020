import React from 'react';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import SignUpForm from '@components/Form/SignUp';

const SignInPage: NextPage = () => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
};

export default SignInPage;
