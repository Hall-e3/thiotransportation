import React from "react";

export default function Button({
  text,
  buttonStyle,
  onClick,
  icon,
  type,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${buttonStyle} text-lg`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4 justify-between px-5">
        {text && <div>{text}</div>}
        {icon && <div>{icon}</div>}
      </div>
    </button>
  );
}
