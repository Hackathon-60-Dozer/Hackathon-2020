import React from 'react';
import Link from 'next/link';

import routes from '@constants/routes';
import {
  makeStyles,
  Theme,
  Toolbar,
  Link as MUILink,
  Typography,
} from '@material-ui/core';

const nav = [
  {
    name: 'Vous êtes un professionnel ?',
    links: [
      {
        url: routes.addMerchant.url,
        label: 'Devenir commerçant',
      },
      {
        url: routes.signUp.url,
        label: 'Inscrivez-vous',
      },
      {
        url: routes.signIn.url,
        label: 'Connectez-vous',
      },
    ],
  },
  {
    links: [
      {
        url: '/',
        label: 'A propos de Toulocal',
      },
      {
        url: '/',
        label: "Obtenir de l'aide",
      },
      {
        url: '/',
        label: 'Afficher toutes les villes',
      },
      {
        url: '/',
        label: 'CGV',
      },
      {
        url: '/',
        label: 'Mentions légales',
      },
    ],
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    background: theme.palette.primary.main,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: theme.spacing(8),
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',

    '& *': {
      color: theme.palette.common.white,
    },
  },
}));

const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <footer className={styles.root}>
      <Toolbar className={styles.toolbar}>
        {nav.map((section, i) => (
          <div className={styles.section} key={i}>
            {section.name && (
              <Typography variant={'h5'} component={'h3'}>
                {section.name}
              </Typography>
            )}
            {section.links.map((link, j) => (
              <Link href={link.url} passHref key={j}>
                <MUILink>{link.label}</MUILink>
              </Link>
            ))}
          </div>
        ))}
      </Toolbar>
    </footer>
  );
};

export default Footer;
