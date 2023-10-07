import React, { useState } from "react";
import Layout from "../layout";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import { boxes, delivery_courier, img1, img3, img4 } from "../constants";
import { Carousel, Progress, Typography } from "@material-tailwind/react";
import {
  Button,
  CustomStep,
  CustomStepSmallDevice,
  SecondFooter,
} from "../components";
import { abouts, members, reviews } from "../data";
import { Facebook, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  back,
  staff,
  staff1,
  staff3,
  storage,
  trackie1,
  twitter,
} from "../constants/originals";

export default function About() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Layout>
      <div className="py-18 bg-no-repeat bg-cover bg-background1 bg-center bg-opacity-60">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex flex-col items-center justify-center space-y-7">
            <h4 className="text-white font-bold text-7xl">About</h4>

            <p className="flex items-center space-x-3">
              <Link to="/">
                <p className="text-white font-semibold text-sm hover:text-primary_orange cursor-pointer">
                  Home
                </p>
              </Link>
              <ChevronRightIcon className="w-4 h-4 text-white" />
              <p className="text-white font-normal text-sm">About Us</p>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-125 sm:pt-150 md:pt-180 lg:pt-40 pb-30  sm:py-20 md:py-40 px-4 sm:px-20 md:px-10">
        <div className="max-w-[1240px] mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:flex flex-1 ">
              <div className="h-full w-full flex justify-center relative">
                <div className="bg-[#ff8485] rounded-lg absolute bottom-0 right-0 z-50">
                  <img
                    src={img4}
                    alt="nin4"
                    className="object-cover lg:h-full rounded-lg"
                  />
                </div>

                <div className="absolute rounded-lg top-0 left-4 z-20">
                  <img
                    src={storage}
                    alt="student"
                    className="object-contain w-[80%] lg:h-full rounded-lg "
                  />
                </div>

                <div className="absolute rounded-lg bottom-7 -left-30">
                  <img
                    src={img3}
                    alt="driver"
                    className="object-cover lg:h-full rounded-lg"
                  />
                </div>

                <div className="bg-gradient-to-r text-white h-40 w-40 px-5  from-red-500  to-primary_orange absolute flex flex-col space-y-5 z-40 bottom-35 motion-safe:animate-bounce items-center justify-center -left-10 rounded-lg">
                  <h6 className="text-white font-bold text-6xl">7K</h6>
                  <p className="text-white font-bold text-lg text-center">
                    Product Delivered
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:hidden pb-20 px-30">
              <div className="h-full w-full flex justify-center relative">
                <div className="absolute rounded-lg bottom-0 -left-30">
                  <img
                    src={img3}
                    alt="driver"
                    className="object-cover h-full rounded-lg"
                  />
                </div>
                <div className="bg-[#9cc4f5] absolute rounded-lg bottom-50 sm:bottom-20 -left-10 z-20">
                  <img
                    src={img1}
                    alt="student"
                    className="object-cover h-full rounded-lg "
                  />
                </div>
                <div className="bg-[#ff8485] h-[38.5vh] w-[50vw] rounded-lg absolute -bottom-15 -right-25 z-40">
                  <img
                    src={img4}
                    alt="nin4"
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div>
                <div className="bg-gradient-to-r text-white h-40 sm:w-40   px-2 sm:px-5   from-red-500  to-primary_orange absolute flex flex-col space-y-5 z-50 bottom-10 motion-safe:animate-bounce items-center justify-center -left-25 rounded-lg">
                  <h6 className="text-white font-bold text-6xl">7K</h6>
                  <p className="text-white font-bold text-lg">
                    Product Delivered
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-1 pt-5 lg:pt-0">
              <div className="flex flex-col space-y-6 lg:pl-20">
                <h5 className="text-primary_orange font-bold text-xl md:text-2xl lg:text-3xl">
                  About Theo Transportation
                </h5>
                <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                  World Class{" "}
                  <span className="text-primary_color">Logistic</span> and{" "}
                  <span className="text-primary_color">Transportation</span>
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
                <div className="w-full flex flex-col sm:flex-row  sm:items-center sm:space-x-10">
                  <div className="flex flex-col space-y-8 flex-auto py-4 order-last sm:order-none">
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
                      <Progress value={90} color="bg-primary_green" />
                    </div>
                  </div>
                  <div className="order-first sm:order-none w-full flex-1">
                    <img
                      src={staff1}
                      alt="image4"
                      className="rounded-lg object-cover h-50 w-full "
                    />
                  </div>
                </div>
                <Button
                  text="Read More"
                  buttonStyle="w-[60%] w-[40%]  bg-gradient-to-r text-white  from-red-500  to-primary_orange py-2 lg:py-3 text-lg font-bold rounded-md"
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
      <div className="py-15 sm:py-20 md:py-40 px-4 sm:px-20 md:px-10 bg-no-repeat bg-cover bg-gradient-to-r from-[#003869] to-primary_color opacity-90">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex flex-col space-y-16 lg:space-y-0 lg:flex-row lg:space-x-12 items-center">
            {abouts.map((about) => (
              <div
                key={about.id}
                className="flex flex-col space-y-4 items-center justify-center lg:space-y-8 flex-1"
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
      <div className="py-20 md:py-40 px-4 sm:px-20 md:px-10">
        <div className="max-w-[1260px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="flex flex-col space-y-10 md:col-span-3  lg:pr-25">
              <div className="flex flex-col space-y-4">
                <h5 className="text-primary_orange font-bold text-2xl">
                  Frequently Asked Questions
                </h5>
                <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-black ">
                  The <span className="text-primary_color">Progressive</span> &{" "}
                  <span className="text-primary_color"> Flexible </span>
                  Transport coverage
                </span>
              </div>
              <p className="text-grey_skip font-normal tracking-normal text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugi atmnis ist met, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore when the musics
                over turn off the light
              </p>
              <div className="transition flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-14 cursor-pointer  h-15 lg:border-b lg:border-b-stroke">
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
                    className={`font-bold text-xl h-full flex items-center lg:justify-center ${
                      activeTab === cb.id &&
                      "text-primary_orange border-b border-b-primary_orange duration-700 ease-in-out"
                    }`}
                  >
                    {cb.title}
                  </h4>
                ))}
              </div>
              {activeTab === 1 && (
                <div className="flex flex-col space-y-5 lg:flex-row lg:items-center lg:space-x-6 pt-4 lg:pt-0">
                  <div className="flex flex-col space-y-4 lg:space-y-6 order-last pb-6 lg:pb-0 lg:order-none">
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
                  <div className="order-first pb-4 lg:pb-0 lg:order-none">
                    <img
                      src={back}
                      alt="b2"
                      className="rounded-sm w-full lg:rounded-xl object-contain"
                    />
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="flex flex-col space-y-5 lg:flex-row lg:items-center lg:space-x-6 pt-4 lg:pt-0">
                  <div className="flex flex-col space-y-4 lg:space-y-6 order-last pb-6 lg:pb-0 lg:order-none">
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
                  <div className="order-first pb-4 lg:pb-0 lg:order-none">
                    <img
                      src={staff3}
                      alt="b2"
                      className="rounded-sm w-full lg:rounded-xl object-contain"
                    />
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="flex flex-col space-y-5 lg:flex-row lg:items-center lg:space-x-6 pt-4 lg:pt-0">
                  <div className="flex flex-col space-y-4 lg:space-y-6 order-last pb-6 lg:pb-0 lg:order-none">
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
                  <div className="order-first pb-4 lg:pb-0 lg:order-none">
                    <img
                      src={staff}
                      alt="b2"
                      className="rounded-sm w-full lg:rounded-xl object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="md:col-span-2 relative">
              <img
                src={trackie1}
                alt="service"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="bg-gradient-to-r text-white lg:h-30 lg:w-30 h-15 w-15 rounded-full  from-red-500  to-primary_orange absolute flex flex-col space-y-5 z-20 bottom-70 sm:bottom-80 right-[43%] left-[43%] lg:-left-15  items-center justify-center">
                <PlayIcon className="lg:w-7 lg:h-7 h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-30 sm:py-20 md:py-40 px-4 sm:px-20 md:px-10 bg-[#f3f8fc]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4 lg:px-80 mb-10">
              <h5 className="text-primary_orange font-bold text-2xl">
                History
              </h5>
              <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-black text-center leading-tight">
                Know More <span className="text-primary_color"> Detail </span>{" "}
                About Our <span className="text-primary_color">Company </span>
              </span>
            </div>
            <div className="flex-col items-center hidden lg:flex">
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
                  <div className="rounded-3xl bg-primary_color flex justify-center items-center w-[40%] py-3">
                    <p className="font-bold text-white text-lg">Dec 23, 1983</p>
                  </div>
                }
              />
              <CustomStep
                leftTitle={
                  <div className="flex justify-end">
                    <div className="rounded-3xl bg-primary_color flex justify-center items-center w-[40%] py-3">
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
                  <div className="rounded-3xl bg-primary_color flex justify-center items-center w-[40%] py-3">
                    <p className="font-bold text-white text-lg">Dec 23, 1983</p>
                  </div>
                }
              />
            </div>
            <div className="w-full flex flex-col space-y-8 items-center lg:hidden">
              <CustomStepSmallDevice
                bottom={
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
                top={
                  <div className="rounded-3xl bg-primary_color flex justify-center items-center py-3 px-7">
                    <p className="font-bold text-white text-lg">Dec 23, 1983</p>
                  </div>
                }
              />
              <CustomStepSmallDevice
                top={
                  <div className="rounded-3xl bg-primary_color flex justify-center items-center py-3 px-7">
                    <p className="font-bold text-white text-lg">Jan 23, 1984</p>
                  </div>
                }
                bottom={
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
              <CustomStepSmallDevice
                bottom={
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
                top={
                  <div className="rounded-3xl bg-primary_color flex justify-center items-center py-3 px-7">
                    <p className="font-bold text-white text-lg">Dec 23, 1983</p>
                  </div>
                }
              />
              <div className="w-12 h-12 flex justify-center items-center rounded-full lg:bg-[#dde4f6] bg-primary_orange">
                <ChevronDownIcon className="w-7 h-7  text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-15 sm:py-20 md:py-40 px-4 sm:px-20 md:px-10">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4 lg:px-80 mb-10">
              <h5 className="text-primary_orange font-bold text-2xl">
                Team Members
              </h5>
              <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-black text-center leading-tight pb-4">
                The <span className="text-primary_color"> Best </span> &{" "}
                <span className="text-primary_color">Skilled </span>People
                Together
              </span>
              <div className="py-[2.5px] px-[30px]  bg-primary_color" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14">
            {members.map((member) => (
              <div
                key={member.id}
                className="rounded-lg relative flex flex-col justify-center items-center group transition duration-700 ease-in-out"
              >
                <div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-lg duration-1000 ease-in transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col space-y-3 items-center justify-center absolute -bottom-7 bg-[#005bac] w-[70%] py-8 z-20 group-hover:-translate-y-18 duration-700 ease-in-out dura">
                  <h5 className="text-white text-2xl font-bold">
                    {member.name}
                  </h5>
                  <p className="text-white text-md font-light">
                    {member.position}
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-4 bg-[#ff6731] w-[65%] absolute -bottom-9 py-8">
                  <Facebook className="text-white" />
                  <img src={twitter} alt="twitter" className="h-8 w-8" />
                  <LinkedIn className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-15 sm:py-20 md:py-40 px-4 sm:px-20 md:px-10 bg-[#f3f7fc]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 transition">
            <div className="md:col-span-2">
              <div className="flex flex-col  space-y-8">
                <div className="flex flex-col space-y-8">
                  <h5 className="text-primary_orange font-bold text-xl md:text-2xl lg:text-3xl">
                    Testimonials
                  </h5>
                  <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                    What<span className="text-primary_color">Clients</span> it
                    About
                    <span className="text-primary_color">Us</span>
                  </h3>
                </div>
                <p className="text-[#c7cdda] font-medium tracking-normal">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiatmnis iste na minim veniam, quis nostrud
                  exercita tion ullamco laboris nisi ut aliquip ex ea commodo
                </p>

                <div className="flex space-x-8 items-center">
                  <div
                    className="group hover:bg-[#ff6731] rounded-full p-5 border border-stroke transition "
                    onClick={() => {}}
                  >
                    <ChevronLeftIcon className="text-[#ff6731] group-hover:text-white  w-5 h-5 duration-300 ease-in" />
                  </div>
                  <div
                    className="group hover:bg-[#ff6731] rounded-full p-5 border border-stroke transition"
                    onClick={() => {}}
                  >
                    <ChevronRightIcon className="text-[#ff6731] group-hover:text-white w-5 h-5 duration-300 ease-in" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="flex h-full">
                <Carousel
                  className="rounded-xl grid-cols-2"
                  transition={{ duration: 2 }}
                >
                  {reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="bg-white shadow-lg rounded-lg p-10 flex flex-col space-y-8"
                    >
                      {rev.icon}
                      <p className="text-grey_skip">{rev.description}</p>
                      <div className="flex items-center space-x-5">
                        <img
                          src={rev.image}
                          alt={rev.user}
                          className="object-cover w-15 h-15 rounded-full"
                        />
                        <div className="flex flex-col justify-center">
                          <h6 className="font-bold text-xl">{rev.user}</h6>
                          <p className="font-light text-grey_skip">{rev.job}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SecondFooter />
    </Layout>
  );
}
