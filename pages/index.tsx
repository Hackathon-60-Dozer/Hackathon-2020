import React from 'react';
import { NextPage } from 'next';
import Layout from '@src/components/Layout/Layout';
import { GiPositionMarker } from 'react-icons/gi';
import { AiOutlineArrowRight } from 'react-icons/ai';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <section className="flex bg-light-secondary pb-72">
        <div className="flex flex-col w-2/4 justify-around items-center p-5 py-44">
          <h2 className="text-reddish-brown text-5xl text-center font-bold">
            Soutenez vos commerces de proximité préférés
          </h2>
          <p className="text-light-grey text-base m-12">
            Tous les commerces de bouche de votre quartier disponibles en click
            and collect
          </p>
          <div>
            <div className="rounded-2xl p-8 bg-white shadow flex flex-col justify-around items-center">
              <label
                htmlFor=""
                className="text-xs self-start text-lighter-grey">
                Entrez votre adresse pour trouver des commerces à proximité
              </label>
              <form className="flex mt-3">
                {/*<GiPositionMarker className="text-primary self-center text-2xl" />*/}
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
          </div>
        </div>

        <figure className="w-2/4 flex justify-end">
          <img
            src="https://picsum.photos/1920/1080"
            alt="lorem"
            className="w-3/4 h-full object-cover"
            style={{
              borderRadius: '0 0 0 15%',
            }}
          />
        </figure>
      </section>

      <section className="flex">
        <div className="flex justify-between -mt-32 m-auto w-3/4">
          <div className="p-4 shadow rounded-2xl w-1/4 bg-white flex flex-col gap-3 h-96">
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="w-full h-3/6 object-cover rounded-2xl"
            />
            <div className="flex flex-col px-5 gap-3 mt-5">
              <h4 className="text-xl text-dark-grey font-bold whitespace-nowrap">
                Epiceries
              </h4>
              <p className="text-light-grey text-sm">
                all fodd used with full invoice and clear origin
              </p>
              <button className="flex items-center text-primary">
                Voir les épiceries <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="p-4 shadow rounded-2xl w-1/4 bg-white flex flex-col gap-3 h-96">
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="w-full h-3/6 object-cover rounded-2xl"
            />

            <div className="flex flex-col px-5 gap-3 mt-5">
              <h4 className="text-xl text-dark-grey font-bold whitespace-nowrap">
                Marchés producteurs
              </h4>
              <p className="text-light-grey text-sm">
                all fodd used with full invoice and clear origin
              </p>
              <button className="flex items-center text-primary">
                Voir les épiceries <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className="p-4 shadow rounded-2xl w-1/4 bg-white flex flex-col gap-3 h-96">
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="w-full h-3/6 object-cover rounded-2xl"
            />
            <div className="flex flex-col px-5 gap-3 mt-5">
              <h4 className="text-xl text-dark-grey font-bold whitespace-nowrap">
                Commerces producteurs
              </h4>
              <p className="text-light-grey text-sm">
                all fodd used with full invoice and clear origin
              </p>
              <button className="flex items-center text-primary">
                Voir les épiceries <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-2 mt-32">
        <div className="m-auto w-3/4">
          <h2 className="text-reddish-brown text-3xl font-bold">
            Au menu du jour ?
          </h2>
          <p className="text-light-grey text-xs mt-3 mb-6">
            Des catégories pour tous les goûts
          </p>
        </div>

        <div className="flex w-3/4 m-auto justify-between">
          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="w-40 h-40 rounded-3xl shadow object-cover"
            />
            <figcaption className="text-center text-dark-grey font-bold mt-3">
              Equilibré
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="w-40 h-40 rounded-3xl shadow object-cover"
            />
            <figcaption className="text-center text-dark-grey font-bold mt-3">
              Italien
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="w-40 h-40 rounded-3xl shadow object-cover"
            />
            <figcaption className="text-center text-dark-grey font-bold mt-3">
              Japonais
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="w-40 h-40 rounded-3xl shadow object-cover"
            />
            <figcaption className="text-center text-dark-grey font-bold mt-3">
              Taïlandais
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://picsum.photos/1920/1080"
              alt="lorem"
              className="w-40 h-40 rounded-3xl shadow object-cover"
            />
            <figcaption className="text-center text-dark-grey font-bold mt-3">
              Marocain
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="flex flex-col gap-2 pb-32">
        <div className="mx-auto w-3/4">
          <hr className="border-lighter-grey w-full mt-28 mb-14 border-t-2 opacity-50" />
          <div className="">
            <h2 className="text-reddish-brown text-3xl font-bold">
              Les pépites du coin
            </h2>
            <p className="text-light-grey text-xs mt-3 mb-6">
              Mais chuut ne le dites à personne
            </p>
          </div>

          <div className="grid grid-cols-4 gap-10">
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
                <hr className="w-full border-t-2 border-lighter-grey opacity-50 my-1.5" />
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
                <hr className="w-full border-t-2 border-lighter-grey opacity-50 my-1.5" />
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
                <hr className="w-full border-t-2 border-lighter-grey opacity-50 my-1.5" />
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
                <hr className="w-full border-t-2 border-lighter-grey opacity-50 my-1.5" />
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
                <hr className="w-full border-t-2 border-lighter-grey opacity-50 my-1.5" />
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
                <hr className="w-full border-t-2 border-lighter-grey opacity-50 my-1.5" />
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
                <hr className="w-full border-t-2 border-lighter-grey opacity-50 my-1.5" />
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
        </div>
      </section>

      <section className="flex flex-col gap-2 p-16 bg-light-secondary rounded-tr-3xl rounded-tl-3xl">
        <div className="w-3/4 mx-auto">
          <h2 className="text-3xl text-reddish-brown font-bold">Quartiers</h2>
          <div className="grid grid-cols-4 gap-8 mt-8 text-xs">
            <a href="">Amidonniers</a>
            <a href="">Les Chalets</a>
            <a href="">Pont des Demoiselles</a>
            <a href="">Rangueil</a>
            <a href="">Compans-Caffarelli</a>
            <a href="">Bayard</a>
            <a href="">Ormeau</a>
            <a href="">Saouzelong</a>
            <a href="">Capitole</a>
            <a href="">Belfort</a>
            <a href="">Montaudran</a>
            <a href="">Pech-David</a>
            <a href="">Arnaud-Bernard</a>
            <a href="">Saint-Aubin</a>
            <a href="">La Terasse</a>
            <a href="">Pouvourville</a>
            <a href="">Carmes</a>
            <a href="">Dupuy</a>
            <a href="">Malepère</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
