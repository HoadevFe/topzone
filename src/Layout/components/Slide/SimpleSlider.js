import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { DataSlide } from "./Data";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {DataSlide.map((item) => (
          <div key={item.id}>
            <img className="SliderImg" src={item.thumbnail} alt={item.id} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
