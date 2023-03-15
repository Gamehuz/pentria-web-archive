import { Link } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./loginorsignup.module.scss";

const LoginOrSignUp = () => {
  return (
    <div className={styles.loginOrSignUp}>
      <article>
        <Link to="/">
          <h1>Pentria</h1>
        </Link>
        <Button bg={styles.login} text={"LOGIN"} />
        <Button bg={styles.signup} text={"SIGNUP"} />
        <p>Don’t wanna sign up now? You can do it later.</p>
        <Button bg={styles.continue} text={"CONTINUE"} />
      </article>
    </div>
  );
};

export default LoginOrSignUp;
