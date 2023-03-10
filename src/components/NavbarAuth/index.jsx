import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dispatch } from "../../redux/store";
import { setToggleSidebar } from "../../redux/utils/UtilSlice";
// import { NavSkeleton } from "../LoadingSkeleton";
import SearchInput from "../SearchInput";
import toggleNavIcon from "./assets/menu-hamburger.svg";
import styles from "./navbarAuth.module.scss";

const NavbarAuth = ({ search }) => {
  const [show, setShow] = useState(false);
  // const { user } = useSelector((state) => state.user);

  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [response, setResponse] = useState({ type: "", message: "" });
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
    <div className={`${styles.authNav} ${show ? styles.showDropup : ""} `}>
      <div className={styles.authNav_toggle}>
        <img src={toggleNavIcon} alt="" onClick={openSidebar} />
        {/* <img src={logo} alt="" /> */}
        <Link to="/" className={`${styles.logoLink}`}>
          <h1>Pentria</h1>
        </Link>
      </div>
      <div className={styles.authNav_search}>
        <SearchInput />
      </div>
      <div className={styles.authNav_user_btn}>
        {!loading ? (
          <div className={styles.authNav_user}>
            <div className={styles.authNav_user_desktop}>
              <img
                className={styles.userimg}
                src={
                  user?.company_logo_url ? user?.company_logo_url : "/dummy.png"
                }
                alt={user?.first_name}
              />
              <div className={styles.authNav_user_desktop_nameDetails}>
                <div className={styles.authNav_user_desktop_name_arr}>
                  <p className={styles.name}>
                    {user?.first_name} {user?.last_name}
                  </p>
                  <img
                    src={dropdown_arr}
                    alt="dropdown arrow"
                    onClick={() => setShow((prev) => !prev)}
                    className={styles.arrow}
                  />
                </div>
                <p className={styles.workspace_name}>{user?.company_name}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.authNav_user}>
              <div className={styles.authNav_user_desktop}>
                <img
                  className={styles.userimg}
                  src="/dummy.png"
                  alt="john doe"
                />
                <div className={styles.authNav_user_desktop_nameDetails}>
                  <div className={styles.authNav_user_desktop_name_arr}>
                    <p className={styles.name}>John Doe</p>
                  </div>
                </div>
              </div>
            </div>
            {/* // <NavSkeleton /> */}
            {/* <p>loading...</p> */}
          </>
        )}

        {/* <div className={styles.authNav_user_mobile}>
          <img
            className={styles.userimg}
            src={user?.company_logo_url ? user?.company_logo_url : DummyImg}
            alt={user?.first_name}
          />
        </div> */}
      </div>
    </div>
  );
};

export default NavbarAuth;
