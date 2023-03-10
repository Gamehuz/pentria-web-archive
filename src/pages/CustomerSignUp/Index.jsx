import { React, useRef } from "react";
import styles from "./CustomerSignUp.module.scss";

import upload from "./assets/upload.svg"
import Button from "../../components/Button/index"

const Index = () => {
  const selectFile = useRef();

  const handleSelectFile = () => {
    selectFile.current.click();
  }

  return (
    <div className={styles.container}>
      <h3>Sign Up</h3>
      <form>
        <div className={styles.form_container}>
          <div className={styles.left_form}>
            <div className={styles.input_container}>
              <div className={styles.inputs}>
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" />
              </div>
              <div className={styles.inputs}>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" />
              </div>
            </div>

            <div className={styles.inputs}>
              <label htmlFor="lastname">Address</label>
              <input type="text" name="address" />
            </div>

            <div className={styles.input_container}>
              <div className={styles.inputs}>
                <label htmlFor="city">City</label>
                <input type="text" name="city" />
              </div>
              <div className={styles.inputs}>
                <label htmlFor="state">State</label>
                <input type="text" name="state" />
              </div>
            </div>

            <div className={styles.inputs}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>

            <div className={styles.inputs}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="phoneNumber" name="phoneNumber" />
            </div>

            <div className={styles.inputs}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
          </div>

          <div className={styles.right_form}>
            <div className={styles.identification}>
              <label htmlFor="identification">Identification</label>
              <p>Upload a photo of your NIN or other government approved ID</p>
              <input
                type="file"
                name="identification"
                accept="image/*"
                ref={selectFile}
                hidden
              />
              <button onClick={handleSelectFile}>
                <img src={upload} alt="upload" />
                Upload your ID
              </button>
            </div>
          </div>
        </div>
        <Button type="submit" text="Sign Up" />
      </form>
    </div>
  );
};

export default Index;
