import React from "react";
import Layout from "../layout";
import { b1, b2, b5 } from "../constants";
import {
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Button, Footer, Input } from "../components";

import { LinkedIn, Twitter, Facebook, YouTube } from "@mui/icons-material";
import { blogs } from "../data";
import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { twitter } from "../constants/originals";

export default function Blog() {
  return (
    <Layout>
      <div className="py-18 bg-no-repeat bg-cover bg-background4 bg-center opacity-90">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex flex-col items-center justify-center space-y-7">
            <h4 className="text-white font-bold text-7xl">Blog</h4>

            <Link to="/">
              <p className="text-white font-semibold text-sm hover:text-primary_orange cursor-pointer">
                Home
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-15 mb-40 sm:py-20 lg:py-40 px-4 sm:px-20 md:px-10">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="lg:col-span-6 border border-stroke rounded-lg mb-6"
              >
                <div className="flex flex-col">
                  <div className="rounded-lg">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full object-contain rounded-t-lg"
                      />
                    ) : (
                      <Carousel className="rounded-xl">
                        {blog?.images &&
                          blog?.images.map((image, i) => (
                            <img
                              key={i}
                              src={image}
                              alt={image + i}
                              className="h-full w-full object-cover"
                            />
                          ))}
                      </Carousel>
                    )}
                  </div>
                  <div className="flex flex-col space-y-8 lg:p-14 p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                      <div className="flex items-center space-x-1">
                        <UserIcon className="w-5 h-5 text-primary_color" />
                        <p className="text-grey_skip font-medium tracking-normal">
                          {blog.title}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="w-5 h-5 text-primary_color" />
                        <p className="text-grey_skip font-medium tracking-normal">
                          {blog.date}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary_color" />
                        <p className="text-grey_skip font-medium tracking-normal">
                          {blog.comments}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-8">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold hover:text-[#005bac] cursor-pointer">
                        {blog.subtitle}
                      </h3>
                      <p className="text-grey_skip font-medium tracking-normal">
                        {blog.description}
                      </p>
                    </div>
                    <div className="w-full flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center justify-between">
                      <Button
                        text="Read More"
                        buttonStyle=" sm:w-[50%] lg:w-[30%]  bg-gradient-to-r text-white  from-red-500  to-primary_orange py-2 sm:py-3 text-lg font-bold rounded-md"
                        icon={
                          <div className="bg-[#005bac] p-3 rounded-md">
                            <ChevronRightIcon className="w-5 h-5 text-white" />
                          </div>
                        }
                      />
                      <div className="flex items-center space-x-3">
                        <h6>SHARE</h6>
                        <Facebook className="text-[#005bac]" />
                        <img
                          src={twitter}
                          alt="twitter"
                          className="h-5 w-5 bg-white text-primary_orange rounded-md"
                        />
                        <LinkedIn className="text-[#0072b1]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="lg:col-span-3">
              <div className="flex flex-col space-y-10">
                <div className="rounded-lg bg-blue-gray-50 p-8 flex flex-col space-y-6">
                  <div className="flex items-center space-x-2">
                    <PlayIcon className="text-primary_color h-4 w-4" />
                    <h5 className="font-semibold text-2xl">Search</h5>
                  </div>
                  <Input
                    placeholder="Search"
                    icon={<MagnifyingGlassIcon className="w-5 h-5" />}
                  />
                </div>
                <div className="rounded-lg bg-blue-gray-50 p-8 flex flex-col space-y-8">
                  <div className="flex items-center space-x-2">
                    <PlayIcon className="text-primary_color h-4 w-4" />
                    <h5 className="font-semibold text-2xl">Recent Posts</h5>
                  </div>
                  <div className="flex flex-col space-y-10">
                    <div className="flex items-center space-x-4">
                      <img src={b1} alt="h1" className="h-20 w-20 rounded-lg" />
                      <div>
                        <h5 className="font-bold text-lg hover:text-[#005bac] cursor-pointer">
                          Why Transport Is Key In Logistics?
                        </h5>
                        <p className="text-grey_skip">June 04, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img src={b2} alt="h1" className="h-20 w-20 rounded-lg" />
                      <div>
                        <h5 className="font-bold text-lg hover:text-[#005bac] cursor-pointer">
                          Can You Transport Furniture in Uber?
                        </h5>
                        <p className="text-grey_skip">June 04, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img src={b5} alt="h1" className="h-20 w-20 rounded-lg" />
                      <div>
                        <h5 className="font-bold text-lg hover:text-[#005bac] cursor-pointer">
                          Acadian Non Emergency Transport
                        </h5>
                        <p className="text-grey_skip">June 04, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-blue-gray-50 p-8 flex flex-col space-y-6">
                  <div className="flex items-center space-x-2">
                    <PlayIcon className="text-primary_color h-4 w-4" />
                    <h5 className="font-semibold text-2xl">Categories</h5>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-grey_skip hover:text-[#005bac] cursor-pointer">
                      Logistic Support
                    </p>
                    <p className="text-grey_skip">(4)</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-grey_skip hover:text-[#005bac] cursor-pointer">
                      Marketing
                    </p>
                    <p className="text-grey_skip">(3)</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-grey_skip hover:text-[#005bac] cursor-pointer">
                      Product Delivery
                    </p>
                    <p className="text-grey_skip">(4)</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-grey_skip hover:text-[#005bac] cursor-pointer">
                      Transport Business
                    </p>
                    <p className="text-grey_skip">(1)</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-grey_skip hover:text-[#005bac] cursor-pointer">
                      Transportation
                    </p>
                    <p className="text-grey_skip">(4)</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-grey_skip hover:text-[#005bac] cursor-pointer">
                      Uncategorized
                    </p>
                    <p className="text-grey_skip">(3)</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-grey_skip hover:text-[#005bac] cursor-pointer">
                      World Travelling
                    </p>
                    <p className="text-grey_skip">(5)</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-grey_skip hover:text-[#005bac] cursor-pointer">
                      XFeatured
                    </p>
                    <p className="text-grey_skip">(6)</p>
                  </div>
                </div>
                <div className="rounded-lg bg-blue-gray-50 p-8 flex flex-col space-y-6">
                  <div className="flex items-center space-x-2">
                    <PlayIcon className="text-primary_color h-4 w-4" />
                    <h5 className="font-semibold text-2xl">Tag Search</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Air Freight",
                      "Cargo",
                      "Logistics",
                      "Ocean",
                      "Sea Freight",
                      "Train Freight",
                      "Transportation",
                      "Truck",
                      "Warehouse",
                    ].map((i) => (
                      <p
                        key={i}
                        className="border border-stroke rounded-3xl px-6 py-2 font-thin text-sm hover:bg-primary_color hover:text-white hover:font-bold cursor-pointer"
                      >
                        {i}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-blue-gray-50 p-8 flex flex-col space-y-6">
                  <div className="flex items-center space-x-2">
                    <PlayIcon className="text-primary_color h-4 w-4" />
                    <h5 className="font-semibold text-2xl">Social Link</h5>
                  </div>
                  <div className="flex space-x-8">
                    {[
                      {
                        id: 1,
                        icon: <Facebook className="text-white" />,
                      },
                      {
                        id: 2,
                        icon: (
                          <img
                            src={twitter}
                            alt="twitter"
                            className="h-5 w-5 bg-white text-primary_orange rounded-md"
                          />
                        ),
                      },
                      {
                        id: 3,
                        icon: <YouTube className="text-white" />,
                      },
                    ].map((c) => (
                      <div
                        key={c.id}
                        className="h-10 w-10 sm:h-15 sm:w-15 lg:h-20 lg:w-20 bg-primary_color hover:bg-primary_orange rounded-full flex items-center justify-center"
                      >
                        {c.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
