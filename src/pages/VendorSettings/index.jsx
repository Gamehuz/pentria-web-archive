import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Nav from "../../components/Nav"
import styles from "./vendorsettings.module.scss"
import InputField from "../../components/InputField"
import { ReactComponent as Menu } from "./assets/menu-hamburger.svg";
import { useState, useEffect } from "react";
import { handleUpdatePasword, userData, getBanks, verifyBanks, handleEditWalletInfo } from "../../redux/features/user/service";
import { handleEditInfo } from "../../redux/features/user/service";

const VendorSettings = () => {
    const [toggleDashboardMenu, setToggleDashboardMenu] = useState(false);
    const toggle = () => {
        setToggleDashboardMenu(!toggleDashboardMenu);
    };

    const [data, setData] = useState({});
    const [banks, setBanks] = useState([]);

    const [accountDetails, setAccountDetails] = useState({
        firstName: "",
        lastName: "",
        sex: "",
        dob: "",
        address: "",
        city: "",
        state: "",
        email: "",
        phoneNumber: "",
        oldPassword: "",
        newPassword: "",
        code: "",
        bank: "",
        accountName: "",
        accountNumber: ""
    });

    const editaccountDetails = (e) => {
        const { name, value } = e.target;
        setAccountDetails({
            ...accountDetails,
            [name]: value
        })
    };

    const editInfo = () => {
        handleEditInfo(accountDetails, data)();
        setAccountDetails({
            ...accountDetails,
            firstName: "",
            lastName: "",
            sex: "",
            dob: "",
            address: "",
            city: "",
            state: "",
            email: "",
            phoneNumber: "",
        })
    };

    const updatePassword = () => {
        handleUpdatePasword(accountDetails)();
        setAccountDetails({
            ...accountDetails,
            oldPassword: "",
            newPassword: ""
        })
    };

    const updateWallet = () => {
        handleEditWalletInfo(accountDetails)();
        setAccountDetails({
            ...accountDetails,
            code: "",
            accountName: "",
            accountNumber: "",
            bank: ""
        })
    }



    useEffect(() => {
        userData().then((data) => setData(data));
        getBanks().then((data) => setBanks(data.getBanks));

        if(accountDetails.bank){
            const userBank = banks.filter((bank) => bank.name === accountDetails.bank);
            setAccountDetails({
                ...accountDetails,
                code: userBank[0].code
            })
        }

    
        if(accountDetails.accountNumber.length === 10) {
            verifyBanks(accountDetails)().then((data) => setAccountDetails({
                ...accountDetails,
                accountName: data?.verifyBankAccount?.account_name
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountDetails.bank, accountDetails.accountNumber.length === 10]);

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
                        placeholder={data?.user?.firstName || "First Name"}
                        name={"firstName"}
                        value={accountDetails.firstName}
                        onChange={editaccountDetails}
                        />
                    </label>
                    <label>
                        Last Name
                        <InputField 
                        type={"text"}
                        placeholder={data?.user?.lastName || "Last Name"}
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
                        placeholder={data?.user?.address || "Type your address"}
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
                        placeholder={data?.user?.city || "Enter your city"}
                        name={"city"}
                        value={accountDetails.city}
                        onChange={editaccountDetails}
                        />
                    </label>
                    <label>
                        State
                        <InputField 
                        type={"text"}
                        placeholder={data?.user?.state || "Enter your state"}
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
                        placeholder={data?.user?.email || "Enter your Email"}
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
                        placeholder={data?.user?.phone || "Enter your Phone number"}
                        name={"phoneNumber"}
                        value={accountDetails.phoneNumber}
                        onChange={editaccountDetails}
                        />
                    </label>
                    <div className={styles.password}>
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
                <form className={styles.walletsettings}>
                    <h3>Wallet Settings</h3>
                    <label>
                        Bank Name
                        <select name="bank" value={accountDetails.bank} onChange={editaccountDetails}>
                            <option hidden>Select bank</option>
                            { banks?.map((bank) => {
                                return (
                                    <option key={bank.id}>{bank.name}</option>
                                )
                            })}
                        </select>
                    </label>
                    <label>
                        Account Number
                        <InputField 
                        type={'number'}
                        placeholder={'Enter Account Number'}
                        name={'accountNumber'}
                        value={accountDetails.accountNumber}
                        onChange={editaccountDetails}
                        disabled={accountDetails.bank ? false : true}
                        />
                    </label>
                    <label>
                        <div>
                            Click update to update wallet info with this account name {accountDetails.accountName}
                        </div>
                    </label>
                    <div className={styles.buttoncontainer}>
                    <Button 
                    type={'submit'}
                    bg={styles.button} 
                    text={'UPDATE'}
                    onClick={() => updateWallet()}
                    />
                    </div>
                </form>
            </div>
            </section>
        </div>
    )
}

export default VendorSettings;