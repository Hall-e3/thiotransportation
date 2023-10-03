import React from "react";
import Layout from "../layout";
import { transport } from "../constants";
import { Button } from "../components";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { cards } from "../data";

export default function Services() {
  return (
    <Layout>
      <div className="py-16 bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex flex-col items-center justify-center space-y-7">
            <h4 className="text-white font-bold text-7xl">Services</h4>

            <p className="flex items-center space-x-3">
              <p className="text-white font-normal text-sm">Home</p>
              <ChevronRightIcon className="w-4 h-4 text-white" />
              <p className="text-white font-normal text-sm">Services</p>
            </p>
          </div>
        </div>
      </div>
      <div className="py-30">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition">
            {cards.map((card) => (
              <div
                key={card.id}
                className="group flex duration-300 ease-in hover:-translate-y-3 flex-col space-y-8 border border-stroke rounded-lg px-14 py-10 hover:bg-gradient-to-r from-cyan-500 to-primary_green"
              >
                <div className="flex items-center space-x-4">
                  <div className="group-hover:bg-gradient-to-r w-[30%] from-red-500 to-primary_orange p-4 rounded-lg bg-primary_color">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full transition-transform transform group-hover:rotate-180"
                    />
                  </div>
                  <h5 className="font-bold text-xl group-hover:text-white">
                    {card.title}
                  </h5>
                </div>
                <div className="border border-primary_green group-hover:border-white" />
                <p className="group-hover:text-white text-md text text-grey_skip">
                  {card.description}
                </p>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary_orange p-3 rounded-full">
                    <ChevronRightIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-bold group-hover:text-white">Read More</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-30 bg-[#393d48]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex items-center px-4 space-x-8">
            <div className="flex flex-col space-y-4 flex-1">
              <h5 className="text-primary_orange font-bold text-3xl">
                How it works
              </h5>
              <h3 className="font-bold text-5xl text-white leading-normal">
                We <span className="text-primary_green">Make</span> &{" "}
                <span className="text-primary_green">Keep</span> it{" "}
                <span className="text-primary_green">Simple</span> For You
              </h3>
            </div>
            <p className="flex-1 text-[#c7cdda] font-medium tracking-normal">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiatmnis iste na minim veniam, quis nostrud
              exercita tion ullamco laboris nisi ut aliquip ex ea commodo
            </p>
          </div>
          <div className="">
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
