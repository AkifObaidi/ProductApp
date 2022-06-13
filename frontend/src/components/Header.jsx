import React from "react";
import styles from "../assets/styles/header.module.css";
import logo from '../assets/icons/logo.png'
import {Link} from "react-router-dom";

const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.nav_logo}>
         <Link to="/">
            <img
              className={styles.nav_logo_icon}
              src={logo}
              width="45"
              alt=" app Logo"
            />
         </Link>
            <Link className={styles.nav_logo_text} to="/">Product List App</Link>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Header;
