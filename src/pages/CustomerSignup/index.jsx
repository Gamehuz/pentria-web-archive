import { useState } from "react";
import styles from "./CustomerSignUp.module.scss";

import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Nav from "../../components/Nav";
import { signupGuest } from "../../redux/features/user/service";
import { dispatch } from "../../redux/store";

const CustomerSignup = () => {
  const navigate = useNavigate();
  // input states
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [uploadID, setUploadID] = useState(null);
  const [togglePassword, setTogglePassword] = useState(false);

  // error states
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  // const [uploadIDError, setUploadIDError] = useState("");

  // regex for input  validation
  const emailTest = new RegExp(/\S+@\S+\.\S+/);
  const passwordTest = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,10}$/
  );
  const phoneNumberTest = new RegExp(
    /^[+]*[(]{0,3}[0-9]{1,4}[)]{0,1}[-\s./0-9]{8,15}$/
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
      case "identification":
        setUploadID(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  // const handleBlur = (e) => {
  //   const { name } = e.target;
  //   validateField(name);
  // };

  const validateField = (name) => {
    let isValid = false;
    console.log(name);
    switch (name) {
      case "firstname":
        validateFirstname();
        break;
      case "lastname":
        validateLastname();
        break;
      case "address":
        validateAddress();
        break;
      case "city":
        validateCity();
        break;
      case "state":
        validateState();
        break;
      case "email":
        validateEmail();
        break;
      case "phoneNumber":
        validatePhonenumber();
        break;
      case "password":
        validatepassword();
        break;
      case "identification":
        validateIdentification();
        break;
      case "confirmPassword":
        validateConfirmPassword();
        break;
      default:
        break;
    }
    return isValid;
  };

  const clearError = () => {
    setTimeout(() => {
      setFirstnameError("");
      setLastnameError("");
      setAddressError("");
      setCityError("");
      setStateError("");
      setEmailError("");
      setPhoneNumberError("");
      setPasswordError("");
      // setUploadIDError("");
      setConfirmPasswordError("");
    }, 4000);
  };

  const validateFirstname = () => {
    let firstnameError = "";
    const value = firstname;
    if (value.trim() === "") firstnameError = "Firstname is required";
    setFirstnameError(firstnameError);
    clearError();
    return firstnameError === "";
  };

  const validateLastname = () => {
    let lastnameError = "";
    const value = lastname;
    if (value.trim() === "") lastnameError = "Lastname is required";
    setLastnameError(lastnameError);
    clearError();
    return lastnameError === "";
  };

  const validateAddress = () => {
    let addressError = "";
    const value = address;
    if (value.trim() === "") addressError = "Address is requred";

    setAddressError(addressError);
    clearError();
    return addressError === "";
  };

  const validateCity = () => {
    let cityError = "";
    const value = city;
    if (value.trim() === "") cityError = "City is requred";
    setCityError(cityError);
    clearError();

    return cityError === "";
  };

  const validateState = () => {
    let stateError = "";
    const value = state;
    if (value.trim() === "") stateError = "State is requred";
    setStateError(stateError);
    clearError();

    return stateError === "";
  };

  const validateEmail = () => {
    let emailError = "";
    const value = email;
    if (value.trim() === "") emailError = "Email is required";
    else if (!emailTest.test(value)) emailError = "Enter a valid email";
    setEmailError(emailError);
    clearError();
    return emailError === "";
  };

  const validatePhonenumber = () => {
    let phoneNumberError = "";
    const value = phoneNumber;

    if (value === null) phoneNumberError = "Phone number is required";
    else if (!phoneNumberTest.test(value))
      phoneNumberError = "Enter a valid mobile number";
    setPhoneNumberError(phoneNumberError);
    clearError();
    return phoneNumberError === "";
  };

  const validatepassword = () => {
    let passwordError = "";
    const value = password;

    if (value.trim() === "") passwordError = "Password is required";

    setPasswordError(passwordError);
    clearError();
    return passwordError === "";
  };

  const validateConfirmPassword = () => {
    let confirmPasswordError = "";
    const value = confirmPassword;

    if (value.trim() === "")
      confirmPasswordError = "Confirm Password is required";
    else if (value !== password)
      confirmPasswordError = "Password does not match";

    setConfirmPasswordError(confirmPasswordError);
    clearError();
    return confirmPasswordError === "";
  };

  const validateIdentification = () => {
    let uploadIDError = "";

    const value = uploadID;
    if (value === null) uploadIDError = "A means of ID is required";
    // setUploadIDError(uploadIDError);
    clearError();

    return uploadIDError === "";
  };

  const validateAllFields = () => {
    const isValidFirstname = validateFirstname();
    const isValidLastname = validateLastname();
    const isValidAddress = validateAddress();
    const isValidCity = validateCity();
    const isValidState = validateState();
    const isValidEmail = validateEmail();
    const isValidPhoneNumber = validatePhonenumber();
    const isValidPassword = validatepassword();
    // const isValidUploadID = validateIdentification();
    const isValidConfirmPassword = validateConfirmPassword();

    return (
      isValidFirstname &&
      isValidLastname &&
      isValidAddress &&
      isValidCity &&
      isValidState &&
      isValidEmail &&
      isValidPhoneNumber &&
      isValidPassword &&
      // isValidUploadID &&
      isValidConfirmPassword
    );
  };

  const resetFields = () => {
    setFirstname("");
    setLastname("");
    setAddress("");
    setCity("");
    setState("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setUploadID("");
    setConfirmPassword("");
  };

  // const handleSelectFile = (e) => {
  //   const file = e.target?.files[0];
  //   if (file) {
  //     setUploadID(URL.createObjectURL(file));
  //   } else {
  //     setUploadID(null);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateAllFields();
    const values = {
      firstname,
      lastname,
      address,
      city,
      state,
      email,
      password,
      phoneNumber,
    };

    if (isValid) {
      const res = await dispatch(signupGuest(values));
      if (res) {
        navigate("/login");
        resetFields();
      } else return;
    }
  };

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_container}>
            <div className={styles.left_form}>
              <div className={styles.input_container}>
                <div className={styles.inputs}>
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={firstname}
                  />
                  {firstnameError && <p>{firstnameError}</p>}
                </div>

                <div className={styles.inputs}>
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={lastname}
                  />
                  {lastnameError && <p>{lastnameError}</p>}
                </div>
              </div>

              <div className={styles.inputs}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={address}
                />
                {addressError && <p>{addressError}</p>}
              </div>

              <div className={styles.input_container}>
                <div className={styles.inputs}>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={city}
                  />
                  {cityError && <p>{cityError}</p>}
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={state}
                  />
                  {stateError && <p>{stateError}</p>}
                </div>
              </div>

              <div className={styles.inputs}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={email}
                />
                {emailError && <p>{emailError}</p>}
              </div>

              <div className={styles.inputs}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  name="phoneNumber"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={phoneNumber}
                />
                {phoneNumberError && <p>{phoneNumberError}</p>}
              </div>

              <div className={styles.inputs}>
                <label htmlFor="password">Password</label>
                <div className={styles.passwordInput}>
                  <input
                    type={togglePassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={password}
                  />
                  <span onClick={() => setTogglePassword(!togglePassword)}>
                    {togglePassword ? (
                      <i className="fas fa-eye"></i>
                    ) : (
                      <i className="fa fa-eye-slash"></i>
                    )}
                  </span>
                </div>
                {passwordError && <p>{passwordError}</p>}
              </div>
              <div className={styles.inputs}>
                <label htmlFor="password">Confirm Password</label>
                <input
                  type={togglePassword ? "text" : "password"}
                  name="confirmPassword"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={confirmPassword}
                />

                {confirmPasswordError && <p>{confirmPasswordError}</p>}
              </div>
            </div>

            {/* <div className={styles.right_form}>
              <div className={styles.identification}>
                <label htmlFor="identification">Identification</label>
                <p>
                  Upload a photo of your NIN or other government approved ID
                </p>
                <input
                  onChange={handleSelectFile}
                  onBlur={handleBlur}
                  id="identification"
                  type="file"
                  name="identification"
                  accept="image/*"
                  hidden
                />
                <label className={styles.upload} htmlFor="identification">
                  <img src={upload} alt="upload" />
                  Upload your ID
                </label>
                {uploadIDError && <p>{uploadIDError}</p>}
                {uploadID && (
                  <div className={styles.uploaded}>
                    <img width={300} src={uploadID} alt="uploaded" />
                  </div>
                )}
              </div>
            </div> */}
          </div>
          <Button type="submit" text="Sign Up" bg={styles.purple} />
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
      </div>
    </>
  );
};

export default CustomerSignup;
