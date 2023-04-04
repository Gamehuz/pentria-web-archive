import Button from "@/components/Button";
import HistoryTable from "../../../components/HistoryTable";
import styles from "./withdraw.module.scss";
const VendorWithdrawals = () => {
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
    <div className={styles.userWithdrawal}>
      <div className={styles.withdrawHeader}>
        <div className={styles.withdrawHeader__balance}>
          <h1>NGN 30,000 </h1>
          <p>Available Balance</p>
        </div>
        <div className={styles.withdrawHeader__withdraw}>
          <Button
            type="button"
            bg={styles.withdrawHeader__withdraw__btn}
            text="Withdraw"
          />
        </div>
      </div>
      <div className={styles.withdrawBooking}>
        <h3>Withdrawal History</h3>
        <HistoryTable
          includeSn={false}
          firstTableTitle={firstTitle}
          secondTableTitle={secondTitle}
          firstTableData={firstData}
          secondTableData={secondData}
        />
      </div>
    </div>
  );
};

export default VendorWithdrawals;
