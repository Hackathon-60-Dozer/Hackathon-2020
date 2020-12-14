
import React, {useState} from 'react';
import Link from 'next/link';
import {NextPage} from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Layout from "@components/Layout/Layout";
import {inspect} from "util";
import {
  makeStyles,
  Typography,
  Theme,
  IconButton,
  useMediaQuery,
  Card,
  CardActionArea,
  CardMedia, CardContent
} from "@material-ui/core";
import Section from "@components/Section";
import Divider from "@components/Divider";
import theme, {colors} from "@theme";
import {useRouter} from "next/router";
import Carousel, {slidesToShowPlugin} from "@brainhubeu/react-carousel";

const useStyles = makeStyles((theme: Theme) => ({
  sectionTitle: {
    textAlign: 'left'
  },
  backButton: {
    display: "none",
    fontSize: 40,
    margin: theme.spacing(2, 10),
    color: theme.palette.primary.main,
    cursor: "pointer",
    position: "absolute"
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
  }
}))

interface Label {
  name: string;
  image: string;
}

const Commands: NextPage = () => {

  const [commands, setCommands] = useState({})
  const router = useRouter()

  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const labels: Label[] = [
    {
      name: '14/12/2020  19.90 €',
      image: 'https://supplyshop.fr/wp-content/uploads/2019/11/paniers-fruits-legumes-caen-1.jpg',
    },
    {
      name: '14/12/2020  19.90 €',
      image: 'https://supplyshop.fr/wp-content/uploads/2019/09/67-panier-fruits-legumes.jpg',
    },
    {
      name: '14/12/2020  19.90 €',
      image: 'https://supplyshop.fr/wp-content/uploads/2019/11/paniers-fruits-legumes-caen-1.jpg',
    },
    {
      name: '14/12/2020  19.90 €',
      image: 'https://supplyshop.fr/wp-content/uploads/2019/09/67-panier-fruits-legumes.jpg',
    },
  ];

  const styles = useStyles();

  return (
    <Layout>
      <Section color={'white'} style={{padding: 20}}>
        <IconButton
          onClick={() => {
            router.back()
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className={styles.backButton}/>
        </IconButton>
        <Typography variant={'h1'} color={'secondary'} style={{textAlign: "center", width: "100%"}}>Mes commandes</Typography>
        <Divider color={"grey"} margin={"30px"}/>

        <Typography variant={'h2'} className={styles.sectionTitle} color={'secondary'}>En cours :</Typography>

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

        <Divider color={"grey"} margin={"30px"}/>
        <Typography variant={'h2'} className={styles.sectionTitle} color={'secondary'}>Récupérées :</Typography>

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
      </Section>
    </Layout>
  )
}

export default Commands
