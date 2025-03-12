import React, { useEffect, useState } from "react";
// import BackVideo from "../assets/estornino-4.mp4";
// import BackVideo from "../assets/EZS.mp4";
import Header from "../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import MobileHeader from "../components/MobileHeader";
import Inst from "../assets/insta.png";
import LinkedIn from "../assets/linkedin.svg";
import fLogo from "../assets/fb.png";
import xLogo from "../assets/x-logo.png";

function HomePage() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  function ToggleOpen() {
    setOpen(!open);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MobileHeader open={open} ToggleOpen={ToggleOpen} />
      <section className="hero-section">
        <div
          className="header"
          style={{ backgroundColor: "transparent", padding: "0" }}
        >
          <div className="left-item-hide"></div>
          <div className="text-center">
            <Link to="/works" style={{ height: "80px", width: "100%" }}>
              {/* <div className="header-title-logo">
            </div> */}
              <img
                src={Logo}
                className="header-title-logo"
                alt=""
              />
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
        <div className="hero-page"></div>
        {/* <video autoPlay loop muted>
          <source src={BackVideo} type="video/mp4" />
        </video> */}
        <div className="hero-title">
          <h1>Atelier Adish Patni</h1>
          <h6 className="hero-text" onClick={() => navigate("/works")}>
            Enter
          </h6>
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
          <h4 className="home-text">copyright 2025</h4>
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
    </>
  );
}

export default HomePage;
