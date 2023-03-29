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
  bg: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default Button;
