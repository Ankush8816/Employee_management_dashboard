import React from "react";
import './button.css'

const Button = ({ text, onClickfunc }) => {
  return (
    <button onClick={onClickfunc} className="btn">
      {text}
    </button>
  );
};

export default Button;