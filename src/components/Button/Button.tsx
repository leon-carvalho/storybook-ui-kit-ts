import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger";
}

const Button: React.FC<IButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
