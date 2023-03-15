import React from "react";
import styles from "./button.module.scss";

const Button = ({ text, bg, onClick, type }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      <button type={type} className={bg ? bg : styles.defaultBg}>
        {text}
      </button>
    </div>
  );
};

export default Button;
