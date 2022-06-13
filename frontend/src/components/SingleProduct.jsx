import React, { useState, useEffect } from "react";
import styles from "../assets/styles/main.module.css";
import appSettings from "../app.settings.json";
import axios from "axios";
import { useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { AddShoppingCart } from "@material-ui/icons";

const SingleProduct = () => {
  const [productData, setProductData] = useState([]);
  const { id } = useParams();

  const fetchData = () => {
    axios.get(appSettings.apiUrl+"/products/"+id).then(res => {
        const data = res.data
        setProductData(data);
    }).catch(err => {
        console.log(err);
    })
  }
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.main_section}>
      <div className={styles.container}>
        <Box m={2} />
        <div className={styles.product_container}>

          <div className={styles.image_container}>
            <img src={productData.img_url} alt="product" className={styles.product_image} />
          </div>

          <div className={styles.detail_container}>
            <Box m={4} />
            <span className={styles.product_title}>{productData.title}</span>
            <div className={styles.product_price_container}>
                <span className={styles.product_price}>${productData.price}</span>
            </div>
            <span className={styles.product_description}>{productData.description}</span>
            <Box m={4} />
            <Button variant="contained" endIcon={<AddShoppingCart />}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
