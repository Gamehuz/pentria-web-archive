import Button from "@/components/Button";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import backArrow from "./assets/211686_back_arrow_icon 1.png";
import styles from "./BookingPage.module.scss";
import Item from "./compo/Item";

const BookingPage = () => {
  const navigate = useNavigate();
  const activities = JSON.parse(localStorage.getItem("activities"));

  const [dateSelected, setDateSelected] = useState();
  const [timeSelected, setTimeSelected] = useState();
  const [numOfTickets, setNumOfTickets] = useState(1);
  const [durationInMin, setDurationInMin] = useState(1);
  const [specialReq, setSpecialReq] = useState("");
  const [itemsSelected, setItemsSelected] = useState([]);

  const handleItemData = (date, time, numOfTickets, duration, item) => {
    setDateSelected(date);
    setTimeSelected(time);
    setDurationInMin(duration);
    const newItem = {
      name: item.name,
      price: item.price,
      currency: item.currency,
      duration: duration,
      numOfTickets: numOfTickets,
      image: item.image,
      dateSelected: date,
      timeSelected: time,
      spaceId: item.spaceId,
      id: item._id,
    };
    const itemIndex = itemsSelected.findIndex(
      (ticket) => ticket.id === item._id
    );

    if (itemIndex !== -1) {
      const updatedItems = [...itemsSelected];
      updatedItems.splice(itemIndex, 1);
      setItemsSelected(updatedItems);
      toast.error(`Item ${item.name} already added, now removed`);
    } else {
      const updatedItems = [...itemsSelected, newItem];
      setItemsSelected(updatedItems);
      toast.success("Item data updated");
    }
  };
  console.log(itemsSelected);

  const handleCreateBooking = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.BookingPage}>
        {/* <HomeNavbar bg={"#FAFAFA"} /> */}
        <main>
          <header>
            <div
              className={styles.Link}
              onClick={() => {
                navigate(-1);
              }}
            >
              <img src={backArrow} alt="" />
              <p>Back to results</p>
            </div>
            <h2>Booking</h2>
          </header>
          <form onSubmit={handleCreateBooking}>
            {/* <section className={styles.user_details}>
              <div className={styles.input_text}>
                <label htmlFor="name" className="">
                  Enter Your Full Name
                </label>
                
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
                
                <InputField
                  name="phoneNumber"
                  id="phoneNumber"
                  type="number"
                  bg="bg-light"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </section> */}
            <section className={styles.items}>
              {activities?.map((item) => (
                <Item
                  onItemDataChange={handleItemData}
                  key={item._id}
                  item={item}
                />
              ))}
            </section>

            <section className={styles.booking_details}>
              <div className={styles.booking_details__specialReq}>
                <label htmlFor="specialReq">Special Request</label>
                <textarea
                  name="specialReq"
                  id="specialReq"
                  onChange={(e) => setSpecialReq(e.target.value)}
                ></textarea>
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
