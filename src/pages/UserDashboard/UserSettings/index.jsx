import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useState } from "react";
import styles from "./usersettings.module.scss";

const UserSettings = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    sex: "",
    dob: "",
    address: "",
    city: "",
    state: "",
  });

  const [togglePassword, setTogglePassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  console.log(userDetails);
  return (
    <div className={styles.userSettings}>
      <h1>Edit Profile</h1>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <InputField
              type="text"
              name="name"
              id="name"
              value={userDetails.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Sex</label>
            <InputField
              type="text"
              name="sex"
              id="sex"
              value={userDetails.sex}
              placeholder="Female"
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dob">Date Of Birth</label>
            <InputField
              type="text"
              name="dob"
              id="dob"
              value={userDetails.dob}
              placeholder="05/26/1995"
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Address</label>
            <InputField
              type="text"
              name="address"
              id="address"
              value={userDetails.address}
              placeholder="1738 Adeniyi Jones, Ikeja, Lagos"
              onChange={handleChange}
            />
          </div>
          <div className={styles.two_cols}>
            <div className={styles.formGroup}>
              <label htmlFor="email">City</label>
              <InputField
                type="text"
                name="city"
                id="city"
                value={userDetails.city}
                placeholder="Calabar"
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">State</label>
              <InputField
                type="text"
                name="state"
                id="state"
                value={userDetails.state}
                placeholder="Cross River"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <InputField
              type="text"
              name="email"
              id="email"
              value={userDetails.email}
              placeholder="cynthiiaugwu@gmail.com"
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Phone</label>
            <InputField
              type="number"
              name="phone"
              id="phone"
              value={userDetails.phone}
              placeholder="+234 818 1738 69"
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Password</label>
            <InputField
              type={togglePassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="+234 818 1738 69"
              value={userDetails.password}
              setTogglePassword={() => setTogglePassword(!togglePassword)}
              onChange={handleChange}
            />
          </div>
          <div className={styles.actionBtns}>
            <Button type="submit" className={styles.save} text="Save Changes" />
            <Button type="reset" classes={styles.del} text="Delete Account" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
