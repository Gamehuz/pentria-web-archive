import React from "react";
import HomeNavbar from "../../components/HomeNavbar";
import styles from "./home.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <HomeNavbar />
    </div>
  );
};

export default Homepage;
