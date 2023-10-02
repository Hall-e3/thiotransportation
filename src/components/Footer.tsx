import React from "react";
import { logo, truck, truck1 } from "../constants";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
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
  );
}
