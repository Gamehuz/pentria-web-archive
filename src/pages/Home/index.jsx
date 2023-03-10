import React from "react";
import NavbarAuth from "../../components/NavbarAuth";
import UserSidebar from "../../components/UserSidebar";
import styles from "./home.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <NavbarAuth />
      <UserSidebar>Home page</UserSidebar>
    </div>
  );
};

export default Homepage;
