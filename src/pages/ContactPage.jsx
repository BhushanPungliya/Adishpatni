import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Logo from "../assets/logo.svg";
import Inst from "../assets/insta.png";
import MobileHeader from "../components/MobileHeader";
import LinkedIn from "../assets/linkedin.svg";
import fLogo from "../assets/fb.png"
import xLogo from "../assets/x-logo.png"


function ContactPage() {
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
              {/* <div className="header-title-logo">
            </div> */}
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
      <section className="office-section">
        <div className="text-center">
          <h1 className="contact-title">Atelier Adish Patni</h1>
          <h6 className="contact-title mt-0 mb-3" style={{fontWeight: '400', fontSize: "14px"}}>
            art | architecture | interior
          </h6>
          <p className="office-text">
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="https://www.google.com/maps/dir//Atelier+Adish+Patni+-+Art+%7C+Architecture+%7C+Interiors,+12,+R.R+Heights+NS+Palya,+B.G+Road,+Bengaluru,+Karnataka+560076/@12.911657,77.598352,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae154a11c6e615:0xf300fae9f286a399!2m2!1d77.6004938!2d12.9116559"
            >
              R.R Heights, B.G Road <br /> Bangalore 560 076
            </Link>
          </p>
          <p className="office-telephone">D +91 85508 11105
          </p>
          <a
            href="mailto:studio@adishpatni.com"
            style={{ textDecoration: "none", color: "#000" }}
            rel="noreferrer"
            target="_blank"
          >
            <p className="office-text">studio@adishpatni.com</p>
          </a>
          {/* <h6 className="office-title-small pt-3">Office Indore</h6> */}
          {/* <p className="office-text">
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="https://www.google.com/maps/dir//Atelier+Adish+Patni+-+Art+%7C+Architecture+%7C+Interiors,+12,+R.R+Heights+NS+Palya,+B.G+Road,+Bengaluru,+Karnataka+560076/@12.911657,77.598352,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae154a11c6e615:0xf300fae9f286a399!2m2!1d77.6004938!2d12.9116559"
            >
              564, M.G. Road <br /> Indore 452 001
            </Link>
          </p> */}
          {/* <h6 className="office-title-small pt-4 mb-4">Office Bangalore</h6> */}
         
          <p className="pb-3">
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
          </p>
          <p className="office-text">For inquiries please contact -</p>
          <a
            href="mailto:info@adishpatni.com"
            style={{ textDecoration: "none", color: "#000" }}
            rel="noreferrer"
            target="_blank"
          >
            <p className="office-text">info@adishpatni.com</p>
          </a>
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

export default ContactPage;
