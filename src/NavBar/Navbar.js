import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/logo-belb.png";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles["nav-bar"]}>
      {/* <div className={styles.wrap}> */}
      <Link to="/">
        <img
          className={styles.logo}
          src={logo}
          alt="belb-frontend website search your spot logo"
        />
      </Link>
      <SearchBar small />
      <button className={`button ${styles["nav-button"]}`}>Sign in</button>
      <button className={`button ${styles["nav-button"]}`}>Register</button>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
