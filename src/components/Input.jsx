import React from "react";
const Input = ({ type, placeholder, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
