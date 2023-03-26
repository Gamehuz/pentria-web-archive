import styles from "./login.module.scss";
import Nav from "../../components/Nav"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button"
import InputField from "../../components/InputField"
import { useState } from "react";
import { useMutation } from "@apollo/client"
import LoginMutation from "../../graphql/mutation/login";

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const trackLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    };

    const [logUserIn, {data, error}] = useMutation(LoginMutation, {
        variables: {
            email: loginData.email,
            password: loginData.password
        },
        onCompleted: (data) => {
            console.log(data);
            localStorage.setItem('auth-token', data.login.token);
            navigate('/')
        }
    });

    return (
        <div className={styles.loginPage}>
            <Nav />
            <section className={styles.login}>
            <h2>Login to Pentria</h2>
            <p className={error ? styles.error : data ? styles.successful : ""}> {error ? `Error: ${error.message}` : ""} {data ? `Signed in successfully` : ""}</p>
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
            <label className={styles.password}>
                Password
                <InputField
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                value={loginData.password}
                onChange={(e) => trackLoginInput(e)}
                />
            </label>
            <Link className={styles.forgotPassword}>Forgot your password?</Link>
            <Button type={'submit'} bg={styles.signin} text={"SIGN IN"} onClick={() => logUserIn()}/>
            <span>
                <div></div>
                <p>OR</p>
                <div></div>
            </span>
            <div className={styles.othersignin}>
                <Button bg={styles.button} text={"LOGIN WITH GOOGLE"}/>
                <Button bg={styles.button} text={"LOGIN WITH FACEBOOK"}/>
            </div>
        </section>
        </div>
    )
}

export default LoginPage;