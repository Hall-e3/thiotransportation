import React, { useState } from "react";
import Layout from "../layout";
import { ChevronRightIcon, PlayIcon } from "@heroicons/react/24/solid";
import {
  b2,
  b5,
  bdetials,
  boxes,
  containers,
  delivery_courier,
  img1,
  img3,
  img4,
} from "../constants";
import { Progress, Typography } from "@material-tailwind/react";
import { Button, CustomStep } from "../components";
import { abouts } from "../data";

export default function About() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Layout>
      <div className="py-16 bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex flex-col items-center justify-center space-y-7">
            <h4 className="text-white font-bold text-7xl">About</h4>

            <p className="flex items-center space-x-3">
              <p className="text-white font-normal text-sm">Home</p>
              <ChevronRightIcon className="w-4 h-4 text-white" />
              <p className="text-white font-normal text-sm">About Us</p>
            </p>
          </div>
        </div>
      </div>
      <div className="py-30">
        <div className="max-w-[1240px] mx-auto">
          <div className="w-full flex space-x-10">
            <div className="flex flex-1">
              <div className="h-full w-full flex justify-center relative">
                <div className="bg-[#ff8485] rounded-lg absolute bottom-0 right-0 z-999">
                  <img
                    src={img4}
                    alt="nin4"
                    className="object-cover h-full rounded-lg"
                  />
                </div>

                <div className="bg-[#9cc4f5] absolute rounded-lg top-0 left-4 z-20">
                  <img
                    src={img1}
                    alt="student"
                    className="object-cover h-full rounded-lg "
                  />
                </div>

                <div className="absolute rounded-lg bottom-7 -left-40">
                  <img
                    src={img3}
                    alt="driver"
                    className="object-cover h-full rounded-lg"
                  />
                </div>

                <div className="bg-gradient-to-r text-white h-40 w-40 px-5  from-red-500  to-primary_orange absolute flex flex-col space-y-5 z-9999 bottom-35 animate-bounce items-center justify-center -left-10 rounded-lg">
                  <h6 className="text-white font-bold text-6xl">7K</h6>
                  <p className="text-white font-bold text-lg">
                    Product Delivered
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="flex flex-col space-y-6 pl-20">
                <h5 className="text-primary_orange font-bold text-3xl">
                  About Theo Transportation
                </h5>
                <h3 className="font-bold text-5xl text-black leading-tight">
                  World Class <span className="text-[#1eae98]">Logistic</span>{" "}
                  and <span className="text-[#1eae98]">Transportation</span>
                </h3>
                <p className="flex-1 text-[#c7cdda] font-medium tracking-normal">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiatmnis iste natus error sit voluptatem
                  accusa mnis iste natus error sit voluptatem accusa nulla
                  pariatur.
                </p>

                <div className="flex items-center">
                  <div className="flex items-center space-x-6">
                    <img src={boxes} alt="boxes" className="mb-8" />
                    <div className="flex flex-col space-y-2">
                      <h5 className="font-bold text-lg text-black">
                        24 Hours Service
                      </h5>
                      <p className="text-grey_skip">
                        Sit voluptatem accusa nulla pariatur.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <img src={delivery_courier} alt="boxes" className="mb-8" />
                    <div className="flex flex-col space-y-2">
                      <h5 className="font-bold text-lg text-black">
                        Expert Team
                      </h5>
                      <p className="text-grey_skip">
                        Dit voluptatem accusa nulla pariatur.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center space-x-10">
                  <div className="flex flex-col space-y-8 flex-1 py-4">
                    <div className="w-full">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <Typography color="primary_green" variant="h6">
                          Service
                        </Typography>
                        <Typography color="primary_green" variant="h6">
                          50%
                        </Typography>
                      </div>
                      <Progress value={50} />
                    </div>
                    <div className="w-full">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <Typography color="primary_green" variant="h6">
                          Marketing
                        </Typography>
                        <Typography color="primary_green" variant="h6">
                          80%
                        </Typography>
                      </div>
                      <Progress value={80} />
                    </div>
                    <div className="w-full">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <Typography color="primary_green" variant="h6">
                          Support
                        </Typography>
                        <Typography color="primary_green" variant="h6">
                          90%
                        </Typography>
                      </div>
                      <Progress value={90} />
                    </div>
                  </div>
                  <div className="">
                    <img
                      src={img4}
                      alt="image4"
                      className="rounded-lg h-50 w-40"
                    />
                  </div>
                </div>
                <Button
                  text="Read More"
                  buttonStyle="w-[40%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                  icon={
                    <div className="bg-[#005bac] p-3 rounded-md">
                      <ChevronRightIcon className="w-5 h-5 text-white" />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-no-repeat bg-cover bg-gradient-to-r from-[#003869] to-primary_color opacity-90">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex space-x-12 items-center">
            {abouts.map((about) => (
              <div
                key={about.id}
                className="flex flex-col items-center justify-center space-y-8 flex-1"
              >
                <h4 className="text-[#ff6731] font-bold text-5xl">
                  {about.number}
                </h4>
                <h2 className="text-white font-bold text-2xl">{about.title}</h2>
                <p className="text-[#c7cdda] font-medium tracking-normal text-center">
                  {about.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-30">
        <div className="max-w-[1260px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 ">
            <div className="flex flex-col space-y-10 md:col-span-3  pr-25">
              <div className="flex flex-col space-y-4">
                <h5 className="text-primary_orange font-bold text-2xl">
                  Frequently Asked Questions
                </h5>
                <span className="font-bold text-5xl text-black ">
                  The <span className="text-[#1eae98]">Progressive</span> &{" "}
                  <span className="text-[#1eae98]"> Flexible </span>Transport
                  coverage
                </span>
              </div>
              <p className="text-grey_skip font-normal tracking-normal text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugi atmnis ist met, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore when the musics
                over turn off the light
              </p>
              <div className="flex items-center space-x-14 cursor-pointer  h-15 border-b border-b-stroke">
                {[
                  {
                    id: 1,
                    title: "Our Mission",
                  },
                  {
                    id: 2,
                    title: " Our Vision",
                  },
                  {
                    id: 3,
                    title: "Our Principle",
                  },
                ].map((cb) => (
                  <h4
                    onClick={() => setActiveTab(cb.id)}
                    key={cb.id}
                    className={`font-bold text-xl h-full flex items-center justify-center ${
                      activeTab === cb.id &&
                      "text-primary_orange border-b border-b-primary_orange"
                    }`}
                  >
                    {cb.title}
                  </h4>
                ))}
              </div>
              {activeTab === 1 && (
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col space-y-6">
                    <p className="text-grey_skip font-normal tracking-normal text-lg">
                      Evsed do eiusmod tempor incididunt ut lab ore when the
                      musics over turn
                    </p>
                    <p className="text-grey_skip font-normal tracking-normal text-lg">
                      Kobita off the light when the musics over turn off the
                      light said by JIm Morrison tumi sopno charini hoye khobor
                      nio pa.
                    </p>
                  </div>
                  <div>
                    <img
                      src={b2}
                      alt="b2"
                      className="rounded-xl object-contain"
                    />
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col space-y-6">
                    <p className="text-grey_skip font-normal tracking-normal text-lg">
                      Dvsed do eiusmod tempor incididunt ut lab ore when the
                      musics over turn
                    </p>
                    <p className="text-grey_skip font-normal tracking-normal text-lg">
                      Qobita off the light when the musics over turn off the
                      light said by JIm Morrison tumi sopno charini hoye khobor
                      nio la.
                    </p>
                  </div>
                  <div>
                    <img
                      src={b5}
                      alt="b2"
                      className="rounded-xl object-contain"
                    />
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col space-y-6">
                    <p className="text-grey_skip font-normal tracking-normal text-lg">
                      Mvsed do eiusmod tempor incididunt ut lab ore when the
                      musics over turn
                    </p>
                    <p className="text-grey_skip font-normal tracking-normal text-lg">
                      Yobita off the light when the musics over turn off the
                      light said by JIm Morrison tumi sopno charini hoye khobor
                      nio da.
                    </p>
                  </div>
                  <div>
                    <img
                      src={bdetials}
                      alt="b2"
                      className="rounded-xl object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="md:col-span-2 relative">
              <img
                src={containers}
                alt="service"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="bg-gradient-to-r text-white h-30 w-30 rounded-full  from-red-500  to-primary_orange absolute flex flex-col space-y-5 z-9999 bottom-70 -left-15 items-center justify-center">
                <PlayIcon className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-30 bg-[#f3f8fc]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4 px-80 mb-10">
              <h5 className="text-primary_orange font-bold text-2xl">
                History
              </h5>
              <span className="font-bold text-5xl text-black text-center leading-tight">
                Know More <span className="text-[#1eae98]"> Detail </span> About
                Our <span className="text-[#1eae98]">Company </span>
              </span>
            </div>
            <div className="flex flex-col items-center">
              <CustomStep
                leftTitle={
                  <div className="border border-stroke rounded-lg h-[25vh] bg-white mr-1.5">
                    <div className="flex items-center justify-center p-4 bg-primary_orange rounded-t-lg">
                      <h5 className="font-bold text-xl text-white">
                        Company Founded
                      </h5>
                    </div>
                    <div className="flex items-center justify-center py-10 px-10">
                      <p className="text-grey_skip font-normal text-lg">
                        Xolore magna aliqua enim ad minim ven mod tempor
                        incididunt ut labore et doore magna when the musics iver
                      </p>
                    </div>
                  </div>
                }
                rightTitle={
                  <div className="rounded-3xl bg-[#1eae98] flex justify-center items-center w-[40%] py-3">
                    <p className="font-bold text-white text-lg">Dec 23, 1983</p>
                  </div>
                }
              />
              <CustomStep
                leftTitle={
                  <div className="flex justify-end">
                    <div className="rounded-3xl bg-[#1eae98] flex justify-center items-center w-[40%] py-3">
                      <p className="font-bold text-white text-lg">
                        Jan 23, 1984
                      </p>
                    </div>
                  </div>
                }
                rightTitle={
                  <div className="border border-stroke rounded-lg h-[25vh] bg-white ml-1.5">
                    <div className="flex items-center justify-center p-4 bg-primary_orange rounded-t-lg">
                      <h5 className="font-bold text-xl text-white">
                        New Office Taken
                      </h5>
                    </div>
                    <div className="flex items-center justify-center py-10 px-10">
                      <p className="text-grey_skip font-normal text-lg">
                        Lolore magna aliqua enim ad minim ven mod tempor
                        incididunt ut labore et doore magna when the musics pves
                      </p>
                    </div>
                  </div>
                }
              />
              <CustomStep
                leftTitle={
                  <div className="border border-stroke rounded-lg h-[25vh] bg-white mr-1.5">
                    <div className="flex items-center justify-center p-4 bg-primary_orange rounded-t-lg">
                      <h5 className="font-bold text-xl text-white">
                        Become Top Company
                      </h5>
                    </div>
                    <div className="flex items-center justify-center py-10 px-10">
                      <p className="text-grey_skip font-normal text-lg">
                        Tolore magna aliqua enim ad minim ven mod tempor
                        incididunt ut labore et doore magna when the musics cves
                      </p>
                    </div>
                  </div>
                }
                rightTitle={
                  <div className="rounded-3xl bg-[#1eae98] flex justify-center items-center w-[40%] py-3">
                    <p className="font-bold text-white text-lg">Dec 23, 1983</p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-40">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4 px-80 mb-10">
              <h5 className="text-primary_orange font-bold text-2xl">
                Team Members
              </h5>
              <span className="font-bold text-5xl text-black text-center leading-tight pb-4">
                The <span className="text-[#1eae98]"> Best </span> &{" "}
                <span className="text-[#1eae98]">Skilled </span>People Together
              </span>
              <div className="py-[2.5px] px-[30px]  bg-primary_color" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
