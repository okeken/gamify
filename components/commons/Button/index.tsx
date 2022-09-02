import React, { ReactElement } from "react";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}
const Button = ({ onClick, disabled, className, children }: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`p-2 px-4 border border-yellow-600 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
