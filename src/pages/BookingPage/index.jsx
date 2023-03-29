import Button from "@/components/Button";
import InputField from "@/components/InputField";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import backArrow from "./assets/211686_back_arrow_icon 1.png";
import styles from "./BookingPage.module.scss";
import Item from "./compo/Item";

const BookingPage = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [dateSelected, setDateSelected] = useState();
  const [timeSelected, setTimeSelected] = useState();
  const [numOfTickets, setNumOfTickets] = useState(1);
  const [duration, setDuration] = useState(1);

  const handleItemData = (date, time, tickets, duration) => {
    setDateSelected(date);
    setTimeSelected(time);
    setNumOfTickets(tickets);
    setDuration(duration);
    toast.success("Item data updated");
  };

  return (
    <>
      <div className={styles.BookingPage}>
        {/* <HomeNavbar bg={"#FAFAFA"} /> */}
        <main>
          <header>
            <Link className={styles.Link} to="/results">
              <img src={backArrow} alt="" />
              <p>Back to results</p>
            </Link>
            <h2>Booking</h2>
          </header>
          <form action=".">
            <section className={styles.user_details}>
              <div className={styles.input_text}>
                <label htmlFor="name" className="">
                  Enter Your Full Name
                </label>
                {/* <input
                  name="name"
                  id="name"
                  type="text"
                  required
                  onChange={(e) => setFullName(e.target.value)}
                /> */}
                <InputField
                  name="name"
                  id="name"
                  type="text"
                  bg="bg-light"
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className={styles.input_text}>
                <label htmlFor="phoneNumber" className="">
                  Enter Your Phone Number
                </label>
                {/* <input
                  name="phoneNumber"
                  id="phoneNumber"
                  type="text"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                /> */}
                <InputField
                  name="phoneNumber"
                  id="phoneNumber"
                  type="number"
                  bg="bg-light"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </section>
            <section className={styles.items}>
              {[1, 2, 3].map((item) => (
                <Item onItemDataChange={handleItemData} key={item} />
              ))}
            </section>

            <section className={styles.booking_details}>
              <div className={styles.booking_details__specialReq}>
                <label htmlFor="specialReq">Special Request</label>
                <textarea name="specialReq" id="specialReq"></textarea>
              </div>
              <div className={styles.booking_details__total}>
                <div className={styles.booking_details__total__subtotal}>
                  <p>Bill Summary</p>
                  <div
                    className={styles.booking_details__total__subtotal__price}
                  >
                    <p>900</p>
                    <span>x</span>
                    <p>1</p>
                  </div>
                </div>
                <div className={styles.booking_details__total__item}>
                  <h3>Total</h3>
                  <div className={styles.booking_details__total__item__price}>
                    <p>NGN</p>
                    <p>0</p>
                  </div>
                </div>
              </div>
            </section>
            <div className={styles.btn}>
              <Button type="submit" text="submit" />
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default BookingPage;
