import React from 'react';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import dynamic from 'next/dynamic';

// @ts-ignore
const AlgoliaSearch = dynamic(() => import('@components/AlgoliaSearch'), {
  ssr: false,
});

const ShopList: NextPage = () => {
  return (
    <Layout>
      <AlgoliaSearch title={'Rechercher des commerces'} />
    </Layout>
  );
};

export default ShopList;
