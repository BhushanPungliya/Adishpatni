import React from "react";
import Slider from "react-slick";
import Office1 from "../assets/office/adishpatni.jpg";
import Office2 from "../assets/office/adishpatni2.jpg";
import Office3 from "../assets/office/adishpatni3.jpg";

function OfficeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const officeImages = [Office1, Office2, Office3];

  return (
    <>
      <Slider {...settings}>
        {officeImages.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              className="img-fluid office--img"
              alt={`Office ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default OfficeSlider;
