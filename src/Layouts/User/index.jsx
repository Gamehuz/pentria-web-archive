/* eslint-disable react/prop-types */
import styles from "./userLayout.module.scss";

const UserLayout = ({ children }) => {
  return (
    <div className={styles.UserLayout}>
      <div className={styles.user_topBar}>
      </div>
      <div className={styles.user_content}>{children}</div>
    </div>
  );
};

export default UserLayout;
