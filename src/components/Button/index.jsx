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
<<<<<<< HEAD
  bg: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
}
=======
  bg: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
>>>>>>> cda0440ec7e90b26b920d843f736f6086cfc642e

export default Button;
