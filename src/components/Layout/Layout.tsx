import React from 'react';
import Head from 'next/head';
import Footer from '@components/Layout/Footer/Footer';
import Header from '@components/Layout/Header/Header';

import {
  Container,
  ContainerProps,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: theme.spacing(12, 0),
  },
}));

export type LayoutProps = {
  disabledContainer?: boolean;
} & ContainerProps;

const Layout: React.FC<LayoutProps> = ({
  children,
  disabledContainer,
  ...props
}) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Toulocal</title>
      </Head>

      <Header />

      {disabledContainer ? (
        children
      ) : (
        <Container {...props} className={styles.main}>
          {children}
        </Container>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
