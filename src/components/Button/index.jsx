/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
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

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
