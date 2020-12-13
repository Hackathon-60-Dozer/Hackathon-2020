
import React, {useState} from 'react';
import styled from "styled-components";
import Link from 'next/link';
import {NextPage} from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Layout from "@components/Layout/Layout";



const Commands: NextPage = () => {

  const [commands, setCommands] = useState({})

  return (
    <Layout>
      <MainContainer>
        <FontAwesomeIcon icon={faArrowLeft}/>
        <h1>Mes commandes</h1>
        <hr/>
        <h2>En cours :</h2>

      </MainContainer>
    </Layout>
  )
}

const MainContainer = styled.div `
  margin: 0;
  padding: 0;

  hr {
    border: 1px solid ${props => props.theme.colors.light};
    width: 90vw;
    margin-bottom: 5rem;
  }

  h1 {
    color: ${props => props.theme.colors.secondary};
    width: 100%;
    text-align: center;
  }

  h2 {
    color: ${props => props.theme.colors.secondary};
  }
`

export default Commands
