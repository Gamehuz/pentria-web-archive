import { React, useRef } from "react";
import styles from "./VendorSignup.module.scss";

import Button from "../../components/Button";

import upload from "./assets/upload.svg";

const VendorSignup = () => {
  const selectFile = useRef();

  const handleSelectFile = () => {
    selectFile.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
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
              <input type="number" name="phoneNumber" />
            </div>

            <div className={styles.inputs}>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
          </div>

          <div className={styles.right_form}>
            <div className={styles.inputs}>
              <label htmlFor="businessName">Business Name</label>
              <input type="text" name="businessName" />
            </div>

            <div className={styles.banking}>
              <label htmlFor="bank">Banking Information</label>
              <select name="bank" id="">
                              <option value="select">Select</option>
                              <option value="bank"></option>
              </select>
              <p>
                Banking information should tally with the details on your ID
              </p>

              <input type="number" name="number" />
            </div>

            <div className={styles.inputs}>
              <label htmlFor="occupation">Occupation</label>
              <input type="text" name="occupation" />
            </div>

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
              <div className={styles.upload} onClick={handleSelectFile}>
                <img src={upload} alt="upload" />
                Upload your ID
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" text="Sign Up" />
      </form>
    </div>
  );
};

export default VendorSignup;
