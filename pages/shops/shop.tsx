import React from 'react';
import { NextPage } from 'next';
import Layout from '@src/components/Layout/Layout';
import { BsChevronUp } from 'react-icons/bs';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Shop: NextPage = () => {
  return (
    <Layout>
      <section className="bg-light-secondary p-10 flex flex-col-reverse md:flex-row gap-5">
        <div className="w-1/6"></div>
        <div className="flex flex-col w-full md:w-3/6 gap-2">
          <p className="text-xs">EPICERIE</p>
          <h2 className="text-3xl font-bold my-2.5">Le paradis gourmet</h2>
          <div className="flex gap-5 items-center text-xs mb-2.5">
            <p className="">Spécialités régionales • Vins • Epices</p>
            <p className="">€€</p>
            <BsChevronUp />
          </div>
          <p className="text-xs">Horaires: 12h-14h/18h-20h</p>
          <p className="text-xs">
            Le paradis gourmet est une véritable épicerie fine à l'ancienne vous
            pourrez y découvrir toutes les spécialités de notre région
            (cassoulet, foie gras,...) ainsi que des épices, des vins et bien
            d'autres produits artisanaux.
          </p>
        </div>
        <div className="w-full md:w-2/6 flex flex-col justify-center items-center gap-2">
          <img
            src="https://picsum.photos/1920/1080"
            alt="lorem"
            className="rounded-3xl shadow"
          />
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-3 gap-2">
              <img
                src="https://picsum.photos/1920/1080"
                alt="lorem"
                className="rounded-2xl shadow"
              />
              <img
                src="https://picsum.photos/1920/1080"
                alt="lorem"
                className="rounded-2xl shadow"
              />
              <img
                src="https://picsum.photos/1920/1080"
                alt="lorem"
                className="rounded-2xl shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="p-12 w-full flex flex-col gap-10">
        <h2 className="text-xl my-3 font-bold">
          Choisissez le produit à ajouter au panier
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <figure className="flex gap-5 items-center w-full bg-white shadow p-2 rounded-3xl">
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow object-cover w-48 h-28"
            />
            <figcaption className="text-base font-bold">Viande</figcaption>
          </figure>

          <figure className="flex gap-5 items-center w-full bg-white shadow p-2 rounded-3xl">
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow object-cover w-48 h-28"
            />
            <figcaption className="text-base font-bold">
              Fruits et légumes
            </figcaption>
          </figure>

          <figure className="flex gap-5 items-center w-full bg-white shadow p-2 rounded-3xl">
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow object-cover w-48 h-28"
            />
            <figcaption className="text-base font-bold">
              Poisson et fruits de mer
            </figcaption>
          </figure>

          <figure className="flex gap-5 items-center w-full bg-white shadow p-2 rounded-3xl">
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow object-cover w-48 h-28"
            />
            <figcaption className="text-base font-bold">Epicerie</figcaption>
          </figure>

          <figure className="flex gap-5 items-center w-full bg-white shadow p-2 rounded-3xl">
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow object-cover w-48 h-28"
            />
            <figcaption className="text-base font-bold">
              Produits du terroir
            </figcaption>
          </figure>

          <figure className="flex gap-5 items-center w-full bg-white shadow p-2 rounded-3xl">
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow object-cover w-48 h-28"
            />
            <figcaption className="text-base font-bold">
              Plat tout prêt
            </figcaption>
          </figure>
        </div>

        <button className="m-auto bg-primary rounded-full px-9 py-3 flex items-center text-white font-bold text-sm m-7">
          Voir plus <AiOutlineArrowDown />
        </button>
      </section>
    </Layout>
  );
};

export default Shop;
