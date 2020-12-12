import React, { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  label?: string;
  color?: 'primary' | 'secondary' | 'light';
  variant?: 'contained' | 'outlined';
};

const Button: React.FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label, children, ...props }) => {
  return <button {...props}>{children || label}</button>;
};

export default Button;
