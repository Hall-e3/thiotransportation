import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Input from "./Input";
import { images } from "../data";
import { staff2, theo_white_orange_logo, trackie } from "../constants/originals";

export default function Footer() {
  return (
    <section className="w-full text-white pt-40 pb-10 bg-[#31373f] relative px-4 lg:px-0">
      <div className="w-[90%] -top-40 right-5 md:right-10 lg:right-[15%]  lg:w-[70%] absolute py-10 px-10 lg:-top-30   lg:max-w-[1440px] lg:mx-auto rounded-xl bg-gradient-to-r text-white lg:space-x-8 from-primary_orange  to-primary_orange flex md:flex-row flex-col justify-between lg:px-20 lg:py-15 items-center">
        <div className="flex flex-col space-y-5 flex-1">
          <h5 className="text-2xl font-bold text-white">Get regular updates</h5>
          <h3 className="font-bold text-4xl lg:text-5xl text-white">
            Subscribe Now
          </h3>
          <p className="font-normal text-lg text-white">
            Ut enim ad minim veniam, quis nostruyd
          </p>
        </div>
        <div className="flex-1">
          <Input
            placeholder="Your email here"
            icon={<EnvelopeIcon className="w-5 h-5 text-primary_orange" />}
            styles="border rounded-md bg-white px-6"
          />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto  h-full flex flex-col space-y-12 lg:space-y-30 pt-15 lg:pt-30">
        <div className="w-full flex flex-col space-y-12 lg:space-y-0 lg:flex-row  lg:space-x-8">
          <div className="flex flex-col md:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-col justify-between flex-1">
              <div className="flex flex-col space-y-3 md:space-y-5">
                <div className="flex items-center space-x-3">
                  <img
                    src={theo_white_orange_logo}
                    alt="logo"
                    className="h-20 w-20"
                  />
                  <h5 className="font-bold text-3xl">Theo Transport</h5>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer">
                  <MapPinIcon className="h-5 w-5" />
                  <p className="font-normal lg:text-lg text-[#c7cdda]">
                    22/1 Bardeshi, Amin Bazar Dhaka 1348
                  </p>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer">
                  <EnvelopeIcon className="h-5 w-5" />
                  <p className="ffont-normal lg:text-lg text-[#c7cdda]">
                    hello@theotransportation.com
                  </p>
                </div>
                <div className="flex items-center space-x-4 cursor-pointer">
                  <PhoneIcon className="h-5 w-5" />
                  <p className="font-normal lg:text-lg text-[#c7cdda]">
                    +88 01234 567 890
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-1 lg:space-x-8">
              <div className="flex-1 flex flex-col space-y-3 md:space-y-5">
                <p className="font-bold text-2xl">Links</p>
                <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
                  World Travelling
                </p>
                <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
                  Product Delivery
                </p>
                <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
                  Logistic Support
                </p>
                <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
                  Transportation
                </p>
                <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
                  Train Freight
                </p>
              </div>
              <div className="flex-1 flex flex-col space-y-3 md:space-y-5">
                <p className="font-bold text-2xl">Help</p>
                <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
                  Marketing
                </p>
                <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
                  Warehouse
                </p>
                <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
                  Air Freight
                </p>
                <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
                  Sea Freight
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex-1 flex flex-col space-y-5">
              <p className="font-bold text-2xl">Latest Posts</p>
              <div className="flex items-center space-x-3">
                <img
                  src={staff2}
                  alt="truck"
                  className="rounded-lg object-cover h-15 w-15"
                />
                <div>
                  <p className="font-normal text-md text-[#c7cdda] hover:text-primary_color cursor-pointer">
                    June 04, 2023
                  </p>
                  <h5 className="font-bold text-md hover:text-primary_color cursor-pointer">
                    Why Transport Is Key In Logistics?
                  </h5>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src={trackie}
                  alt="truck1"
                  className="rounded-lg object-cover h-15 w-15"
                />
                <div>
                  <p className="font-normal text-md text-[#c7cdda] hover:text-primary_color cursor-pointer">
                    June 04, 2023
                  </p>
                  <h5 className="font-bold text-md hover:text-primary_color cursor-pointer">
                    Can You Transport Furniture In Uber?
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-5">
              <p className="font-bold text-2xl">Instagram</p>
              <div className="flex flex-wrap gap-4">
                {images.map((img) => (
                  <img
                    key={img.id}
                    src={img.image}
                    alt={img.image}
                    className="object-cover h-20 w-20"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between items-center">
          <h4>Copyright ©2023 Transco. All Rights Reserved</h4>
          <div className="flex items-center space-x-5 md:space-x-10">
            <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              World Travelling
            </p>
            <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Product Delivery
            </p>
            <p className="font-normal lg:text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Marketing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
