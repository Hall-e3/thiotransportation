import React from "react";
import { logo } from "../constants";
import { Link } from "react-router-dom";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function Layout({ children, style }) {
  return (
    <div className="h-screen w-full transition">
      <div className="h-full w-full">
        <nav className="flex flex-row justify-center items-center py-4 bg-primary_color space-x-6">
          <div className="flex items-center space-x-2">
            <MapPinIcon className="w-5 h-5 text-white" />
            <p>20,Bordeshi, New York, US</p>
          </div>
          <div className="flex items-center space-x-2">
            <EnvelopeIcon className="w-5 h-5 text-white" />
            <p>info@theotransportation.com</p>
          </div>
          <p className="text-white text-sm text-center font-medium">
            Lost your national id? Here is where we help you find it
          </p>
        </nav>
        <div className="sticky top-0 z-999 w-full flex justify-between items-center px-10 border-b border-stroke bg-LIGHT_GREY">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="logo" className="h-18 w-18" />
            <h5 className="font-bold">Theo Transportation</h5>
          </Link>
        </div>
        <main
          className={`w-full h-full row-span-5 relative ease-linear overflow-y-auto ${style}`}
        >
          {children}
        </main>
        <div className="my-4 flex justify-center">
          <p className="text-black text-sm text-center sm:text-start">
            Copyright @2023 FindMyNationalID. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
