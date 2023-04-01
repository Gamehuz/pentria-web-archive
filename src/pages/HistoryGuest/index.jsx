import { Link } from "react-router-dom";
import HistoryTable from "../../components/HistoryTable";
import Nav from "../../components/Nav";
import { ReactComponent as Arrow } from "./assets/leftarrow.svg";
import styles from "./historyguest.module.scss";

const VendorGuest = () => {
  const firstTitle = ["Date", "Amount"];
  const secondTitle = ["Vendor", "Trx ID", "Status"];
  const firstData = [
    {
      name1: "JUN 21,2022",
      name2: "30,000",
    },
    {
      name1: "MAY 22,2022",
      nam2: "60,000",
    },
    {
      name1: "AUG 4,2022",
      name2: "30,000",
    },
  ];
  const secondData = [
    {
      name1: "Pleasure Park",
      name2: "PBE 00/23D7",
      name3: "Pending",
    },
    {
      name1: "Machala hub",
      name2: "PBE 00/23D7",
      name3: "Confirmed",
    },
    {
      name1: "Sencillo inn",
      name2: "PBE 00/23D7",
      name3: "Pending",
    },
  ];
  return (
    <div className={styles.historyguest}>
      <Nav />
      <div className={styles.historyguestHeader}>
        <Link>
          <Arrow />
          <span>Back to Guest</span>
        </Link>
        <h1>Guest history</h1>
      </div>
      <HistoryTable
        firstTableTitle={firstTitle}
        secondTableTitle={secondTitle}
        firstTableData={firstData}
        secondTableData={secondData}
      />
    </div>
  );
};

export default VendorGuest;
