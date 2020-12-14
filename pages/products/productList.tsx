import React, {useEffect, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core";
import {NextPage} from "next";

const useStyles = makeStyles((theme: Theme) => ({

}))

const ProductList: NextPage = () => {

  const [productList, setProductList] = useState({})

  useEffect(() => {
    //Récupération des données ici
  }, [])


  return (

  );
}

export default ProductList
