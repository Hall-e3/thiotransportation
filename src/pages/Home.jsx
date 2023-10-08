import React, { useEffect, useState } from "react";
import {
  Button,
  DisclosureComponent,
  Footer,
  NavBar2,
  Navbar,
  QuoteForm,
  Testimonials,
} from "../components";
import {
  ChevronRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import {
  best_truck,
  bike,
  home1,
  home2,
  person,
  person1,
  track,
  tropy,
  truck,
} from "../constants";
import { Carousel } from "@material-tailwind/react";
import { abouts, cards, homes, who_we_work_with } from "../data";
import { staff1 } from "../constants/originals";
import { Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import CountUp from "react-countup";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % who_we_work_with.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const currentItem = who_we_work_with[currentIndex];
  return (
    <div className="h-screen w-full transition overflow-x-hidden relative">
      <div className="h-full w-full">
        <div className="h-12 w-full bg-primary_color transition hidden lg:block">
          <nav className="h-full flex w-[1240px] mx-auto  items-center">
            <div className="flex items-center space-x-4 flex-1"></div>
            <div className="flex items-center space-x-8 shrink-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="w-5 h-5 text-white" />
                  <p className="text-white text-base">20,Bordeshi</p>
                </div>
                <div className="w-0.5 w h-5 bg-stroke" />
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="w-5 h-5 text-white" />
                  <p className="text-white text-base">
                    info@theotransportation.com
                  </p>
                </div>
              </div>
              <Button
                text="Get A Quote"
                buttonStyle="w-[30%] py-5 flex items-center justify-center  bg-gradient-to-r text-white  from-red-500  to-primary_orange text-lg font-bold rounded-md hover:bg-primary_green"
              />
            </div>
          </nav>
        </div>

        <div className="hidden xl:block">
          <NavBar2 />
        </div>

        <div className="xl:hidden">
          <Navbar />
        </div>
        <div className="relative">
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            style={{ height: "100vh" }}
            transition={{ duration: 2 }}
            prevArrow={() => {
              return (
                <div className="hidden absolute md:bottom-30 md:left-10 lg:top-2/4 lg:left-20 lg:-translate-y-2/4 md:flex md:flex-row lg:flex-col space-x-8 lg:space-x-0 md:space-y-0 lg:space-y-8 transition">
                  <YouTube
                    className="text-white lg:-rotate-90 hover:-rotate-0 hover:text-primary_orange ease-in-out duration-700"
                    style={{ fontSize: 30 }}
                  />
                  <LinkedIn className="text-white lg:-rotate-90 hover:-rotate-0 hover:text-primary_orange ease-in-out duration-700" />
                  <Twitter className="text-white lg:-rotate-90 hover:-rotate-0 hover:text-primary_orange ease-in-out duration-700" />
                  <Facebook className="text-white lg:-rotate-90 hover:rotate-0 hover:text-primary_orange ease-in-out duration-700" />
                </div>
              );
            }}
            nextArrow={() => {}}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="hidden absolute bottom-[45%] right-12 z-20 md:flex flex-col gap-y-4">
                {new Array(length).fill("").map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded-full p-1 ${
                      activeIndex === i && "border border-primary_orange"
                    }`}
                  >
                    <div className="h-3 w-3 rounded-full bg-grey" />
                  </div>
                ))}
              </div>
            )}
          >
            <div className="h-full bg-no-repeat bg-cover bg-gradient-to-r from-primary_color to-primary_green  relative">
              <div className="bg-no-repeat bg-cover bg-background2 bg-center h-full absolute inset-0 opacity-10"></div>
              <div className="h-full flex items-center justify-center max-w-[1240px] mx-auto py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-8 px-8 justify-center items-center sm:items-start order-last lg:order-none sm:px-10">
                    <h5 className="font-semibold text-2xl text-white text-center sm:text-start">
                      We are Theo Transportation
                    </h5>
                    <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl  text-white text-center sm:text-start">
                      World Class Transportation Service
                    </h2>
                    <p className="text-white font-normal text-base text-center sm:text-start">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <Button
                      text="Read More"
                      buttonStyle="w-[70%] lg:w-[45%]  bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                      icon={
                        <div className="bg-primary_color p-3 rounded-md">
                          <ChevronRightIcon className="w-5 h-5 text-white" />
                        </div>
                      }
                    />
                  </div>
                  <div className="order-first lg:order-none flex items-center justify-center pr-15 sm:pr-0">
                    <img
                      src={truck}
                      className="object-contain rounded-full"
                      alt="truck"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full bg-no-repeat bg-cover bg-gradient-to-r from-primary_color to-primary_green opacity-90 relative">
              <div className="bg-no-repeat bg-cover bg-background3 bg-center h-full absolute inset-0 opacity-10"></div>
              <div className="h-full flex items-center justify-center max-w-[1240px] mx-auto py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-8 px-8 justify-center items-center sm:items-start">
                    <h5 className="font-semibold text-2xl text-white text-center sm:text-start">
                      Transport with Theo Transportation
                    </h5>
                    <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl  text-white">
                      Transport Safely
                    </h2>
                    <p className="text-white font-normal text-base text-center sm:text-start">
                      Experience hassle-free journeys with our efficient
                      transport solutions that prioritize your comfort.
                    </p>

                    <Button
                      text="Read More"
                      buttonStyle="w-[70%] lg:w-[45%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                      icon={
                        <div className="bg-primary_color p-3 rounded-md">
                          <ChevronRightIcon className="w-5 h-5 text-white" />
                        </div>
                      }
                    />
                  </div>
                  <div>
                    <img src={person} alt="person" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full bg-no-repeat bg-cover bg-gradient-to-r from-primary_green to-primary_color relative">
              <div className="bg-no-repeat bg-cover bg-background4 bg-center h-full absolute inset-0 opacity-10"></div>
              <div className="h-full flex items-center justify-center max-w-[1240px] mx-auto py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-8 px-8 justify-center order-last lg:order-none items-center sm:items-start">
                    <h5 className="font-semibold text-2xl text-white text-center sm:text-start">
                      Your Business Partner
                    </h5>
                    <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl  text-white text-center sm:text-start">
                      Transportation Made Simple
                    </h2>
                    <p className="text-white font-normal text-base text-center sm:text-start">
                      Optimize your supply chain with our streamlined
                      transportation solution reducing production costs.
                    </p>

                    <Button
                      text="Read More"
                      buttonStyle="w-[70%] lg:w-[45%]  bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                      icon={
                        <div className="bg-primary_color p-3 rounded-md">
                          <ChevronRightIcon className="w-5 h-5 text-white" />
                        </div>
                      }
                    />
                  </div>
                  <div className="order-first lg:order-none">
                    <img src={person1} alt="person1" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="sm:pt-15 lg:pb-30 xl:pt-150 sm:pb-16 sm:py-20 px-4 sm:px-20 md:px-10 mb-60 lg:mb-115 relative">
          <div className="lg:h-[35%] mt-10 sm:mt-0 sm:mb-30 sm:right-8 sm:left-8 xl:right-[1%] xl:w-[70%] xl:absolute lg:-top-20 xl:max-w-[1440px] xl:mx-auto lg:shadow-md xl:shadow-lg rounded-xl bg-white  flex md:flex-row flex-col justify-between items-center">
            <div className="w-full h-full grid grid-cols-1 px-2 sm:px-0 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-0 lg:px-30 xl:px-0">
              {homes.map((home) => (
                <div
                  key={home.id}
                  className="flex-1 h-full rounded-lg xl:px-10 sm:py-8 sm:px-4 xl:py-10 p-4  sm:p-0 shadow-md md:shadow-lg lg:shadow-1"
                >
                  <div className="flex flex-col space-y-8">
                    <img
                      src={home.icon}
                      alt={home.name}
                      className="h-15 w-15 object-contain"
                    />
                    <h5 className=" sm:text-lg lg:text-xl xl:text-2xl font-bold text-black">
                      {home.title}
                    </h5>
                    <p className="font-md text-base text-grey_skip">
                      {home.description}
                    </p>
                    <div className="flex items-center space-x-4 group transition duration-300 ease-in cursor-pointer">
                      <div className="border-2 flex items-center border-primary_orange justify-center h-8 w-8 rounded-full group-hover:bg-primary_orange">
                        <ChevronRightIcon className="h-4 w-4 text-primary_color font-bold group-hover:text-white" />
                      </div>
                      <h6 className="font-bold group-hover:text-primary_color">
                        Read More
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto">
            <div className="w-full grid grid-cols-1 lg:grid-cols-10 space-y-20 sm:space-y-0 lg:space-x-30">
              <div className="hidden lg:flex md:col-span-5">
                <div className="h-full w-full flex justify-center relative">
                  <div className="bg-[#ff8485] rounded-lg absolute bottom-0 left-0 z-20">
                    <img
                      src={home2}
                      alt="nin4"
                      className="object-cover h-full rounded-lg"
                    />
                  </div>

                  <div className="bg-[#9cc4f5] absolute rounded-lg top-0 right-0 z-10">
                    <img
                      src={home1}
                      alt="home"
                      className="object-cover h-full rounded-lg "
                    />
                  </div>

                  <div className="absolute bottom-10 right-5 motion-safe:animate-bounce rounded-lg bg-primary_orange p-8 z-30">
                    <img
                      src={track}
                      alt="driver"
                      className="object-cover h-full rounded-lg"
                    />
                  </div>

                  <div className="absolute top-10 -right-12 motion-safe:animate-bounce rounded-lg bg-[#005bac] p-8 z-30">
                    <img
                      src={tropy}
                      alt="driver"
                      className="object-cover h-full rounded-lg"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-[#005bac] to-cyan-500 text-white h-40 w-40 px-5  absolute z-40 bottom-50 left-25 flex flex-col space-y-5  motion-safe:animate-bounce items-center justify-center  rounded-lg">
                    <h6 className="text-white font-bold text-6xl">12</h6>
                    <p className="text-white font-bold text-lg text-center">
                      Year of Success
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:hidden pb-15 px-10 h-[50vh] sm:h-[70vh]">
                <div className="h-full w-full flex justify-center relative">
                  <div className="bg-[#ff8485] rounded-lg absolute w-[50%] -bottom-20 -left-10 z-20">
                    <img
                      src={home2}
                      alt="nin4"
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="bg-[#9cc4f5] absolute rounded-lg top-0 right-0 z-10">
                    <img
                      src={home1}
                      alt="home"
                      className="object-cover w-full h-full rounded-lg "
                    />
                  </div>

                  <div className="absolute -bottom-20 right-5 motion-safe:animate-bounce rounded-lg bg-primary_orange p-8 z-30">
                    <img
                      src={track}
                      alt="driver"
                      className="object-cover h-full rounded-lg"
                    />
                  </div>

                  <div className="absolute top-10 -right-12 motion-safe:animate-bounce rounded-lg bg-[#005bac] p-8 z-30">
                    <img
                      src={tropy}
                      alt="driver"
                      className="object-cover h-full rounded-lg"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-[#005bac] to-cyan-500 text-white h-35 w-35 px-5  absolute z-40 bottom-10 -left-11 flex flex-col space-y-5  motion-safe:animate-bounce items-center justify-center  rounded-lg">
                    <h6 className="text-white font-bold text-6xl">12</h6>
                    <p className="text-white font-bold text-lg text-center">
                      Year of Success
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 pt-10 sm:pt-20 md:pt-45 lg:pt-0 md:col-span-5">
                <div className="flex flex-col space-y-6">
                  <h5 className="text-primary_orange font-bold text-xl md:text-2xl lg:text-3xl">
                    We are Theo Transportation
                  </h5>
                  <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                    World Class{" "}
                    <span className="text-primary_color">Logistic</span> and{" "}
                    <span className="text-primary_color">Transportation</span>{" "}
                    Service
                  </h3>
                  <p className="flex-1 text-[#c7cdda] font-semibold tracking-normal">
                    Accusa mnis iste natus error sit volupta toloris onder boura
                    gist onpores tem accusa nulla pariatur.
                  </p>

                  <p className="flex-1 text-[#c7cdda] font-normal tracking-normal">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiatmnis iste natus error sit
                    voluptatem accusa mnis iste natus error sit voluptatem
                    accusa nulla pariatur.
                  </p>

                  <div className="w-full flex items-center space-x-6 mb-6">
                    <div className="flex flex-col space-y-8 flex-1  border-l-4 pl-16  border-l-primary_color pl-">
                      <p className="text-[#c7cdda] font-normal tracking-normal">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <div className="flex flex-row space-x-3 items-center">
                        <hr className=" border-1 border-[#dde4f6] w-10" />
                        <h5 className="font-bold text-lg">
                          Tom Anderson,
                        </h5>{" "}
                        <p>Founder & CEO</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    text="Read More"
                    buttonStyle="w-[60%] md:w-[40%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
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
        <div className="py-10 sm:py-20 md:py-30 lg:py-40 px-4 sm:px-20 md:px-10 bg-gradient-to-r from-[#003869] to-primary_color opacity-90 relative">
          <div className="xl:w-[60%] h-[25%] w-[90%] sm:right-[4%] lg:h-[80%] xl:-top-95 xl:right-[18%] xl:left-[18%] border-8 border-white absolute rounded-lg -top-40 lg:-top-90 right-2 mx-4">
            <img
              src={staff1}
              alt="staff1"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="bg-gradient-to-r md:bottom-60 md:left-[50%] xl:bottom-50 xl:right-[40%] xl:left-[45%] from-[#005bac] to-primary_green motion-safe:animate-ping-once text-white h-25 w-25 rounded-full absolute flex flex-col space-y-5 z-20 bottom-[25%] left-[35%] right-[45%] items-center justify-center">
              <PlayIcon className="w-7 h-7" />
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto pt-20 lg:pt-50 ">
            <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-12 items-center">
              {abouts.map((about) => (
                <div
                  key={about.id}
                  className="flex flex-col items-center justify-center space-y-6 flex-1"
                >
                  <h4 className="text-[#ff6731] font-bold text-5xl">
                    <CountUp
                      start={0}
                      end={about.number}
                      duration={5}
                      separator=","
                    />
                    {about.id === 4 && <span>M</span>}
                    {about.id === 3 && <span>+</span>}
                  </h4>
                  <h2 className="text-white font-bold text-2xl">
                    {about.title}
                  </h2>
                  <p className="text-[#c7cdda] font-medium tracking-normal text-center">
                    {about.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-15 sm:py-20 md:py-40 px-4 sm:px-20 md:px-10">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-col items-center justify-center space-y-4 lg:px-80 mb-10">
                <h5 className="text-primary_orange font-bold text-2xl">
                  Our Service
                </h5>
                <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-black text-center leading-tight pb-4">
                  We Find the{" "}
                  <span className="text-primary_color"> Destination </span> for
                  Your <span className="text-primary_color">Product </span>
                </span>
                <div className="py-[2.5px] px-[30px]  bg-primary_color" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-14 lg:gap-x-8 transition">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="group flex duration-300 ease-in hover:-translate-y-3 flex-col space-y-8 border border-stroke rounded-lg px-14 py-10 hover:bg-gradient-to-r from-primary_color to-primary_green"
                >
                  <div className="flex items-center space-x-4">
                    <div className="group-hover:bg-gradient-to-r w-[30%] from-red-500 to-primary_orange p-4 rounded-lg bg-primary_color">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full transition-transform transform group-hover:rotate-180"
                      />
                    </div>
                    <h5 className="font-bold text-xl group-hover:text-white">
                      {card.title}
                    </h5>
                  </div>
                  <div className="border border-primary_green group-hover:border-white" />
                  <p className="group-hover:text-white text-md text text-grey_skip">
                    {card.description}
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary_orange p-3 rounded-full">
                      <ChevronRightIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="font-bold group-hover:text-white">
                      Read More
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-15 sm:py-20 md:py-40 px-4 sm:px-20 md:px-10 bg-[#31373f]">
          <div className="max-w-[1240px] mx-auto flex flex-col space-y-20">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-col items-center justify-center space-y-4 px-80 mb-10">
                <h5 className="text-white font-bold text-2xl">How it works</h5>
                <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center leading-tight pb-4">
                  World Class{" "}
                  <span className="text-primary_orange"> Logistics </span>
                  and{" "}
                  <span className="text-primary_orange">Transportation </span>
                </span>
                <div className="py-[2.5px] px-[30px]  bg-primary_orange" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-3 flex flex-col space-y-8 lg:space-y-30 mb-6 lg:mb-0">
                <div className="lg:relative">
                  <div className="flex flex-col lg:items-center justify-center h-[30vh] md:h-[25vh] px-8 space-y-4 bg-white rounded-lg shadow-sm">
                    <p className="font-bold text-base text-white rounded-full h-18 w-18 flex justify-center items-center bg-primary_color">
                      01
                    </p>
                    <h4 className="font-bold text-2xl">Pick A Service</h4>
                    <p className="text-grey_skip font-light lg:text-center">
                      Ynim ad minim veniam ex ercitation pllamycp.
                    </p>
                  </div>
                  <p className="font-bold text-base absolute text-white -top-7 -left-6.5 rounded-full p-6 bg-primary_color  hidden">
                    01
                  </p>
                </div>
                <div className="relative">
                  <div className="flex flex-col lg:items-center justify-center h-[30vh] md:h-[25vh] px-8  space-y-4  bg-white rounded-lg shadow-sm">
                    <p className="font-bold text-base text-white rounded-full h-18 w-18 flex justify-center items-center bg-primary_color ">
                      03
                    </p>
                    <h4 className="font-bold text-2xl">Pick A Service</h4>
                    <p className="text-grey_skip font-light lg:text-center">
                      Dim ad minim veniam ex ercitation cllamycd.
                    </p>
                  </div>
                  <p className="font-bold text-base absolute text-white -top-7 -left-6.5 rounded-full p-6 bg-primary_color  hidden">
                    03
                  </p>
                </div>
              </div>
              <div className="col-span-6 lg:flex items-center justify-center hidden">
                <div>
                  <img
                    src={bike}
                    alt="bike"
                    className="object-contain w-full h-full rounded-lg"
                  />
                </div>
              </div>
              <div className="col-span-3 flex flex-col space-y-8 lg:space-y-30">
                <div className="relative">
                  <div className="flex flex-col lg:items-center justify-center h-[30vh] md:h-[25vh] px-8 space-y-4 bg-white rounded-lg shadow-sm">
                    <p className="font-bold text-base rounded-full text-white h-18 w-18 flex justify-center items-center bg-primary_color">
                      02
                    </p>
                    <h4 className="font-bold text-2xl">Send Product</h4>
                    <p className="text-grey_skip font-light lg:text-center">
                      Unim ad minim veniam ex ercitation illamyce.
                    </p>
                  </div>
                  <p className="font-bold text-base absolute -top-7 text-white -left-6.5 rounded-full p-6 bg-primary_color hidden">
                    02
                  </p>
                </div>
                <div className="relative">
                  <div className="flex flex-col lg:items-center justify-center h-[30vh] md:h-[25vh] px-8 space-y-4 bg-white rounded-lg shadow-sm">
                    <p className="font-bold text-base rounded-full h-18 text-white w-18 flex justify-center items-center bg-primary_color">
                      03
                    </p>
                    <h4 className="font-bold text-2xl">Clear Payment</h4>
                    <p className="text-grey_skip font-light lg:text-center">
                      Onim ad minim veniam ex ercitation illamycy.
                    </p>
                  </div>
                  <p className="font-bold text-base absolute -top-7 text-white -left-6.5 rounded-full p-6 bg-primary_color hidden">
                    04
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <div className="py-15 sm:py-20 md:py-30 lg:py-40 px-4 sm:px-20 md:px-10 bg-[#003869CC]">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="flex flex-col justify-center lg:flex-1">
                <QuoteForm />
              </div>
              <div className="flex-1 pt-15 lg:pt-0">
                <div className={`flex flex-col space-y-8 lg:pl-30`}>
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-xl lg:text-2xl  font-bold text-white">
                      Frequently Asked Questions
                    </h3>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed">
                      Get the best logistic service
                    </h3>
                  </div>
                  <DisclosureComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-15 sm:py-20 px-4 sm:px-20 md:px-10 bg-[#1eae98]">
          <div className="max-w-[1240px] mx-auto">
            <div>
              {currentItem ? (
                <img
                  key={currentItem.id}
                  src={currentItem.image}
                  alt={`images + ${currentItem.id}`}
                  className="h-50 w-full object-contain"
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="py-30 mb-50">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex flex-col items-center justify-center space-y-">
              <div className="flex flex-col items-center justify-center space-y-4 lg:px-80 mb-10">
                <h5 className="text-primary_orange font-bold text-2xl">
                  From Our Blog
                </h5>
                <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-black text-center leading-tight pb-4">
                  Get latest <span className="text-primary_color"> news </span>{" "}
                  and Your <span className="text-primary_color">updates </span>
                </span>
                <div className="py-[2.5px] px-[30px]  bg-primary_color" />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 transition">
              <div className="relative group px-4 sm:px-8 lg:px-0">
                <img
                  src={best_truck}
                  alt="best_truck"
                  className="rounded-lg object-cover w-full h-full duration-700 ease-linear transform hover:scale-105"
                />
                <div className="absolute bottom-10 left-10">
                  <p className="text-white font-medium text-md">
                    Web Design | October 09, 2022
                  </p>
                  <p className="group-hover:text-primary_orange text-white font-bold text-2xl">
                    Tips n tricks to make your clients happy
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-center lg:space-x-6 px-4 pt-8 lg:pt-0">
                <div className="w-full h-full flex flex-col  space-y-6 group">
                  <div className="flex flex-1 flex-col space-y-10  p-10 border border-stroke rounded-lg shadow-sm">
                    <div className="flex flex-col">
                      <h4 className="font-bold text-lg text-primary_orange">
                        Logistis
                      </h4>
                      <p className="text-black text-xl font-bold">
                        When the musics over turn off the light
                      </p>
                    </div>
                    <p>April 02, 2023</p>
                  </div>

                  <div className="w-full flex flex-1 flex-col space-y-10 p-10 border border-stroke rounded-lg shadow-sm">
                    <div className="flex flex-col">
                      <h4 className="font-bold text-lg text-primary_orange">
                        Logistis
                      </h4>
                      <p className="text-black text-xl font-bold">
                        Daycares Provide Transportation
                      </p>
                    </div>
                    <p>March 13, 2022</p>
                  </div>
                </div>

                <div className="w-full h-full flex flex-col  space-y-6 group">
                  <div className="flex flex-1 flex-col space-y-10 px-12 py-10 lg:p-10 lg:py-0 lg:px-0 border border-stroke rounded-lg shadow-sm">
                    <div className="flex flex-col">
                      <h4 className="font-bold text-lg text-primary_orange">
                        Logistis
                      </h4>
                      <p className="text-black text-xl font-bold">
                        Acadian Emergency Transportation
                      </p>
                    </div>
                    <p>February 13, 2022</p>
                  </div>

                  <div className="w-full flex flex-1 flex-col space-y-10 px-12 py-10 lg:py-0 lg:px-0 lg:p-10 border border-stroke rounded-lg shadow-sm">
                    <div className="flex flex-col">
                      <h4 className="font-bold text-lg text-primary_orange">
                        Logistis
                      </h4>
                      <p className="text-black text-xl font-bold">
                        Can You Transport Furniture In Uber
                      </p>
                    </div>
                    <p>April 13, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
