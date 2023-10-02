import React from "react";
import Layout from "../layout";
import { Button } from "../components";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { person, person1, truck, truck1, truck2 } from "../constants";
import { Carousel } from "@material-tailwind/react";

export default function Home() {
  return (
    <Layout>
      <div className="py-16">
        <Carousel
          transition={{ duration: 2 }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex bg-black -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className=" bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
            <div className="max-w-[1240px] mx-auto py-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8 px-8 justify-center">
                  <h5 className="font-semibold text-2xl">
                    We are Theo Transportation
                  </h5>
                  <h2 className="font-bold text-7xl">
                    World Class Transportation Service
                  </h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>

                  <Button
                    text="Read More"
                    buttonStyle="w-[45%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                    icon={
                      <div className="bg-primary_color p-3 rounded-md">
                        <ChevronRightIcon className="w-5 h-5 text-white" />
                      </div>
                    }
                  />
                </div>
                <div>
                  <img src={truck} />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
            <div className="max-w-[1240px] mx-auto py-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8 px-8 justify-center">
                  <h5 className="font-semibold text-2xl">
                    Tansport with Theo Transportation
                  </h5>
                  <h2 className="font-bold text-7xl">Transport Safely</h2>
                  <p>
                    Experience hassle-free journeys with our efficient transport
                    solutions that prioritize your comfort.
                  </p>

                  <Button
                    text="Read More"
                    buttonStyle="w-[45%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                    icon={
                      <div className="bg-primary_color p-3 rounded-md">
                        <ChevronRightIcon className="w-5 h-5 text-white" />
                      </div>
                    }
                  />
                </div>
                <div>
                  <img src={person} />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-no-repeat bg-cover bg-gradient-to-r from-primary_green to-cyan-500 opacity-90">
            <div className="max-w-[1240px] mx-auto py-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8 px-8 justify-center">
                  <h5 className="font-semibold text-2xl">
                    Your Business Partner
                  </h5>
                  <h2 className="font-bold text-7xl">
                    Transportation Made Simple
                  </h2>
                  <p>
                    Optimize your supply chain with our streamlined
                    transporation solution reducing production costs.
                  </p>

                  <Button
                    text="Read More"
                    buttonStyle="w-[45%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                    icon={
                      <div className="bg-primary_color p-3 rounded-md">
                        <ChevronRightIcon className="w-5 h-5 text-white" />
                      </div>
                    }
                  />
                </div>
                <div>
                  <img src={person1} />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </Layout>
  );
}
