import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import dynamic from 'next/dynamic';

// @ts-ignore
const AlgoliaSearch = dynamic(() => import('@components/AlgoliaSearch'), {
  ssr: false,
});

const useStyles = makeStyles((theme: Theme) => ({}));

const ProductList: NextPage = () => {
  const [productList, setProductList] = useState({});

  useEffect(() => {
    //Récupération des données ici
  }, []);

  return (
    <Layout>
      <AlgoliaSearch title={'Rechercher des produits'} />
    </Layout>
  );
};

export default ProductList;
