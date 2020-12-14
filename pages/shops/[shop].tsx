import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  GridList,
  GridListTile,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Layout from '@components/Layout/Layout';
import { gql } from '@apollo/client';
import { initializeApollo } from '@services/apollo/client';
import { Shop } from '@types';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import Section from '@components/Section';

const useStyles = makeStyles((theme: Theme) => ({
  firstHeroContainer: {
    height: 250,
    position: 'relative',
    margin: 0,

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  secondHeroContainer: {
    padding: 15,
  },
  thirdHeroContainer: {
    padding: 25,
    background: theme.palette.secondary.main,
  },

  carousel: {
    width: '90vw',
    margin: 'auto',
    marginRight: 0,
  },
  card: {
    width: 150,
    height: '100%',
    borderRadius: 2,
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardContent: {
    padding: theme.spacing(6.5, 3, 3, 3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 2, 3, 2),
    },
  },
  cardMedia: {
    width: '100%',
    height: 100,
    // [theme.breakpoints.down('xs')]: {
    //   height: 65,
    // },
  },
  cardTitle: {
    width: '55%',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Karla',
    fontWeight: 500,
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
  },
}));

const days = {
  mon: 'Lundi',
  tue: 'Mardi',
  wed: 'Mercredi',
  thu: 'Jeudi',
  fri: 'Vendredi',
  sat: 'Samedi',
  sun: 'Dimanche',
};

const Product: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  shop,
}) => {
  const styles = useStyles();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));

  return (
    <Layout maxWidth={'lg'}>
      <Section color={'white'} disableCrop className={styles.presentation}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
            <figure className={styles.firstHeroContainer}>
              <img
                src="https://i.picsum.photos/id/9/536/354.jpg?hmac=5PiiV8cCMwZsDl8bYwpetFqtPuNn5uY2WcKTEb5ykW4"
                alt=""
              />
            </figure>
          </Grid>

          <Grid item xs={6}>
            <div className={styles.secondHeroContainer}>
              <Typography variant={'h1'} color={'secondary'}>
                {shop.name}
              </Typography>
              <Typography variant={'subtitle1'} color={'textSecondary'}>
                - Primeur
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={styles.thirdHeroContainer}>
              <Typography
                variant={'h5'}
                color={'textSecondary'}
                style={{ fontWeight: 'bold' }}>
                Horaires d'ouverture
              </Typography>
              <Typography variant={'subtitle1'} color={'textSecondary'}>
                {Object.entries(days).map(([key, name]) => (
                  <React.Fragment>
                    {`${name}:
                    ${
                      shop.hours[key].length > 0
                        ? shop.hours[key]
                            .map((hour) => `${hour.from}h-${hour.to}`)
                            .join('     •     ')
                        : 'Fermé'
                    }`}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Section>

      <Section color={'white'}>
        <Typography variant={'h2'} color={'secondary'}>
          Nos produits
        </Typography>
        <GridList>
          {shop.products.map((product, i) => (
            <GridListTile>
              <Card key={i} className={styles.card}>
                <CardActionArea>
                  <CardMedia
                    className={styles.cardMedia}
                    image={'https://picsum.photos/150/100'}
                    title={product.name}
                  />
                  <CardContent className={styles.cardContent}>
                    <Typography
                      className={styles.cardTitle}
                      gutterBottom
                      variant="h5"
                      component="h6">
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </Section>
    </Layout>
  );
};
const FETCH_SHOP = gql`
  query getShop($id: ID!) {
    getShop(id: $id) {
      _id
      name
      products {
        name
        price
        unit
        details {
          mode
          allergens
          alcohol
        }
        meta {
          available
        }
      }
      hours
      owner {
        firstName
        lastName
      }
      address {
        administrative
        city
        country
        countryCode
        county
        lat
        lng
        postcode
        postcodes
        value
      }
      organisation {
        name
        siret
        siege {
          administrative
          city
          country
          countryCode
          county
          lat
          lng
          postcode
          postcodes
          value
        }
      }
      labels
      meta {
        validated
      }
    }
  }
`;

export const getStaticProps: GetStaticProps<{ shop: Shop }> = async ({
  params,
}) => {
  const apollo = initializeApollo();
  const shopId = params.shop;
  const { data } = await apollo.query({
    query: FETCH_SHOP,
    variables: {
      id: shopId,
    },
  });

  if (!data.getShop) throw new Error("Ce produit n'existe pas !");

  return {
    props: {
      shop: data.getShop,
    },
    revalidate: 60,
  };
};

const FETCH_SHOP_LIST = gql`
  query getAllShops {
    getAllShops
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const apollo = initializeApollo();
  const { data } = await apollo.query({
    query: FETCH_SHOP_LIST,
  });

  return {
    paths: data.getAllShops.map((shop) => ({ params: { shop } })),
    fallback: 'blocking',
  };
};

export default Product;
