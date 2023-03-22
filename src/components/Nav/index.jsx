import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { ReactComponent as Hamburger } from "./assets/menu-hamburger.svg";
import styles from "./nav.module.scss";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <span>Pentria</span>
        </Link>
        <div>
          <Link to="/login">LOGIN</Link>
          <Link to="/prompt">
            <Button bg={styles.button} text={"SIGN UP"} />
          </Link>
        </div>
        <Hamburger onClick={() => setToggleNav(!toggleNav)} />
      </nav>
      <nav className={`${toggleNav ? styles.mobileNav : styles.activeMenu}`}>
        <div>
          <Link>LOGIN</Link>
          <Link>
            <Button bg={styles.button} text={"SIGN UP"} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
