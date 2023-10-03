import React from "react";

export default function SelectField({
  label,
  type,
  name,
  placeholder,
  value,
  required,
  onChange,
  styles,
  children,
  icon,
  onFocus,
  error,
}) {
  return (
    <div className={`flex flex-col justify-center flex-1`}>
      <label className="block mb-2 lg:text-[13px] 2xl:text-[14px] font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      <div className="flex flex-col space-y-1">
        <div
          className={`flex items-center ${styles} ${
            error ? "border-red-900" : " border-stroke"
          }`}
        >
          <select
            type={type}
            name={name}
            value={value}
            className={`outline-none text-gray-900 text-sm w-full h-full bg-white block`}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            onFocus={onFocus}
          >
            {children}
          </select>
          {icon && icon}
        </div>
        {error && <p className="text-red-900 text-xs">{error}</p>}
      </div>
    </div>
  );
}
