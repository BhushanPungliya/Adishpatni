import { Grid } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import Office from "../assets/project/office.jpg";

function AwardSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={Office} className="img-fluid" alt="" />
        </div>
        <div>
          <img src={Office} className="img-fluid" alt="" />
        </div>
        <div>
          <img src={Office} className="img-fluid" alt="" />
        </div>
      </Slider>
    </>
  );
}

export default AwardSlider;
