
import styles from "./PromptPage.module.scss";
import {useNavigate} from "react-router-dom"

import HomeNavbar from "../../components/HomeNavbar";

const PromptPage = () => {
  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className={styles.PromptPage}>
        <HomeNavbar />
        <main>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <p>Sign up as:</p>
            <div className={styles.radio_inputs}>
              <div className={styles.radio_option}>
                <label htmlFor="guest">Guest</label>
                <input
                  type="radio"
                  id="guest"
                  name="user"
                  value="Guest"
                  onClick={() => navigate("/customer/signup")}
                />
              </div>
              <div className={styles.radio_option}>
                <label htmlFor="guest">Vendor</label>
                <input
                  type="radio"
                  id="vendor"
                  name="user"
                  value="Vendor"
                  onClick={() => navigate("/vendor/signup")}
                />
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
