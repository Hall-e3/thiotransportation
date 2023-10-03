import React from "react";
import { b1, logo, truck, truck1 } from "../constants";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Input from "./Input";

export default function Footer() {
  return (
    <section className="w-full text-white pt-70 pb-10 bg-[#31373f] relative">
      <div className="w-[65%] absolute -top-30 left-[17.5%]  max-w-[1440px] mx-auto rounded-lg bg-gradient-to-r text-white space-x-8 from-primary_orange  to-primary_orange flex justify-between px-20 py-15 items-center">
        <div className="flex flex-col space-y-5 flex-1">
          <h5 className="text-2xl font-bold text-white">Get regular updates</h5>
          <h3 className="font-bold text-5xl text-white">Subscribe Now</h3>
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
      <div className="max-w-[1240px] mx-auto  h-full flex flex-col space-y-30">
        <div className="flex space-x-15">
          <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="logo" className="h-10 w-10" />
                <h5 className="font-bold text-3xl">Theo Transportation</h5>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <MapPinIcon className="h-5 w-5" />
                <p className="font-normal text-lg text-[#c7cdda]">
                  22/1 Bardeshi, Amin Bazar Dhaka 1348
                </p>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <EnvelopeIcon className="h-5 w-5" />
                <p className="ffont-normal text-lg text-[#c7cdda]">
                  hello@theotransportation.com
                </p>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer">
                <PhoneIcon className="h-5 w-5" />
                <p className="font-normal text-lg text-[#c7cdda]">
                  +88 01234 567 890
                </p>
              </div>
            </div>
          </div>
          <div className="flex-none flex flex-col space-y-5">
            <p className="font-bold text-xl">Links</p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              World Travelling
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Product Delivery
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Logistic Support
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Transportation
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Train Freight
            </p>
          </div>
          <div className="flex-none flex flex-col space-y-5">
            <p className="font-bold text-xl">Help</p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Marketing
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Warehouse
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Air Freight
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Sea Freight
            </p>
          </div>
          <div className="flex-1 flex flex-col space-y-5">
            <p className="font-bold text-xl">Latest Posts</p>
            <div className="flex items-center space-x-3">
              <img
                src={b1}
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
                src={truck1}
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
            <p className="font-bold text-xl">Instagram</p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              GitHub
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              LinkedIn
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              YouTube
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Twitter
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h4>Copyright ©2023 Transco. All Rights Reserved</h4>
          <div className="flex items-center space-x-10">
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              World Travelling
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Product Delivery
            </p>
            <p className="font-normal text-lg text-[#c7cdda] hover:text-primary_color cursor-pointer">
              Marketing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
