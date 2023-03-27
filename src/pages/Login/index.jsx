import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import Nav from "../../components/Nav";
import { loginUser } from "../../redux/features/user/service";
import styles from "./login.module.scss";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();

  const trackLoginInput = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginData.email === "" || loginData.password === "") {
      toast.error("Please fill in all fields");
      return;
    }
    const values = {
      email: loginData.email,
      password: loginData.password,
    };
    const res = await loginUser(values)();
    if (res) {
      navigate("/");
    }
  };

  return (
    <div className={styles.loginPage}>
      <Nav />
      <section className={styles.login}>
        <h2>Login to Pentria</h2>
        <form onSubmit={handleLogin}>
          <label className={styles.email}>
            Email
            <InputField
              type={"email"}
              name={"email"}
              placeholder={"Enter your email"}
              value={loginData.email}
              onChange={(e) => trackLoginInput(e)}
            />
          </label>
          <div className={styles.passwordWrap}>
            <label className={styles.password}>
              Password
              <InputField
                type={togglePassword ? "text" : "password"}
                name={"password"}
                placeholder={"Password"}
                value={loginData.password}
                onChange={(e) => trackLoginInput(e)}
                setTogglePassword={() => setTogglePassword(!togglePassword)}
              />
            </label>
          </div>
          <Link className={styles.forgotPassword}>Forgot your password?</Link>
          <Button type="submit" bg={styles.signin} text={"SIGN IN"} />
        </form>
        <span>
          <div></div>
          <p>OR</p>
          <div></div>
        </span>
        <div className={styles.othersignin}>
          <Button bg={styles.button} text={"LOGIN WITH GOOGLE"} />
          <Button bg={styles.button} text={"LOGIN WITH FACEBOOK"} />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
