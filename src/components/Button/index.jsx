/* eslint-disable react/prop-types */
import React from "react";
import styles from "./button.module.scss";
import PropTypes from"prop-types"

const Button = ({ text, bg, onClick, type }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      <button type={type} className={bg ? bg : styles.defaultBg}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button;
