/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonSpinner from "../ButtonSpiner/index";
// import mobileMenu from "./assets/menu-hamburger.svg";
import styles from "./homenav.module.scss";
import { useLocation } from "react-router-dom";
import SearchInput from "../SearchInput";
import { Bars3Icon } from "@heroicons/react/24/outline";


const HomeNavbar = () => {
  const [toggleNav, setToggleNav] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const { token, user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.util);
  const userType = user?.accountType;
  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname.includes('explore') || pathname.includes('dashboard') || pathname.includes('login') || pathname.includes('signup')) {
      setShow(true)
    }
  },[]);
  
  return (
    <div
      className={!show ? `bg-primaryColor ${toggleNav ? styles.activeHomeNav : ""} ${
        styles.homeNavbar
      } ` : `bg-white ${toggleNav ? styles.activeHomeNav : ""} ${
        styles.homeNavbar
      } `}
    >
      <h1 className={`${show ? 'text-primaryColor' : 'text-white'} ${styles.homeNavbarLogo}`}>
        <Link to="/">Pentria</Link>
      </h1>
      <div className={`${show ? 'bg-white' : 'bg-primaryColor'} ${styles.HomeNavbar_container} }`}>

        {
          !show ? 
          (
            <>
              <ul className={`lg:flex`}>
                <li className={`${styles.homeNavbarLink} ${pathname === "/about-us" ? styles.highlight : ""}`}>
                  <Link to="/about-us">About</Link>
                </li>
                <li className={`${styles.homeNavbarLink} ${pathname === "/explore" ? styles.highlight : ""}`}>
                  <Link to="/explore">Explore</Link>
                </li>
                <li className={`${styles.homeNavbarLink} ${pathname === "/partners" ? styles.highlight : ""}`}>
                  <Link to="/partners">Partners</Link>
                </li>
                <li className={`${styles.homeNavbarLink} ${pathname === "/enquiries" ? styles.highlight : ""}`}>
                  <Link to="/enquiries">Enquiries</Link>
                </li>
              </ul>
            </>
          ) :

          (
            <>
              <div className="pb-4 pl-4 lg:pt-6">
                <SearchInput />
              </div>
            </>
          )
        }

        <div className={styles.homeNavbar_btn}>
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            <>
              {token ? (
                <>
                  {userType === "GUEST" ? (
                    <div className={styles.homeNavbar_dashboard}>
                      <Link to="/user/dashboard">DASHBOARD</Link>
                    </div>
                  ) : (
                    <>
                      <div className={styles.homeNavbar_dashboard}>
                        <Link to="/vendor/dashboard">DASHBOARD</Link>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="flex space-x-10">
                    <div>
                      <Link className={`${show ? 'text-primaryColor' : 'text-white'} px-4 py-2`} to="/login">LOGIN</Link>
                    </div>
                    <div>
                    <Link className={`${show ? 'bg-primaryColor' : 'bg-secondaryColor'} px-4 py-2 text-white`} to="/prompt">SIGNUP</Link>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div
        className={styles.mobile_menu}
        onClick={() => setToggleNav(!toggleNav)}
      >
        <Bars3Icon className={`${ show ? 'text-primaryColor' : 'text-white' } w-8`} />
      </div>
    </div>
  );
};

export default HomeNavbar;
