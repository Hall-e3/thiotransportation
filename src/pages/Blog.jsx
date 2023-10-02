import React from "react";
import Layout from "../layout";
import { b1 } from "../constants";
import {
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Button } from "../components";

import { LinkedIn, Twitter, Facebook } from "@mui/icons-material";

export default function Blog() {
  return (
    <Layout>
      <div className="py-16 bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex flex-col items-center justify-center space-y-7">
            <h4 className="text-white font-bold text-7xl">Blog</h4>

            <p className="text-white font-normal text-sm">Home</p>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-[1240px] mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-7">
            <div className="col-span-5 border border-stroke rounded-lg">
              <div className="flex flex-col ">
                <div className="rounded-lg">
                  <img
                    src={b1}
                    alt="b1"
                    className="w-full object-contain rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col space-y-8 p-14">
                  <div className="flex flex-row items-center space-x-6">
                    <div className="flex items-center space-x-1">
                      <UserIcon className="w-5 h-5 text-primary_green" />
                      <p className="text-md font-medium text-grey_skip">
                        Theo Transportation
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="w-5 h-5 text-primary_green" />
                      <p className="text-md font-medium text-grey_skip">
                        June 4, 2023
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary_green" />
                      <p className="text-md font-medium text-grey_skip">
                        No Comments
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-8">
                    <h3 className="text-4xl font-bold hover:text-[#005bac] cursor-pointer">
                      Why Transport is Key in Logistics?
                    </h3>
                    <p className="text-md font-medium text-grey_skip">
                      Kobita mnis iste natus error sit voluptatem acycu sa mnis
                      iste nat Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in […]
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button
                      text="Read More"
                      buttonStyle="w-[30%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                      icon={
                        <div className="bg-[#005bac] p-3 rounded-md">
                          <ChevronRightIcon className="w-5 h-5 text-white" />
                        </div>
                      }
                    />
                    <div className="flex items-center space-x-3">
                      <h6>SHARE</h6>
                      <Facebook className="text-[#005bac]" />
                      <Twitter className="text-[#0693e3]" />
                      <LinkedIn className="text-primary_color" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
