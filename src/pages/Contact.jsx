import React from "react";
import Layout from "../layout";
import { ChevronRightIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Button, Footer, Input, TextArea } from "../components";

export default function Contact() {
  return (
    <Layout>
      <div className="py-16 bg-no-repeat bg-cover bg-gradient-to-r from-primary_color to-primary_green opacity-90">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex flex-col items-center justify-center space-y-7">
            <h4 className="text-white font-bold text-5xl md:text-6xl lg:text-6xl 2xl:text-7xl">
              Contact Us
            </h4>

            <p className="flex items-center space-x-3">
              <p className="text-white font-normal text-sm">Home</p>
              <ChevronRightIcon className="w-4 h-4 text-white" />
              <p className="text-white font-normal text-sm">Contact Us</p>
            </p>
          </div>
        </div>
      </div>
      <div className="py-30 md:py-40 px-4 md:px-10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8">
          <div className="w-full rounded-md flex lg:flex-1 justify-center flex-col space-y-6 p-10 border bg-blue-gray-50 border-stroke relative">
            <div className="bg-primary_color rounded-full flex items-center justify-center h-20 w-20 absolute -top-10 left-[40%] right-[40%] md:right-[50%] md:left-[40%]">
              <MapPinIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <h6 className="text-xl font-bold">Address</h6>
              <p className="text-lg">20, Bordeshi,New York,US</p>
            </div>
          </div>
          <div className="w-full rounded-md flex lg:flex-1 justify-center flex-col space-y-6 p-10 border bg-blue-gray-50 border-stroke relative">
            <div className="bg-primary_color rounded-full flex items-center justify-center h-20 w-20 absolute -top-10 left-[40%] right-[40%] md:right-[45%] md:left-[40%]">
              <MapPinIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <h6 className="text-xl font-bold">Address</h6>
              <p className="text-lg">20, Bordeshi,New York,US</p>
            </div>
          </div>
          <div className="w-full rounded-md flex lg:flex-1 justify-center flex-col space-y-6 p-10 border bg-blue-gray-70 border-stroke relative">
            <div className="bg-primary_color rounded-full flex items-center justify-center h-20 w-20 absolute -top-10 left-[40%] right-[40%] md:right-[47%] md:left-[40%]">
              <MapPinIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col space-y-4 items-center">
              <h6 className="text-xl font-bold">Address</h6>
              <p className="text-lg">20, Bordeshi,New York,US</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pt-10 pb-60 px-4 md:px-0">
        <div className="max-w-[1240px] mx-auto flex justify-center">
          <div className="w-full flex flex-col justify-center space-y-8 md:px-10 lg:px-30">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Send Us A Message
            </h3>
            <div className="border border-stroke rounded-md px-4 py-6 lg:px-20 lg:py-15 md:space-y-4 lg:space-y-8 space-y-8">
              <div className="flex lg:flex-row flex-col lg:space-x-5 md:space-y-4 lg:space-y-0">
                <Input
                  placeholder="Your Name"
                  styles="border rounded-md flex-1"
                />
                <Input
                  placeholder="Your Email*"
                  styles="border rounded-md flex-1"
                />
              </div>
              <div className="flex lg:flex-row flex-col lg:space-x-5 md:space-y-4 lg:space-y-0">
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
                buttonStyle="lg:w-[30%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
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
