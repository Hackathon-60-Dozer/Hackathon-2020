import React from "react";
import {makeStyles, Theme, Typography} from "@material-ui/core";
import {NextPage} from "next";
import Cookies from 'js-cookie'
import Layout from "@components/Layout/Layout";
import Section from "@components/Section";


const useStyles = makeStyles((theme : Theme) => ({
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
  itemContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20
  }
}))

const Basket : NextPage = () => {

  const styles = useStyles()

  const label = [
    {
      shopName: "Marché Victor Hugo",
      productName: "Courges",
      productAmount: 2
    },
    {
      shopName: "Marché Victor Hugo",
      productName: "Courges",
      productAmount: 2
    }
  ]

  return (
    <Layout maxWidth={"xl"} style={{width: "100%", padding: 0, margin: 0}}>
      <Section className={styles.hero} color={"white"}>
        <figure>
          <img src="https://i.picsum.photos/id/9/536/354.jpg?hmac=5PiiV8cCMwZsDl8bYwpetFqtPuNn5uY2WcKTEb5ykW4" alt=""/>
        </figure>

        <div className={styles.secondHeroContainer}>
          <figure>
            <img src="https://i.picsum.photos/id/9/536/354.jpg?hmac=5PiiV8cCMwZsDl8bYwpetFqtPuNn5uY2WcKTEb5ykW4" alt=""/>
          </figure>

          <Typography variant={"h5"} color={"primary"} style={{marginTop: 20, fontWeight: "bold"}}>Votre commande</Typography>
          <Typography color={"primary"}>A valider</Typography>
        </div>
      </Section>

      <Section color={"grey"} style={{padding: 40}}>
        <div style={{marginLeft: "35%", width: "25%"}}>
          <Typography variant={"h5"} color={"secondary"} style={{marginBottom: 20, textAlign: "left"}}>Marché Victor Hugo</Typography>
          <div className={styles.itemContainer}>
            <Typography variant={"body1"} color={"primary"}>Courge</Typography>
            <Typography variant={"body1"} color={"primary"} style={{border: "1px solid white", padding: "0px 7px"}}>2</Typography>
            <Typography variant={"body1"} color={"primary"}>8.15€</Typography>
          </div>
          <div className={styles.itemContainer}>
            <Typography variant={"body1"} color={"primary"}>Carotte</Typography>
            <Typography variant={"body1"} color={"primary"} style={{border: "1px solid white", padding: "0px 7px"}}>2</Typography>
            <Typography variant={"body1"} color={"primary"}>8.15€</Typography>
          </div>
          <div className={styles.itemContainer}>
            <Typography variant={"body1"} color={"primary"}>Courge</Typography>
            <Typography variant={"body1"} color={"primary"} style={{border: "1px solid white", padding: "0px 7px"}}>2</Typography>
            <Typography variant={"body1"} color={"primary"}>8.15€</Typography>
          </div>
        </div>
        <div style={{marginLeft: "35%", width: "25%"}}>
          <Typography variant={"h5"} color={"secondary"} style={{marginBottom: 20, textAlign: "left"}}>Marché Victor Hugo</Typography>
          <div className={styles.itemContainer}>
            <Typography variant={"body1"} color={"primary"}>Courge</Typography>
            <Typography variant={"body1"} color={"primary"} style={{border: "1px solid white", padding: "0px 7px"}}>2</Typography>
            <Typography variant={"body1"} color={"primary"}>8.15€</Typography>
          </div>
        </div>
      </Section>

    </Layout>
  );
}

export default Basket
