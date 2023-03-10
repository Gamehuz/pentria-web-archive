import React, { useState } from "react";
import styles from "./Item.module.scss";
import Rectangle from "./assets/Rectangle 69.png";

const Item = () => {
  return (
    <>
      <div className={styles.Item}>
        <section className={styles.item_details}>
          <h3>Item</h3>
          <div className={styles.item_text}>
            <img src={Rectangle} alt="" />
            <div className={styles.item_text_properties}>
              <h5>
                ₦980<span>/hr</span>
              </h5>
              <p>PS5 (FIFA 23)</p>
              <p>Number of Tickets</p>
              <input type="number" placeholder="2" />
            </div>
          </div>
        </section>
        <section className={styles.date}></section>
      </div>
    </>
  );
};

export default Item;
