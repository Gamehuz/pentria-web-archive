/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dispatch } from "../../redux/store";
import { setToggleSidebar } from "../../redux/utils/UtilSlice";
import UserComp from "../auth/UserComp";
import toggleNavIcon from "./assets/menu-hamburger.svg";
import styles from "./navbarAuth.module.scss";

const NavbarAuth = ({ search, bg }) => {
  const { user } = useSelector((state) => state.user);
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(!sidebar);
    dispatch(setToggleSidebar(sidebar));
  };

  return (
    <div className={`${styles.authNav} ${styles[bg]} `}>
      <div className={styles.authNav_toggle}>
        <div className={styles.authNav_toggle_icon} onClick={openSidebar}>
          <img src={toggleNavIcon} alt="toggle sidebar" />
        </div>
        <Link to="/" className={`${styles.logoLink}`}>
          <h1>Pentria</h1>
        </Link>
      </div>
      <div className={styles.authNav_search}>
        {/* <SearchInput /> */}
      </div>
      <div className={styles.authNav_user_btn}>
        {user?.firstName ? (
          <div className="md:pr-5">
            <UserComp />
          </div>
        ) : (
          <>
            <div className={`${styles.authNavbar_btn} ${styles[bg]}`}>
              <div className={styles.authNavbar_login}>
                <Link to="/login">LOGIN</Link>
              </div>
              <div className={styles.authNavbar_signup}>
                <Link to="/prompt">SIGNUP</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavbarAuth;
