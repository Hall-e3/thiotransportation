import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Twitter,
} from "@mui/icons-material";
import { theo_blue_orange_logo, twitter } from "../constants/originals";
import { Button, Navbar } from "../components";

export default function Layout({ children }) {
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(true);
  };

  return (
    <div className="h-screen w-full transition overflow-x-hidden">
      <div className="h-full w-full">
        <div className="h-12 w-full bg-primary_color transition hidden lg:block">
          <nav className="h-full flex w-[1240px] mx-auto px-8 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="w-5 h-5 text-white" />
                <p className="text-white text-base">
                  20,Bordeshi, New York, US
                </p>
              </div>
              <div className="w-0.5 w h-5 bg-stroke" />
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5 text-white" />
                <p className="text-white text-base">
                  info@theotransportation.com
                </p>
              </div>
              <div className="w-0.5 w h-5 bg-stroke" />
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4 text-white" />
                <p className="text-white text-base">+123-895-6147</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <Facebook
                  className="text-white h-5 w-5"
                  style={{ height: "22px", width: "22px" }}
                />
                <Twitter
                  className="text-white h-5 w-5"
                  style={{ height: "22px", width: "22px" }}
                />
                <LinkedIn
                  className="text-white h-5 w-5"
                  style={{ height: "22px", width: "22px" }}
                />
                <YouTube
                  className="text-white h-5 w-5"
                  style={{ height: "22px", width: "22px" }}
                />
              </div>
              <Button
                text="Get A Quote"
                buttonStyle="w-[50%] py-2.5  bg-gradient-to-r text-white  from-red-500  to-primary_orange text-lg font-bold rounded-md hover:bg-primary_green"
              />
            </div>
          </nav>
        </div>

        {/* <div className="h-12 w-full bg-primary_color transition hidden xl:flex">
            <nav className="h-full max-w-[1240px] flex mx-auto">
              <div className="h-full w-full flex items-center justify-between">
                <div></div>
                <div className="flex items-center space-x-8 pr-50">
                  <div className="flex items-center space-x-2 pr-7 border-r border-r-stroke">
                    <MapPinIcon className="w-5 h-5 text-white" />
                    <p>20,Bordeshi, New York, US</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <EnvelopeIcon className="w-5 h-5 text-white" />
                    <p>info@theotransportation.com</p>
                  </div>
                </div>
                <div className="py-5 px-10 flex items-center justify-center bg-primary_orange z-20 cursor-pointer duration-300 ease-out right-75 rounded-b-lg hover:bg-primary_green">
                  <h4 className="font-bold text-white text-lg">Get A Quote</h4>
                </div>
              </div>
            </nav>
          </div> */}

        <Navbar handleDrop={handleDrop} />
        <div
          className={`flex flex-col space-y-10 md:hidden p-6 fixed top-0 right-0 w-[80%] sm:w-[70%] h-full z-999 bg-white drop-shadow-lg ${
            drop ? "translate-x-2" : "translate-x-125"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-1 bg">
              <img
                src={theo_blue_orange_logo}
                alt="card"
                className="h-18 w-18"
              />
            </Link>
            <div
              onClick={() => setDrop(false)}
              className="h-11 w-11 rounded-full bg-primary_color flex items-center justify-center"
            >
              <XMarkIcon className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              to="/home"
              onClick={() => setDrop(false)}
              className="flex items-center justify-between border-b border-b-stroke py-2"
            >
              <p className="font-medium text-md">Home</p>
              <div className="border border-stroke rounded-sm p-2">
                <PlusIcon className="w-4 h-4" />
              </div>
            </Link>
            <Link
              to="/about"
              onClick={() => setDrop(false)}
              className="flex items-center justify-between border-b border-b-stroke py-2"
            >
              <p className="font-medium text-md">About</p>
              <div className="border border-stroke rounded-sm p-2">
                <PlusIcon className="w-4 h-4" />
              </div>
            </Link>
            <Link
              to="/services"
              onClick={() => setDrop(false)}
              className="flex items-center justify-between border-b border-b-stroke py-2"
            >
              <p className="font-medium text-md">Services</p>
              <div className="border border-stroke rounded-sm p-2">
                <PlusIcon className="w-4 h-4" />
              </div>
            </Link>
            <Link
              to="/blog"
              onClick={() => setDrop(false)}
              className="flex items-center justify-between border-b border-b-stroke py-2"
            >
              <p className="font-medium text-md">Blog</p>
              <div className="border border-stroke rounded-sm p-2">
                <PlusIcon className="w-4 h-4" />
              </div>
            </Link>
            <Link
              to="/contact"
              onClick={() => setDrop(false)}
              className="flex items-center justify-between"
            >
              <p className="font-medium text-md">Contact</p>
              <div className="border border-stroke rounded-sm p-2">
                <PlusIcon className="w-4 h-4" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h5 className="text-2xl font-bold ">Contact Info</h5>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-3 cursor-pointer hover:text-primary_orange">
                <MapPinIcon className="h-4 w-4 text-primary_color" />
                <p className="font-medium lg:text-lg">
                  22/1 Bardeshi, Bazar Dhaka
                </p>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer hover:text-primary_orange">
                <EnvelopeIcon className="h-4 w-4 text-primary_color" />
                <p className="font-medium lg:text-lg">info@theotransport.com</p>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer hover:text-primary_orange">
                <PhoneIcon className="h-4 w-4 text-primary_color" />
                <p className="font-medium lg:text-lg">+88 01234 567 890</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 border-t border-t-stroke py-6">
            <Facebook className="text-black" />
            <img src={twitter} alt="twitter" className="h-8 w-8" />
            <Instagram className="text-black" />
            <LinkedIn className="text-black" />
          </div>
        </div>
        <main className="w-full h-full">{children}</main>
      </div>
    </div>
  );
}
