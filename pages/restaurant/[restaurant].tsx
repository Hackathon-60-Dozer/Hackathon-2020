import React from 'react';
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage} from 'next';
import Layout from '@components/Layout/Layout';
import {useApollo} from "@hook/useApollo";

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({data}) => {
  return (
    <Layout>
      <h1>Homepage</h1>

      <p>{data}</p>
    </Layout>
  );
};

type HomeProps = {
  data: string;
}

export const getStaticProps: GetStaticProps<HomeProps> = ({ params }) => {
  const { restaurant } = params;

  const data = {}// je recup mes données.

  return {
    props: {
      data: `Bonjour, bienvenue dans le restaurant ${restaurant}`,
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {params: { restaurant: 'test' } },
      {params: { restaurant: 'gregerj'}}
    ],
    fallback: false,
  }
}

export default HomePage;
