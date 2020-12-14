
import React, {useState} from 'react';
import Link from 'next/link';
import {NextPage} from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Layout from "@components/Layout/Layout";
import {inspect} from "util";
import {makeStyles, Typography, Theme, IconButton} from "@material-ui/core";
import Section from "@components/Section";
import Divider from "@components/Divider";
import theme, {colors} from "@theme";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  sectionTitle: {
    textAlign: 'left'
  },
  backButton: {
    fontSize: 40,
    margin: theme.spacing(2, 10),
    color: theme.palette.primary.main,
    cursor: "pointer",
    position: "absolute"
  }
}))

const Commands: NextPage = () => {

  const [commands, setCommands] = useState({})
  const router = useRouter()

  const styles = useStyles();

  return (
    <Layout>
      <Section color={'white'} style={{padding: 20}}>
        <IconButton
          onClick={() => {
            router.back()
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className={styles.backButton}/>
        </IconButton>
        <Typography variant={'h1'} color={'secondary'} style={{textAlign: "center", width: "100%"}}>Mes commandes</Typography>
        <Divider color={"grey"}/>
        <Typography variant={'h2'} className={styles.sectionTitle} color={'secondary'}>En cours :</Typography>
        <div>CAROUSSSEL ICI</div>
        <Divider color={"grey"}/>
        <Typography variant={'h2'} className={styles.sectionTitle} color={'secondary'}>Récupérées :</Typography>

      </Section>
    </Layout>
  )
}

/*const MainContainer = styled.div `
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
`*/

export default Commands
