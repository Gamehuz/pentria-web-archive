import React from "react";
import styles from "./inputfield.module.scss";
const InputField = ({
  placeholder,
  type,
  value,
  name,
  onChange,
  width,
  radius,
  border,
  bg,
}) => {
  return (
    <div
      className={`${styles.inputField} ${styles[width]} ${styles[radius]} ${styles[bg]} ${styles[border]}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
