import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./loginorsignup.module.scss";

const LoginOrSignUp = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login")
  }

  const signup = () => {
    navigate("/prompt")
  }
  return (
    <div className={styles.loginOrSignUp}>
      <article>
        <Link to="/">
          <h1>Pentria</h1>
        </Link>
        <Button bg={styles.login} text={"LOGIN"} onClick={() => login()}/>
        <Button bg={styles.signup} text={"SIGNUP"} onClick={() => signup()} />
        <p>Don’t wanna sign up now? You can do it later.</p>
        <Button bg={styles.continue} text={"CONTINUE"} />
      </article>
    </div>
  );
};

export default LoginOrSignUp;
