import React from "react";
import style from "./Input.module.scss";
export const Input = ({ text, handleChange }) => {
  return (
    <input
      type="text"
      className={style.input}
      value={text}
      onChange={handleChange}
    />
  );
};
