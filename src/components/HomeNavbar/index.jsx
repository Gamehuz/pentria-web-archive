/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import mobileMenu from "./assets/menu-hamburger.svg";
import styles from "./homenav.module.scss";

const HomeNavbar = ({ bg }) => {
  const [toggleNav, setToggleNav] = React.useState(false);
  const { token, user } = useSelector((state) => state.user);
  const userType = user?.accountType;
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
            <Link to="/about-us">About</Link>
          </li>
          <li className={styles.homeNavbarLink}>
            <Link to="/enquiries">Enquiries</Link>
          </li>
          <li className={styles.homeNavbarLink}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <div className={styles.homeNavbar_btn}>
          {token ? (
            <>
              {userType === "GUEST" ? (
                <div className={styles.homeNavbar_dashboard}>
                  <Link to="/user/dashboard">DASHBOARD</Link>
                </div>
              ) : (
                <>
                  {userType === "VENDOR" ? (
                    <div className={styles.homeNavbar_dashboard}>
                      <Link to="/vendor/dashboard">DASHBOARD</Link>
                    </div>
                  ) : (
                    <>
                      {user?.accountType === "ADMIN" ? (
                        <div className={styles.homeNavbar_dashboard}>
                          <Link to="/admin/dashboard">DASHBOARD</Link>
                        </div>
                      ) : (
                        <>
                          <div className={styles.homeNavbar_login}>
                            <Link to="/login">LOGIN</Link>
                          </div>
                          <div className={styles.homeNavbar_signup}>
                            <Link to="/prompt">SIGNUP</Link>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <div className={styles.homeNavbar_login}>
                <Link to="/login">LOGIN</Link>
              </div>
              <div className={styles.homeNavbar_signup}>
                <Link to="/prompt">SIGNUP</Link>
              </div>
            </>
          )}
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
