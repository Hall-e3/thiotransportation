import React, { useEffect, useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Facebook, LinkedIn, YouTube, Twitter } from "@mui/icons-material";
import { Button, Navbar } from "../components";

export default function Layout({ children }) {
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
    <div className="h-screen w-full transition overflow-x-hidden">
      <div className="h-full w-full">
        <div className="h-12 w-full bg-primary_color transition hidden lg:block">
          <nav className="h-full flex w-[1240px] mx-auto items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="w-5 h-5 text-white" />
                <p className="text-white text-sm">
                  Framingham MA 8 GREENVIEW street Framingham MA 01701
                </p>
              </div>
              <div className="w-0.5 w h-5 bg-stroke" />
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5 text-white" />
                <p className="text-white text-sm">
                  info@theotransportations.com
                </p>
              </div>
              <div className="w-0.5 w h-5 bg-stroke" />
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4 text-white" />
                <p className="text-white text-sm">+1 (708) 351-5786</p>
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

        <Navbar show={show} />
        <main className="w-full h-full">{children}</main>
      </div>
    </div>
  );
}
