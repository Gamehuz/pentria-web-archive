/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ classes, text, onClick, type }) => {
  return (
    <div className={`button ${classes}`} onClick={onClick}>
      <button type={type}>{text}</button>
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
