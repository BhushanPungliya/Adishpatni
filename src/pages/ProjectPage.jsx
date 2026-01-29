import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import product1 from "../assets/photos/product1.jpg";
import product2 from "../assets/photos/product2.jpg";
import product3 from "../assets/photos/product3.jpg";
import product4 from "../assets/photos/product4.jpg";
import product5 from "../assets/photos/product5.jpg";
import product6 from "../assets/photos/product6.jpg";
import product7 from "../assets/photos/product7.jpg";
import product8 from "../assets/photos/product8.jpg";
import product9 from "../assets/photos/product9.jpg";
import product10 from "../assets/photos/product10.jpg";
import home1 from "../assets/home/home.jpg";
import home2 from "../assets/home/home2.jpg";
import home3 from "../assets/home/home3.jpg";
import home4 from "../assets/home/home4.jpg";
import Slider from "react-slick";
import MainLayout from "../components/MainLayout";

const productList = [
  { name: "Bora Residence", images: product1, hoverImg: "/images/Chugh_Courtyard.jpg" },
  { name: "Jain Residence", images: product2, hoverImg: product3 },
  { name: "Louvered SM", images: product3, hoverImg: product4 },
  { name: "Residence 101", images: product4, hoverImg: product5 },
  { name: "Whitefield Residence", images: product5, hoverImg: product6 },
  { name: "Villa One", images: product10, hoverImg: product7 },
  { name: "Villa 34", images: product9, hoverImg: product8 },
  { name: "Thard Residence", images: product8, hoverImg: product9 },
  { name: "Talreja Residence", images: product7, hoverImg: product10 },
  { name: "House by the Stream", images: product6, hoverImg: product1 },
  { name: "Casa Milieu", images: product1, hoverImg: product2 },
  { name: "Mithi", images: product2, hoverImg: product3 },
  { name: "Kochi Residence", images: product3, hoverImg: product4 },
  { name: "Faceted Facade", images: product4, hoverImg: product5 },
  { name: "Seagulls", images: product5, hoverImg: product6 },
  { name: "Court House", images: product10, hoverImg: product7 },
  { name: "H-House", images: product9, hoverImg: product8 },
  { name: "Honiton House", images: product8, hoverImg: product9 },
  { name: "Circle Of Tree", images: product7, hoverImg: product10 },
  { name: "Villa 64", images: product6, hoverImg: product1 },
];

function ProjectCard({ proImg, proText, hoverImg, cls }) {
  return (
    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
      <div className="project-card">
        <img
          src={proImg}
          className="img-fluid normal-img"
          alt={proText}
          loading="lazy"
          decoding="async"
        />
        <img
          src={hoverImg}
          className="hover-img img-fluid"
          alt={proText}
          loading="lazy"
          decoding="async"
        />
        <p className={`project-card-text${cls ? cls : ""}`}>{proText}</p>
      </div>
    </Grid>
  );
}

function ProjectPage() {
  const pathName = useLocation();
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(12);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showMore = () => {
    if (numberOfitemsShown + 10 <= productList.length) {
      setNumberOfItemsToShown(numberOfitemsShown + 10);
    } else {
      setNumberOfItemsToShown(productList.length);
    }
  };

  const itemsToShow = useMemo(() => {
    return productList
      .slice(0, numberOfitemsShown)
      .map((product, index) => (
        <ProjectCard
          key={index}
          cls={product?.class}
          proImg={product?.images}
          hoverImg={product?.hoverImg}
          proText={product?.name}
        />
      ));
  }, [numberOfitemsShown]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const sliderImages = [home1, home2, home3, home4];

  return (
    <MainLayout>
      <section className="project-section">
        <div className="text-center">
          {/* <Link
            className={pathName.pathname === "/works" ? "active" : "header-item"}
            to="/works"
          >
            Gallery
          </Link> */}
          <div className="mt-4 project-container">
            {pathName.pathname === "/works" ? (
              <div className="gallery-slider mb-5">
  <Slider {...sliderSettings}>
    {sliderImages.map((img, index) => (
      <div key={index} style={{ backgroundColor: "#141414" }}>
        <img
          src={img}
          alt={`gallery-${index}`}
          className="img-fluid gallery-slider-img"
          loading="lazy"
          decoding="async"
          // --- Yahan changes kiye hain ---
          style={{ 
            width: "auto", 
            margin: "0 auto",
            height: "70vh",     // Height set ki 90vh
            objectFit: "cover"  // Image stretch nahi hogi, proper crop hokar fit hogi
          }}
        />
      </div>
    ))}
  </Slider>
</div>
            ) : (
              <Grid
                container
                rowSpacing={{ xs: 1, sm: 1, md: 2 }}
                columnSpacing={{ xs: 2, sm: 3, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 20 }}
              >
                {itemsToShow.length ? itemsToShow : "Loading..."}
              </Grid>
            )}

            {/* Show More Button - only if grid is visible */}
            {pathName.pathname !== "/works" && numberOfitemsShown < productList.length && (
              <button
                onClick={showMore}
                className="modal-btn"
                style={{
                  width: "200px",
                  color: "#fff",
                  fontSize: "16px",
                  textTransform: "capitalize",
                  marginTop: "30px",
                }}
              >
                show more
              </button>
            )}

            <div className="my-5">
              <button
                type="button"
                className="download-btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Download Works
              </button>
            </div>
          </div>
        </div>
      </section>
       <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div>&nbsp;</div>
              <div className="text-center">
                <h5
                  className="modal-title"
                  style={{ fontSize: "24px", color: "#FFFFFF" }}
                  id="staticBackdropLabel"
                >
                  Atelier Adish Patni
                </h5>
                <h5
                  className="modal-title"
                  style={{ fontSize: "16px", color: "#FFFFFF" , fontWeight: "500" }}
                  id="staticBackdropLabel"
                >
                  art | architecture | interior
                </h5>
              </div>
              <div>
                <button
  type="button"
  className="btn-close btn-close-white" // Yahan change kiya hai
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
              </div>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">
                  <p className="modal-text">First Name</p>
                  <input type="text" className="w-100 modal-input" />
                </div>
                <div className="col-12 mt-3">
                  <p className="modal-text">Email Address</p>
                  <input type="text" className="w-100 modal-input" />
                </div>
                <div className="col-12 mt-3">
                  <p className="modal-text">Contact Number</p>
                  <input type="text" className="w-100 modal-input" />
                </div>
                <div className="col-12 mt-3">
                  <p className="modal-text">Message (text)</p>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    className="w-100 modal-input"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="close-btn" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="close-btn">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProjectPage;
