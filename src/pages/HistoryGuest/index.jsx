import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HistoryTable from "../../components/HistoryTable";
// import Nav from "../../components/Nav";
import { customerBookings, userData } from "../../redux/features/user/service";
import { ReactComponent as Arrow } from "./assets/leftarrow.svg";
import styles from "./historyguest.module.scss";

const VendorGuest = () => {
  const [userId, setUserId] = useState("");
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  
  const firstTitle = ["Date", "Amount"];
  const secondTitle = ["Vendor", "Trx ID", "Status"];

  useEffect(() => {
    userData()().then((data) => setUserId(data.user._id));
    customerBookings(userId).then((data) => setBookings(data.customerBookings))

  }, [userId])
  return (
    <div className={styles.historyguest}>
      <div className={styles.historyguestHeader}>
        <Link>
          <Arrow />
          <span onClick={() => navigate(-1)}>Back to Guest</span>
        </Link>
        <h1>Guest history</h1>
      </div>
      <HistoryTable
        firstTableTitle={firstTitle}
        secondTableTitle={secondTitle}
        firstTableData={bookings}
        secondTableData={bookings}
      />
    </div>
  );
};

export default VendorGuest;
