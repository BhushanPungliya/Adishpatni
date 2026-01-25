import React from "react";
// import Office from "../assets/project/office.jpg";
import Slider from "react-slick";

function ProcessSlider() {
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
          <img src="/images/office.jpeg" style={{objectFit: "cover"}} className="img-fluid about-office" alt="process img" />
        </div>
        <div>
          <img src="/images/studio.jpg" style={{objectFit: "cover"}} className="img-fluid about-office" alt="process img" />
        </div>
        <div>
          <img src="/images/office.jpeg" style={{objectFit: "cover"}} className="img-fluid about-office" alt="process img" />
        </div>
        <div>
          <img src="/images/studio.jpg" style={{objectFit: "cover"}} className="img-fluid about-office" alt="process img" />
        </div>
      </Slider>
    </>
  );
}

export default ProcessSlider;
