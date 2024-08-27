import React from "react";
import Office from "../assets/project/office.jpg";
import Slider from "react-slick";

function OfficeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={Office} className="img-fluid about-office" alt="process img" />
        </div>
        <div>
          <img src={Office} className="img-fluid about-office" alt="process img" />
        </div>
        <div>
          <img src={Office} className="img-fluid about-office" alt="process img" />
        </div>
      </Slider>
    </>
  );
}

export default OfficeSlider;
