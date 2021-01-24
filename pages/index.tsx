import React from 'react';
import { NextPage } from 'next';
import Layout from '@src/components/Layout/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1 className="font-bold text-base text-2xl text-primary">Toulocal</h1>
    </Layout>
  );
};

export default HomePage;
