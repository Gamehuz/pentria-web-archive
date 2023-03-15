import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Nav from "../../components/Nav"
import styles from "./vendorsettings.module.scss"
import InputField from "../../components/InputField"
import { ReactComponent as Menu } from "./assets/menu-hamburger.svg";
import { useState } from "react";

const VendorSettings = () => {
    const [toggleDashboardMenu, setToggleDashboardMenu] = useState(true);
    const toggle = () => {
        setToggleDashboardMenu(!toggleDashboardMenu);
    }

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
                        <InputField type={"text"} placeholder={"First Name"}/>
                    </label>
                    <label>
                        Last Name
                        <InputField />
                    </label>   
                    </div>
                    <label>
                        Sex
                        <InputField />
                    </label>
                    <label>
                        Date of Birth
                        <InputField />
                    </label>
                    <label>
                        Address
                        <InputField />
                    </label>
                    <div className={styles.dual}>
                    <label>
                        City
                        <InputField />
                    </label>
                    <label>
                        State
                        <InputField />
                    </label>
                    </div>
                    <label>
                        Email Address
                        <InputField />
                    </label>
                    <label>
                        Phone Number
                        <InputField />
                    </label>
                    <label>
                        <div>
                            <p>Password</p>
                            <p>Change</p>
                        </div>
                        <InputField />
                    </label>
                    <p className={styles.delete}>Delete Account</p>
                    <Button bg={styles.button} text={'SAVE CHANGES'}/>
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
                    <Button bg={styles.button} text={'UPDATE'}/>
                    </div>
                </form>
            </div>
            </section>
        </div>
    )
}

export default VendorSettings;