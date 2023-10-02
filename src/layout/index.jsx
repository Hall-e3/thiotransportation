import React, { useEffect, useState } from "react";
import { logo } from "../constants";
import { Link } from "react-router-dom";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { links } from "../data";

export default function Layout({ children, style }) {
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
    <div className="h-screen w-full transition">
      <div className="h-full w-full">
        <div className="h-12 w-full bg-primary_color transition">
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
              <div className="py-5 px-10 flex items-center justify-center bg-primary_orange absolute cursor-pointer duration-300 ease-out right-75 rounded-b-lg hover:bg-primary_green">
                <h4 className="font-bold text-white text-lg">Get A Quote</h4>
              </div>
            </div>
          </nav>
        </div>
        <section
          className={`border-b border-stroke py-8 ${
            show
              ? "md:fixed fixed z-20 top-0 w-screen h-[90px] bg-white drop-shadow-lg duration-500 "
              : " "
          }`}
        >
          <div className="w-full h-full flex flex-row items-center justify-between max-w-[1260px] mx-auto px-6">
            <Link to="/" className="flex items-center space-x-1 bg">
              <img src={logo} alt="card" className="h-18 w-18" />
              <h5 className="font-bold text-2xl">Theo Transporation</h5>
            </Link>
            <div className="flex flex-row space-x-14 h-full transition">
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
                      hoveredLinkId === link.id
                        ? "hover:text-primary_orange"
                        : ""
                    }`}
                  >
                    {link.name}
                  </p>
                  {/* <div
                    className={`bg-primary_orange py-1 ${
                      hoveredLinkId === link.id ? "" : "hidden"
                    }`}
                  /> */}
                </Link>
              ))}
            </div>
            <div className="flex flex-row space-x-3 items-center">
              <div className="rounded-full border border-primary_green p-1 delay-300 transition opacity-75">
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
          </div>
        </section>
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
