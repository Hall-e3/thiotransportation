import {
  Bars3Icon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { theo_blue_orange_logo } from "../constants/originals";
import { links } from "../data";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Navbar({ show }) {
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(true);
  };
  const [hoveredLinkId, setHoveredLinkId] = useState(0);

  return (
    <>
      <section
        className={`border-b border-stroke p-4 lg:py-6 ${
          show
            ? "md:fixed fixed top-0 w-screen lg:h-[90px]  bg-white drop-shadow-lg duration-700 z-99"
            : " "
        }`}
      >
        <div className="w-full h-full flex items-center justify-between max-w-[1260px] mx-auto md:px-10 lg:px-6">
          <Link to="/" className="flex items-center space-x-1 bg">
            <img
              src={theo_blue_orange_logo}
              alt="card"
              className="h-10 w-10 lg:h-18 lg:w-18"
            />
            <h5 className="font-bold text-2xl hidden lg:block">
              Transportation
            </h5>
          </Link>
          <div className="lg:flex space-x-14 h-full transition hidden">
            {links.map((link) => (
              <Link
                to={link.link}
                key={link.id}
                className="flex flex-col justify-between h-full cursor-pointer"
                onMouseEnter={() => setHoveredLinkId(link.id)}
                onMouseLeave={() => setHoveredLinkId(null)}
              >
                <p
                  className={`cursor-pointer font-bold text-md ${
                    hoveredLinkId === link.id ? "hover:text-primary_orange" : ""
                  }`}
                >
                  {link.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="xl:flex space-x-3 items-center hidden">
            <div className="rounded-full border border-primary_color p-1 delay-300 transition opacity-75">
              <div className="rounded-full p-4 bg-primary_orange">
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-md text-grey_black_3 font-medium">
                Got A Question?
              </p>
              <p className="text-md font-bold">+123-456-7890</p>
            </div>
          </div>
          <div onClick={handleDrop} className="lg:hidden pr-5 md:pr-0">
            <Bars3Icon className="w-7 h-7" />
          </div>
        </div>
      </section>
      <div
        className={`flex flex-col space-y-10 md:hidden p-6 fixed top-0 right-0 w-[80%] sm:w-[70%] h-full z-999 bg-white drop-shadow-lg ${
          drop ? "translate-x-2" : "translate-x-125"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-1 bg">
            <img src={theo_blue_orange_logo} alt="card" className="h-18 w-18" />
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
                Framingham MA 8 GREENVIEW street Framingham MA 01701
              </p>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:text-primary_orange">
              <EnvelopeIcon className="h-4 w-4 text-primary_color" />
              <p className="font-medium lg:text-lg">
                info@theotransportations.com
              </p>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer hover:text-primary_orange">
              <PhoneIcon className="h-4 w-4 text-primary_color" />
              <p className="font-medium lg:text-lg">+1 (708) 351-5786</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 border-t border-t-stroke py-6">
          <Facebook className="text-black" />
          <Twitter className="text-black" />
          <Instagram className="text-black" />
          <LinkedIn className="text-black" />
        </div>
      </div>
    </>
  );
}
