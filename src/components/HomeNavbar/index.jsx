import React from "react";
import { Link } from "react-router-dom";
import mobileMenu from "./assets/menu-hamburger.svg";
import styles from "./homenav.module.scss";

const HomeNavbar = ({ bg }) => {
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div
      className={`${toggleNav ? styles.activeHomeNav : ""} ${
        styles.homeNavbar
      } ${bg ? bg : styles.defaultBg}`}
    >
      <h1 className={styles.homeNavbarLogo}>
        <Link to="/">Pentria</Link>
      </h1>
      <div className={`${styles.HomeNavbar_container} }`}>
        <ul className={styles.homeNavbarLinks}>
          <li className={styles.homeNavbarLink}>
            <Link to="/partners">Partners</Link>
          </li>
          <li className={styles.homeNavbarLink}>
            <Link to="#">About</Link>
          </li>
          <li className={styles.homeNavbarLink}>
            <Link to="/enquiries">Enquiries</Link>
          </li>
          <li className={styles.homeNavbarLink}>
            <Link to="#">Blog</Link>
          </li>
        </ul>
        <div className={styles.homeNavbar_btn}>
          <div className={styles.homeNavbar_login}>
            <Link to="/login">LOGIN</Link>
          </div>
          <div className={styles.homeNavbar_signup}>
            <Link to="/prompt">SIGN UP</Link>
          </div>
        </div>
      </div>
      <div
        className={styles.mobile_menu}
        onClick={() => setToggleNav(!toggleNav)}
      >
        <img src={mobileMenu} alt="mobile-menu" />
      </div>
    </div>
  );
};

export default HomeNavbar;
