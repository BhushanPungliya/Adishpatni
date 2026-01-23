import { useEffect } from "react";
import { Link } from "react-router-dom";
import Item1 from "../assets/project/product-detail.jpg";
import Item2 from "../assets/project/project1.jpg";
import Item3 from "../assets/project/project2.jpg";
import Item4 from "../assets/project/project3.jpg";
import Item5 from "../assets/project/project4.jpg";
import Slider from "react-slick";
import MainLayout from "../components/MainLayout";

function ProjectDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Item1, Item2, Item3, Item4, Item5];
  return (
    <MainLayout>
      <section className="project-detail">
        <div className="gallery-slider">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} style={{ backgroundColor: "#141414" }}>
                <img
                  src={img}
                  className="img-fluid"
                  alt={`project-img-${index}`}
                  style={{ width: "100%", height: "70vh", objectFit: "contain" }}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="container">
          <div className="text-center py-3">
            <Link className="header-item">Gallery</Link>-
            <Link className="header-item">List</Link>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h1 className="detail-title">Residence 101</h1>
              <h6 className="detail-sub-title">Indore, India</h6>
            </div>
            <div className="col-md-6">
              <p className="detail-sub-text">
                Architecture for us is a process of constantly examining, Analyzing and re-interpreting reality. It has provided the opportunity to investigate man’s essence and to attempt to fathom his nature.
                We have come to understand architecture as the communication of stories - an ancient practice of transmitting experience. All the core of these experiences are the things we have in common; familiar yet unique vocabularies, values and beliefs, all of which synthesized in language and craft.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ProjectDetail;
