import React from "react";
import Layout from "../layout";
import {
  Button,
  DisclosureComponent,
  Footer,
  QuoteForm,
  Testimonials,
} from "../components";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  boxes,
  delivery_courier,
  img1,
  img3,
  img4,
  person,
  person1,
  truck,
  truck1,
  truck2,
} from "../constants";
import { Carousel, Progress } from "@material-tailwind/react";
import { abouts, cards } from "../data";
import { Typography } from "@mui/material";

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
                <div className="flex flex-col space-y-8 px-8 justify-center">
                  <h5 className="font-semibold text-2xl">
                    We are Theo Transportation
                  </h5>
                  <h2 className="font-bold text-7xl">
                    World Class Transportation Service
                  </h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>

                  <Button
                    text="Read More"
                    buttonStyle="w-[45%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                    icon={
                      <div className="bg-primary_color p-3 rounded-md">
                        <ChevronRightIcon className="w-5 h-5 text-white" />
                      </div>
                    }
                  />
                </div>
                <div>
                  <img src={truck} />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
            <div className="max-w-[1240px] mx-auto py-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8 px-8 justify-center">
                  <h5 className="font-semibold text-2xl">
                    Tansport with Theo Transportation
                  </h5>
                  <h2 className="font-bold text-7xl">Transport Safely</h2>
                  <p>
                    Experience hassle-free journeys with our efficient transport
                    solutions that prioritize your comfort.
                  </p>

                  <Button
                    text="Read More"
                    buttonStyle="w-[45%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
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
                <div className="flex flex-col space-y-8 px-8 justify-center">
                  <h5 className="font-semibold text-2xl">
                    Your Business Partner
                  </h5>
                  <h2 className="font-bold text-7xl">
                    Transportation Made Simple
                  </h2>
                  <p>
                    Optimize your supply chain with our streamlined
                    transporation solution reducing production costs.
                  </p>

                  <Button
                    text="Read More"
                    buttonStyle="w-[45%] bg-gradient-to-r text-white  from-red-500  to-primary_orange py-3 text-lg font-bold rounded-md"
                    icon={
                      <div className="bg-primary_color p-3 rounded-md">
                        <ChevronRightIcon className="w-5 h-5 text-white" />
                      </div>
                    }
                  />
                </div>
                <div>
                  <img src={person1} />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="py-30">
        <div className="max-w-[1240px] mx-auto">
          <div className="w-full flex space-x-10">
            <div className="flex flex-1">
              <div className="h-full w-full flex justify-center relative">
                <div className="bg-[#ff8485] rounded-lg absolute bottom-0 right-0 z-50">
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

                <div className="absolute rounded-lg bottom-7 -left-30">
                  <img
                    src={img3}
                    alt="driver"
                    className="object-cover h-full rounded-lg"
                  />
                </div>

                <div className="bg-gradient-to-r text-white h-40 w-40 px-5  from-red-500  to-primary_orange absolute flex flex-col space-y-5 z-40 bottom-35 motion-safe:animate-bounce items-center justify-center -left-10 rounded-lg">
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
                  We are Theo Transportation
                </h5>
                <h3 className="font-bold text-5xl text-black leading-tight">
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

                <div className="w-full flex items-center space-x-10">
                  <div className="flex flex-col space-y-8 flex-1 py-4">
                    <p className="text-[#c7cdda] font-normal tracking-normal">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="flex flex-row space-x-3">
                      <div /> <h5 className="font-bold text-lg">Tom Anderson,</h5> <p>Founder & CEO</p>
                    </div>
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
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4 px-80 mb-10">
              <h5 className="text-primary_orange font-bold text-2xl">
                Our Service
              </h5>
              <span className="font-bold text-5xl text-black text-center leading-tight pb-4">
                We Find the{" "}
                <span className="text-[#1eae98]"> Destination </span> for Your{" "}
                <span className="text-[#1eae98]">Product </span>
              </span>
              <div className="py-[2.5px] px-[30px]  bg-primary_color" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition">
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
      <Testimonials />
      <div className="py-30 bg-[#003869CC]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col justify-center flex-1">
              <QuoteForm />
            </div>
            <div className="flex-1">
              <div className={`flex flex-col space-y-8 pl-30`}>
                <div className="flex flex-col space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    Frequently Asked Questions
                  </h3>
                  <h3 className="text-5xl font-bold text-white leading-relaxed">
                    Get the best logistic service
                  </h3>
                </div>
                <DisclosureComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
