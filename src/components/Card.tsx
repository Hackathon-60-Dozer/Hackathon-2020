import React from 'react';
import styled from "styled-components";
import Link from 'next/link';
import theme from "@theme";


export type CardProps = {
  href?: string;
  width: string;
  height: string;
}
const Card: React.FC<CardProps> = (props) => {
  console.log(props.width)
  const content = (
    <MainContainer>
      {props.children}
    </MainContainer>
  )

  if(props.href) return <Link href={props.href}>{content}</Link>

  return content;
}

const MainContainer = styled.div `
  width: 200px;
  height: 300px;
  background: ${props => props.theme.colors.light};
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  margin: 20px;

  -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.50);
  -moz-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.50);
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.50);

  &:hover {
    transform: translate3d(0,-3%,0);
    -webkit-box-shadow: 0px 6px 9px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 6px 9px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 6px 9px 0px rgba(0,0,0,0.5);
  }
`

export default Card
