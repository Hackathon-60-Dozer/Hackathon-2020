import React, {useEffect, useState} from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '@components/Layout/Layout';
import {useApollo} from "@hook/useApollo";
import Button from "@components/Button";
import Image from "next/image";
import Card from "@components/Card";
import routes from "@constants/routes";

const HomePage: NextPage = () => {

  const [shops, setShops] = useState({});
  const [products, setProducts] = useState({})
  const [markets, setMarkets] = useState({})

  useEffect(() => {
    //Récupération de la data ici
  }, [])

  return (
    <Layout>
      <MainContainer>
        <section id={"homepage_section_1"}>
          <h1>Retrouvez tous les commerçants près de chez vous</h1>
          <label htmlFor="">Position de l'utilisateur</label>
          <p>SEARCH BAR</p>
          <Button>Voir les produits</Button>
        </section>

        <section id={"homepage_section_2"}>
          <h2>Faites le plein de produits frais</h2>
          <div>
            CARROUSSEL PRODUITS

            <Card width={"200px"} height={"250px"}>
              <CardContent>
                <figure>
                    <img src={"https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"}/>
                  </figure>
                <div>
                  Boucherie Issou aya chanclador el bougnadar issou clanclure
                </div>
               </CardContent>
            </Card>

            <Card width={"200px"} height={"250px"}>
              <CardContent>
                <figure>
                  <img src={"https://loremflickr.com/cache/resized/65535_50681267988_08b06c9201_320_240_nofilter.jpg"}/>
                </figure>
                <div>
                  Boucherie Issou
                </div>
               </CardContent>
            </Card>
          </div>
          <Button>Voir tous les produits</Button>
        </section>

        <section id={"homepage_section_3"}>
          <h2>Les commerçant près de chez vous</h2>
          <div>MAP ICI</div>
        </section>

        <section id={"homepage_section_4"}>
          <h2>Vos commerçants préférés</h2>
          <div>
            CARROUSSEL COMMERCANTS
          </div>
          <Button>Voir tous les commerçants</Button>
        </section>

        <section id={"homepage_section_5"}>
          <h2>Vos marchés préférés</h2>
          <div>
            CAROUSSEL MARCHES
          </div>
          <Button>Voir tous les marchés</Button>
        </section>
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div `
  width: 100vw;
  section {
    padding: 50px;
    width: 100%;
  }

  #homepage_section_1 {
    background: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.secondary};
  }
  #homepage_section_2 {
    background: #fafafa;
    color: ${props => props.theme.colors.secondary};
  }
  #homepage_section_3 {
    background: ${props => props.theme.colors.secondary};
    color: lightcyan;
  }
  #homepage_section_4 {
    background: #fafafa;
    color: ${props => props.theme.colors.secondary};
  }
  #homepage_section_5 {
    background: ${props => props.theme.colors.secondary};
    color: lightcyan;
  }
`

const CardContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
    height: 100%;
    object-fit: cover;
  }

  figure {
    margin: 0;
    background: red;
    width: 100%;
    height: 90%;

  }

  div {
    width: 100%;
    min-height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-weight: bold;
  }
`;

export default HomePage;
