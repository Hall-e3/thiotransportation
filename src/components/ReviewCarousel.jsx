import React from "react";

export default function ReviewCarousel({ reviews }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {reviews.map((rev) => (
        <div key={rev.id} className="bg-white shadow-lg rounded-lg p-6">
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
    </Slider>
  );
}
