import Nav from "../../components/Nav";
import styles from "./historyguest.module.scss";
import History from "../../components/History";

const VendorGuest = () => {
    return (
        <div className={styles.historyguest}>
            <Nav />
            <History />
        </div>
    )
}

export default VendorGuest;