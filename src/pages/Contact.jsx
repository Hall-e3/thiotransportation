import React from "react";
import Layout from "../layout";
import {
  ChevronRightIcon,
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Button, Input, TextArea } from "../components";
import { logo, truck, truck1 } from "../constants";

export default function Contact() {
  return (
    <Layout>
      <div className="py-16 bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex flex-col items-center justify-center space-y-7">
            <h4 className="text-white font-bold text-7xl">Contact Us</h4>

            <p className="flex items-center space-x-3">
              <p className="text-white font-normal text-sm">Home</p>
              <ChevronRightIcon className="w-4 h-4 text-white" />
              <p className="text-white font-normal text-sm">Contact Us</p>
            </p>
          </div>
        </div>
      </div>
      <div className="py-40">
        <div className="max-w-[1240px] mx-auto flex space-x-12  items-center">
          <div className="rounded-md flex flex-1 justify-center flex-col space-y-6 p-10 border border-stroke relative">
            <div className="bg-primary_green rounded-full p-7 absolute -top-10 left-[40%]">
              <MapPinIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <h6 className="text-xl font-bold">Address</h6>
              <p className="text-lg">20, Bordeshi,New York,US</p>
            </div>
          </div>
          <div className="rounded-md flex flex-1 justify-center flex-col space-y-6 p-10 border border-stroke relative">
            <div className="bg-primary_green rounded-full p-7 absolute -top-10 left-[40%]">
              <MapPinIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <h6 className="text-xl font-bold">Address</h6>
              <p className="text-lg">20, Bordeshi,New York,US</p>
            </div>
          </div>
          <div className="rounded-md flex flex-1 justify-center flex-col space-y-6 p-10 border border-stroke relative">
            <div className="bg-primary_green rounded-full p-7 absolute -top-10 left-[40%]">
              <MapPinIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <h6 className="text-xl font-bold">Address</h6>
              <p className="text-lg">20, Bordeshi,New York,US</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-[1240px] mx-auto flex justify-center">
          <div className="w-full flex flex-col justify-center space-y-8 px-30">
            <h3 className="text-5xl font-bold text-center">
              Send Us A Message
            </h3>
            <div className="border border-stroke rounded-md px-20 py-15 space-y-8">
              <div className="flex space-x-5">
                <Input
                  placeholder="Your Name"
                  styles="border rounded-md flex-1"
                />
                <Input
                  placeholder="Your Email*"
                  styles="border rounded-md flex-1"
                />
              </div>
              <div className="flex space-x-5">
                <Input placeholder="Your Phone" styles="border rounded-md" />
                <Input placeholder="Subject" styles="border rounded-md" />
              </div>
              <div>
                <TextArea
                  rows={10}
                  placeholder="Start writing your message"
                  styles="border rounded-md"
                />
              </div>
              <Button
                text="Submit Now"
                buttonStyle="w-[30%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                icon={
                  <div className="bg-primary_color p-3 rounded-md">
                    <ChevronRightIcon className="w-5 h-5 text-white" />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <section className=" text-white py-16 bg-[#54595f] ">
        <div className="max-w-[1240px] mx-auto  h-full flex flex-col space-y-30">
          <div className="flex space-x-20">
            <div className="flex flex-col justify-between flex-1">
              <div className="flex flex-col space-y-8">
                <div className="flex items-center space-x-3">
                  <img src={logo} alt="card" className="h-10 w-10" />
                  <h5 className="font-bold text-3xl">Theo Transportation</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer">
                  <MapPinIcon className="h-5 w-5" />
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
            <div className="flex-none flex flex-col space-y-8">
              <p className="font-semibold text-lg">Links</p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                World Travelling
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Product Delivery
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Logistic Support
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Transportation
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Train Freight
              </p>
            </div>
            <div className="flex-none flex flex-col space-y-8">
              <p className="font-semibold text-lg">Help</p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Marketing
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Warehouse
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Air Freight
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Sea Freight
              </p>
            </div>
            <div className="flex-1 flex flex-col space-y-8">
              <p className="font-semibold text-lg">Latest Posts</p>
              <div className="flex items-center space-x-3">
                <img
                  src={truck}
                  className="rounded-lg object-contain h-15 w-15"
                />
                <div>
                  <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                    June 04, 2023
                  </p>
                  <h5 className="font-normal text-sm hover:underline hover:underline-offset-1">
                    Why Transport Is Key In Logistics?
                  </h5>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={truck1}
                  className="rounded-lg object-contain h-15 w-15"
                />
                <div>
                  <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                    June 04, 2023
                  </p>
                  <h5 className="font-normal text-sm hover:underline hover:underline-offset-1">
                    Can You Transport Furniture In Uber?
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-8">
              <p className="font-semibold text-lg">Instagram</p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                GitHub
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                LinkedIn
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                YouTube
              </p>
              <p className="font-normal text-sm hover:underline hover:underline-offset-1">
                Twitter
              </p>
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
      </section>
    </Layout>
  );
}
