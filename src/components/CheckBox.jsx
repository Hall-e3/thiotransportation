import React from "react";

export default function CheckBox({
  label,
  name,
  type,
  value,
  onChange,
  checked,
  left,
  right,
}) {
  return (
    <div className="flex space-x-4 items-center">
      {left && (
        <label className="ml-2 lg:text-[13px] 2xl:text-[14px] font-medium text-grey_skip">
          {label}
        </label>
      )}
      <div className="flex items-center h-5">
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          checked={checked}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        />
      </div>
      {right && (
        <label className="ml-2 lg:text-[13px] 2xl:text-[14px] font-medium text-grey_skip">
          {label}
        </label>
      )}
    </div>
  );
}
