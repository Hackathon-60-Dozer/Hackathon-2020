import React from 'react';
import Head from 'next/head';
import Footer from '@src/components/Layout/Footer/Footer';
import Header from '@src/components/Layout/Header/Header';

export type LayoutProps = any;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Toulocal</title>
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
