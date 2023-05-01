import styles from "./logoloading.module.scss";

const LogoLoading = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.precontainer}>
        <div className={styles["preloader-logo"]}>
          <img src="/pentria.png" alt="logo" />
        </div>
        <div className={styles.ring}></div>
      </div>
    </div>
  );
};

export default LogoLoading;
