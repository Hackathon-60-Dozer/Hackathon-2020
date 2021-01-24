import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
const Footer: React.FC = () => {
  return (
    <footer
      className={
        'bg-reddish-brown text-light-secondary rounded-tl-3xl rounded-tr-3xl py-8 px-16 md:py-16 md:px-32'
      }>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="text-left mt-5 md:mt-0">
          <h3 className="font-display text-2xl tracking-wide">
            <strong>L'Echoppe Toulousaine</strong>
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
          <a href="">Mentions légales</a>
          <a href="">CGV</a>
        </div>
        <div className="flex gap-3 text-2xl">
          <a href="">
            <AiOutlineFacebook />
          </a>
          <a href="">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
