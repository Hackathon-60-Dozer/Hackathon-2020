import React, { useState } from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Layout from '@components/Layout/Layout';
import {
  Button,
  IconButton,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import { Product } from '@types';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Divider from '@components/Divider';
import Section from '@components/Section';
import { gql } from '@apollo/client';

const useStyles = makeStyles((theme: Theme) => ({
  imgContainer: {
    height: '50vh',
    width: '70%',

    margin: 0,

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  amountWrapper: {
    width: 50,
    height: 50,
    fontSize: 30,
    borderRadius: '50%',
    border: '1px solid ' + theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#373737',
  },
  iconWrapper: {
    color: theme.palette.primary.main,
    fontSize: 50,
  },
}));

const unit = {
  piece: 'pièce',
  kilo: 'kilo',
  liter: 'Littre',
  lot: 'Lot',
};

const ProductPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  product,
}) => {
  const styles = useStyles();
  const [basket, setBasket] = useState({}); // infos panier depuis cookies
  const [amount, setAmount] = useState(1);

  return (
    <Layout maxWidth={'xl'} style={{ padding: 0 }}>
      <figure className={styles.imgContainer}>
        <img
          src="https://cuisine-saine.fr/wp-content/uploads/2014/03/courge-butternut.jpg"
          alt=""
        />
      </figure>

      <Typography variant={'h1'} color={'primary'} style={{ margin: 20 }}>
        {product.name}
      </Typography>
      <Typography variant={'h4'} color={'secondary'}>
        {product.price}€ / {unit[product.unit]}
      </Typography>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          disableRipple
          onClick={() => setAmount(amount + 1)}
          className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </IconButton>

        <div className={styles.amountWrapper}>{amount}</div>

        <IconButton
          disableRipple
          onClick={() => {
            if (amount > 0) setAmount(amount - 1);
          }}
          className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faMinusCircle} />
        </IconButton>
      </div>

      <Divider color={'secondary'} style={{ margin: '20px 0' }} />

      <Section color={'white'} style={{ padding: 0 }}>
        <Typography style={{ color: '#373737' }}>
          Allergènes:{' '}
          {product.details.allergens.length > 0
            ? product.details.allergens.join(' ,')
            : 'Aucun'}
        </Typography>
        <br />
        <Typography style={{ color: '#373737' }}>
          Mode de consomation:{' '}
          {product.details.mode.length > 0
            ? product.details.mode.join(' ,')
            : 'Aucun'}
        </Typography>

        <Paper elevation={0} style={{ padding: 20 }}>
          <Button variant={'contained'} color={'secondary'}>
            Ajouter {amount} au panier - {amount * product.price}€
          </Button>
        </Paper>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ product: Product }> = async ({
  params,
}) => {
  // const apollo = initializeApollo();
  // const shopId = params.shop;
  // const { data } = await apollo.query({
  //   query: FETCH_SHOP,
  //   variables: {
  //     id: shopId,
  //   },
  // });

  // if (!data.getShop) throw new Error("Ce produit n'existe pas !");

  return {
    props: {
      product: {
        name: 'Courgettes Butternut',
        price: 5.05,
        unit: 'piece',
        details: {
          mode: ['Végan'],
          allergens: [],
          alcohol: false,
        },
        meta: {
          available: true,
        },
      },
    },
    revalidate: 60,
  };
};

// const FETCH_PRODUCT_LIST = gql`
//   query getAllProducts {
//     getAllProducts
//   }
// `;

export const getStaticPaths: GetStaticPaths = async () => {
  // const apollo = initializeApollo();
  // const { data } = await apollo.query({
  //   query: FETCH_PRODUCT_LIST,
  // });
  //
  // return {
  //   paths: data.getAllShops.map((shop) => ({ params: { shop } })),
  //   fallback: 'blocking',
  // };

  return {
    paths: [{ params: { product: 'test' } }],
    fallback: 'blocking',
  };
};

export default ProductPage;
