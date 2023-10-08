import React from "react";

export default function Input({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  icon,
  styles,
  disabled,
  error,
  onFocus,
  required,
}) {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <label className="block mb-2 lg:text-[13px] 2xl:text-[14px] font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      </div>
      <div className="flex flex-col space-y-1">
        <div
          className={`flex items-center ${styles} ${
            error ? "border-red-900" : " border-stroke"
          }`}
        >
          <input
            type={type}
            name={name}
            value={value}
            onFocus={onFocus}
            className={`h-full outline-none rounded text-gray-900 text-sm py-5 px-3 ${
              icon ? "mr-4" : ""
            }  block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            required={required}
          />
          {icon && icon}
        </div>
        {error && <p className="text-red-900 text-xs">{error}</p>}
      </div>
    </div>
  );
}
