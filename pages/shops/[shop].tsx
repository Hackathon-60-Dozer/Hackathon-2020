import React, {useState} from "react";
import {Button, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Layout from "@components/Layout/Layout";
import {gql} from "@apollo/client";
import {initializeApollo} from "@services/apollo/client";


const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    width: "80%",
    marginBottom: 80,
  },
  firstHeroContainer: {
    height: 250,
    position: "relative",
    margin: 0,

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  },
  secondHeroContainer: {
    padding: 15,
  },
  thirdHeroContainer: {
    padding: 25,
    background: theme.palette.secondary.main
  }
}))

const Product: NextPage = () => {

  const [shop, setShop] = useState({})
  const [ShopProducts, setShopProducts] = useState({})
  const [displayAll, setDisplayAll] = useState(false)

  const styles = useStyles()

  return (
    <Layout style={{width: "100%"}}>
      <div className={styles.hero}>
        <Grid container direction="row" justify="center" alignItems="center">

          <Grid item xs={6}>
            <figure className={styles.firstHeroContainer}>
              <img src="https://i.picsum.photos/id/9/536/354.jpg?hmac=5PiiV8cCMwZsDl8bYwpetFqtPuNn5uY2WcKTEb5ykW4"
                   alt=""/>
            </figure>
          </Grid>

          <Grid item xs={6}>
            <div className={styles.secondHeroContainer}>
              <Typography variant={"h1"} color={"secondary"}>Au petit paradis</Typography>
              <Typography variant={"subtitle1"} color={"textSecondary"}>- Primeur</Typography>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={styles.thirdHeroContainer}>
              <Typography variant={"h5"} color={"textSecondary"} style={{fontWeight: "bold"}}>Horaires d'ouverture</Typography>
              <Typography variant={"subtitle1"} color={"textSecondary"}>HORAIRES_OUVERTURE_TXT</Typography>
            </div>
          </Grid>

        </Grid>
      </div>

      <div>
        <Typography variant={"h2"} color={"secondary"}>Nos produits</Typography>
        {
          displayAll
            ?
            <p>GRID</p>
            :
            <p>CAROUSSEL</p>
        }
        {
          displayAll || <Button onClick={() => setDisplayAll(true)}>Voir tous les produits</Button>
        }
      </div>
    </Layout>
  );
};
const FETCH_SHOP = gql`
  query getShop($id:ID!) {
    getShop(
      id: $id
    )
  }
`
export const getStaticProps : GetStaticProps = async ({params}) => {
  const apollo = initializeApollo()
  const shopId = params.shop
  const {data} = await apollo.query({
    query: FETCH_SHOP,
    variables: {
      id: shopId
    }
  })
  if (!data.getShop) throw new Error("Ce produit n'existe pas !")
  return {
    props: {
      data: data.getShop
    },
    revalidate: 60
  }
}
const FETCH_SHOP_LIST = gql`
  query getAllShops {
    getAllShops {
      _id
    }
  }
`
export const getStaticPaths: GetStaticPaths = async () => {
  const apollo = initializeApollo()
  const {data} = await apollo.query({
    query: FETCH_SHOP_LIST
  })

  return {
    paths: data.getAllShops.map(shop => ({params: {shop : shop._id}})),
    fallback: "blocking",
  }
}

export default Product
