import React, { useEffect, useState } from "react";
import { logo } from "../constants";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { links } from "../data";
import {
  Facebook,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

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
        <div className="h-12 w-full bg-primary_color transition hidden xl:flex">
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
        </div>
        <div className="h-10 w-full bg-primary_color transition hidden lg:block xl:hidden">
          <nav className="h-full max-w-[1240px] flex items-center justify-between mx-auto px-10">
            <div className="flex items-center space-x-2 pr-7 border-r border-r-stroke">
              <MapPinIcon className="w-5 h-5 text-white" />
              <p className="text-white text-base">20,Bordeshi, New York, US</p>
            </div>

            <div className="flex items-center space-x-2 pr-7 border-r border-r-stroke">
              <EnvelopeIcon className="w-4 h-4 text-white" />
              <p className="text-white text-base">
                info@theotransportation.com
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4 text-white" />
              <p className="text-white text-base">+123-895-6147</p>
            </div>
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
          </nav>
        </div>
        <section
          className={`border-b border-stroke lg:py-6 ${
            show
              ? "md:fixed fixed top-0 w-screen lg:h-[90px]  bg-white drop-shadow-lg duration-700 z-99"
              : " "
          }`}
        >
          <div className="w-full h-full flex items-center justify-between max-w-[1260px] mx-auto px-10 lg:px-6">
            <Link to="/" className="flex items-center space-x-1 bg">
              <img src={logo} alt="card" className="h-18 w-18" />
              <h5 className="font-bold text-2xl">Theo Transporation</h5>
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
            <div className="xl:flex space-x-3 items-center hidden">
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
            <div className="lg:hidden">
              <Bars3Icon className="w-7 h-7" />
            </div>
          </div>
        </section>
        <main className="w-full h-full">{children}</main>
      </div>
    </div>
  );
}
