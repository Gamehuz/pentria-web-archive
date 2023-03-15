import React from "react";
import styles from "./History.module.scss";

import Button from "../../../components/Button";

import img from "./assets/img.svg";
import location from "./assets/location.svg";
import fav from "./assets/fav.svg";

const History = () => {
  return (
    <div className={styles.history_container}>
      <div className={styles.coming_soon}>
        <div>
          <h1>COMMING SOON</h1>
          <p>Legacy points</p>
        </div>
        <Button text="redeem" type="submit" />
      </div>

      <div className={styles.booking_history}>
        <p>Booking History</p>

        <div className={styles.history}>
          <div className={styles.booking_info}>
            <img src={img} alt="" />
            <div>
              <p className={styles.price}>#1400</p>
              <p className={styles.item}>PS5 (FIFA 23)</p>
              <p className={styles.ticket}>4 Ticket</p>
              <p className={styles.date}>22-06-2022</p>
            </div>
          </div>
          <div className={styles.booking_details}>
            <div>
              <img src={fav} alt="" />
              <p>PH Pleasure Park </p>
            </div>
            <div>
              <img src={location} alt="" />
              <p>23 Abacha Rd phc </p>
            </div>
            <p className={styles.status}>Status: Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
