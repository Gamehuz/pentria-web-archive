import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button";
import { ReactComponent as Hamburger } from "./assets/menu-hamburger.svg";
import userIcon from "./assets/user-icon.jpg";
import styles from "./nav.module.scss";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const { user, token } = useSelector((state) => state.user);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <span>Pentria</span>
        </Link>
        {token ? (
          <Link to="/user/dashboard" className={styles.loggedIn}>
            <img src={userIcon} alt="User Icon" />
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            {/* <ArrowDown /> */}
          </Link>
        ) : (
          <div className={styles.notLoggedIn}>
            <Link to="/login">LOGIN</Link>
            <Button to="/prompt" classes={styles.button} text={"SIGN UP"} />
          </div>
        )}
        <Hamburger
          className={styles.hamburger}
          onClick={() => setToggleNav(!toggleNav)}
        />
      </nav>
      <nav className={`${toggleNav ? styles.mobileNav : styles.activeMenu}`}>
        <div>
          <Link to="/login">LOGIN</Link>
          <Button to="/prompt" classes={styles.button} text={"SIGN UP"} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
