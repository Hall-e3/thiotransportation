import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { reviews } from "../data";
import { Carousel } from "@material-tailwind/react";

export default function Testimonials() {
  return (
    <div className="py-15 sm:py-20 md:py-40 px-4 sm:px-20 md:px-10 bg-[#f3f7fc]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 transition relative">
          <div className="md:col-span-2">
            <div className="flex flex-col  space-y-8">
              <div className="flex flex-col space-y-8">
                <h5 className="text-primary_orange font-bold text-xl md:text-2xl lg:text-3xl">
                  Testimonials
                </h5>
                <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                  What<span className="text-primary_color"> Clients</span> it
                  About
                  <span className="text-primary_color"> Us</span>
                </h3>
              </div>
              <p className="text-[#c7cdda] font-medium tracking-normal">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiatmnis iste na minim veniam, quis nostrud
                exercita tion ullamco laboris nisi ut aliquip ex ea commodo
              </p>

              <div className="md:flex space-x-8 items-center hidden">
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
          <div className="md:col-span-3">
            <div className="flex h-full">
              <Carousel
                className=""
                transition={{ duration: 2 }}
                prevArrow={({ handlePrev }) => {}}
                nextArrow={({ handleNext }) => {}}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-[45%] right-4 z-20 md:flex flex-col gap-y-4">
                    {new Array(length).fill("").map((_, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`rounded-full p-1 ${
                          activeIndex === i && "border border-primary_orange"
                        }`}
                      >
                        <div className="h-3 w-3 rounded-full bg-grey" />
                      </div>
                    ))}
                  </div>
                )}
              >
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white shadow-lg rounded-lg p-10 flex flex-col space-y-8 m-12"
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
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
