import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Link,
  makeStyles,
  Theme,
  Typography
} from "@material-ui/core";
import {NextPage} from "next";
import Layout from "@components/Layout/Layout";
import {faChevronDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Divider from "@components/Divider";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  hero: {
    marginBottom: 100,
    padding: 0,
    width: "100%",

    "& figure": {
      padding: 0,
      margin: 0,
      height: 150,

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }
  },
  secondHeroContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,

    "& figure": {
      overflow: "hidden",
      borderRadius: "50%",
      marginTop: -100,
      height: 200,
      width: 200,

      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }
    }
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: theme.palette.secondary.main,

  },
  accordion: {
    width: "50vw",
    borderBottom: "2px solid " + theme.palette.background.paper,
    background: "none",
    boxShadow: "none",
    border: "none",

    "&::before": {
      content: "none"
    }
  },
  link: {
    alignSelf: "center",
  }
}))

const Index: NextPage = () => {

  const styles = useStyles()


  return (
    <Layout maxWidth={"xl"} style={{width: "100%", padding: 0, margin: 0}}>
      <div className={styles.hero}>
        <figure>
          <img src="https://www.lanouvelle.net/wp-content/uploads/sites/5/2017/11/ft-24032017-fruits-legumes-1024x678.jpg" alt=""/>
        </figure>

        <div className={styles.secondHeroContainer}>
          <figure>
            <img src="https://randomuser.me/api/portraits/men/61.jpg" alt=""/>
          </figure>

          <Typography variant={"h5"} color={"primary"} style={{marginTop: 20, fontWeight: "bold"}}>Bonjour,</Typography>
          <Typography color={"primary"}>NOM_USER</Typography>
        </div>
      </div>

      <Accordion className={styles.accordion} style={{margin: 0}}>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faChevronDown}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.heading}>Mes informations</Typography>
        </AccordionSummary>
        <AccordionDetails style={{color: "#e18380", flexDirection: "column"}}>
          <Typography variant={"body1"} gutterBottom>
            <span style={{fontWeight: "bold"}}>Nom:</span> DOE
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            <span style={{fontWeight: "bold"}}>Prénom:</span> JOHN
          </Typography>
          <Typography variant={"body1"} gutterBottom>
            <span style={{fontWeight: "bold"}}>Email:</span> JOHNDOE@example.com
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider color={"primary"} margin={"50px"}/>

      <Link href={""} className={styles.link}>
        <Accordion className={styles.accordion} style={{margin: 0}}>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronRight}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.heading}>Mes commandes</Typography>
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
        </Accordion>
      </Link>

      <Link href={""} className={styles.link}>
        <Accordion className={styles.accordion} style={{margin: 0}}>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronRight}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.heading}>mon panier</Typography>
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
        </Accordion>
      </Link>

      <Link href={""} className={styles.link} style={{marginBottom: 50}}>
        <Accordion className={styles.accordion} style={{margin: 0}}>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faChevronRight}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={styles.heading} style={{color: "#e18380"}}>se déconnecter</Typography>
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
        </Accordion>
      </Link>

    </Layout>
  );
}

export default Index
