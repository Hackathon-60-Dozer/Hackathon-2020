import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import {
  HiMenu,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiX,
} from 'react-icons/hi';

import { Menu, Transition } from '@headlessui/react';
import routes, { routesByUrl } from '@src/constant/routes';

export type LayoutProps = any;

const nav = [
  {
    route: 'home',
    label: 'Accueil',
  },
  {
    route: 'shops',
    label: 'Commerces',
  },
  {
    route: 'about',
    label: 'À propos',
  },
  {
    route: 'dashboard',
    label: 'Espace commerçant',
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const currentRoute = useMemo(() => routesByUrl[router.pathname], [router]);
  const [showNav, setNavState] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Toulocal</title>
      </Head>

      <header className="bg-white fixed w-full shadow z-10">
        <div className="maw-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex md:hidden">
              <button
                className="icon-btn"
                aria-haspopup="true"
                onClick={() => setNavState(true)}>
                <span className="sr-only">Ouvrir le menu</span>
                <HiMenu />
              </button>
            </div>
            <h2 className="font-display text-2xl">Toulocal</h2>
            <div className="flex flex-row h-full md:ml-4">
              <nav className="hidden md:flex space-x-4 h-full">
                {nav.map((item, i) => (
                  <Link href={routes[item.route].url} key={`nav-item-${i}`}>
                    <a
                      className={clsx(
                        currentRoute?.key === item.route
                          ? 'bg-primary text-white font-extrabold'
                          : 'text-reddish-brown font-medium hover:bg-secondary',
                        'flex content-center items-center px-6 py-2 rounded-b-xl h-full text-md lg:text-lg cursor-pointer transition duration-200'
                      )}>
                      {item.label}
                    </a>
                  </Link>
                ))}
              </nav>
              <div className="md:ml-6 lg:ml-10 flex items-center">
                <Link href={routes.account.url}>
                  <a className="hidden md:flex icon-btn btn-gray max-w-xs">
                    <span className="sr-only">Accéder au profil</span>
                    <HiOutlineUser />
                  </a>
                </Link>
                <div className="relative md:ml-6 lg:ml-10">
                  <Menu>
                    {({ open }) => (
                      <>
                        <Menu.Button
                          className="icon-btn btn-secondary max-w-xs"
                          aria-haspopup="true">
                          <span className="sr-only">Voir le panier</span>
                          <HiOutlineShoppingCart />
                        </Menu.Button>

                        <Transition
                          show={open}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95">
                          <Menu.Items
                            static
                            className="absolute right-0 w-96 mt-2 origin-top-right outline-none"
                            // @ts-ignore
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu">
                            Card menu
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Transition
          show={showNav}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="md:hidden bg-reddish-brown text-white text-lg font-medium inset-0 fixed flex flex-col justify-between">
          <div className="flex items-center pl-7 pt-5 focus:outline-none">
            <button
              className="icon-btn p-0"
              aria-haspopup="true"
              onClick={() => setNavState(false)}>
              <span className="sr-only">Fermer le menu</span>
              <HiX className={`w-6 h-6`} />
            </button>
          </div>

          <div className="flex flex-col justify-start items-center space-y-12">
            {nav.map((item, i) => (
              <Link href={routes[item.route].url} key={`nav-item-${i}`}>
                <a
                  className={clsx(
                    'cursor-pointer rounded-md px-4 py-2 transition',
                    currentRoute?.key === item.route
                      ? 'bg-white text-reddish-brown hover:bg-gray-200'
                      : 'text-white hover:text-gray-200'
                  )}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="bg-light-transparent h-1 w-8/12"></div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-2">
            <a href="https://facebook.com" target="_blank">
              <AiOutlineFacebook
                style={{ width: '2.1rem', height: '2.1rem' }}
              />
            </a>
            <a href="https://instagram.com" target="_blank">
              <AiOutlineInstagram
                style={{ width: '2.1rem', height: '2.1rem' }}
              />
            </a>
          </div>
          <div className="flex flex-row justify-center items-center space-x-2">
            <Link href={routes.mentionLegales.url}>
              <a>Mentions légales</a>
            </Link>
            <div>•</div>
            <Link href={routes.cgv.url}>
              <a>CGV</a>
            </Link>
          </div>
        </Transition>
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
