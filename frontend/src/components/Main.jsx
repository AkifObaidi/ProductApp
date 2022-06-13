import React, { useState, useEffect } from "react";
import Table from "./MuiTable";
import styles from "../assets/styles/main.module.css";
import appSettings from "../app.settings.json";
import axios from "axios";
import { AddBox } from "@material-ui/icons";
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

const Main = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = () => {
    axios.get(appSettings.apiUrl+"/products").then(res => {
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
        <Link to="/add-product">
          <AddBox className={styles.add_icon} />
        </Link>
        <Box m={1} />
        <Table products={productData} />
      </div>
    </main>
  );
};

export default Main;
