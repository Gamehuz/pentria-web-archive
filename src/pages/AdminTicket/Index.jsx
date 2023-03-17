import React from "react";
import styles from "./AdminTicket.module.scss";
import Button from "../../components/Button";

const Index = () => {
  return (
    <div className={styles.ticket_container}>
      <div className={styles.header}>
        <div className={styles.revenue}>
          <div>
            <h1>NGN 3,000,000</h1>
            <p>Total Revenue</p>
          </div>
          <div>
            <h1>NGN 3,000</h1>
            <p>Percentage Income</p>
          </div>
        </div>

        <Button text="withdraw" />
      </div>
      <div className={styles.tickets}>
        <p>Tickets</p>
        <hr />

        <div className={styles.confirmed_ticket}>
          <p>Confirmed()</p>

          <div className={styles.confirm_container}>
            <div className={styles.confirm}>
              <div>
                <p>John Doe</p>
                <p>email@gmail.com</p>
              </div>

              <div>
                <p>NGN 2800</p>
                <p>Total Paid</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.canceld_ticket}>
          <p>Canceled()</p>

          <div className={styles.cancle_container}>
            <div className={styles.cancle}>
              <div>
                <p>John Doe</p>
                <p>email@gmail.com</p>
              </div>

              <div>
                <p>NGN 2800</p>
                <p>Total Paid</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.active_ticket}>
          <p>Active()</p>

          <div className={styles.active_container}>
            <div className={styles.active}>
              <div>
                <p>John Doe</p>
                <p>email@gmail.com</p>
              </div>

              <div>
                <p>NGN 2800</p>
                <p>Total Paid</p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className={styles.expired_ticket}>
          <p>Expired()</p>

          <div className={styles.expired_container}>
            <div className={styles.expired}>
              <div>
                <p>John Doe</p>
                <p>email@gmail.com</p>
              </div>

              <div>
                <p>NGN 2800</p>
                <p>Total Paid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
