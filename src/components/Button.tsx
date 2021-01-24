import React, { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  color?: 'primary' | 'secondary' | 'gray';
  variant?: 'default' | 'minimized';
  classes?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  variant,
  classes,
  ...props
}) => {
  let colorClasses;
  let variantClasses;

  switch (color || 'primary') {
    case 'primary':
      colorClasses =
        'bg-primary text-white hover:bg-darker-primary focus:ring-transparent-primary';
      break;
    case 'secondary':
      colorClasses =
        'bg-secondary text-primary hover:bg-primary hover:text-secondary focus:ring-light-secondary';
      break;
    case 'gray':
      colorClasses =
        'bg-lighter-grey text-reddish-brown hover:bg-reddish-brown hover:text-lighter-grey focus:ring-lightest-grey';
      break;
  }

  switch (variant || 'default') {
    case 'default':
      variantClasses = 'text-2xl py-3 px-11 text-2xl font-extrabold';
      break;

    case 'minimized':
      variantClasses = 'text-base py-2 px-6 font-bold';
      break;
  }

  return (
    <button
      {...props}
      className={`${colorClasses} ${variantClasses} font-sans rounded-full transition transform-duration-75 focus:outline-none focus:ring-4 focus:ring-opacity-75 ${classes}`}>
      {children}
    </button>
  );
};

export default Button;
