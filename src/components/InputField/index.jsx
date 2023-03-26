import React from "react";
import styles from "./inputfield.module.scss";
const InputField = ({ placeholder, type, value, name, onChange, disabled }) => {
  return (
    <div className={styles.inputField}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
