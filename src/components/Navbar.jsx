import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { theo_blue_orange_logo } from "../constants/originals";
import { links } from "../data";

export default function Navbar({ handleDrop }) {
  const [hoveredLinkId, setHoveredLinkId] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
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
          <h5 className="font-bold text-2xl hidden lg:block">Transporation</h5>
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
            <p className="text-lg font-bold">+123-456-7890</p>
          </div>
        </div>
        <div onClick={handleDrop} className="lg:hidden pr-5 md:pr-0">
          <Bars3Icon className="w-7 h-7" />
        </div>
      </div>
    </section>
  );
}
