/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./timePicker.module.scss";

const TimePicker = ({ onTimeClick }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeOptions, setTimeOptions] = useState([
    {
      label: "09:00",
      value: "09:00",
    },
    {
      label: "10:00",
      value: "10:00",
    },
    {
      label: "11:00",
      value: "11:00",
    },
    {
      label: "12:00",
      value: "12:00",
    },
    {
      label: "13:00",
      value: "13:00",
    },
    {
      label: "14:00",
      value: "14:00",
    },
    {
      label: "15:00",
      value: "15:00",
    },
    {
      label: "16:00",
      value: "16:00",
    },
    {
      label: "17:00",
      value: "17:00",
    },
    {
      label: "18:00",
      value: "18:00",
    },
    {
      label: "19:00",
      value: "19:00",
    },
    {
      label: "20:00",
      value: "20:00",
    },
  ]);

  // useEffect(() => {
  //   const currentDate = new Date();
  //   const currentTime = new Date(
  //     currentDate.getFullYear(),
  //     currentDate.getMonth(),
  //     currentDate.getDate(),
  //     currentDate.getHours(),
  //     currentDate.getMinutes()
  //   );
  //   const endTime = new Date(currentTime.getTime() + 6 * 60 * 60 * 1000);
  //   const options = [];
  //   let time = currentTime;
  //   while (time < endTime) {
  //     const label = time.toLocaleTimeString([], {
  //       hour: "numeric",
  //       minute: "2-digit",
  //     });
  //     options.push({
  //       label,
  //       value: label,
  //       isPast: time < currentTime,
  //     });
  //     time.setTime(time.getTime() + 30 * 60 * 1000);
  //   }
  //   setTimeOptions(options);
  // }, []);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    if (onTimeClick) {
      onTimeClick(time);
    }
  };

  return (
    <div className={styles["time_picker"]}>
      <p>Start Time</p>
      <div className={styles.time_picker__timeWrap}>
        {timeOptions.map(({ label, value }) => (
          <div
            key={value}
            className={`${styles.time_picker__time} ${
              selectedTime === value ? styles.time_picker__selected : ""
            }`}
            onClick={() => handleTimeClick(value)}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
