import React from "react";
import Office from "../assets/project/project7.jpg";
import Office1 from "../assets/project/project6.jpg";
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
          <img src={Office1} className="img-fluid" alt="process img" />
        </div>
        <div>
          <img src={Office} style={{margin: "auto"}} className="img-fluid ofc-img" alt="process img" />
        </div>
        <div>
          <img src={Office1} className="img-fluid" alt="process img" />
        </div>
        <div>
          <img src={Office} style={{margin: "auto"}} className="img-fluid ofc-img" alt="process img" />
        </div>
      </Slider>
    </>
  );
}

export default OfficeSlider;
