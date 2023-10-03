import React from "react";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Input from "./Input";
import { b1, b2, logo, truck, truck1 } from "../constants";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function SecondFooter() {
  return (
    <section className="py-30 text-white bg-[#31373f]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col space-y-25">
          <div className="flex space-x-20">
            <div className="flex flex-col space-y-8 flex-1">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="logo" className="h-10 w-10" />
                <h5 className="font-bold text-2xl">Theo Transportation</h5>
              </div>
              <p className="text-[#c7cdda] font-medium tracking-normal">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiatmnis iste na minim veniam, quis nostrud
                exercita tion ullamco laboris nisi ut aliquip ex ea commodo
              </p>
              <div className="flex items-center space-x-6">
                <Input
                  placeholder="Your email here"
                  icon={
                    <EnvelopeIcon className="w-5 h-5 text-primary_orange" />
                  }
                  styles="border rounded-md bg-white px-6"
                />
                <div className="flex items-center space-x-4">
                  <Facebook className="text-white" />
                  <Twitter className="text-white" />
                  <Instagram className="text-white" />
                  <LinkedIn className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-8 flex-none">
              <p className="font-semibold text-2xl">Recent Posts</p>
              <div className="flex items-center space-x-3">
                <img
                  src={b1}
                  alt="truck"
                  className="rounded-lg object-cover h-15 w-15"
                />
                <div>
                  <p className="font-normal text-sm">June 04, 2023</p>
                  <h5 className="text-md font-bold hover:text-primary_color cursor-pointer">
                    Why Transport Is Key In Logistics?
                  </h5>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={truck1}
                  alt="truck1"
                  className="rounded-lg object-cover h-15 w-15"
                />
                <div>
                  <p className="font-normal text-sm">June 04, 2023</p>
                  <h5 className="text-md font-bold hover:text-primary_color cursor-pointer">
                    Can You Transport Furniture In Uber?
                  </h5>
                </div>
              </div>
            </div>
            <div className=" flex flex-col space-y-8 flex-none">
              <p className="font-semibold text-2xl">Links</p>
              <div className="flex flex-row items-center space-x-6">
                <p className="font-normal text-sm ">World Travelling</p>
                <p className="font-normal text-sm">Product Delivery</p>
              </div>
              <div className="flex flex-row items-center space-x-6">
                <p className="font-normal text-sm">Logistic Support</p>
                <p className="font-normal text-sm">Transportation</p>
              </div>
              <div className="flex flex-row items-center space-x-6">
                <p className="font-normal text-sm">Train Freight</p>
                <p className="font-normal text-sm">World Travelling</p>
              </div>
              <div className="flex flex-row items-center space-x-6">
                <p className="font-normal text-sm">World Travelling</p>
                <p className="font-normal text-sm">Product Delivery</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-20">
            <div className="flex flex-col space-y-8">
              <h5 className="font-bold text-2xl">Dhaka Office</h5>

              <div className="flex items-center space-x-4 cursor-pointer">
                <MapPinIcon className="h-7 w-7" />
                <p className="font-medium text-sm">
                  22/1 Bardeshi, Amin Bazar Dhaka 1348
                </p>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <EnvelopeIcon className="h-5 w-5" />
                <p className="font-medium text-sm">
                  hello@theotransportation.com
                </p>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <PhoneIcon className="h-5 w-5" />
                <p className="font-medium text-sm">+88 01234 567 890</p>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              <h5 className="font-bold text-2xl">New York Office</h5>

              <div className="flex items-center space-x-4 cursor-pointer">
                <MapPinIcon className="h-7 w-7" />
                <p className="font-medium text-sm">
                  22/1 Bardeshi, Amin Bazar Dhaka 1348
                </p>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <EnvelopeIcon className="h-5 w-5" />
                <p className="font-medium text-sm">
                  hello@theotransportation.com
                </p>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <PhoneIcon className="h-5 w-5" />
                <p className="font-medium text-sm">+88 01234 567 890</p>
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <h5 className="font-bold text-2xl">London Office</h5>

              <div className="flex items-center space-x-4 cursor-pointer">
                <MapPinIcon className="h-7 w-7" />
                <p className="font-medium text-sm">
                  22/1 Bardeshi, Amin Bazar Dhaka 1348
                </p>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <EnvelopeIcon className="h-5 w-5" />
                <p className="font-medium text-sm">
                  hello@theotransportation.com
                </p>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <PhoneIcon className="h-5 w-5" />
                <p className="font-medium text-sm">+88 01234 567 890</p>
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <h5 className="font-bold text-2xl">Cape Town Office</h5>

              <div className="flex items-center space-x-4 cursor-pointer">
                <MapPinIcon className="h-7 w-7" />
                <p className="font-medium text-sm">
                  22/1 Bardeshi, Amin Bazar Dhaka 1348
                </p>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <EnvelopeIcon className="h-5 w-5" />
                <p className="font-medium text-sm">
                  hello@theotransportation.com
                </p>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <PhoneIcon className="h-5 w-5" />
                <p className="font-medium text-sm">+88 01234 567 890</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h4>Copyright ©2023 Transco. All Rights Reserved</h4>
            <div className="flex items-center space-x-10">
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                World Travelling
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Product Delivery
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
