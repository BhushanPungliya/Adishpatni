import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Logo from "../assets/logo.svg";
import { Grid } from "@mui/material";
// import product1 from "../assets/project/project1.jpg";
// import product2 from "../assets/project/project2.jpg";
// import product3 from "../assets/project/project3.jpg";
// import product4 from "../assets/project/project4.jpg";
// import product5 from "../assets/project/project5.jpg";
// import product6 from "../assets/project/project1.jpg";
// import product7 from "../assets/project/project2.jpg";
// import product8 from "../assets/project/project3.jpg";
// import product9 from "../assets/project/project4.jpg";
// import product10 from "../assets/project/project5.jpg";
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
import MobileHeader from "../components/MobileHeader";
// import Arrow from "../assets/arrow-right.svg"
import LinkedIn from "../assets/linkedin.svg";
import fLogo from "../assets/fb.png";
import xLogo from "../assets/x-logo.png";

import Inst from "../assets/insta.png";

const productList = [
  { name: "Bora Residence", images: product1, hoverImg: product2 },
  { name: "Jain Residence", images: product2, hoverImg: product3 },
  { name: "Lowerd Office", images: product3, hoverImg: product4 },
  { name: "Residence 101", images: product4, hoverImg: product5 },
  {
    name: "Whitefield Residence",
    images: product5,
    hoverImg: product6,
  },
  { name: "Villa One", images: product10, hoverImg: product7 },
  { name: "Villa 34", images: product9, hoverImg: product8 },
  { name: "Thard Residence", images: product8, hoverImg: product9 },
  { name: "Talreja Residence", images: product7, hoverImg: product10 },
  { name: "EcHouse by the Stream", images: product6, hoverImg: product1 },
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
  { name: "Labour Lines", images: product1, hoverImg: product2 },
  { name: "Mandiram", images: product2, hoverImg: product3 },
  { name: "JRK Gardenia Homes", images: product3, hoverImg: product4 },
  { name: "AP Pokharna", images: product4, hoverImg: product5 },
  { name: "Rathi Residence", images: product5, hoverImg: product6 },
  { name: "Suresh Latha Residence", images: product10, hoverImg: product7 },
  { name: "Seven by MS Dhoni", images: product9, hoverImg: product8 },
  { name: "68 Residence", images: product8, hoverImg: product9 },
  { name: "Louvered SM2", images: product7, hoverImg: product10 },
  { name: "HM Farmhouse", images: product6, hoverImg: product1 },
  { name: "Lal Residence", images: product1, hoverImg: product2 },
  { name: "Mohanty' Residence", images: product2, hoverImg: product3 },
  { name: "Maloo Residence", images: product3, hoverImg: product4 },
  { name: "Anantara Homes", images: product4, hoverImg: product5 },
  { name: "Bharat Talreja Residence", images: product5, hoverImg: product6 },
  { name: "Jalan Residence", images: product10, hoverImg: product7 },
  { name: "Payal Anand Home", images: product9, hoverImg: product8 },
  { name: "Residence in Dahlem", images: product8, hoverImg: product9 },
  { name: "Siyal Residence", images: product7, hoverImg: product10 },
  { name: "Ecoquartier des Bergères", images: product6, hoverImg: product1 },
];
function ProjectCard({ proImg, proText, hoverImg, cls }) {
  return (
    <>
      <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
        <div className="project-card">
          <img src={proImg} className="img-fluid normal-img" alt="" />
          <img src={hoverImg} className="hover-img img-fluid" alt="" />
          <p className={`project-card-text${cls ? cls : ""}`}>{proText}</p>
        </div>
      </Grid>
    </>
  );
}

function ProjectPage() {
  const [open, setOpen] = useState(false);
  const pathName = useLocation();
  function ToggleOpen() {
    setOpen(!open);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [cars] = useState(productList);
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(12);

  const showMore = () => {
    if (numberOfitemsShown + 10 <= cars.length) {
      setNumberOfItemsToShown(numberOfitemsShown + 10);
    } else {
      setNumberOfItemsToShown(cars.length);
    }
  };

  const itemsToShow = useMemo(() => {
    return cars
      .slice(0, numberOfitemsShown)
      .map((product, index) => (
        <ProjectCard
          cls={product?.class}
          proImg={product?.images}
          hoverImg={product?.hoverImg}
          proText={product?.name}
        />
      ));
  }, [cars, numberOfitemsShown]);

  return (
    <>
      <MobileHeader open={open} ToggleOpen={ToggleOpen} />
      <section className="contact-section">
        <div className="header">
          <div className="left-item-hide"></div>
          <div className="text-center">
            <Link to="/works">
              {/* <div className="header-title-logo"></div> */}
              <img src={Logo} className="header-title-logo" alt="" />
            </Link>
            <Header />
          </div>
          <div className="bras-btn">
            <input type="checkbox" id="checkbox" onClick={ToggleOpen} />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </div>
      </section>
      <section className="project-section">
        <div className="text-center">
          <Link
            className={
              pathName.pathname === "/works" ? "active" : "header-item"
            }
            to="/works"
          >
            Gallery
          </Link>
          -
          <Link className="header-item" to="/list">
            List
          </Link>
          <div className="mt-4 project-container">
            <Grid
              container
              rowSpacing={{ xs: 1, sm: 1, md: 2 }}
              columnSpacing={{ xs: 2, sm: 3, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 20 }}
            >
              {itemsToShow.length ? itemsToShow : "Loading..."}
            </Grid>
            <button
              onClick={showMore}
              className="modal-btn"
              style={{
                width: "200px",
                color: "#000",
                fontSize: "16px",
                textTransform: "capitalize",
                marginTop: "30px",
              }}
            >
              show more
            </button>
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
      <div className="home-content">
        <div className="text-center">
          <h4 className="home-footer-text">Atelier Adish Patni</h4>
          <p
            className="my-2 d-flex align-items-center justify-content-center"
            style={{ gap: "12px" }}
          >
            <Link
              style={{ textDecoration: "none" }}
              to="https://www.instagram.com/atelieradishpatni/"
            >
              <img
                src={Inst}
                style={{ height: "26px" }}
                className="img-fluid"
                alt=""
              />
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              // to="https://www.instagram.com/atelieradishpatni/"
            >
              <img
                src={LinkedIn}
                style={{ height: "30px" }}
                className="img-fluid"
                alt=""
              />
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              // to="https://www.instagram.com/atelieradishpatni/"
            >
              <img
                src={xLogo}
                style={{ height: "26px" }}
                className="img-fluid"
                alt=""
              />
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              // to="https://www.instagram.com/atelieradishpatni/"
            >
              <img
                src={fLogo}
                style={{ height: "26px" }}
                className="img-fluid"
                alt=""
              />
            </Link>
          </p>
          <h4 className="home-text">copyright 2023</h4>
          <h4 className="home-text">
            <Link
              to="/terms-privacy"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Terms & Privacy
            </Link>
          </h4>
        </div>
      </div>
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
                  style={{ fontSize: "24px" }}
                  id="staticBackdropLabel"
                >
                  Atelier Adish Patni
                </h5>
                <h5
                  className="modal-title"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                  id="staticBackdropLabel"
                >
                  art | architecture | interior
                </h5>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-close"
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
    </>
  );
}

export default ProjectPage;
