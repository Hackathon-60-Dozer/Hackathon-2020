import React, { InputHTMLAttributes } from 'react';
import styled from "styled-components";

export type InputProps = {
  label?: string;
  inputRef?: any;
  error?: string;
  color?: 'primary' | 'secondary' | 'light';
  variant?: 'contained' | 'outlined';
};

const Input: React.FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  error,
  inputRef,
  ...props
}) => {
  return (
    <MainContainer>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input {...props} ref={inputRef} />
      {error && <span style={{ color: 'red', fontSize: 12 }}>{error}</span>}
    </MainContainer>
  );
};

const MainContainer = styled.div `

`

export default Input;
