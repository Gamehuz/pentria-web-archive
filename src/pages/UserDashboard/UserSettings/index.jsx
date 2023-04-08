import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import EDIT_USER_ACCOUNT_INFO from "../../../graphql/mutations/editUserAccountInfo";
import styles from "./usersettings.module.scss";

const UserSettings = () => {
  const { user } = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState({
    firstName: user?.firstName ? user?.firstName : "",
    lastName: user?.lastName ? user?.lastName : "",
    email: user?.email ? user.email : "",
    phone: user?.phone ? user.phone : "",
    password: user?.password ? user.password : "",
    sex: user?.sex ? user?.sex : "",
    dob: user?.dob ? user?.dob : "",
    address: user?.address ? user?.address : "",
    city: user?.city ? user?.city : "",
    state: user?.state ? user?.state : "",
  });

  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [editUserInfo, { data, loading, error }] = useMutation(
    EDIT_USER_ACCOUNT_INFO
  );
  const [startEdit, setStartEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    editUserInfo({
      variables: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        phone: userDetails.phone,
        password: userDetails.password,
        sex: userDetails.sex,
        dob: userDetails.dob,
        address: userDetails.address,
        city: userDetails.city,
        state: userDetails.state,
      },
    }).then((res) => {
      console.log(res);
      toast.success("User details updated successfully");
    });
  };

  if (loading) return toast.success("Loading...");
  if (error) return toast.error(error.message);
  console.log(startEdit);
  return (
    <div className={styles.userSettings}>
      <div className="mb-4">
        <h1>Profile Settings</h1>
        <div className="flex justify-between w-full items-center">
          <h3 className="text-2xl text-[#7e7e7e]">Edit Profile</h3>
          {!startEdit ? (
            <Button
              type="button"
              text="Edit"
              onClick={() => setStartEdit(!startEdit)}
            />
          ) : (
            <Button
              type="button"
              text="Cancel"
              onClick={() => setStartEdit(!startEdit)}
            />
          )}
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSave}>
            <div className={styles.two_cols}>
              <div className={styles.formGroup}>
                <label htmlFor="firstname">First Name</label>
                <InputField
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={startEdit ? userDetails.firstName : user?.firstName}
                  placeholder="Enter your first name"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastname">Last Name</label>
                <InputField
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={startEdit ? userDetails.lastName : user?.lastName}
                  placeholder="Enter your last name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Sex</label>
              <InputField
                type="text"
                name="sex"
                id="sex"
                value={startEdit ? userDetails.sex : user?.sex}
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
                value={startEdit ? userDetails.dob : user?.dob}
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
                value={startEdit ? userDetails.address : user?.address}
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
                  value={startEdit ? userDetails.city : user?.city}
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
                  value={startEdit ? userDetails.state : user?.state}
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
                value={startEdit ? userDetails.email : user?.email}
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
                value={startEdit ? userDetails.phone : user?.phone}
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
                value={startEdit ? userDetails.password : user?.password}
                setTogglePassword={() => setTogglePassword(!togglePassword)}
                onChange={handleChange}
              />
            </div>
            <div className={styles.actionBtns}>
              {startEdit && (
                <Button
                  type="submit"
                  className={styles.save}
                  text="Save Changes"
                />
              )}
              {/* <Button type="reset" classes={styles.del} text="Delete Account" /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
