import React from 'react';
import { NextPage } from 'next';
import Layout from '@src/components/Layout/Layout';
import Button from '@src/components/Button';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1 className="font-bold text-base text-2xl text-primary">Toulocal</h1>
      <Button color={'gray'} variant={'minimized'}>
        Cliquez ici
      </Button>
    </Layout>
  );
};

export default HomePage;
