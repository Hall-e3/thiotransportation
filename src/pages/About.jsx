import React from "react";
import Layout from "../layout";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { boxes, delivery_courier, img, img3 } from "../constants";
import { Progress, Typography } from "@material-tailwind/react";
import { Button } from "../components";

export default function About() {
  return (
    <Layout>
      <div className="py-16 bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex flex-col items-center justify-center space-y-7">
            <h4 className="text-white font-bold text-7xl">About</h4>

            <p className="flex items-center space-x-3">
              <p className="text-white font-normal text-sm">Home</p>
              <ChevronRightIcon className="w-4 h-4 text-white" />
              <p className="text-white font-normal text-sm">About Us</p>
            </p>
          </div>
        </div>
      </div>
      <div className="py-30">
        <div className="max-w-[1240px] mx-auto">
          <div className="w-full flex">
            <div className="flex flex-1">
              <img src={img3} alt="behind" />
            </div>
            <div className="flex flex-1">
              <div className="flex flex-col space-y-6 pl-20">
                <h5 className="text-primary_orange font-bold text-3xl">
                  About Theo Transportation
                </h5>
                <h3 className="font-bold text-5xl text-black leading-tight">
                  World Class <span className="text-[#1eae98]">Logistic</span>{" "}
                  and <span className="text-[#1eae98]">Transportation</span>
                </h3>
                <p className="flex-1 text-[#c7cdda] font-medium tracking-normal">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiatmnis iste natus error sit voluptatem
                  accusa mnis iste natus error sit voluptatem accusa nulla
                  pariatur.
                </p>

                <div className="flex items-center">
                  <div className="flex items-center space-x-6">
                    <img src={boxes} alt="boxes" className="mb-8" />
                    <div className="flex flex-col space-y-2">
                      <h5 className="font-bold text-lg text-black">
                        24 Hours Service
                      </h5>
                      <p className="text-grey_skip">
                        Sit voluptatem accusa nulla pariatur.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <img src={delivery_courier} alt="boxes" className="mb-8" />
                    <div className="flex flex-col space-y-2">
                      <h5 className="font-bold text-lg text-black">
                        Expert Team
                      </h5>
                      <p className="text-grey_skip">
                        Dit voluptatem accusa nulla pariatur.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center space-x-10">
                  <div className="flex flex-col space-y-8 flex-1 py-4">
                    <div className="w-full">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <Typography color="primary_green" variant="h6">
                          Service
                        </Typography>
                        <Typography color="primary_green" variant="h6">
                          50%
                        </Typography>
                      </div>
                      <Progress value={50} />
                    </div>
                    <div className="w-full">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <Typography color="primary_green" variant="h6">
                          Marketing
                        </Typography>
                        <Typography color="primary_green" variant="h6">
                          80%
                        </Typography>
                      </div>
                      <Progress value={80} />
                    </div>
                    <div className="w-full">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <Typography color="primary_green" variant="h6">
                          Support
                        </Typography>
                        <Typography color="primary_green" variant="h6">
                          90%
                        </Typography>
                      </div>
                      <Progress value={90} />
                    </div>
                  </div>
                  <div className="">
                    <img
                      src={img}
                      alt="image"
                      className="rounded-lg h-50 w-40"
                    />
                  </div>
                </div>
                <Button
                  text="Read More"
                  buttonStyle="w-[40%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                  icon={
                    <div className="bg-[#005bac] p-3 rounded-md">
                      <ChevronRightIcon className="w-5 h-5 text-white" />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
