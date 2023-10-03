import React from "react";
import Layout from "../layout";
import {
  ChevronRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Button, Footer, Input, TextArea } from "../components";

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
          <div className="rounded-md flex flex-1 justify-center flex-col space-y-6 p-10 border bg-blue-gray-50 border-stroke relative">
            <div className="bg-primary_green rounded-full p-7 absolute -top-10 left-[40%]">
              <MapPinIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <h6 className="text-xl font-bold">Address</h6>
              <p className="text-lg">20, Bordeshi,New York,US</p>
            </div>
          </div>
          <div className="rounded-md flex flex-1 justify-center flex-col space-y-6 p-10 border bg-blue-gray-50 border-stroke relative">
            <div className="bg-primary_green rounded-full p-7 absolute -top-10 left-[40%]">
              <MapPinIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <h6 className="text-xl font-bold">Address</h6>
              <p className="text-lg">20, Bordeshi,New York,US</p>
            </div>
          </div>
          <div className="rounded-md flex flex-1 justify-center flex-col space-y-6 p-10 border bg-blue-gray-50 border-stroke relative">
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
      <div className="pt-16 pb-60">
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
      <Footer />
    </Layout>
  );
}
