import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./userSidebar.module.scss";

import Button from "../Button";

/**
 * Wrap your component with this component to get a sidebar with a list of links.
 * @param {closeSidebar} function
 * use this prop to close the sidebar on mobile screens
 * @param {toggleSidebar} boolean
 * use this prop to determine if the sidebar should be open or closed on mobile screens when the hamburger icon is clicked from navbar
 * @returns a wrapper component with a sidebar and all the props passed to it
 */
function UserSidebar({ children }) {
  // const { user } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const toggleSidebar = localStorage.getItem("toggleSidebar");

  const handleCloseSidebar = () => {
    localStorage.setItem("toggleSidebar", false);
  };
  return (
    <div
      className={`${styles.userSidebar}
      } ${toggleSidebar ? styles.showSidebar : ""} `}
    >
      <div className={styles.userSidebar_header}>
        <div className={styles.userSidebar_itemsFlex}>
          <div className={styles.userSidebar_header_logo_vs_closeIcon}>
            <h1>Dashboard</h1>
          </div>

          <div className={styles.navLinks}>
            <NavLink
              to="/user/history"
              className={({ isActive }) =>
                isActive
                  ? `${styles.active} ${styles.navLink}`
                  : `${styles.inactive} ${styles.navLink}`
              }
              onClick={handleCloseSidebar}
            >
              <p>History</p>
            </NavLink>
            <NavLink
              to="/user/favorites"
              className={({ isActive }) =>
                isActive
                  ? `${styles.active} ${styles.navLink}`
                  : `${styles.inactive} ${styles.navLink}`
              }
              onClick={handleCloseSidebar}
            >
              <p>Favorites</p>
            </NavLink>

            <NavLink
              to="/user/settings"
              className={({ isActive }) =>
                isActive
                  ? `${styles.active} ${styles.navLink} `
                  : `${styles.inactive} ${styles.navLink}`
              }
              onClick={handleCloseSidebar}
            >
              <p>Settings</p>
            </NavLink>
          </div>
        </div>
        <div className={styles.userSidebar__bottom}>
          <Button text="LOGOUT" />
        </div>
      </div>
      <div className={styles.rightChild}>{children}</div>
    </div>
  );
}

export default UserSidebar;
