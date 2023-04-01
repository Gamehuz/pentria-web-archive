import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { ReactComponent as Hamburger } from "./assets/menu-hamburger.svg";
import styles from "./nav.module.scss";
import userIcon from "./assets/user-icon.jpg";
import { ReactComponent as ArrowDown } from "./assets/arrow-down.svg";
import { userData } from "../../redux/features/user/service";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    if(localStorage.getItem("pentriaAccessToken")) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }

    userData().then((data) => setData(data));
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <span>Pentria</span>
        </Link>
        {isloggedIn ?
        <div className={styles.loggedIn}>
          <img src={userIcon} alt="User Icon"/>
          <p>{data?.user?.firstName} {data?.user?.lastName}</p>
          <ArrowDown />
        </div>
        : <div className={styles.notLoggedIn}>
          <Link to="/login">LOGIN</Link>
          <Link to="/prompt">
            <Button bg={styles.button} text={"SIGN UP"} />
          </Link>
        </div>}
        <Hamburger className={styles.hamburger} onClick={() => setToggleNav(!toggleNav)} />
      </nav>
      <nav className={`${toggleNav ? styles.mobileNav : styles.activeMenu}`}>
        <div>
          <Link>LOGIN</Link>
          <Link>
            <Button bg={`${styles.button}`} text={"SIGN UP"} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
