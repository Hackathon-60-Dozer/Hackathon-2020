import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary, Button, Card, CardActionArea, CardContent, CardMedia, Grid,
  IconButton,
  Link,
  makeStyles,
  Theme,
  Typography, useMediaQuery
} from "@material-ui/core";
import {NextPage} from "next";
import Layout from "@components/Layout/Layout";
import {faChevronDown, faChevronRight, faPen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Divider from "@components/Divider";
import Section from "@components/Section";
import Chart from "@components/Chart";
import Carousel, {slidesToShowPlugin} from "@brainhubeu/react-carousel";
import theme from "@theme";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  hero: {
    marginBottom: 100,
    padding: 0,
    width: "100%",

    "& figure": {
      padding: 0,
      margin: 0,
      height: 150,

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }
  },
  secondHeroContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,

    "& figure": {
      overflow: "hidden",
      borderRadius: "50%",
      marginTop: -100,
      height: 200,
      width: 200,

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }
    }
  },

  insightContainer: {
    width: "74%",
    marginLeft: "12%",
    padding: 20
  },
  gridElement: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "#fafafa",
    width: "100%",
    height: 250,
    borderRadius: 15,
    boxShadow: "0 0 5px 0 rgba(0,0,0,0.25)"
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
}))

interface Label {
  name: string;
  image: string;
}

const Index: NextPage = () => {

  const styles = useStyles()
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const labels: Label[] = [
    {
      name: 'Potimaron',
      image: 'https://cuisine-saine.fr/wp-content/uploads/2014/03/courge-butternut.jpg',
    },
    {
      name: 'Poisson',
      image: 'https://media.gerbeaud.net/2019/11/640/amphiprion-ocellaris-poisson-clown-pacifique.jpg',
    },
    {
      name: 'Courgette',
      image: 'https://media.gerbeaud.net/2019/11/640/amphiprion-ocellaris-poisson-clown-pacifique.jpg',
    },
    {
      name: 'Pomme de terre',
      image: 'https://cdn4.fermedesaintemarthe.com/I-Autre-25748_1200x1200-pomme-de-terre-laurette-ab.net.jpg',
    },
  ];


  return (
    <Layout maxWidth={"xl"} style={{width: "100%", padding: 0, margin: 0}}>
      <Section className={styles.hero} color={"white"}>
        <figure>
          <img src="https://northernlifemagazine.co.uk/wp-content/uploads/2019/08/Community-Shop-twitter.jpg" alt=""/>
        </figure>

        <div className={styles.secondHeroContainer}>
          <figure>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafcfc-8PuUquB4iS9Xtvy9oXursOo9AHZBg&usqp=CAU" alt=""/>
          </figure>

          <Typography variant={"h5"} color={"primary"} style={{marginTop: 20, fontWeight: "bold"}}>Bienvenue,</Typography>
          <Typography color={"primary"}>Votre espace vendeur</Typography>
        </div>
      </Section>

      <Divider color={"grey"}/>

      <Section color={"secondary"}>
        <Typography variant={"h2"} color={"textSecondary"} style={{fontSize: 30, marginBottom: 10}}>Vos insights <FontAwesomeIcon icon={faPen} style={{color: "#e18380"}}/></Typography>
        <div className={styles.insightContainer}>
          <Grid container spacing={3} direction={"row"}>
            <Grid item xs={6}>
              <div className={styles.gridElement}>
                <Typography variant={"h3"} color={"secondary"}>Commandes en attente</Typography>
                <Typography variant={"body1"} color={"primary"}style={{fontSize: 50}}>16</Typography>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className={styles.gridElement}>
                <Typography variant={"h3"} color={"secondary"}>Commandes traitées hier</Typography>
                <Typography variant={"body1"} color={"primary"}style={{fontSize: 50}}>42</Typography>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className={styles.gridElement}>
                <Typography variant={"h3"} color={"secondary"}>Nouveaux avis</Typography>
                <Typography variant={"body1"} color={"primary"}style={{fontSize: 50}}>2</Typography>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className={styles.gridElement}>
                <Typography variant={"h3"} color={"secondary"}>Panier moyen</Typography>
                <Typography variant={"body1"} color={"primary"}style={{fontSize: 50}}>38.02 €</Typography>
              </div>
            </Grid>

            <Grid item xs={12}>
              <Typography variant={"h3"} color={"secondary"}>Vos ventes</Typography>
              <div style={{height: 400, padding: 25}} className={styles.gridElement}>
                <Chart/>
              </div>
            </Grid>
          </Grid>
        </div>
      </Section>

      <Section color={"white"}>
        <Typography variant={"h2"} color={"secondary"} style={{marginBottom: 20}}>Vos produits</Typography>

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

        <Button style={{marginTop: 40}}>Ajouter des produits</Button>

      </Section>

      <Divider color={"grey"} margin={"30px"}/>

      <Section style={{}} color={"white"}>
        <ul style={{listStyle: "none"}}>
          <li><Button>Historique des commandes</Button>
          <li><Button>Modifier les informations boutique</Button></li>
          <li><Button>Support technique</Button></li>
          <li><Button color={"primary"}>Déconnexion</Button></li></li>
        </ul>
      </Section>


    </Layout>
  );
}

export default Index
