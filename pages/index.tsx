import React from 'react';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import {useApollo} from "@hook/useApollo";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1>Homepage</h1>

      <p>Lorem Ipsum</p>
    </Layout>
  );
};

export default HomePage;
