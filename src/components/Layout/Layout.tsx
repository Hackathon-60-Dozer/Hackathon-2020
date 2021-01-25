import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { HiMenu, HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import routes from '@src/constant/routes';

export type LayoutProps = any;

const nav = [
  {
    url: routes.home,
    label: 'Accueil',
  },
  {
    url: routes.shops,
    label: 'Commerces',
  },
  {
    url: routes.about,
    label: 'À propos',
  },
  {
    url: routes.dashboard,
    label: 'Espace commerçant',
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Toulocal</title>
      </Head>

      <header className="bg-white fixed w-full shadow z-10">
        <div className="maw-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex md:hidden">
              <button className="icon-btn" aria-haspopup="true">
                <span className="sr-only">Ouvrir le menu</span>
                <HiMenu />
              </button>
            </div>
            <h2 className="font-display text-2xl">Toulocal</h2>
            <div className="flex flex-row h-full md:ml-4">
              <nav className="hidden md:flex space-x-4 h-full"></nav>
              <div className="md:ml-6 lg:ml-10 flex items-center">
                <Link href={routes.account}>
                  <a className="icon-btn btn-gray max-w-xs">
                    <span className="sr-only">Accéder au profil</span>
                    <HiOutlineUser />
                  </a>
                </Link>
                <div className="relative md:ml-6 lg:ml-10">
                  <button
                    className="icon-btn btn-secondary max-w-xs"
                    aria-haspopup="true">
                    <span className="sr-only">Voir le panier</span>
                    <HiOutlineShoppingCart />
                  </button>
                  {/* panier menu */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="h-16 md:h-20" />

      <main className="min-h-full">{children}</main>

      <footer className="bg-reddish-brown text-light-secondary rounded-tl-3xl rounded-tr-3xl py-8 px-16 md:py-16 md:px-32">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="text-left mt-5 md:mt-0">
            <h3 className="font-display text-2xl tracking-wide">
              <strong>Toulocal</strong>
            </h3>
            <p className="text-sm">
              Tous les commerces de bouche de votre quartier
            </p>
          </div>

          <hr className="w-full md:hidden border-light-transparent mt-8 border-t-2" />

          <a
            href=""
            className="text-left md:font-bold md:mt-4 md:mt-0 text-center md:text-left">
            Espace commerçant
          </a>

          <ul className="mt-4 md:mt-0 text-center md:text-left">
            <li className="mb-5 md:mb-2">
              <a href="">Accueil</a>
            </li>
            <li className="mb-5 md:mb-2">
              <a href="">Commerces</a>
            </li>
            <li className="mb-5 md:mb-2">
              <a href="">A propos</a>
            </li>
          </ul>
        </div>

        <hr className="w-full border-light-transparent mt-6 md:mt-8 border-t-2" />

        <div className="flex justify-between mt-6">
          <div className="flex gap-4 text-sm">
            <Link href={routes.mentionLegales.url}>
              <a>Mentions légales</a>
            </Link>
            <Link href={routes.cgv.url}>
              <a>CGV</a>
            </Link>
          </div>
          <div className="flex gap-3 text-2xl">
            <a href="https://facebook.com" target="_blank">
              <AiOutlineFacebook />
            </a>
            <a href="https://instagram.com" target="_blank">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
