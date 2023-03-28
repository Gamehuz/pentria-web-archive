import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField/index";
import backArrow from "./assets/211686_back_arrow_icon 1.png";
import styles from "./BookingPage.module.scss";
import Item from "./compo/Item";

const BookingPage = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
                  width={"width-three-quarter"}
                  radius={"border-radius-10"}
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
                  width={"width-three-quarter"}
                  id="phoneNumber"
                  type="number"
                  radius={"border-radius-10"}
                  bg="bg-light"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </section>
            <section className={styles.items}>
              <Item />
              <Item />
            </section>
          </form>
        </main>
      </div>
    </>
  );
};

export default BookingPage;
