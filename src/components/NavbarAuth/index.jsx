/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dispatch } from "../../redux/store";
import { setToggleSidebar } from "../../redux/utils/UtilSlice";
import SearchInput from "../SearchInput";
import toggleNavIcon from "./assets/menu-hamburger.svg";
import styles from "./navbarAuth.module.scss";

const NavbarAuth = ({ search, bg }) => {
  const [show, setShow] = useState(false);
  const { user, token } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  const openSidebar = () => {
    setSidebar(!sidebar);
    dispatch(setToggleSidebar(sidebar));
  };

  return (
    <div
      className={`${styles.authNav} ${styles[bg]} ${
        show ? styles.showDropup : ""
      } `}
    >
      <div className={styles.authNav_toggle}>
        <img src={toggleNavIcon} alt="" onClick={openSidebar} />
        <Link to="/" className={`${styles.logoLink}`}>
          <h1>Pentria</h1>
        </Link>
      </div>
      <div className={styles.authNav_search}>
        <SearchInput />
      </div>
      <div className={styles.authNav_user_btn}>
        {user ? (
          <div className={styles.authNav_user}>
            <div className={styles.authNav_user_desktop}>
              <img
                className={styles.userimg}
                src={
                  user?.company_logo_url ? user?.company_logo_url : "/dummy.png"
                }
                alt={user?.firstName}
              />
              <div className={styles.authNav_user_desktop_nameDetails}>
                <div className={styles.authNav_user_desktop_name_arr}>
                  <p className={styles.name}>
                    {user?.firstName} {user?.lastName}
                  </p>
                  {/* <img
                    src={dropdown_arr}
                    alt="dropdown arrow"
                    className={styles.arrow}
                  /> */}
                </div>
                {/* <p className={styles.workspace_name}>{user?.company_name}</p> */}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={`${styles.authNavbar_btn} ${styles[bg]}`}>
              <div className={styles.authNavbar_login}>
                <Link to="/login">LOGIN</Link>
              </div>
              <div className={styles.authNavbar_signup}>
                <Link to="/prompt">SIGN UP</Link>
              </div>
            </div>
          </>
        )}
        {user && (
          <div className={styles.authNav_user_mobile}>
            <img
              className={styles.userimg}
              src={
                user?.company_logo_url ? user?.company_logo_url : "/dummy.png  "
              }
              alt={user?.firstName}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarAuth;
