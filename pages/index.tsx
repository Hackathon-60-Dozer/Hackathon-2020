import React from 'react';
import { NextPage } from 'next';
import Layout from '@components/Layout/Layout';
import {useApollo} from "@hook/useApollo";
import Button from "@components/Button";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <section>
        <h1>Retrouvez tous les commerçants près de chez vous</h1>
        <label htmlFor="">Position de l'utilisateur</label>
        <p>SEARCH BAR</p>
        <Button>Voir les produits</Button>
      </section>

      <section>
        <h2>Faites le plein de produits frais</h2>
        <div>
          CARROUSSEL PRODUITS
        </div>
        <Button>Voir tous les produits</Button>
      </section>

      <section>
        <h2>Les commerçant près de chez vous</h2>
        <div>MAP ICI</div>
      </section>

      <section>
        <h2>Vos commerçants préférés</h2>
        <div>
          CARROUSSEL COMMERCANTS
        </div>
        <Button>Voir tous les commerçants</Button>
      </section>

      <section>
        <h2>Vos marchés préférés</h2>
        <div>
          CAROUSSEL MARCHES
        </div>
        <Button>Voir tous les marchés</Button>
      </section>
    </Layout>
  );
};

export default HomePage;
