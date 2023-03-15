import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import styles from "./historyguest.module.scss";
import {ReactComponent as Arrow} from "./assets/leftarrow.svg";

const VendorGuest = () => {
    return (
        <div className={styles.historyguest}>
            <Nav />
            <section className={styles.history}>
                <Link>
                    <Arrow />
                    <span>Back to Guest</span>
                </Link>
                <h1>Guest history</h1>
                <div className={styles.historyDetails}>
                    <div>
                        <div>
                            <p>S/N</p>
                            <p>Date</p>
                            <p>Amount</p>
                        </div>
                        <div>
                            <p>1</p>
                            <p>JUN 21,2022</p>
                            <p>30,000</p>
                        </div>
                        <div>
                            <p>2</p>
                            <p>MAY 22,2022</p>
                            <p>60,000</p>
                        </div>
                        <div>
                            <p>3</p>
                            <p>AUG 4,2022</p>
                            <p>30,000</p>
                        </div>
                        <div>
                            <p>4</p>
                            <p>JUN 22,2022</p>
                            <p>40,000</p>
                        </div>
                        <div>
                            <p>5</p>
                            <p>JUL 23, 2022</p>
                            <p>50,000</p>
                        </div>
                        <div>
                            <p>6</p>
                            <p>JUN 26, 2022</p>
                            <p>30,000</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Vendor</p>
                            <p>Trx ID</p>
                            <p>Status</p>
                        </div>
                        <div>
                            <p>Pleasure Park</p>
                            <p>PBE 00/23D7</p>
                            <p>Pending</p>
                        </div>
                        <div>
                            <p>Machala hub</p>
                            <p>PBE 00/23D7</p>
                            <p>Pending</p>
                        </div>
                        <div>
                            <p>Sencillo inn</p>
                            <p>PBE 00/23D7</p>
                            <p>Pending</p>
                        </div>
                        <div>
                            <p>Tennis court</p>
                            <p>PBE 00/23D7</p>
                            <p>Confirmed</p>
                        </div>
                        <div>
                            <p>Gamehauz</p>
                            <p>PBE 00/23D7</p>
                            <p>Confirmed</p>
                        </div>
                        <div>
                            <p>Play zone</p>
                            <p>PBE 00/23D7</p>
                            <p>Confirmed</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VendorGuest;