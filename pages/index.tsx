import React from 'react';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import dynamic from 'next/dynamic';
import Section from '@components/Section';

const MapWithNoSSR = dynamic(() => import('@components/Map'), {
  ssr: false,
});

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    display: 'flex',
    height: 'calc(100vh - 100px)',
    textAlign: 'left',
    padding: theme.spacing(0, 12),
    '&::before': {
      content: '""',
      backgroundImage: 'url(/static/resources/element6.svg)',
      backgroundRepeat: 'repeat-y',
      backgroundSize: 380,
      backgroundPosition: 'right top',
      display: 'block',
      width: '98%',
      height: '111%',
      zIndex: '5',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0.11,
    },
  },
  heroIcons: {
    width: '100%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    maxWidth: 1000,
  },
  section: {
    textAlign: 'center',
    padding: theme.spacing(12, 0),
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
    width: 530,
    height: '100%',
    borderRadius: 2,
    [theme.breakpoints.down('xs')]: {
      width: 120,
    },
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
    height: 200,
    [theme.breakpoints.down('xs')]: {
      height: 65,
    },
  },
  cardTitle: {
    width: '55%',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Karla',
    fontWeight: 500,
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      fontSize: '1rem',
    },
  },
  sectionButton: {
    margin: 'auto',
    marginTop: 80,
  },

  map: {
    width: '60%',
    height: 300,
    borderRadius: 0,
    margin: 'auto',
  },
}));

interface Shop {
  name: string;
  labels: string[];
  image: string;
}

interface Market {
  name: string;
  image: string;
}

interface Label {
  name: string;
  image: string;
}

const HomePage: NextPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const styles = useStyles();
  const shops: Shop[] = [
    {
      name: 'Boulangerie du Midi',
      labels: ['Vegan'],
      image: 'https://picsum.photos/530/200',
    },
    {
      name: 'Boucherie du petit chiot',
      labels: ['Viande'],
      image: 'https://picsum.photos/530/200',
    },
    {
      name: "LegaFruit's",
      labels: ['Vegan', 'Fruits', 'Legumes'],
      image: 'https://picsum.photos/530/200',
    },
  ];
  const markets: Market[] = [
    {
      name: 'Marché des Carmes',
      image: 'https://picsum.photos/530/200',
    },
    {
      name: 'Marché de saint aubin',
      image: 'https://picsum.photos/530/200',
    },
    {
      name: 'Marché de saint cyprien',
      image: 'https://picsum.photos/530/200',
    },
  ];
  const labels: Label[] = [
    {
      name: 'Fruits et légumes',
      image: 'https://picsum.photos/530/200',
    },
    {
      name: 'produits laitiers',
      image: 'https://picsum.photos/530/200',
    },
    {
      name: 'Viande poisson',
      image: 'https://picsum.photos/530/200',
    },
    {
      name: 'Céréales et farines',
      image: 'https://picsum.photos/530/200',
    },
  ];

  // @ts-ignore
  return (
    <Layout disabledContainer>
      <Section id={'hero'} className={styles.hero} color={'grey'} disableCrop>
        <Typography variant={'h1'} className={styles.title} color={'secondary'}>
          Retrouvez tous les commerçants près de chez vous
        </Typography>
        <div className={styles.heroIcons}>
          <img
            src={'/static/logo.svg'}
            alt={'elem1'}
            style={{
              width: 525,
              position: 'absolute',
              top: '65%',
              transform: 'translateY(-100%)',
              left: '0%',
            }}
          />
          <img
            src={'/static/resources/element8.svg'}
            alt={'elem2'}
            style={{
              width: 294,
              position: 'absolute',
              top: '95%',
              transform: 'translateY(-100%)',
              left: '62%',
            }}
          />
          <img
            src={'/static/resources/element10.svg'}
            alt={'elem3'}
            style={{
              width: 269,
              position: 'absolute',
              top: '95%',
              transform: 'translateY(-100%)',
              left: '45%',
            }}
          />
        </div>
      </Section>

      <Section id={'labels'} className={styles.section} color={'white'}>
        <Typography
          variant={'h2'}
          className={styles.sectionTitle}
          color={'secondary'}>
          Faites le plein de produits frais
        </Typography>
        <Carousel
          className={styles.carousel}
          draggable={true}
          itemWidth={matches ? 120 : 530}
          offset={32}
          plugins={[
            'arrows',
            'fastSwipe',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ]}>
          {labels.map((label, i) => (
            <Card key={i} className={styles.card}>
              <CardActionArea>
                <CardMedia
                  className={styles.cardMedia}
                  image={label.image}
                  title={label.name}
                />
                <CardContent className={styles.cardContent}>
                  <Typography
                    className={styles.cardTitle}
                    gutterBottom
                    variant="h4"
                    component="h4">
                    {label.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Carousel>
        <Button
          className={styles.sectionButton}
          variant={'contained'}
          color={'secondary'}>
          Voir tous les produits
        </Button>
      </Section>

      <Section id={'map'} className={styles.section} color={'secondary'}>
        <Typography
          variant={'h2'}
          className={styles.sectionTitle}
          color={'textSecondary'}>
          Les commerçants prêt de chez vous
        </Typography>
        <Paper className={styles.map} elevation={3}>
          <MapWithNoSSR
            // @ts-ignore
            mapHeight={300}
          />
        </Paper>
      </Section>

      <Section id={'shops'} className={styles.section} color={'white'}>
        <Typography
          variant={'h2'}
          className={styles.sectionTitle}
          color={'primary'}>
          Vos commerçants préférés
        </Typography>
        <Carousel
          className={styles.carousel}
          draggable={true}
          itemWidth={matches ? 120 : 530}
          offset={32}
          plugins={[
            'arrows',
            'fastSwipe',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ]}>
          {shops.map((shop, i) => (
            <Card key={i} className={styles.card}>
              <CardActionArea>
                <CardMedia
                  className={styles.cardMedia}
                  image={shop.image}
                  title={shop.name}
                />
                <CardContent className={styles.cardContent}>
                  <Typography
                    className={styles.cardTitle}
                    gutterBottom
                    variant="h4"
                    component="h4">
                    {shop.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Carousel>
        <Button
          className={styles.sectionButton}
          variant={'contained'}
          color={'secondary'}>
          Voir tous les commerçants
        </Button>
      </Section>

      <Section id={'shops'} className={styles.section} color={'secondary'}>
        <Typography
          variant={'h2'}
          className={styles.sectionTitle}
          color={'textSecondary'}>
          Vos marchés préférés
        </Typography>
        <Carousel
          className={styles.carousel}
          draggable={true}
          itemWidth={matches ? 120 : 530}
          offset={32}
          plugins={[
            'arrows',
            'fastSwipe',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ]}>
          {markets.map((market, i) => (
            <Card key={i} className={styles.card}>
              <CardActionArea>
                <CardMedia
                  className={styles.cardMedia}
                  image={market.image}
                  title={market.name}
                />
                <CardContent className={styles.cardContent}>
                  <Typography
                    className={styles.cardTitle}
                    gutterBottom
                    variant="h4"
                    component="h4">
                    {market.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Carousel>
        <Button
          className={styles.sectionButton}
          variant={'contained'}
          color={'primary'}>
          Voir tous les commerçants
        </Button>
      </Section>
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = () => {
//   return {
//     props: {},
//   };
// };

export default HomePage;
