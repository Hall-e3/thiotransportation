import React from "react";

export default function CustomStep({ rightTitle, leftTitle }) {
  return (
    <div className="flex space-x-4">
      <div className="flex flex-col flex-1">
        <div className="px-20">{leftTitle}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-grey_skip" />
        <div className="w-1 h-20 bg-grey_skip" />
      </div>
      <hr className="bg-grey_skip"/>
      <div className="flex-1 ">
        <div className="flex flex-col  px-20">{rightTitle}</div>
      </div>
    </div>
  );
}
