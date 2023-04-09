import Button from "../../../components/Button";
import HistoryTable from "../../../components/HistoryTable/index";
import styles from "./earnings.module.scss";

const VendorEarnings = () => {
  const firstTitle = ["Bank", "Acct Name", "Acct No"];
  const secondTitle = ["Amount", "Date", "Status"];
  const firstData = [
    {
      name1: "Access Bank",
      name2: "Oluwaseun Oluwaseun",
      name3: "0000000000",
    },
    {
      name1: "Access Bank",
      name2: "Oluwaseun Oluwaseun",
      name3: "0000000000",
    },
    {
      name1: "Access Bank",
      name2: "Oluwaseun Oluwaseun",
      name3: "0000000000",
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
    <div className={styles.EarningsPage}>
      <div className={styles.earningsHeader}>
        <div className={styles.earningsHeader__balance}>
          <h1>NGN 30,000 </h1>
          <p>Available Balance</p>
        </div>
        <div className={styles.earningsHeader__withdraw}>
          <Button
            type="button"
            bg={styles.earningsHeader__withdraw__btn}
            text="Withdraw"
          />
        </div>
      </div>
      <div className="px-[3rem]">
        <div className={styles.earningsBooking}>
          <h3>Bookings</h3>
        </div>
        <div className={styles.earnings}>
          <HistoryTable
            includeSn={false}
            firstTableTitle={firstTitle}
            secondTableTitle={secondTitle}
            firstTableData={firstData}
            secondTableData={secondData}
          />
        </div>
        <div className={styles.earningsGraph}></div>
      </div>
    </div>
  );
};

export default VendorEarnings;
