/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ classes, text, to, onClick, type }) => {
  return (
    <div className={`btn ${classes}`} onClick={onClick}>
      {type ? <button type={type}>{text}</button> : <Link to={to}>{text}</Link>}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
