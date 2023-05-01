/* eslint-disable react/prop-types */
import styles from "./inputfield.module.scss";
const InputField = ({
  setTogglePassword,
  placeholder,
  type,
  value,
  name,
  onChange,
  disabled,
  required,
}) => {
  return (
    <div className={styles.inputField}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        required={required}
      />
      {name === "password" && (
        <span onClick={setTogglePassword}>
          {type === "password" ? (
            <i className="fas fa-eye"></i>
          ) : (
            <i className="fa fa-eye-slash"></i>
          )}
        </span>
      )}
    </div>
  );
};

export default InputField;
