import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  theo_blue_orange_logo,
  theo_white_blue_logo,
} from "../constants/originals";
import { links } from "../data";
import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/solid";

export default function NavBar2({ show }) {
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(true);
  };
  const [hoveredLinkId, setHoveredLinkId] = useState(0);
  return (
    <section
      className={`border-b border-stroke p-4 lg:py-6 ${
        show
          ? "md:fixed fixed top-0 w-screen lg:h-[90px] bg-white drop-shadow-lg duration-700 z-99"
          : " "
      }`}
    >
      <div className="w-full h-full flex items-center justify-between max-w-[1260px] mx-auto md:px-10 lg:px-6">
        <div className="hidden lg:flex bg-gradient-to-r from-red-500  via-primary_orange to-yellow-800 !absolute rotate-12 left-[10%]  h-60 w-90 rounded-lg items-center justify-center z-30">
          <Link to="/" className="flex items-center space-x-1 ">
            <div className="h-full w-full relative -rotate-12">
              <div className="absolute flex items-center justify-center -left-25 -top-9">
                <img
                  src={theo_white_blue_logo}
                  alt="card"
                  className="h-10 w-10 lg:h-18 lg:w-18"
                />
                <h5 className="font-bold text-3xl hidden lg:block text-white">
                  Transportation
                </h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="lg:flex-1 hidden lg:flex"></div>
        <Link to="/" className="flex items-center space-x-1 lg:hidden">
          <img
            src={theo_blue_orange_logo}
            alt="card"
            className="h-10 w-10 lg:h-18 lg:w-18"
          />
          <h5 className="font-bold text-2xl text-black">Transportation</h5>
        </Link>
        <div className="flex items-center space-x-3 shrink-0">
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
              <p className="text-md font-bold">+1 (708) 351-5786</p>
            </div>
          </div>
          <div onClick={handleDrop} className="lg:hidden pr-5 md:pr-0">
            <Bars3Icon className="w-7 h-7" />
          </div>
        </div>
      </div>
    </section>
  );
}
