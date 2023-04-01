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
  bg: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
