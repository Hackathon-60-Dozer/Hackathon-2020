import React, { InputHTMLAttributes } from 'react';

export type InputProps = {
  label?: string;
  inputRef?: any;
};

const Input: React.FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  inputRef,
  ...props
}) => {
  return (
    <div>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input {...props} ref={inputRef} />
    </div>
  );
};

export default Input;
