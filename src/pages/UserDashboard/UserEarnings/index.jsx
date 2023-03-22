import React from "react";
import Button from "../../../components/Button";
import styles from "./earnings.module.scss";

const UserEarnings = () => {
  return (
    <div className={styles.userEarningsPage}>
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
      <div className={styles.earningsBooking}>
        <h3>Bookings</h3>
      </div>
      <div className={styles.earnings}></div>
      <div className={styles.earningsGraph}></div>
    </div>
  );
};

export default UserEarnings;
