import React from 'react';
import Head from 'next/head';
import Footer from '@components/Layout/Footer/Footer';
import Header from '@components/Layout/Header/Header';

import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));

const Layout: React.FC = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
