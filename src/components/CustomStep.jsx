import React from "react";
import Divider from "./Divider";

export const CustomStep = ({ rightTitle, leftTitle }) => {
  return (
    <div className="flex flex-col lg:flex-row relative">
      <div className="flex flex-col flex-1">
        <div className="px-20">{leftTitle}</div>
      </div>
      <Divider styles="my-2 absolute w-[8%] left-132.5  -mx-1" />
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full lg:bg-[#dde4f6] bg-primary_orange" />
        <div className="w-1 h-15 lg:h-90 bg-[#dde4f6]" />
        <div className="w-4 h-4 rounded-full lg:bg-[#dde4f6] bg-primary_orange" />
      </div>
      <Divider styles="my-2  absolute w-[8%] right-132.5 -mx-1" />
      <div className="flex-1 ">
        <div className="flex flex-col  px-20 ">{rightTitle}</div>
      </div>
    </div>
  );
};

export const CustomStepSmallDevice = ({ bottom, top }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <div className="w-full flex items-center justify-center">{top}</div>
      <div className="flex flex-col items-center">
        <div className="w-1 h-10 lg:h-90 bg-[#dde4f6]" />
        <div className="w-4 h-4 rounded-full lg:bg-[#dde4f6] bg-primary_orange" />
        <div className="w-1 h-10 lg:h-90 bg-[#dde4f6]" />
      </div>
      <div className="w-full">{bottom}</div>
    </div>
  );
};
