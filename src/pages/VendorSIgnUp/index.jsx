import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";


import GET_BANKS from "../../graphql/queries/getBanks";
import styles from "./VendorSignup.module.scss";

import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import HomeNavbar from "../../components/HomeNavbar";
import { signupVendor, verifyBanks } from "../../redux/features/user/service";
import { dispatch } from "../../redux/store";

const VendorSignup = () => {
  const navigate = useNavigate();
  // input states
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [togglePassword, setTogglePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [businessname, setBusinessname] = useState("");
  const [bankDetails, setBankdetails] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
    code: 0
  });
  const [occupation, setOccupation] = useState("");
  const [uploadID, setUploadID] = useState("");

  // error states
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [businessnameError, setBusinessnameError] = useState(false);
  const [bankDetailsError, setBankdetailsError] = useState({
    bankName: false,
    accountNumber: false,
    accountName: false,
  });
  const [occupationError, setOccupationError] = useState(false);
  // const [uploadIDError, setUploadIDError] = useState(false);

  const { loading, error, data } = useQuery(GET_BANKS);

  // regex for input  validation
  const emailTest = new RegExp(/\S+@\S+\.\S+/);
  const nameTest = new RegExp(/^[A-Za-z]{3,}$/);
  const phoneNumberTest = new RegExp(
    /^[+]*[(]{0,3}[0-9]{1,4}[)]{0,1}[-\s./0-9]{8,15}$/
  );

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])


  const fetchBank = async (e) => {

    e.preventDefault();
    const { name, value } = e.target;

    setBankdetails({ ...bankDetails, [name]: value });
    if(value.length < 10) {
      console.log("less than 10")
      return
    }

    console.log(value)

    const res = await dispatch(verifyBanks({
      accountNumber: value,
      code: bankDetails.code
    })) ;

    const bank = data.getBanks.find(bank => bank.code === bankDetails.code)

    console.log(res.verifyBankAccount)
    setBankdetails({ ...bankDetails, accountName: res.verifyBankAccount.account_name, accountNumber: value, bankName: bank.name });

  }


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
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "businessName":
        setBusinessname(value);
        break;
      case "bankName":
        setBankdetails({ ...bankDetails, bankName: value });
        break;
      case "code":
        setBankdetails({ ...bankDetails, code: value, accountNumber: 0 });
        break;
      case "accountNumber":
        setBankdetails({ ...bankDetails, accountNumber: value });
        break;
      case "accountName":
        setBankdetails({ ...bankDetails, accountName: value });
        break;
      case "occupation":
        setOccupation(value);
        break;
      case "identification":
        setUploadID(value);
        break;

      default:
        break;
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name);
  };

  const validateField = (name) => {
    let isValid = false;

    switch (name) {
      case "firstname":
        isValid = validateFirstname();
        break;
      case "lastname":
        isValid = validateLastname();
        break;
      case "address":
        isValid = validateAddress();
        break;
      case "city":
        isValid = validateCity();
        break;
      case "state":
        isValid = validateState();
        break;
      case "email":
        isValid = validateEmail();
        break;
      case "phoneNumber":
        isValid = validatePhonenumber();
        break;
      case "password":
        isValid = validatepassword();
        break;
      case "confirmPassword":
        isValid = validateConfirmPassword();
        break;
      case "businessName":
        isValid = validateBusinessname();
        break;
      case "bankName":
        isValid = validateBankDetails();
        break;
      case "accountNumber":
        isValid = validateBankDetails();
        break;
      case "accountName":
        isValid = validateBankDetails();
        break;
      case "occupation":
        isValid = validateOccupation();
        break;
      case "identification":
        isValid = validateIdentification();
        break;

      default:
        break;
    }
    return isValid;
  };

  const clearError = () => {
    setTimeout(() => {
      setFirstnameError(false);
      setLastnameError(false);
      setAddressError(false);
      setCityError(false);
      setStateError(false);
      setEmailError(false);
      setPhoneNumberError(false);
      setPasswordError(false);
      setConfirmPasswordError(false);
      setBusinessnameError(false);
      setBankdetailsError({
        bankName: false,
        accountNumber: false,
        accountName: false,
      });
      setOccupationError(false);
    }, 4000);
  };

  const validateFirstname = () => {
    let firstnameError = "";
    const value = firstname;
    if (value.trim() === "") firstnameError = "Firstname is required";
    else if (!nameTest.test(value))
      firstnameError = "firstname must be atleast 3 characters";
    setFirstnameError(firstnameError);
    clearError();
    return firstnameError === "";
  };

  const validateLastname = () => {
    let lastnameError = "";
    const value = lastname;
    if (value.trim() === "") lastnameError = "Lastname is required";
    else if (!nameTest.test(value))
      lastnameError = "Lastname must be atleast 3 characters";
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
      confirmPasswordError = "Confirm password is required";
    else if (value !== password)
      confirmPasswordError = "Password does not match";
    setConfirmPasswordError(confirmPasswordError);
    clearError();
    return confirmPasswordError === "";
  };

  const validateBusinessname = () => {
    let businessnameError = "";
    const value = businessname;

    if (value.trim() === "") businessnameError = "Business name is required";
    setBusinessnameError(businessnameError);
    clearError();
    return businessnameError === "";
  };

  const validateBankDetails = () => {
    let bankDetailsError = "";
    const value = bankDetails;

    if (value === null) bankDetailsError = "Please add your bank details";
    setBankdetailsError({
      bankName:
        bankDetails.bankName === "" ? "Please add your bank name" : false,
      accountNumber:
        bankDetails.accountNumber === "" || bankDetails.accountNumber.length < 10
          ? "Please add your account number"
          : false,
      accountName:
        bankDetails.accountName === "" ? "Please add your account name" : false,
    });
    return bankDetailsError === "";
  };

  const validateOccupation = () => {
    let occupationError = "";
    const value = occupation;

    if (value.trim() === "") occupationError = "Occupation is required";
    setOccupationError(occupationError);
    clearError();

    return occupationError === "";
  };

  const validateIdentification = () => {
    let uploadIDError = "";

    const value = uploadID;
    if (value.length === undefined) uploadIDError = "A means of ID is required";
    // setUploadIDError(uploadIDError);
    clearError();

    return uploadIDError === "";
  };

  // const handleSelectFile = (e) => {
  //   selectFile.current.click();
  //   setUploadID(e.target?.files[0]);
  // };

  // const handleBankChange = (e) => {
  //   if (e.target.value === "Select Bank") return;
  //   setActiveBankInfo(e.target.value);
  // };

  const allFieldsValid = () => {
    const isValidFirstname = validateField("firstname");
    const isValidLastname = validateField("lastname");
    const isValidAddress = validateField("address");
    const isValidCity = validateField("city");
    const isValidState = validateField("state");
    const isValidEmail = validateField("email");
    const isValidPhoneNumber = validateField("phoneNumber");
    const isValidPassword = validateField("password");
    const isValidConfirmPassword = validateField("confirmPassword");
    const isValidBusinessname = validateField("businessName");
    const isValidBankDetails =
      validateField("bankName") &&
      validateField("accountNumber") &&
      validateField("accountName");
    const isValidOccupation = validateField("occupation");
    const isValidUploadID = validateField("identification");

    return (
      isValidFirstname &&
      isValidLastname &&
      isValidAddress &&
      isValidCity &&
      isValidState &&
      isValidEmail &&
      isValidPhoneNumber &&
      isValidPassword &&
      isValidConfirmPassword &&
      isValidBusinessname &&
      isValidBankDetails &&
      isValidOccupation &&
      isValidUploadID
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = allFieldsValid();

    if (isValid) {
      // submit the form
      const values = {
        firstname,
        lastname,
        address,
        city,
        state,
        email,
        password,
        phoneNumber,
        businessname,
        bankName: bankDetails.bankName,
        accountNumber: bankDetails.accountNumber,
        accountName: bankDetails.accountName,
        occupation,
      };
      const res = await dispatch(signupVendor(values));
      if (res) {
        navigate("/login");
      }
    }
  };

  return (
    <>
      <HomeNavbar />
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                  onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
                  value={phoneNumber}
                />
                {phoneNumberError && <p>{phoneNumberError}</p>}
              </div>
              <div className={styles.input_container}>
                <div className={styles.inputs}>
                  <label htmlFor="password">Password</label>
                  <div className={styles.passwordInput}>
                    <input
                      type={
                        togglePassword ? (
                          <i className="fas fa-eye"></i>
                        ) : (
                          <i className="fa fa-eye-slash"></i>
                        )
                      }
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    onBlur={handleBlur}
                    value={confirmPassword}
                  />
                  {confirmPasswordError && <p>{confirmPasswordError}</p>}
                </div>
              </div>
            </div>

            <div className={styles.right_form}>
              <div className={styles.inputs}>
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={businessname}
                />
                {businessnameError && <p>{businessnameError}</p>}
              </div>

              <div className={styles.banking}>
                <label htmlFor="">Banking Information</label>
                <p>
                  Banking information should tally with the details on your ID
                </p>
                <label htmlFor="code">Select Bank</label>
                {
                  !data ? (<> <p>Loading...</p> </>) :
                  (
                    <>
                      <select
                        name="code"
                        onChange={handleChange}
                        value={bankDetails.code}
                      >
                        {data?.getBanks.map((bank) => ( 
                          <option key={bank.id} value={bank.code}>
                            {bank.name}
                          </option>
                        ))
                        }
                      </select>
                    </>
                  )
                }
                {bankDetailsError && <span>{bankDetailsError.bankName}</span>}
                <label htmlFor="acountNumber">Account Number</label>
                <input
                  type="number"
                  name="accountNumber"
                  onChange={fetchBank}
                  disabled={bankDetails.code === 0 || bankDetails.accountNumber.length > 9}
                  onBlur={handleBlur}
                  value={bankDetails.accountNumber}
                />
                {bankDetailsError && (
                  <span>{bankDetailsError.accountNumber}</span>
                )}
                <label htmlFor="accountName">Account name</label>
                <input
                  type="text"
                  name="accountName"
                  onChange={handleChange}
                  disabled={true}
                  onBlur={handleBlur}
                  value={bankDetails.accountName}
                />
                {bankDetailsError && (
                  <span>{bankDetailsError.accountName}</span>
                )}
              </div>

              <div className={styles.inputs}>
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={occupation}
                />
                {occupationError && <p>{occupationError}</p>}
              </div>
            </div>
          </div>
          <Button type="submit" text="Sign Up" />
        </form>
      </div>
    </>
  );
};

export default VendorSignup;
