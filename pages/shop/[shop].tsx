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
import Section from '@components/Section';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) => ({
  firstContainer: {
    height: 250,
    position: 'relative',
    margin: 0,

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  secondContainer: {
    padding: 15,
  },
  thirdContainer: {
    padding: 25,
    background: theme.palette.secondary.main,
    textAlign: 'left',
  },

  sectionTitle: {
    marginBottom: 60,
  },

  carousel: {
    width: '90vw',
    margin: 'auto',
    marginRight: 0,
  },
  card: {
    margin: theme.spacing(2, 4),
    width: 200,
    height: '100%',
    borderRadius: 2,
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardContent: {
    padding: theme.spacing(2, 2, 3, 2),
  },
  cardMedia: {
    width: '100%',
    height: 100,
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
  products: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
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
  const router = useRouter();
  const styles = useStyles();

  return (
    <Layout maxWidth={'lg'}>
      <Section color={'white'} disableCrop>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
            <figure className={styles.firstContainer}>
              <img
                src="https://northernlifemagazine.co.uk/wp-content/uploads/2019/08/Community-Shop-twitter.jpg"
                alt=""
              />
            </figure>
          </Grid>

          <Grid item xs={6}>
            <div className={styles.secondContainer}>
              <Typography variant={'h1'} color={'secondary'}>
                {shop.name}
              </Typography>
              <Typography variant={'subtitle1'} color={'textSecondary'}>
                - Primeur
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={styles.thirdContainer}>
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
        <Typography
          variant={'h2'}
          color={'secondary'}
          className={styles.sectionTitle}>
          Nos produits
        </Typography>
        <div className={styles.products}>
          {shop.products.map((product, i) => (
            <Card key={i} className={styles.card}>
              <CardActionArea onClick={() => router.push('/product/test')}>
                <CardMedia
                  className={styles.cardMedia}
                  image={
                    'https://fr.rc-cdn.community.thermomix.com/recipeimage/evs5k5in-21c05-024863-cfcd2-71r3w15i/ec37d89a-70b3-41c6-a5c1-cee9603cefb8/main/pain-du-boulanger.jpg'
                  }
                  title={product.name}
                />
                <CardContent className={styles.cardContent}>
                  <Typography className={styles.cardTitle} variant="h6">
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
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

  if (!data.getShop) throw new Error("Ce commerce n'existe pas !");

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
