import React from "react";
import Slider from "react-slick";
import Award1 from "../assets/awards/adishpatniwithmasters.jpg";
import Award2 from "../assets/awards/adishpatniwithmasters2.jpg";
import Award3 from "../assets/awards/adishpatniwithmasters3.jpg";
import Award4 from "../assets/awards/awards.jpg";
function AwardSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const awardImages = [Award3, Award1, Award2, Award4,];

  return (
    <>
      <Slider {...settings}>
        {awardImages.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              className="img-fluid"
              alt={`Award ${index + 1}`}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default AwardSlider;
