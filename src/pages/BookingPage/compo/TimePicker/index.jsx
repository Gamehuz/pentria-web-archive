/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./timePicker.module.scss";

const TimePicker = ({ onTimeClick }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const currentTime = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes()
    );
    const endTime = new Date(currentTime.getTime() + 6 * 60 * 60 * 1000);
    const options = [];
    let time = currentTime;
    while (time < endTime) {
      const label = time.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });
      options.push({
        label,
        value: label,
        isPast: time < currentTime,
      });
      time.setTime(time.getTime() + 30 * 60 * 1000);
    }
    setTimeOptions(options);
  }, []);

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
        {timeOptions.map(({ label, value, isPast }) => (
          <div
            key={value}
            className={`${styles.time_picker__time} ${
              isPast
                ? styles.time_picker__past
                : selectedTime === value
                ? styles.time_picker__selected
                : ""
            }`}
            onClick={() => !isPast && handleTimeClick(value)}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
