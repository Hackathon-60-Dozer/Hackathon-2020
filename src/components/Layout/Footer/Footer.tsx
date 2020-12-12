import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import styles from './Footer.module.css';
import routes from '@constants/routes';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <MainContainer>
        <div>
          <h2>Vous êtes un professionnel ?</h2>
          <Link href={routes.signUp.url}>Inscrivez-vous</Link>
          <Link href={routes.signIn.url}>Connectez-vous</Link>
        </div>
        <div>
          <a href="">A propos de Toulocal</a>
          <a href="">Obtenir de l'aide</a>
          <a href="">Afficher toutes les villes</a>
          <a href="">CGV</a>
          <a href="">Mentions légales</a>
        </div>
      </MainContainer>
    </footer>
  );
};

const MainContainer = styled.div`
  padding: 30px;
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    color: lightcyan;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export default Footer;
