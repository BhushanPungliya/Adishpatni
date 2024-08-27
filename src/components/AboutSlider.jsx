import React from "react";
import Slider from "react-slick";
import about1 from "../assets/about/01.png";
import about2 from "../assets/about/02.png";
import about3 from "../assets/about/03.png";
import about4 from "../assets/about/04.png";
import about5 from "../assets/about/05.png";

function AboutSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={about1} className="about-img1 img-fluid" alt="" />
        </div>
        <div>
          <img src={about2} className="about-img1 img-fluid" alt="" />
        </div>
        <div>
          <img src={about3} className="about-img1 img-fluid" alt="" />
        </div>
        <div>
          <img src={about4} className="about-img1 img-fluid" alt="" />
        </div>
        <div>
          <img src={about5} className="about-img1 img-fluid" alt="" />
        </div>
        <div>
          <img src={about1} className="about-img1 img-fluid" alt="" />
        </div>
        <div>
          <img src={about2} className="about-img1 img-fluid" alt="" />
        </div>
        <div>
          <img src={about3} className="about-img1 img-fluid" alt="" />
        </div>
      </Slider>
    </>
  );
}

export default AboutSlider;
