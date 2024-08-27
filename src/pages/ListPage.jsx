import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Logo from "../assets/logo.svg";
import MobileHeader from "../components/MobileHeader";
import Inst from "../assets/insta.png";
import LinkedIn from "../assets/linkedin.svg";
import fLogo from "../assets/fb.png"
import xLogo from "../assets/x-logo.png"

const data = [
  {
    name: "House by the Stream",
    location: "Coonoor",
    gfa: "4150",
    year: "2019",
  },
  {
    name: "Residence 101",
    location: "Indore",
    gfa: "6285",
    year: "2018",
  },
  {
    name: "Casa Milieu",
    location: "Coonoor",
    gfa: "24548",
    year: "2016",
  },
  {
    name: "Mithi",
    location: "Bangalore",
    gfa: "28375",
    year: "2014–",
  },
  {
    name: "Kochi Residence",
    location: "Ernakulam",
    gfa: "28375",
    year: "2018–",
  },
  {
    name: "Faceted Facade",
    location: "Bangalore",
    gfa: "20255",
    year: "2017",
  },
  {
    name: "Villa 34",
    location: "Coonoor",
    gfa: "7240",
    year: "2015",
  },
  {
    name: "Seagulls",
    location: "Bangalore",
    gfa: "5850",
    year: "2015–",
  },
  {
    name: "Court House",
    location: "Pune ",
    gfa: "16540",
    year: "2015–",
  },
  {
    name: "H-House",
    location: "Bangalore",
    gfa: "4720",
    year: "2015–",
  },
  {
    name: "Honiton House",
    location: "Coonoor",
    gfa: "4180",
    year: "2016–",
  },
  {
    name: "Circle Of Tree",
    location: "Bangalore",
    gfa: "2880",
    year: "2019–",
  },
  {
    name: "Villa 64",
    location: "Coonoor",
    gfa: "6975",
    year: "2015",
  },
  {
    name: "Labour Lines",
    location: "Coonoor",
    gfa: "28680",
    year: "2017",
  },
  {
    name: "Mandiram",
    location: "Bangalore",
    gfa: "1548 ",
    year: "2016",
  },
  {
    name: "JRK Gardenia Homes",
    location: "Indore",
    gfa: "4 Acres",
    year: "2017",
  },
  {
    name: "AP Pokharna",
    location: "Pune",
    gfa: "2700",
    year: "2021",
  },
  {
    name: "Rathi Residence",
    location: "Indore",
    gfa: "5785",
    year: "2021",
  },
  {
    name: "Suresh Latha Residence",
    location: "Bangalore",
    gfa: "6525",
    year: "2021",
  },
  {
    name: "Seven by MS Dhoni",
    location: "Ranchi",
    gfa: "1725",
    year: "2017",
  },
  {
    name: "68 Residence",
    location: "Guwahati",
    gfa: "8765",
    year: "2018",
  },
  {
    name: "Thard Residence",
    location: "Guwahati",
    gfa: "7230",
    year: "2021",
  },
  {
    name: "Villa One",
    location: "Pune",
    gfa: "8180",
    year: "2018",
  },
  {
    name: "Whitefield Residence",
    location: "Indore",
    gfa: "11250",
    year: "2021",
  },
  {
    name: "Louvered SM2",
    location: "Indore",
    gfa: "3350",
    year: "2017",
  },
  {
    name: "HM Farmhouse",
    location: "Bhopal",
    gfa: "7150",
    year: "2020",
  },
  {
    name: "Lal Residence",
    location: "Bangalore",
    gfa: "9380",
    year: "2022",
  },
  {
    name: "Mohanty' Residence",
    location: "Bhopal",
    gfa: "2220",
    year: "2021",
  },
  {
    name: "Maloo Residence",
    location: "Indore",
    gfa: "7060",
    year: "2021",
  },
  {
    name: "Bora Residence",
    location: "Pune",
    gfa: "4290",
    year: "2018",
  },
  {
    name: "Talreja Residence",
    location: "Bhopal",
    gfa: "5650",
    year: "2018",
  },
  {
    name: "Anantara Homes",
    location: "Bhopal",
    gfa: "9 Acres",
    year: "2021",
  },
  {
    name: "Bharat Talreja Residence",
    location: "Bhopal",
    gfa: "9380",
    year: " 2023",
  },
  {
    name: "Jalan Residence",
    location: "Kolkata",
    gfa: "13880",
    year: "2022",
  },
  {
    name: "Payal Anand Home ",
    location: "Coonoor",
    gfa: "8250",
    year: "2022",
  },
  {
    name: "Siyal Residence",
    location: "Indore",
    gfa: "9670",
    year: "2023",
  },
];

function ListPage() {
  const [open, setOpen] = useState(false);
  const pathName = useLocation();
  function ToggleOpen() {
    setOpen(!open);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <Link
            className={pathName.pathname === "/list" ? "active" : "header-item"}
            to="/list"
          >
            List
          </Link>
          <div className="mt-4 project-container">
            <table className="table-container">
              <thead className="table-thead">
                <tr>
                  {["Address", "Location", "GFA-Sq.Ft", "Year"].map((h) => {
                    return <th style={{ width: "50%" }}>{h}</th>;
                  })}
                </tr>
              </thead>
              <tbody className="table-tbody">
                {data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ width: "50%" }}>{item?.name}</td>
                      <td style={{ width: "50%" }}>{item?.location}</td>
                      <td style={{ width: "50%" }}>{item?.gfa}</td>
                      <td style={{ width: "50%" }}>{item?.year}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mobile-list-table">
              {data.map((item, index) => {
                return (
                  <div className="list-body" key={index}>
                    <p className="mobile-table-text">{item?.name}</p>
                    <p className="mobile-table-text">
                      {item?.location + ", " + item?.year}
                    </p>
                    <p className="mobile-table-text">{item?.gfa}</p>
                  </div>
                );
              })}
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

export default ListPage;
