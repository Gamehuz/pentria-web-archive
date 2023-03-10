import React from "react";
import styles from "./PromptPage.module.scss";
import HomeNavbar from "../../components/HomeNavbar";

const PromptPage = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className={styles.PromptPage}>
        <HomeNavbar />
        <main>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <p>Sign up as:</p>
            <div className={styles.radio_inputs}>
              <div className={styles.radio_option}>
                <label for="guest">Guest</label>
                <input type="radio" id="guest" name="user" value="Guest" />
              </div>
              <div className={styles.radio_option}>
                <label for="guest">Vendor</label>
                <input type="radio" id="vendor" name="user" value="Vendor" />
              </div>
            </div>
          </form>
          <p className={styles.close}>Terms of use</p>
        </main>
      </div>
    </>
  );
};

export default PromptPage;
