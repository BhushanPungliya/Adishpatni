import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Grid } from "@mui/material";
import MobileHeader from "../components/MobileHeader";
import Inst from "../assets/insta.png";
import LinkedIn from "../assets/linkedin.svg";
import fLogo from "../assets/fb.png"
import xLogo from "../assets/x-logo.png"
import OfficeSlider from "../components/OfficeSlider";

function OfficePage() {
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
            <label for="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </div>
      </section>
      <section className="office-section">
        <div className="container">
          <Grid
            container
            columnSpacing={{ xs: 2, sm: 5, md: 5 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            <Grid item xs={4} sm={6} md={6}>
              <h6 className="office-title mt-3 p-0">Adish Patni</h6>
              <h6 className="office-title-normal m-0 pt-1">Artist Architect</h6>
              <div className="pb-4">
                <hr className="m-0" />
              </div>
              <p className="office-page-text mb-1">
                {" "}
                Adish Patni is an award-winning architect and interior designer,
                with many accolades to his name. With an impressive array of
                projects such as Pavilion house, Villa one under his belt, and
                multiple cover articles in Antarya, The Times of India and other
                such magazines. Adish has Created his own niche in the highly
                competitive world ofdesign. Named as World's Top 100 young
                architect by Archiprix Netherlands.
              </p>
              <p className="office-page-text">
                {" "}
                Adish's work reflects his ability to use an international
                aesthetic with Indian sensibility. The essence of his work is
                captured best when he knows his patrons are at the same
                wavelength, and are willing to live in a home than a
                well-designed house.
              </p>
              <p className="office-page-text mb-1">
                {" "}
                Adish Patni is an award-winning architect and interior designer,
                with many accolades to his name. With an impressive array of
                projects such as Pavilion house, Villa one under his belt, and
                multiple cover articles in Antarya, The Times of India and other
                such magazines. Adish has Created his own niche in the highly
                competitive world ofdesign. Named as World's Top 100 young
                architect by Archiprix Netherlands.
              </p>
              <p className="office-page-text">
                {" "}
                Adish's work reflects his ability to use an international
                aesthetic with Indian sensibility. The essence of his work is
                captured best when he knows his patrons are at the same
                wavelength, and are willing to live in a home than a
                well-designed house.
              </p>
              <h6 className="download-title">Download Profile</h6>
              {/* <div>
                {images.map((image, i) => (
                  <div key={i}>
                    <h6 className="office-page-title mt-4">{image?.title}</h6>
                    {currentImage === i ? (
                      ""
                    ) : (
                      <button
                        onClick={() => handleImageClick(i)}
                        className="modal-btn"
                        style={{
                          width: "200px",
                          textTransform: "capitalize",
                          marginTop: "0px",
                          textAlign: "left",
                        }}
                      >
                        show more
                      </button>
                    )}
                    {currentImage === i ? (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="img-fluid"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div> */}
              {/* <h6 className="office-page-title mt-4">Executive Assistant</h6>
              <div>
                <img src={dummy} alt="" className="img-fluid" />
              </div>
              <h6 className="office-page-title mt-4">Finance Assistant</h6>
              <img src={dummy} alt="" className="img-fluid" /> */}
              {/* <p className="office-page-text">Atelier Adish Patni</p> */}
              {/* <h6 className="office-page-title mt-4">Job Applications</h6>
              <div>
                <img src={dummy} alt="" className="img-fluid" />
              </div> */}
              {/* <p className="office-page-text">Atelier Adish Patni</p> */}
              {/* <h6 className="office-page-title mt-4">Atelier Adish Patni</h6>
              <p className="office-page-text">Fabian Jäkel</p>
              <h6 className="office-page-title mt-4">International Projects</h6>
              <p className="office-page-text">Atelier Adish Patni</p>
              <h6 className="office-page-title mt-4">
                Sebastian Treese Interiors
              </h6>
              <p className="office-page-text">June Hong, Managing Director</p> */}
            </Grid>

            <Grid item xs={4} sm={6} md={6}>
              <div className="office-img">
                <OfficeSlider />
              </div>
              {/* <h6 className="office-title">Team</h6>
              <div className="pb-4">
                <hr className="m-0" />
              </div>
              <h6 className="office-page-title">Past / Present</h6>
              <p className="office-page-text m-0">
                Abhishek K
                <br />
                Gayathri
                <br />
                Pooja <br />
                Mukund <br />
                Dharnebdra <br />
                Sathiya M <br />
                Praksh <br />
                Gaurav <br />
                Karan <br />
              </p>
              <h6 className="office-page-title mt-3">See All</h6> */}
              {/* <p className="office-page-text m-0">
                Kartik Unchil
                <br />
                Sonal T <br />
                Keerthana <br />
                Stuthi T <br />
                Akashata Ramakrishnan <br />
                Anand Popat <br />
                Anirudh S <br />
                Anthony P
                <br />
                Bernice Coutinho
                <br />
                Kshitij Sarote
                <br />
                Lakshmi Nair <br />
                Sai Meghna Ram <br />
                Alekhya Krishna <br />
                Ronak Jain <br />
                Pooja Nikitha
                <br />
                Rositha Rao
                <br />
                Radha Srinivas
                <br />
                Rohil Khatke <br />
                Rajvi Doshi <br />
                Sanjana Raju <br />
                Vaibhav Hanchate
                <br />
                Sarah George
                <br />
                Sishti Patil
                <br />
              </p> */}
            </Grid>
          </Grid>
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
          <h4 className="home-text">copyright 2024</h4>
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

export default OfficePage;
