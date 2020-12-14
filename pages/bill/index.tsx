import React, {useState} from 'react';
import {Button, Input, makeStyles, Theme, Typography} from "@material-ui/core";
import {NextPage} from "next";
import Layout from "@components/Layout/Layout";
import Section from "@components/Section";

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
  adressContainer: {
    width: "50%",
    marginLeft: "25%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",

    "& span": {
      padding: "5px 15px",
      background: theme.palette.background.paper
    }
  }
}))

const Index : NextPage = () => {

  const [inputState, setInputState] = useState(0)
  const styles = useStyles()

  return(
    <Layout maxWidth={"xl"} style={{padding: 0}} className={styles.root}>
      <div className={styles.hero}>
        <figure>
          <img src="https://www.lanouvelle.net/wp-content/uploads/sites/5/2017/11/ft-24032017-fruits-legumes-1024x678.jpg" alt=""/>
        </figure>
      </div>

      <Section color={"white"}>
        <Typography variant={"h1"} color={"secondary"}>Paiement</Typography>
        <div>
          <div className={styles.adressContainer}>
            <Typography variant={"h4"} color={"secondary"} style={{marginTop: 30, marginBottom: 15}}>Adresse de récupération</Typography>
            <div style={{display: "flex"}}>
              <span>1</span>
              <Typography variant={"h5"} color={"textSecondary"}> Marché Victor Hugo</Typography>
            </div>
            <Typography variant={"body1"} color={"textSecondary"}>Place Victor Hugo</Typography>
            <Typography variant={"body1"} color={"textSecondary"}>31000 TOULOUSE</Typography>
            <Typography variant={"body1"} color={"textSecondary"}>Stand n°19</Typography>
          </div>
        </div>

        <div className={styles.adressContainer}>
          <Typography variant={"h4"} color={"secondary"} style={{marginTop: 30, marginBottom: 15}}>Paiement</Typography>
          <Typography variant={"h5"} color={"textSecondary"}>Type de paiement</Typography>
        </div>
      </Section>

      <Section color={"grey"}>
        <div className={styles.adressContainer}>
          <Typography variant={"h5"} color={"secondary"}>PayPal</Typography>
          <div style={{display: "flex"}}>
            <input type="radio"/>
            <Typography variant={"body1"} color={"secondary"} style={{marginLeft: 20}}>Vous devrez entrer vos informations de connexion pour passer votre commande</Typography>
          </div>
          <hr style={{border: "1px solid pink", width: "91%"}}/>
          <Typography variant={"body1"} color={"primary"} style={{marginLeft: "4.5%"}}>Définir comme méthode de paiement par défaut</Typography>
        </div>

        <div className={styles.adressContainer} style={{marginTop: 30}}>
          <Typography variant={"h5"} color={"secondary"}>Visa Débit</Typography>
          <div style={{display: "flex"}}>
            <input type="radio"/>
            <Typography variant={"body1"} color={"secondary"} style={{marginLeft: 20}}>John Doe <span style={{marginLeft: 50, fontWeight: "bold"}}>Exp: 09/22</span></Typography>
          </div>
          <hr style={{border: "1px solid pink", width: "91%"}}/>
          <Typography variant={"body1"} color={"primary"} style={{marginLeft: "4.5%"}}>Méthode de paiement par défaut</Typography>
        </div>

        <Typography variant={"h4"} color={"secondary"} style={{marginTop: 50, marginBottom: 30}}>CARTE DE CREDIT/DEBIT</Typography>
        <div className={styles.adressContainer}>
          <Input style={{background: "#fafafa", boxShadow: "0 0 4px 0 rgba(0,0,0,0.30", padding: 5, borderRadius: 2, width: "50%"}} placeholder={"NUMERO DE CARTE"}/>
          <Typography variant={"h5"} color={"secondary"} style={{marginTop: 50, marginBottom: 30}}>DATE D'EXPIRATION</Typography>

          <div style={{display: "flex"}}>
            <Input style={{background: "#fafafa", boxShadow: "0 0 4px 0 rgba(0,0,0,0.30", width: "100%", padding: 5, borderRadius: 2, marginRight: 12}} placeholder={"MOIS"}/>
            <Input style={{background: "#fafafa", boxShadow: "0 0 4px 0 rgba(0,0,0,0.30", width: "100%", padding: 5, borderRadius: 2}} placeholder={"ANNEE"}/>
          </div>

          <Input style={{background: "#fafafa", boxShadow: "0 0 4px 0 rgba(0,0,0,0.30", width: "100%", padding: 5, borderRadius: 2, marginTop: 14}} placeholder={"NOM APPARAISSANT SUR LA CARTE"}/>
          <Typography variant={"h5"} color={"secondary"} style={{marginTop: 50, marginBottom: 30}}>CVV</Typography>
          <Input style={{background: "#fafafa", boxShadow: "0 0 4px 0 rgba(0,0,0,0.30", width: "30%", padding: 5, borderRadius: 2, marginTop: 15}} placeholder={"CVV"}/>

          <div style={{display: "flex", width: "100%", marginTop: 35}}>
            <Typography variant={"body1"} color={"primary"} style={{marginRight: "4.5%"}}>Enregistre pour une utilisation ultérieure</Typography>
            <input type="radio"/>
          </div>
        </div>
      </Section>

      <Section color={"white"}>

        <Button variant={"contained"} color={"secondary"}>Utiliser une carte</Button>

        <div className={styles.adressContainer} style={{marginTop: 90, marginBottom: 90}}>
          <Typography variant={"h5"} color={"textSecondary"} style={{marginLeft: "4.5%"}}>Paiement sur place</Typography>
          <div style={{display: "flex"}}>
            <input type="radio"/>
            <div>
              <Typography variant={"body1"} color={"textSecondary"} style={{marginLeft: 20, textAlign: "left"}}>Liquide</Typography>
              <Typography variant={"body1"} color={"textSecondary"} style={{marginLeft: 20, textAlign: "left"}}>Chèque déjeuner</Typography>
              <Typography variant={"body1"} color={"textSecondary"} style={{marginLeft: 20, textAlign: "left"}}>Carte Bancaire</Typography>
            </div>
          </div>
          <hr style={{border: "1px solid pink", width: "91%"}}/>
          <Typography variant={"body1"} color={"primary"} style={{marginLeft: "4.5%"}}>Définir comme méthode de paiement par défaut</Typography>
        </div>

        <Button variant={"outlined"} color={"secondary"}>Valider la commande</Button>
      </Section>
    </Layout>
  )
}

export default Index
