import React from "react";
import Layout from "../layout";
import {
  Button,
  DisclosureComponent,
  Footer,
  QuoteForm,
  Testimonials,
} from "../components";
import { ChevronRightIcon, PlayIcon } from "@heroicons/react/24/solid";
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
  videoImage,
} from "../constants";
import { Carousel } from "@material-tailwind/react";
import { abouts, cards } from "../data";


export default function Home() {
  return (
    <Layout>
      <div className="py-16">
        <Carousel
          transition={{ duration: 2 }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex bg-black -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className=" bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
            <div className="max-w-[1240px] mx-auto py-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8 px-8 justify-center order-last lg:order-none">
                  <h5 className="font-semibold text-2xl text-white">
                    We are Theo Transportation
                  </h5>
                  <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl  text-white">
                    World Class Transportation Service
                  </h2>
                  <p className="text-white font-normal text-base">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>

                  <Button
                    text="Read More"
                    buttonStyle="w-[70%] md:w-[45%]  bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                    icon={
                      <div className="bg-primary_color p-3 rounded-md">
                        <ChevronRightIcon className="w-5 h-5 text-white" />
                      </div>
                    }
                  />
                </div>
                <div className="order-first lg:order-none flex items-center justify-center">
                  <img src={truck} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
            <div className="max-w-[1240px] mx-auto py-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8 px-8 justify-center">
                  <h5 className="font-semibold text-2xl text-white">
                    Tansport with Theo Transportation
                  </h5>
                  <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl  text-white">
                    Transport Safely
                  </h2>
                  <p className="text-white font-normal text-base">
                    Experience hassle-free journeys with our efficient transport
                    solutions that prioritize your comfort.
                  </p>

                  <Button
                    text="Read More"
                    buttonStyle="w-[70%] md:w-[45%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                    icon={
                      <div className="bg-primary_color p-3 rounded-md">
                        <ChevronRightIcon className="w-5 h-5 text-white" />
                      </div>
                    }
                  />
                </div>
                <div>
                  <img src={person} />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-no-repeat bg-cover bg-gradient-to-r from-primary_green to-cyan-500 opacity-90">
            <div className="max-w-[1240px] mx-auto py-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8 px-8 justify-center order-last lg:order-none">
                  <h5 className="font-semibold text-2xl text-white">
                    Your Business Partner
                  </h5>
                  <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl  text-white">
                    Transportation Made Simple
                  </h2>
                  <p className="text-white font-normal text-base">
                    Optimize your supply chain with our streamlined
                    transporation solution reducing production costs.
                  </p>

                  <Button
                    text="Read More"
                    buttonStyle="w-[70%] md:w-[45%]  bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                    icon={
                      <div className="bg-primary_color p-3 rounded-md">
                        <ChevronRightIcon className="w-5 h-5 text-white" />
                      </div>
                    }
                  />
                </div>
                <div className="order-first lg:order-none">
                  <img src={person1} />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="sm:pt-15 lg:pb-30 sm:pb-16  sm:py-20 md:py-40 px-4 sm:px-20 md:px-10 mb-60 lg:mb-90">
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

            <div className="flex flex-1 pt-20 md:pt-45 lg:pt-0 md:col-span-5">
              <div className="flex flex-col space-y-6">
                <h5 className="text-primary_orange font-bold text-xl md:text-2xl lg:text-3xl">
                  We are Theo Transportation
                </h5>
                <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                  World Class <span className="text-[#1eae98]">Logistic</span>{" "}
                  and <span className="text-[#1eae98]">Transportation</span>{" "}
                  Service
                </h3>
                <p className="flex-1 text-[#c7cdda] font-semibold tracking-normal">
                  Accusa mnis iste natus error sit volupta toloris onder boura
                  gist onpores tem accusa nulla pariatur.
                </p>

                <p className="flex-1 text-[#c7cdda] font-normal tracking-normal">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiatmnis iste natus error sit voluptatem
                  accusa mnis iste natus error sit voluptatem accusa nulla
                  pariatur.
                </p>

                <div className="w-full flex items-center space-x-6 mb-6">
                  <div className="flex flex-col space-y-8 flex-1  border-l-4 pl-16  border-l-primary_color pl-">
                    <p className="text-[#c7cdda] font-normal tracking-normal">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="flex flex-row space-x-3 items-center">
                      <hr className=" border-1 border-[#dde4f6] w-10" />
                      <h5 className="font-bold text-lg">Tom Anderson,</h5>{" "}
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
        <div className="border-8 border-white absolute -top-80 right-[20%] rounded-lg hidden ">
          <img
            src={videoImage}
            alt="videoImage"
            className="object-contain w-full h-full rounded-lg"
          />
          <div className="bg-gradient-to-r from-[#005bac] to-primary_green motion-safe:animate-ping-once text-white h-40 w-40 rounded-full absolute flex flex-col space-y-5 z-20 bottom-50 left-[42%] items-center justify-center">
            <PlayIcon className="w-7 h-7" />
          </div>
        </div>
        <div className="2xl:w-[60%] 2xl:-top-95 2xl:right-[15%] 2xl:left-[20%] border-8 border-white absolute rounded-lg -top-40 lg:-top-90 right-2 mx-4">
          <img
            src={videoImage}
            alt="videoImage"
            className="object-contain w-full h-full rounded-lg"
          />
          <div className="bg-gradient-to-r lg:bottom-60 lg:right-[40%] lg:left-[45%] from-[#005bac] to-primary_green motion-safe:animate-ping-once text-white h-25 w-25 rounded-full absolute flex flex-col space-y-5 z-20 bottom-[25%] left-[35%] right-[45%] items-center justify-center">
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
      <div className="py-15 sm:py-20 md:py-40 px-4 sm:px-20 md:px-10">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4 lg:px-80 mb-10">
              <h5 className="text-primary_orange font-bold text-2xl">
                Our Service
              </h5>
              <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-black text-center leading-tight pb-4">
                We Find the{" "}
                <span className="text-[#1eae98]"> Destination </span> for Your{" "}
                <span className="text-[#1eae98]">Product </span>
              </span>
              <div className="py-[2.5px] px-[30px]  bg-primary_color" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-14 lg:gap-x-8 transition">
            {cards.map((card) => (
              <div
                key={card.id}
                className="group flex duration-300 ease-in hover:-translate-y-3 flex-col space-y-8 border border-stroke rounded-lg px-14 py-10 hover:bg-gradient-to-r from-cyan-500 to-primary_green"
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
                  <p className="font-bold group-hover:text-white">Read More</p>
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
              <h5 className="text-primary_orange font-bold text-2xl">
                How it works
              </h5>
              <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center leading-tight pb-4">
                World Class <span className="text-[#1eae98]"> Logistics </span>
                and <span className="text-[#1eae98]">Transportation </span>
              </span>
              <div className="py-[2.5px] px-[30px]  bg-primary_color" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-3 flex flex-col space-y-8 lg:space-y-30 mb-6 lg:mb-0">
              <div className="lg:relative">
                <div className="flex flex-col lg:items-center justify-center h-[30vh] md:h-[25vh] px-8 space-y-4 bg-white rounded-lg shadow-sm">
                  <p className="font-bold text-base rounded-full h-18 w-18 flex justify-center items-center bg-[#1eae98]">
                    01
                  </p>
                  <h4 className="font-bold text-2xl">Pick A Service</h4>
                  <p className="text-grey_skip font-light lg:text-center">
                    Ynim ad minim veniam ex ercitation pllamycp.
                  </p>
                </div>
                <p className="font-bold text-base absolute -top-7 -left-6.5 rounded-full p-6 bg-[#1eae98] hidden">
                  01
                </p>
              </div>
              <div className="relative">
                <div className="flex flex-col lg:items-center justify-center h-[30vh] md:h-[25vh] px-8  space-y-4  bg-white rounded-lg shadow-sm">
                  <p className="font-bold text-base rounded-full h-18 w-18 flex justify-center items-center bg-[#1eae98]">
                    03
                  </p>
                  <h4 className="font-bold text-2xl">Pick A Service</h4>
                  <p className="text-grey_skip font-light lg:text-center">
                    Dim ad minim veniam ex ercitation cllamycd.
                  </p>
                </div>
                <p className="font-bold text-base absolute -top-7 -left-6.5 rounded-full p-6 bg-[#1eae98] hidden">
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
                  <p className="font-bold text-base rounded-full h-18 w-18 flex justify-center items-center bg-[#1eae98]">
                    02
                  </p>
                  <h4 className="font-bold text-2xl">Send Product</h4>
                  <p className="text-grey_skip font-light lg:text-center">
                    Unim ad minim veniam ex ercitation illamyce.
                  </p>
                </div>
                <p className="font-bold text-base absolute -top-7 -left-6.5 rounded-full p-6 bg-[#1eae98] hidden">
                  02
                </p>
              </div>
              <div className="relative">
                <div className="flex flex-col lg:items-center justify-center h-[30vh] md:h-[25vh] px-8 space-y-4 bg-white rounded-lg shadow-sm">
                  <p className="font-bold text-base rounded-full h-18 w-18 flex justify-center items-center bg-[#1eae98]">
                    03
                  </p>
                  <h4 className="font-bold text-2xl">Clear Payment</h4>
                  <p className="text-grey_skip font-light lg:text-center">
                    Onim ad minim veniam ex ercitation illamycy.
                  </p>
                </div>
                <p className="font-bold text-base absolute -top-7 -left-6.5 rounded-full p-6 bg-[#1eae98] hidden">
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
      <div className="py-30 mb-50">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center justify-center space-y-">
            <div className="flex flex-col items-center justify-center space-y-4 lg:px-80 mb-10">
              <h5 className="text-primary_orange font-bold text-2xl">
                From Our Blog
              </h5>
              <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-black text-center leading-tight pb-4">
                Get latest <span className="text-[#1eae98]"> news </span> and
                Your <span className="text-[#1eae98]">updates </span>
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
    </Layout>
  );
}
