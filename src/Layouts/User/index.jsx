import React from "react";
import NavbarAuth from "../../components/NavbarAuth";
import styles from "./userLayout.module.scss";

const UserLayout = ({ children }) => {
  return (
    <div className={styles.UserLayout}>
      <div className="user_topBar">
        <NavbarAuth />
      </div>
      <div className={styles.user_content}>{children}</div>
    </div>
  );
};

export default UserLayout;
