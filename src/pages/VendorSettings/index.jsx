import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Nav from "../../components/Nav"
import styles from "./vendorsettings.module.scss"
import InputField from "../../components/InputField"
import { ReactComponent as Menu } from "./assets/menu-hamburger.svg";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import USER from "../../graphql/queries/userdetails";
import EDIT_USER_ACCOUNT_INFO from "../../graphql/mutations/editUserAccountInfo";

const VendorSettings = () => {
    const [toggleDashboardMenu, setToggleDashboardMenu] = useState(true);
    const toggle = () => {
        setToggleDashboardMenu(!toggleDashboardMenu);
    };
    const navigate = useNavigate();

    const {data, loading, error} = useQuery(USER);

    const [accountDetails, setAccountDetails] = useState({
        firstName: data?.user.firstName,
        lastName: data?.user.lastName,
        sex: "",
        dob: "",
        address: data?.user.address,
        city: data?.user.city,
        state: data?.user.state,
        email: data?.user.email,
        phoneNumber: data?.user.phone    
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
            firstName: accountDetails.firstName,
            lastName: accountDetails.lastName,
            address: accountDetails.address,
            city: accountDetails.city,
            state: accountDetails.state,
            email: accountDetails.email,
            phone: accountDetails.phoneNumber
        },
        // refetchQueries: [{ query: USER}],
        onCompleted: (data) => {
            console.log(data)
            // navigate('/vendor/settings')
        }
    })

    console.log(accountDetails)

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
                <form>
                    <h2>Account Settings</h2>
                    <div className={styles.dual}>
                    <label>
                        First Name
                        <InputField 
                        type={"text"} 
                        placeholder={"First Name"}
                        name={"firstName"}
                        value={accountDetails.firstName}
                        onChange={editaccountDetails} />
                    </label>
                    <label>
                        Last Name
                        <InputField 
                        type={"text"}
                        placeholder={"Last Name"}
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
                        placeholder={"Type your address"}
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
                        placeholder={"Enter your city"}
                        name={"city"}
                        value={accountDetails.city}
                        onChange={editaccountDetails}
                        />
                    </label>
                    <label>
                        State
                        <InputField 
                        type={"text"}
                        placeholder={"Enter your state"}
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
                        placeholder={"Enter your Email"}
                        name={"email"}
                        value={accountDetails.email}
                        onChange={editaccountDetails}
                        />
                    </label>
                    <label>
                        Phone Number
                        <InputField 
                        type={"number"}
                        placeholder={"Enter your Phone number"}
                        name={"phoneNumber"}
                        value={accountDetails.phoneNumber}
                        onChange={editaccountDetails}
                        />
                    </label>
                    <label>
                        <div>
                            <p>Password</p>
                            <p>Change</p>
                        </div>
                        <InputField />
                    </label>
                    <p className={styles.delete}>Delete Account</p>
                    <Button 
                    bg={styles.button} 
                    text={'SAVE CHANGES'} 
                    onChange={() => editInfo}
                    />
                </form>
                <form className={styles.walletsettings}>
                    <h3>Wallet Settings</h3>
                    <label>
                        Bank Name
                        <InputField />
                    </label>
                    <label>
                        Account Name
                        <InputField />
                    </label>
                    <label>
                        Account Number
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