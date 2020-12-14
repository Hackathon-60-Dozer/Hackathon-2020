import React from "react";
import {NextPage} from "next";
import Layout from "@components/Layout/Layout";
import {makeStyles, Theme, Typography} from "@material-ui/core";
import {inspect} from "util";

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
    <Layout maxWidth={"xl"}>
      <div className={styles.hero}>
        <figure>
          <img src="https://i.picsum.photos/id/9/536/354.jpg?hmac=5PiiV8cCMwZsDl8bYwpetFqtPuNn5uY2WcKTEb5ykW4" alt=""/>
        </figure>

        <div className={styles.secondHeroContainer}>
          <figure>
            <img src="https://i.picsum.photos/id/9/536/354.jpg?hmac=5PiiV8cCMwZsDl8bYwpetFqtPuNn5uY2WcKTEb5ykW4" alt=""/>
          </figure>

          <Typography variant={"h5"} color={"primary"} style={{marginTop: 20, fontWeight: "bold"}}>Bonjour,</Typography>
          <Typography color={"primary"}>NOM_USER</Typography>
        </div>
      </div>
    </Layout>
  )
}

export default Success
