import React, { useEffect, useState } from "react";
import Layout from "../layout";
import { service } from "../constants";
import {
  DisclosureComponent,
  QuoteForm,
  SecondFooter,
  Testimonials,
} from "../components";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { cards, reviews, works } from "../data";
import { Carousel } from "@material-tailwind/react";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (action) => {
    if (action === "next") {
      setCurrentSlide((prevSlide) =>
        prevSlide === reviews.length - 1 ? 0 : prevSlide + 1
      );
    } else if (action === "prev") {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? reviews.length - 1 : prevSlide - 1
      );
    } else if (action === "middle") {
      const middleIndex = Math.floor(reviews.length / 2);
      setCurrentSlide(middleIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange("next");
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      <div className="py-16 bg-no-repeat bg-cover bg-gradient-to-r from-cyan-500 to-primary_green opacity-90">
        <div className="max-w-[1240px] mx-auto py-20">
          <div className="flex flex-col items-center justify-center space-y-7">
            <h4 className="text-white font-bold text-7xl">Services</h4>

            <p className="flex items-center space-x-3">
              <p className="text-white font-normal text-sm">Home</p>
              <ChevronRightIcon className="w-4 h-4 text-white" />
              <p className="text-white font-normal text-sm">Services</p>
            </p>
          </div>
        </div>
      </div>
      <div className="py-30">
        <div className="max-w-[1240px] mx-auto">
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
      <div className="py-30 bg-[#393d48]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col space-y-20">
            <div className="flex items-center px-4 space-x-8">
              <div className="flex flex-col space-y-3 flex-1">
                <h5 className="text-primary_orange font-bold text-3xl">
                  How it works
                </h5>
                <h3 className="font-bold text-5xl text-white leading-normal">
                  We <span className="text-[#1eae98]">Make</span> &{" "}
                  <span className="text-[#1eae98]">Keep</span> it{" "}
                  <span className="text-[#1eae98]">Simple</span> For You
                </h3>
              </div>
              <p className="flex-1 text-[#c7cdda] font-medium tracking-normal">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiatmnis iste na minim veniam, quis nostrud
                exercita tion ullamco laboris nisi ut aliquip ex ea commodo
              </p>
            </div>
            <div className="flex">
              {works.map((work) => (
                <div
                  key={work.id}
                  className="transition flex flex-col space-y-6 flew-1"
                >
                  <div className="relative group duration-300 ease-in">
                    <div className="h-22 w-22 flex items-center justify-center rounded-full bg-white h">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="transition-transform transform group-hover:rotate-180"
                      />
                    </div>
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#1eae98] absolute top-0 group-hover:bg-primary_orange">
                      {work.id}
                    </div>
                  </div>
                  <h4 className="font-bold text-2xl text-white">
                    {work.title}
                  </h4>
                  <p className="text-md text-[#c7cdda] font-medium tracking-normal">
                    {work.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-30">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 ">
            <div className="flex flex-col space-y-10 md:col-span-3 pt-15 pr-25">
              <div className="flex flex-col space-y-4">
                <h5 className="text-primary_orange font-bold text-2xl">
                  Why Choose Us
                </h5>
                <span className="font-bold text-5xl text-black ">
                  The <span className="text-[#1eae98]">Fastest Way</span> To
                  Send & Recieve We
                </span>
              </div>
              <p className="text-grey_skip font-medium tracking-normal">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiatmnis iste na minim veniam, quis nostrud
                exercita tion ullamco laboris nisi ut aliquip ex ea commodo
              </p>
              <div className="flex flex-col space-y-12">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="bg-[#ff6731] rounded-full p-5">
                      <CheckIcon className="text-white w-5 h-5" />
                    </div>
                    <p className="text-grey_skip font-medium">
                      Sundori toma amar tumi nilimar dike takiye
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="bg-[#ff6731] rounded-full p-5">
                      <CheckIcon className="text-white w-5 h-5" />
                    </div>
                    <p className="text-grey_skip font-medium">
                      Kobita tumi sopno charini hoye khobor nio na
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="bg-[#ff6731] rounded-full p-5">
                      <CheckIcon className="text-white w-5 h-5" />
                    </div>
                    <p className="text-grey_skip font-medium">
                      Tumi jodi nodi hou ami hobo jege thaka chor
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="bg-[#ff6731] rounded-full p-5">
                      <CheckIcon className="text-white w-5 h-5" />
                    </div>
                    <p className="text-grey_skip font-medium">
                      Dekha holo kotha holo apon moner tane
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="bg-[#ff6731] rounded-full p-5">
                      <CheckIcon className="text-white w-5 h-5" />
                    </div>
                    <p className="text-grey_skip font-medium">
                      Bondhu torai amar jan torai amar pran
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="bg-[#ff6731] rounded-full p-5">
                      <CheckIcon className="text-white w-5 h-5" />
                    </div>
                    <p className="text-grey_skip font-medium">
                      Toder chhara bondhu ar gaite chay na pran
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <img
                src={service}
                alt="service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

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

      <Testimonials />
      <SecondFooter />
    </Layout>
  );
}
