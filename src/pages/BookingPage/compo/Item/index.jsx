/* eslint-disable react/prop-types */
import Button from "@/components/Button";
import { useState } from "react";
import { toast } from "react-hot-toast";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
import styles from "./Item.module.scss";

const Item = ({ onItemDataChange, item }) => {
  const [dateSelected, setDateSelected] = useState();
  const [timeSelected, setTimeSelected] = useState();
  const [numOfTickets, setNumOfTickets] = useState(1);
  const [duration, setDuration] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "numberOfTickets") {
      setNumOfTickets(value);
    } else if (name === "duration") {
      setDuration(value);
    }
    // Call the onItemDataChange function with the updated data
    // onItemDataChange(dateSelected, timeSelected, numOfTickets, duration);
  };

  const dayPicked = (day) => {
    setDateSelected(day);
    // Call the onItemDataChange function with the updated data
    // onItemDataChange(day, timeSelected, numOfTickets, duration);
  };

  const timePicked = (time) => {
    setTimeSelected(time);
    // Call the onItemDataChange function with the updated data
    // onItemDataChange(dateSelected, time, numOfTickets, duration, item);
  };

  const handleAddTicket = () => {
    // Call the onItemDataChange function with the updated data
    if (dateSelected && timeSelected && numOfTickets && duration) {
      onItemDataChange(
        dateSelected,
        timeSelected,
        numOfTickets,
        duration,
        item
      );
    } else {
      toast.error("Please select appropriate date and time");
    }
  };

  return (
    <div className={styles.Item}>
      <section className={styles.item_details}>
        <h3>Item</h3>
        <div className={styles.item_text}>
          <div className={styles.item_imgWrap}>
            <img src={item?.image} alt="" />
          </div>
          <div className={styles.item_text_properties}>
            <h5>
              {item?.currency === "NGN"
                ? "₦"
                : item?.currency === "USD"
                ? "$"
                : "£"}
              {item?.price}/<span>{item?.duration}</span>
            </h5>
            <p>{item?.name}</p>
            <p>Number of Tickets</p>
            <input
              type="number"
              placeholder="enter tickets number"
              name="numberOfTickets"
              value={numOfTickets}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </section>
      <section className={styles.dateWrap}>
        <DatePicker onDayClick={(e) => dayPicked(e)} />
        <div className={styles.dateWrap__time}>
          <TimePicker onTimeClick={(e) => timePicked(e)} />
          <div className={styles.dateWrap__time__duration}>
            <h3>Duration</h3>
            <div className={styles.dateWrap__time__duration__input}>
              <input
                type="number"
                placeholder="enter duration"
                name="duration"
                value={duration}
                onChange={(e) => handleChange(e)}
              />
              <p>mins</p>
            </div>
          </div>
        </div>
      </section>
      <Button type="button" text="Add Ticket" onClick={handleAddTicket} />
    </div>
  );
};

export default Item;
