import React from 'react';
import { NextPage } from 'next';
import Layout from '@src/components/Layout/Layout';
import dynamic from 'next/dynamic';

const AlgoliaSearch = dynamic(() => import('@src/components/AlgoliaSearch'), {
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
