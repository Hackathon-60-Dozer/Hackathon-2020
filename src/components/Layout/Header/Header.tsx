import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between p-3 items-baseline shadow z-10">
      <button className="flex justify-center items-center">
        <GiHamburgerMenu />
      </button>
      <h2 className="font-display text-2xl">l'Echoppe Toulousaine</h2>
      <button className="rounded-full bg-secondary text-primary flex items-center justify-center w-8 h-8">
        <FiShoppingCart />
      </button>
    </header>
  );
};

export default Header;
