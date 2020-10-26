import React, { InputHTMLAttributes } from "react";
import "./Input.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeVariant?: "small" | "medium" | "large";
}

const Input: React.FC<IInputProps> = ({ sizeVariant = "medium", ...rest }) => {
  return <input className={`input ${sizeVariant}`} {...rest} />;
};

export default Input;
