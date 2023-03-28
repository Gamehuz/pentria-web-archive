import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Nav from "../../components/Nav"
import styles from "./vendorsettings.module.scss"
import InputField from "../../components/InputField"
import { ReactComponent as Menu } from "./assets/menu-hamburger.svg";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import USER from "../../graphql/queries/userdetails";
import EDIT_USER_ACCOUNT_INFO from "../../graphql/mutations/editUserAccountInfo";
import UPDATE_PASSWORD from "../../graphql/mutations/updatePassword";
import GET_BANKS from "../../graphql/queries/getBanks";

const VendorSettings = () => {
    const [toggleDashboardMenu, setToggleDashboardMenu] = useState(false);
    const toggle = () => {
        setToggleDashboardMenu(!toggleDashboardMenu);
    };
    // const navigate = useNavigate();

    const {data, loading} = useQuery(USER);

    const [accountDetails, setAccountDetails] = useState({
        firstName: "",
        lastName: "",
        sex: "",
        dob: "",
        address: "",
        city: "",
        state: "",
        email: "",
        phoneNumber: ""   ,
        oldPassword: "",
        newPassword: ""
    });

    const editaccountDetails = (e) => {
        const { name, value } = e.target;
        setAccountDetails({
            ...accountDetails,
            [name]: value
        })
    };

    const [editInfo] = useMutation(EDIT_USER_ACCOUNT_INFO, {
        variables: {
            firstName: accountDetails.firstName === "" ? data?.user.firstName : accountDetails.firstName,
            lastName: accountDetails.lastName === "" ? data?.user.lastName : accountDetails.lastName,
            address: accountDetails.address === "" ? data?.user.address : accountDetails.address,
            city: accountDetails.city === "" ? data?.user.city : accountDetails.city,
            state: accountDetails.state === "" ? data?.user.state :   accountDetails.state,
            email: accountDetails.email === "" ? data?.user.email : accountDetails.email,
            phone: accountDetails.phoneNumber === "" ? data?.user.phone : accountDetails.phoneNumber
        }
    });

    const [updatePassword, {data: updatedPasswordData, error: passwordError}] = useMutation(UPDATE_PASSWORD, {
        variables: {
            oldPassword: accountDetails.oldPassword,
            newPassword: accountDetails.newPassword
        }
    });

    const { data: bankData, error: bankError} = useQuery(GET_BANKS);
    console.log(bankData)
    return (
        <div>
            <Nav />
            <section className={styles.vendorsettings}>
                <div className={styles.hamburger} onClick={() => toggle()}>
                    <Menu />
                </div>
            <aside className={toggleDashboardMenu ? styles.aside : ""}>
                <h1>Dashboard</h1>
                <div className={styles.link}>
                    <Link>Listings</Link>
                    <Link>Earnings</Link>
                    <Link>Withdrawals</Link>
                    <Link>Settings</Link>
                </div>
                <Button bg={styles.button} text={'LOGOUT'}/>
                <p onClick={() => toggle()} className={styles.x}>X</p>
            </aside>
            <div className={styles.forms}>
                { loading ? <h2>Loading...</h2> : <form>
                    <h2>Account Settings</h2>
                    <div className={styles.dual}>
                    <label>
                        First Name
                        <InputField 
                        type={"text"} 
                        placeholder={data?.user.firstName || "First Name"}
                        name={"firstName"}
                        value={accountDetails.firstName}
                        onChange={editaccountDetails}
                        />
                    </label>
                    <label>
                        Last Name
                        <InputField 
                        type={"text"}
                        placeholder={data?.user.lastName || "Last Name"}
                        name={"lastName"}
                        value={accountDetails.lastName}
                        onChange={editaccountDetails}
                        />
                    </label>   
                    </div>
                    <label>
                        Sex
                        <InputField 
                        type={"text"}
                        placeholder={"Sex"}
                        name={"sex"}
                        value={accountDetails.sex}
                        onChange={editaccountDetails}
                        disabled={true}
                        />
                    </label>
                    <label>
                        Date of Birth
                        <InputField 
                        type={"date"}
                        placeholder={""}
                        name={"dob"}
                        value={accountDetails.dob}
                        onChange={editaccountDetails}
                        disabled={true}
                        />
                    </label>
                    <label>
                        Address
                        <InputField 
                        type={"text"}
                        placeholder={data?.user.address || "Type your address"}
                        name={"address"}
                        value={accountDetails.address}
                        onChange={editaccountDetails}
                        />
                    </label>
                    <div className={styles.dual}>
                    <label>
                        City
                        <InputField 
                        type={"text"}
                        placeholder={data?.user.city || "Enter your city"}
                        name={"city"}
                        value={accountDetails.city}
                        onChange={editaccountDetails}
                        />
                    </label>
                    <label>
                        State
                        <InputField 
                        type={"text"}
                        placeholder={data?.user.state || "Enter your state"}
                        name={"state"}
                        value={accountDetails.state}
                        onChange={editaccountDetails}
                        />
                    </label>
                    </div>
                    <label>
                        Email Address
                        <InputField 
                        type={"email"}
                        placeholder={data?.user.email || "Enter your Email"}
                        name={"email"}
                        value={accountDetails.email}
                        onChange={editaccountDetails}
                        required={true}
                        />
                    </label>
                    <label>
                        Phone Number
                        <InputField 
                        type={"number"}
                        placeholder={data?.user.phone || "Enter your Phone number"}
                        name={"phoneNumber"}
                        value={accountDetails.phoneNumber}
                        onChange={editaccountDetails}
                        />
                    </label>
                    <div className={styles.password}>
                        <p className={updatedPasswordData ? styles.success : passwordError ? styles.error : null}>{ updatedPasswordData ? `${updatedPasswordData.updatePassword}` : passwordError ? `${passwordError.message}` : null}</p>
                        <div className={styles.details}>
                            <p>Password</p>
                            <p onClick={() => updatePassword()}>Change</p>
                        </div>
                        <div className={styles.dual}>
                            <label>
                                Old Password
                                <InputField 
                                type={"password"}
                                placeholder={"Enter old password"}
                                name={"oldPassword"}
                                value={accountDetails.oldPassword}
                                onChange={editaccountDetails}
                                />
                            </label>
                            <label>
                                New Passsword
                                <InputField 
                                type={"password"}
                                placeholder={"Enter new password"}
                                name={"newPassword"}
                                value={accountDetails.newPassword}
                                onChange={editaccountDetails}
                                />
                            </label>
                        </div>
                    </div>
                    {/* <p className={styles.delete}>Delete Account</p> */}
                    <Button 
                    type={"submit"}
                    bg={styles.button} 
                    text={'SAVE CHANGES'} 
                    onClick={() => editInfo()}
                    />
                </form>
                }
                <form className={styles.walletsettings}>
                    <h3>Wallet Settings</h3>
                    <label>
                        Bank Name
                        <InputField />
                    </label>
                    <label>
                        Account Number
                        <InputField />
                    </label>
                    <label>
                        Account Name
                        <InputField />
                    </label>
                    <label>
                        BVN
                        <InputField />
                    </label>
                    <div className={styles.buttoncontainer}>
                    <Button 
                    bg={styles.button} 
                    text={'UPDATE'} 
                    />
                    </div>
                </form>
            </div>
            </section>
        </div>
    )
}

export default VendorSettings;