import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span style={{ backgroundColor: color }} className="checkmark"></span>
        {title}
      </label>
    </>
  );
};

export default Input;
