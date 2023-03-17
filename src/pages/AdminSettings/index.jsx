import {React, useState} from "react";
import styles from "./UserSettings.module.scss";

import Button from "../../components/Button";

const UserSettings = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "accountName":
        setAccountName(value);
        break;
      case "bankame":
        setBankName(value);
        break;
      case "accountNumber":
        setAccountNumber(value);
        break;
      case "dob":
        setDob(value);
        break;
      case "sex":
        setSex(value);
        break;

      default:
        break;
    }
  };

  const handleSubmitAccount = (e) => {
    e.preventDefault()
  } 

  return (
    <div className={styles.user_settings}>
      <div className={styles.account_settings}>
        <h1>Account Setting</h1>
        <form onSubmit={handleSubmitAccount}>
          <div className={styles.form_container}>
            <div className={styles.left_form}>
              <div className={styles.input_container}>
                <div className={styles.inputs}>
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    value={firstname}
                  />
                </div>

                <div className={styles.inputs}>
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    value={lastname}
                  />
                </div>
              </div>

              <div className={styles.inputs}>
                <label htmlFor="sex">Sex</label>
                <input
                  type="text"
                  name="sex"
                  onChange={handleChange}
                  value={sex}
                />
              </div>

              <div className={styles.inputs}>
                <label htmlFor="dob">Date Of Birth</label>
                <input
                  type="text"
                  name="dob"
                  onChange={handleChange}
                  value={dob}
                />
              </div>

              <div className={styles.inputs}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={address}
                />
              </div>

              <div className={styles.input_container}>
                <div className={styles.inputs}>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={city}
                  />
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    onChange={handleChange}
                    value={state}
                  />
                </div>
              </div>

              <div className={styles.inputs}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
              </div>

              <div className={styles.inputs}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={phoneNumber}
                />
              </div>

              <div className={styles.inputs}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                />
              </div>
            </div>
          </div>
          <Button type="submit" text="save changes" bg={styles.signin} />
        </form>
      </div>

      <div className={styles.wallet_settings}>
        <h1>Wallet Setting</h1>
        <form action="">
          <div className={styles.right_form}>
            <div className={styles.inputs}>
              <label htmlFor="bank">Bank Name</label>
              <input
                type="text"
                name="bankName"
                onChange={handleChange}
                value={bankName}
              />
            </div>

            <div className={styles.inputs}>
              <label htmlFor="accountName">Account Name</label>
              <input
                type="text"
                name="accountName"
                onChange={handleChange}
                value={accountName}
              />
            </div>

            <div className={styles.inputs}>
              <label htmlFor="accountNumber">Occupation</label>
              <input
                type="number"
                name="accountNumber"
                onChange={handleChange}
                value={accountNumber}
              />
            </div>
          </div>
          <Button type="submit" text="update" />
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
