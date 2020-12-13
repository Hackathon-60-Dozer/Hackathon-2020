import React, { useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import dynamic from 'next/dynamic';

// // @ts-ignore
// const { default: Carousel, slidesToShowPlugin } = dynamic(
//   () => require('@brainhubeu/react-carousel'),
//   { ssr: false }
// );

const useStyles = makeStyles((theme: Theme) => ({
  hero: {},
  title: {
    width: '65%',
  },
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
  },
  card: {
    width: 530,
  },
  cardMedia: {
    height: 200,
  },
}));

interface Shop {
  name: string;
  labels: string[];
  image: string;
}

interface Label {
  name: string;
  image: string;
}

const HomePage: NextPage = () => {
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

  return (
    <Layout>
      <section id={'hero'} className={styles.hero}>
        <Typography variant={'h1'} className={styles.title} color={'secondary'}>
          Retrouvez tous les commerçants près de chez vous
        </Typography>
      </section>

      <section id={'labels'}>
        {typeof window !== 'undefined' && (
          <Carousel
            plugins={[
              'arrows',
              'fastSwipe',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 4,
                },
              },
            ]}>
            {labels.map((label, i) => (
              <img src={'https://picsum.photos/530/200'} alt={''} key={i}></img>
              // <Card key={i} className={styles.card}>
              //   <CardActionArea>
              //     <CardMedia
              //       className={styles.cardMedia}
              //       image={label.image}
              //       title={label.name}
              //     />
              //     <CardContent>
              //       <Typography gutterBottom variant="h5" component="h2">
              //         {label.name}
              //       </Typography>
              //     </CardContent>
              //   </CardActionArea>
              // </Card>
            ))}
          </Carousel>
        )}
      </section>

      <section id={'shops'} className={styles.carousel}>
        {shops.map((shop, i) => (
          <Card key={i} className={styles.card}>
            <CardActionArea>
              <CardMedia
                className={styles.cardMedia}
                image={shop.image}
                title={shop.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {shop.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </section>
      {/*<MainContainer>*/}
      {/*  <section id={"homepage_section_1"}>*/}
      {/*    <h1>Retrouvez tous les commerçants près de chez vous</h1>*/}
      {/*    <label htmlFor="">Position de l'utilisateur</label>*/}
      {/*    <p>SEARCH BAR</p>*/}
      {/*    <Button>Voir les produits</Button>*/}
      {/*  </section>*/}

      {/*  <section id={"homepage_section_2"}>*/}
      {/*    <h2>Faites le plein de produits frais</h2>*/}
      {/*    <div>*/}
      {/*      CARROUSSEL PRODUITS*/}

      {/*      <Card width={"200px"} height={"250px"}>*/}
      {/*        <CardContent>*/}
      {/*          <figure>*/}
      {/*              <img src={"https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"}/>*/}
      {/*            </figure>*/}
      {/*          <div>*/}
      {/*            Boucherie Issou aya chanclador el bougnadar issou clanclure*/}
      {/*          </div>*/}
      {/*         </CardContent>*/}
      {/*      </Card>*/}

      {/*      <Card width={"200px"} height={"250px"}>*/}
      {/*        <CardContent>*/}
      {/*          <figure>*/}
      {/*            <img src={"https://loremflickr.com/cache/resized/65535_50681267988_08b06c9201_320_240_nofilter.jpg"}/>*/}
      {/*          </figure>*/}
      {/*          <div>*/}
      {/*            Boucherie Issou*/}
      {/*          </div>*/}
      {/*         </CardContent>*/}
      {/*      </Card>*/}
      {/*    </div>*/}
      {/*    <Button>Voir tous les produits</Button>*/}
      {/*  </section>*/}

      {/*  <section id={"homepage_section_3"}>*/}
      {/*    <h2>Les commerçant près de chez vous</h2>*/}
      {/*    <div>MAP ICI</div>*/}
      {/*  </section>*/}

      {/*  <section id={"homepage_section_4"}>*/}
      {/*    <h2>Vos commerçants préférés</h2>*/}
      {/*    <div>*/}
      {/*      CARROUSSEL COMMERCANTS*/}
      {/*    </div>*/}
      {/*    <Button>Voir tous les commerçants</Button>*/}
      {/*  </section>*/}

      {/*  <section id={"homepage_section_5"}>*/}
      {/*    <h2>Vos marchés préférés</h2>*/}
      {/*    <div>*/}
      {/*      CAROUSSEL MARCHES*/}
      {/*    </div>*/}
      {/*    <Button>Voir tous les marchés</Button>*/}
      {/*  </section>*/}
      {/*</MainContainer>*/}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {};

// const MainContainer = styled.div`
//   width: 100vw;
//   section {
//     padding: 50px;
//     width: 100%;
//   }
//
//   #homepage_section_1 {
//     background: ${(props) => props.theme.colors.light};
//     color: ${(props) => props.theme.colors.secondary};
//   }
//   #homepage_section_2 {
//     background: #fafafa;
//     color: ${(props) => props.theme.colors.secondary};
//   }
//   #homepage_section_3 {
//     background: ${(props) => props.theme.colors.secondary};
//     color: lightcyan;
//   }
//   #homepage_section_4 {
//     background: #fafafa;
//     color: ${(props) => props.theme.colors.secondary};
//   }
//   #homepage_section_5 {
//     background: ${(props) => props.theme.colors.secondary};
//     color: lightcyan;
//   }
// `;
//
// const CardContent = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//
//   img {
//     width: 200px;
//     height: 100%;
//     object-fit: cover;
//   }
//
//   figure {
//     margin: 0;
//     background: red;
//     width: 100%;
//     height: 90%;
//   }
//
//   div {
//     width: 100%;
//     min-height: 10%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 10px;
//     font-weight: bold;
//   }
// `;

export default HomePage;
