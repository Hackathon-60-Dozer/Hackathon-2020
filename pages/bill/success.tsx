import React from "react";
import {NextPage} from "next";
import Layout from "@components/Layout/Layout";
import {makeStyles, Theme, Typography} from "@material-ui/core";
import {inspect} from "util";
import Divider from "@components/Divider";

const useStyles = makeStyles((theme: Theme) => ({
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
}))


const Success : NextPage = () => {

  const styles = useStyles()

  return (
    <Layout maxWidth={"xl"} style={{padding: 0}}>
      <div className={styles.hero}>
        <figure>
          <img src="https://www.lanouvelle.net/wp-content/uploads/sites/5/2017/11/ft-24032017-fruits-legumes-1024x678.jpg" alt=""/>
        </figure>

        <div className={styles.secondHeroContainer}>
          <figure>
            <img src="https://randomuser.me/api/portraits/men/61.jpg" alt=""/>
          </figure>

          <Typography variant={"h5"} color={"primary"} style={{marginTop: 20, fontWeight: "bold"}}>Merci</Typography>
          <Typography color={"primary"}>pour votre confiance</Typography>
        </div>
      </div>

      <Typography variant={"body2"} color={"secondary"} style={{marginBottom: 80}}>Nous vous confirmons que la commande a bien été prise en compte et qu'elle est en cours de préparation.</Typography>
      <div style={{width: "70%", background: "#fafafa", padding: 50, boxShadow: "0 0 3px 0 rgba(0,0,0,0.30)", marginBottom: 30}}>
        <Typography variant={"h5"} color={"textSecondary"} style={{}}>COMMANDE N°8E869F0F-B8E4-488A</Typography>
        <Typography variant={"h5"} color={"textPrimary"} style={{}}>Passée le 10 décembre 2021 à 14h45</Typography>
        <Typography variant={"h5"} color={"textSecondary"} style={{}}>Votre commande est en cours de préparation</Typography>
      </div>

      <Divider color={"grey"}/>

      <div style={{marginTop: 50, width: "50%"}}>
        <Typography variant={"h3"} color={"secondary"} style={{marginBottom: 20}}>Articles</Typography>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant={"body2"} color={"textPrimary"}>2 courges</Typography>
          <span style={{color: "grey"}}>6.15 €</span>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant={"body2"} color={"textPrimary"}>8 carottes</Typography>
          <span style={{color: "grey"}}>4.50 €</span>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant={"body2"} color={"textPrimary"}>1 citrouille</Typography>
          <span style={{color: "grey"}}>5.50 €</span>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant={"body2"} color={"textPrimary"}>2 concombres</Typography>
          <span style={{color: "grey"}}>1.60 €</span>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant={"body2"} color={"textPrimary"}>4 pommes de terre</Typography>
          <span style={{color: "grey"}}>2.10 €</span>
        </div>

        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant={"h3"} color={"textSecondary"}>Total</Typography>
          <Typography variant={"h3"} color={"primary"}>19.85 €</Typography>
        </div>

        <Typography variant={"body1"} color={"primary"} style={{textAlign: "center", fontSize: 17, margin: 50}}>Un doute sur un produit ? Consultez notre page sur les allergènes <a href="">ici</a></Typography>

        <Typography variant={"h2"} color={"secondary"} style={{textAlign: "center", fontSize: 17, margin: 50}}>Merci et à bientôt !</Typography>
      </div>
    </Layout>
  )
}

export default Success
