import React from "react";
import Divider from "./Divider";

export default function CustomStep({ rightTitle, leftTitle }) {
  return (
    <div className="flex relative">
      <div className="flex flex-col flex-1">
        <div className="px-20">{leftTitle}</div>
      </div>
      <Divider styles="my-2 absolute w-[8%] left-132.5  -mx-1" />
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-grey_skip" />
        <div className="w-1 h-90 bg-grey_skip" />
      </div>
      <Divider styles="my-2  absolute w-[8%] right-132.5 -mx-1" />
      <div className="flex-1 ">
        <div className="flex flex-col  px-20 ">{rightTitle}</div>
      </div>
    </div>
  );
}
