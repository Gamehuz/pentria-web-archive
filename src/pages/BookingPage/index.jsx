import Button from "@/components/Button";
import { dispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  CalculateDiscount,
  CreateBooking,
} from "../../redux/features/booking/services";
import backArrow from "./assets/211686_back_arrow_icon 1.png";
import styles from "./BookingPage.module.scss";
import Item from "./compo/Item";

const BookingPage = () => {
  const navigate = useNavigate();
  const activities = JSON.parse(localStorage.getItem("activities"));
  const [specialReq, setSpecialReq] = useState("");
  const [itemsSelected, setItemsSelected] = useState([]);
  const [total, setTotal] = useState(0);

  const calcTotal = itemsSelected.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  const getTotalItemLength = itemsSelected.reduce((acc, item) => {
    return acc + item.count;
  }, 0);

  useEffect(() => {
    setTotal(calcTotal);
  }, [calcTotal, itemsSelected]);

  const handleItemData = (date, time, numOfTickets, duration, item) => {
    const newItem = {
      name: item.name,
      price: item.price,
      currency: item.currency,
      duration: String(duration),
      count: Number(numOfTickets),
      image: item.image,
      date: date,
      time: time,
      spaceId: item.spaceId,
      activityId: item._id,
    };
    const itemIndex = itemsSelected.findIndex(
      (ticket) => ticket.activityId === item._id
    );

    if (itemIndex !== -1) {
      const updatedItems = [...itemsSelected];
      updatedItems.splice(itemIndex, 1);
      setItemsSelected(updatedItems);
      toast.error(`Item ${item.name} already added, now removed`);
    } else {
      const updatedItems = [...itemsSelected, newItem];
      setItemsSelected(updatedItems);
      toast.success("Ticket added");
    }
  };

  const handleCreateBooking = async (e) => {
    e.preventDefault();
    if (itemsSelected.length === 0) {
      toast.error("Please select at least one item");
      return;
    }
    const calculateData = itemsSelected.map((item) => {
      return {
        name: item.name,
        spaceId: item.spaceId,
        activityId: item.activityId,
        date: item.date,
        time: item.time,
        duration: item.duration,
        price: item.price,
        count: item.count,
      };
    });

    const calculateDiscountRes = await dispatch(
      CalculateDiscount(calculateData)
    );
    if (calculateDiscountRes.calculateDiscount) {
      const { discountAmount, discountPercentage, initalAmount, total } =
        calculateDiscountRes.calculateDiscount;
      setTotal(total);
      const bookingData = {
        tickets: calculateData,
        spaceId: calculateData[0].spaceId,
        discountAmount,
        discountPercentage,
        initalAmount,
        status: "Active",
        total,
        specialReq,
      };
      console.log(bookingData);
      const bookingRes = await dispatch(CreateBooking(bookingData));
      if (bookingRes.createBooking) {
        window.location.href = bookingRes.createBooking.link;
      }
    }
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
                    <p>Tickets</p>
                    <span>=</span>
                    <p>{getTotalItemLength}</p>
                  </div>
                </div>
                <div className={styles.booking_details__total__item}>
                  <h3>Total</h3>
                  <div className={styles.booking_details__total__item__price}>
                    <p>NGN</p> <span> </span>
                    <p>{total}</p>
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
