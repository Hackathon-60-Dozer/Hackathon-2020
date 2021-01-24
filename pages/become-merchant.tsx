import React from 'react';
import { NextPage } from 'next';
import Layout from '@src/components/Layout/Layout';
import AddShopForm from '@src/components/Form/AddShop';

const SignInPage: NextPage = () => {
  return (
    <Layout maxWidth={'sm'}>
      <AddShopForm />
    </Layout>
  );
};

export default SignInPage;
