import React, {useEffect, useState} from "react";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Layout from "@components/Layout/Layout";
import {Button, Icon, IconButton, makeStyles, Theme, Typography} from "@material-ui/core";
import {faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {colors} from "@theme";
import Divider from "@components/Divider";
import Section from "@components/Section";
import {initializeApollo} from "@services/apollo/client";
import {gql} from "@apollo/client";

const useStyles = makeStyles((theme: Theme) => ({
  imgContainer: {
    height: "50vh",
    width: "70%",
    margin: 0,

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  },
  amountWrapper: {
    width: 50,
    height: 50,
    fontSize:30,
    borderRadius: "50%",
    border: "1px solid " + theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#373737"
  },
  iconWrapper: {
    color: theme.palette.primary.main,
    fontSize: 50
  }
}))

const Product : NextPage = ({data}) => {
  const [basket, setBasket] = useState({}) // infos panier depuis cookies

  const [amount, setAmount] = useState(1)

  const styles = useStyles()


  return (
    <Layout style={{padding: 0, width: "100%"}}>
      <figure className={styles.imgContainer}>
        <img src="https://i.picsum.photos/id/9/536/354.jpg?hmac=5PiiV8cCMwZsDl8bYwpetFqtPuNn5uY2WcKTEb5ykW4" alt=""/>
      </figure>

      <Typography variant={"h1"} color={"primary"} style={{margin: 20}}>Courge Butternut - origine France</Typography>
      <Typography color={"secondary"}>5.05 / pièce</Typography>

      <div style={{display: "flex", alignItems: "center"}}>

        <IconButton onClick={() => setAmount(amount + 1)} className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faPlusCircle}/>
        </IconButton>

        <div className={styles.amountWrapper}>
          {amount}
        </div>

        <IconButton onClick={() => {if(amount>0) setAmount(amount - 1)}} className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faMinusCircle}/>
        </IconButton>


      </div>

      <Divider color={"grey"}/>

      <Typography variant={"h2"} color={"secondary"}>Informations</Typography>
      <Typography style={{color: "#373737"}}>ALLERGENES_TXT</Typography>
      <br/>
      <Typography style={{color: "#373737"}}>MODES_CONSOMMATION_TXT</Typography>

      <Section color={"grey"} style={{padding: 20}}>
        <Button>Ajouter {amount} au panier</Button>
      </Section>

    </Layout>
  )
};
const FETCH_PRODUCT = gql`
  query getProduct($id:ID!) {
    getProduct(
      id: $id
    )
  }
`
export const getStaticProps : GetStaticProps = async ({params}) => {
  const apollo = initializeApollo()
  const productId = params.product
  const {data} = await apollo.query({
    query: FETCH_PRODUCT,
    variables: {
      id: productId
    }
  })
  if (!data.getProduct) throw new Error("Ce produit n'existe pas !")
  return {
    props: {
      data: data.getProduct
    },
    revalidate: 60
  }
}
const FETCH_PRODUCT_LIST = gql`
  query getAllProducts {
    getAllProducts {
      _id
    }
  }
`
export const getStaticPaths: GetStaticPaths = async () => {
  const apollo = initializeApollo()
  const {data} = await apollo.query({
    query: FETCH_PRODUCT_LIST
  })

  return {
    paths: data.getAllProducts.map(product => ({params: {product : product._id}})),
    fallback: "blocking",
  }
}

export default Product;
