import React from "react";
import styles from "./Partners.module.scss";

import HomeNavbar from "../../components/HomeNavbar";

const Partners = () => {
  return (
    <>
      <HomeNavbar />
      <div className={styles.section_container}>
        <div className={styles.hero_section}>
          <div className={styles.content_one}></div>
          <div className={styles.content_two}></div>
        </div>
      </div>
    </>
  );
};

export default Partners;
