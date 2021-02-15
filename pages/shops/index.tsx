import React from 'react';
import { NextPage } from 'next';
import Layout from '@src/components/Layout/Layout';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Index: NextPage = () => {
  return (
    <Layout>
      <section className="bg-light-secondary w-full p-20 flex flex-col justify-center items-center gap-4">
        <p className="text-xs">RECHERCHE</p>
        <h2 className="text-2xl font-bold">Les résultats à proximité</h2>

        <div className="rounded-2xl p-8 bg-white shadow flex flex-col justify-around items-center">
          <label htmlFor="" className="text-xs self-start text-lighter-grey">
            Entrez votre adresse pour trouver des commerces à proximité
          </label>
          <form className="flex mt-3">
            <input
              type="text"
              placeholder={'Saisissez votre adresse'}
              className="rounded-tl-full rounded-bl-full bg-light-secondary border-primary border-2 text-primary p-3 placeholder-primary"
            />
            <button className="border-primary border-2 rounded-full -ml-10 py-2 px-5 bg-primary text-light-secondary">
              Rechercher
            </button>
          </form>
        </div>
      </section>

      <section className="p-20 bg-white flex flex-col items-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow"
            />
            <figcaption className="mt-3">
              <h4 className="text-dark-grey font-bold text-xl">
                Le Paradis Gourmet
              </h4>
              <p className="text-light-grey text-sm">
                Horaires: 12h-14h / 18h-20h
              </p>
              <hr className="w-full border-t-2 border-lighter-grey opacity-50" />
              <div className="flex justify-between items-center">
                <p className="text-light-grey text-sm">
                  Spécialités régionales • Vins • Epices
                </p>
                <p className="text-light-grey text-sm">€€</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow"
            />
            <figcaption className="mt-3">
              <h4 className="text-dark-grey font-bold text-xl">
                Le Paradis Gourmet
              </h4>
              <p className="text-light-grey text-sm">
                Horaires: 12h-14h / 18h-20h
              </p>
              <hr className="w-full border-t-2 border-lighter-grey opacity-50" />
              <div className="flex justify-between items-center">
                <p className="text-light-grey text-sm">
                  Spécialités régionales • Vins • Epices
                </p>
                <p className="text-light-grey text-sm">€€</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow"
            />
            <figcaption className="mt-3">
              <h4 className="text-dark-grey font-bold text-xl">
                Le Paradis Gourmet
              </h4>
              <p className="text-light-grey text-sm">
                Horaires: 12h-14h / 18h-20h
              </p>
              <hr className="w-full border-t-2 border-lighter-grey opacity-50" />
              <div className="flex justify-between items-center">
                <p className="text-light-grey text-sm">
                  Spécialités régionales • Vins • Epices
                </p>
                <p className="text-light-grey text-sm">€€</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow"
            />
            <figcaption className="mt-3">
              <h4 className="text-dark-grey font-bold text-xl">
                Le Paradis Gourmet
              </h4>
              <p className="text-light-grey text-sm">
                Horaires: 12h-14h / 18h-20h
              </p>
              <hr className="w-full border-t-2 border-lighter-grey opacity-50" />
              <div className="flex justify-between items-center">
                <p className="text-light-grey text-sm">
                  Spécialités régionales • Vins • Epices
                </p>
                <p className="text-light-grey text-sm">€€</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow"
            />
            <figcaption className="mt-3">
              <h4 className="text-dark-grey font-bold text-xl">
                Le Paradis Gourmet
              </h4>
              <p className="text-light-grey text-sm">
                Horaires: 12h-14h / 18h-20h
              </p>
              <hr className="w-full border-t-2 border-lighter-grey opacity-50" />
              <div className="flex justify-between items-center">
                <p className="text-light-grey text-sm">
                  Spécialités régionales • Vins • Epices
                </p>
                <p className="text-light-grey text-sm">€€</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow"
            />
            <figcaption className="mt-3">
              <h4 className="text-dark-grey font-bold text-xl">
                Le Paradis Gourmet
              </h4>
              <p className="text-light-grey text-sm">
                Horaires: 12h-14h / 18h-20h
              </p>
              <hr className="w-full border-t-2 border-lighter-grey opacity-50" />
              <div className="flex justify-between items-center">
                <p className="text-light-grey text-sm">
                  Spécialités régionales • Vins • Epices
                </p>
                <p className="text-light-grey text-sm">€€</p>
              </div>
            </figcaption>
          </figure>

          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="rounded-3xl shadow"
            />
            <figcaption className="mt-3">
              <h4 className="text-dark-grey font-bold text-xl">
                Le Paradis Gourmet
              </h4>
              <p className="text-light-grey text-sm">
                Horaires: 12h-14h / 18h-20h
              </p>
              <hr className="w-full border-t-2 border-lighter-grey opacity-50" />
              <div className="flex justify-between items-center">
                <p className="text-light-grey text-sm">
                  Spécialités régionales • Vins • Epices
                </p>
                <p className="text-light-grey text-sm">€€</p>
              </div>
            </figcaption>
          </figure>
        </div>

        <button className="bg-primary rounded-full px-9 py-3 flex items-center text-white font-bold text-sm m-7">
          Voir plus <AiOutlineArrowDown />
        </button>
      </section>
    </Layout>
  );
};

export default Index;
