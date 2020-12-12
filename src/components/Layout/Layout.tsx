import React from 'react';
import Head from 'next/head';
import Footer from '@components/Layout/Footer/Footer';
import Navbar from '@components/Layout/Navbar/Navbar';

import styles from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
