/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import "./datePicker.scss";
const DatePicker = ({ onDayClick }) => {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const handlePreviousMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
    setSelectedDay(null);
  };

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  // const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleDayClick = (day) => {
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
    setSelectedDay(selectedDate);
    let year =
      selectedDate.getFullYear() !== new Date().getFullYear()
        ? selectedDate.getFullYear()
        : "";
    let options = { day: "numeric", month: "short" };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const parts = formatter.formatToParts(selectedDate);
    let dayValue = parts.find((x) => x.type === "day").value;
    let monthValue = parts.find((x) => x.type === "month").value;
    let formattedDate = `${ordinal_suffix_of(dayValue)} ${monthValue} ${year}`;
    if (onDayClick) {
      onDayClick(formattedDate);
    }
  };

  function ordinal_suffix_of(i) {
    let j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  return (
    <div className="date-picker">
      <div className="date-picker__title"> Select Date</div>
      <div className="date-picker__header">
        <div onClick={handlePreviousMonth}>
          {" "}
          <FaCaretLeft className="previous-month-icon" />
        </div>
        <div className="date-picker__current-month">
          {date.toLocaleString("default", { month: "long" })}{" "}
          {date.getFullYear()}
        </div>
        <div onClick={handleNextMonth}>
          {" "}
          <FaCaretRight className="next-month-icon" />
        </div>
      </div>
      <div className="date-picker__body">
        {/* <div className="date-picker__days-of-week">
          {daysOfWeek.map((day) => (
            <div key={day} className="date-picker__day-of-week">
              {day}
            </div>
          ))}
        </div> */}
        <div className="date-picker__days">
          {currentMonthDays.map((day) => {
            const isPast =
              new Date() > new Date(date.getFullYear(), date.getMonth(), day);
            return (
              <div
                key={day}
                className={`date-picker__day ${
                  isPast
                    ? "date-picker__past"
                    : selectedDay && selectedDay.getDate() === day
                    ? "date-picker__picked"
                    : ""
                }`}
                onClick={() => !isPast && handleDayClick(day)}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
