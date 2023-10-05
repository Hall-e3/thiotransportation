import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { reviews } from "../data";

export default function Testimonials() {
  return (
    <div className="py-15 sm:py-20 md:py-40 px-4 sm:px-20 md:px-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 transition">
          <div className="md:col-span-2">
            <div className="flex flex-col  space-y-8">
              <div className="flex flex-col space-y-8">
                <h5 className="text-primary_orange font-bold text-xl md:text-2xl lg:text-3xl">
                  Testimonials
                </h5>
                <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                  What<span className="text-[#1eae98]"> Clients</span> it About
                  <span className="text-[#1eae98]"> Us</span>
                </h3>
              </div>
              <p className="text-[#c7cdda] font-medium tracking-normal">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiatmnis iste na minim veniam, quis nostrud
                exercita tion ullamco laboris nisi ut aliquip ex ea commodo
              </p>

              <div className="flex space-x-8 items-center">
                <div
                  className="group hover:bg-[#ff6731] rounded-full p-5 border border-stroke transition "
                  onClick={() => {}}
                >
                  <ChevronLeftIcon className="text-[#ff6731] group-hover:text-white  w-5 h-5 duration-300 ease-in" />
                </div>
                <div
                  className="group hover:bg-[#ff6731] rounded-full p-5 border border-stroke transition"
                  onClick={() => {}}
                >
                  <ChevronRightIcon className="text-[#ff6731] group-hover:text-white w-5 h-5 duration-300 ease-in" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 overflow-hidden">
            <div className="grid grid-cols-1 gap-4">
            {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white shadow-lg border border-stroke rounded-lg md:w-[50%]  flex flex-col space-y-8"
                  >
                    {rev.icon}
                    <p className="text-grey_skip">{rev.description}</p>
                    <div className="flex items-center space-x-5">
                      <img
                        src={rev.image}
                        alt={rev.user}
                        className="object-cover w-15 h-15 rounded-full"
                      />
                      <div className="flex flex-col justify-center">
                        <h6 className="font-bold text-xl">{rev.user}</h6>
                        <p className="font-light text-grey_skip">{rev.job}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
