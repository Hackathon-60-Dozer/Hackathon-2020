import React from 'react';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import AddShopForm from '@components/Form/AppShop';

const SignInPage: NextPage = () => {
  return (
    <Layout maxWidth={'md'}>
      <AddShopForm />
    </Layout>
  );
};

export default SignInPage;
