import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';

const useStyles = makeStyles((theme: Theme) => ({}));

const ShopList: NextPage = () => {
  const [productList, setProductList] = useState({});

  useEffect(() => {
    //Récupération des données ici
  }, []);

  return <Layout></Layout>;
};

export default ShopList;
