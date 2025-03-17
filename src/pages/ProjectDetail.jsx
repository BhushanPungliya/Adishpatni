import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Logo from "../assets/logo.svg";
import Item1 from "../assets/project/product-detail.jpg";
import MobileHeader from "../components/MobileHeader";

function ProjectDetail() {
  const [open, setOpen] = useState(false);
  function ToggleOpen() {
    setOpen(!open);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MobileHeader open={open} />
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
      <section className="project-detail">
        <img src={Item1} className="img-fluid" alt="" />
        <div className="container">
          <div className="text-center py-3">
            <Link className="header-item">Gallery</Link>-
            <Link className="header-item">List</Link>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <p className="m-0 detail-title">Rue des Landes</p>
              <p className="m-0 detail-sub-title">Chatou, France</p>
            </div>
            <div className="col-sm-12 col-lg-8">
              <p className="m-0 detail-sub-text">
                This vision for a small hamlet of ten houses nestled around a
                common village green with a landscaped heart is located in
                Chatou, a noble town on the western doorsteps of Paris.
              </p>
              <p className="m-0 detail-sub-text">
                The houses present themselves as an ensemble with a shared
                architectural character, yet subtle differences distinguish
                themselves from one another, creating a strong sense of place.
                The architectural appearance is a direct continuation of the
                local, Catovien, architectural precedent, weaving the houses
                perfectly into the existing urban fabric.
              </p>
              <p className="m-0 detail-sub-text">
                Eight of the ten houses are designated as single-family homes,
                whilst the two larger houses will include 11 apartments rented
                as social housing.
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="m-0 detail-sub-text" style={{ textAlign: "unset" }}>
              Type: Urban masterplan & arch. design Gross floor area: 3.594 m²
              Status: in planning Client: Erisma – Groupe Sodes Year: 2023–
            </p>
          </div>
        </div>
      </section>
      <div className="home-content">
        <div className="text-center">
          <h4 className="home-text-title">Atelier Adish Patni</h4>
          <h4 className="home-text">copyright 2025</h4>
          <h4 className="home-text">
            <Link
              to="/terms-privacy"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              Terms & Privacy
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
