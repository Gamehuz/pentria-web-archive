import React from "react";
import styles from "./button.module.scss";

const Button = ({ text, bg, onClick, type }) => {
  return (
    <div
      className={`${styles.button} ${bg ? styles[bg] : styles.defaultBg}`}
      onClick={onClick}
    >
      <button type={type}>{text}</button>
    </div>
  );
};

export default Button;
