import React from "react";

export default function CustomStep({
  rightTitle,
  rightSubtitle,
  leftTitle,
  leftSubtitle,
}) {
  return (
    <div className="flex space-x-4 sm:w-[50%]">
      <div className="flex flex-col">
        <p className="text-grey_skip text-sm mb-1">{leftTitle}</p>
        <p className="text-grey_skip text-sm">{leftSubtitle}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary_orange" />
        <div className="w-1 h-20 bg-primary_orange" />
      </div>
      <div>
        <div className="flex flex-col items-start">
          {rightTitle}
          <p className="text-sm mt-1">{rightSubtitle}</p>
        </div>
      </div>
    </div>
  );
}
