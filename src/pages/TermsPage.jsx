import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Logo from "../assets/logo.svg";
import { Grid } from "@mui/material";
// import about1 from "../assets/about/01.png";
// import about2 from "../assets/about/02.png";
// import about3 from "../assets/about/03.png";
// import about4 from "../assets/about/04.png";
// import about5 from "../assets/about/05.png";
import Inst from "../assets/insta.png";
import LinkedIn from "../assets/linkedin.svg";
import fLogo from "../assets/fb.png"
import xLogo from "../assets/x-logo.png"
import MobileHeader from "../components/MobileHeader";

function TermsPage() {
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
      <section className="about-section">
        <div className="container">
          <div className="about-img">
            <h6 className="terms-title">Legal notice</h6>
            <div className="pb-4">
              <hr className="m-0" style={{ color: "#000" }} />
            </div>
            <Grid
              container
              columnSpacing={{ xs: 2, sm: 5, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12, xl: 12 }}
            >
              <Grid item xs={2} sm={4} md={4} xl={4}>
                <p className="terms-text-title">
                  <strong>
                    Sebastian Treese Architects <br />
                    Partnership mbB
                  </strong>
                </p>
                <p className="terms-text">office@sebastiantreese.de</p>
                <p className="terms-text">
                  Kurfürstendamm 58 <br />
                  10707 Berlin
                </p>
                <p className="terms-text">
                  T + 49 30 69 533 47 0 <br />T + 49 30 69 533 47 0
                </p>
                <p className="terms-text">
                  Firm Registration Number: PR 1470 B <br />
                  VAT Number: DE 276341192
                </p>
                <br />
                <br />
                <p className="terms-text">
                  Managing Directors: <br />
                  Sebastian Julien Treese, Dipl. Ing. Architect <br />
                  Chamber of Architects Berlin <br />
                  Member ID: 12532 <br />
                </p>
              </Grid>
              <Grid item xs={2} sm={4} md={4} xl={4}>
                <p className="terms-text">
                  Executive Assistant: <br />
                  Alina Haspel <br />
                </p>
                <p className="terms-text">
                  Job Applications: <br />
                  jobs@sebastiantreese.de <br />
                </p>
                <p className="terms-text">
                  Professional Regulations Architects Chamber Berlin (Berlin
                  Architects and Building Chamber Act of July 19, 1994)
                </p>
                <br />
                <br />
                <p className="terms-text">
                  Content responsibility according to § 5 TMG: Sebastian Treese
                </p>
                <p className="terms-text">
                  Disclaimer: <br />
                  Despite careful examination, we assume no liability for the
                  content of external links.
                  <br />
                  <br />
                  The operators of the linked pages are solely responsible for
                  their content.
                </p>
              </Grid>
              <Grid item xs={2} sm={4} md={4} xl={4}>
                <p className="terms-text">
                  Photography:
                  <br />
                  Andreas Gehrke <br />
                  Gregor Hohenberg <br />
                  Fabian Jäkel <br />
                  Alina Simmelbauer <br />
                  Matthias Ziegler
                </p>
              </Grid>
            </Grid>
            <h6 className="terms-title">Privacy notice</h6>
            <div className="pb-4">
              <hr className="m-0" />
            </div>
            <Grid
              container
              columnSpacing={{ xs: 2, sm: 5, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12, xl: 12 }}
            >
              <Grid item xs={2} sm={4} md={4} xl={4}>
                <p className="terms-text">German translation</p>
                <p className="terms-text">
                  This Privacy Notice was last updated: February 1, 2021
                </p>{" "}
                <br />
                <p className="terms-text-title">
                  <strong>I. Introduction/Controllers</strong>
                </p>
                <p className="terms-text">
                  This privacy notice applies with regard to the processing of
                  personal data by
                </p>
                <p className="terms-text">
                  Sebastian Treese Architects Partnership mbB ("we", "our",
                  "us")
                </p>
                <p className="terms-text">office@sebastiantreese.de</p>
                <p className="terms-text">
                  Kurfürstendamm 58 <br />
                  10707 Berlin
                </p>
                <p className="terms-text">
                  T + 49 30 69 533 47 0 <br />F + 49 30 69 533 47 29
                </p>
                <p className="terms-text">
                  in connection with the provision of the website
                  www.sebastiantreese.de, including the services provided via
                  this website.
                </p>
                <br />
                <br />
                <p className="terms-text-title">
                  <strong>II. Categories of personal data</strong>
                </p>
                <p className="terms-text">
                  The following data regarding the use of and the interactions
                  with our services, is automatically collected when you use our
                  website and services:
                </p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <li className="terms-text">
                    information about the browser (type and version used,
                    language)
                  </li>
                  <li className="terms-text">
                    the Internet service provider of the user
                  </li>
                  <li className="terms-text">the IP address of the user</li>
                  <li className="terms-text">
                    date and time of access request
                  </li>
                  <li className="terms-text">
                    time zone difference to Greenwich Mean Time (GMT)
                  </li>
                  <li className="terms-text">access status/HTTP status code</li>
                  <li className="terms-text">the data volume transferred</li>
                  <li className="terms-text">
                    websites from which the system of the user comes to our
                    website
                  </li>
                  <li className="terms-text">
                    websites accessed by the user's system through our website
                  </li>
                  <li className="terms-text">
                    type of device and operating system
                  </li>
                </ul>
                <br />
                <p className="terms-text-title">
                  <strong>
                    III. Processing purposes, legal basis and recipients and
                    categories of recipients
                  </strong>
                </p>
                <p className="terms-text">
                  Below you can find a description of the purposes for which we
                  process personal data, including the recipients or categories
                  of recipients to whom we transfer personal data for the
                  purposes mentioned in each case and the relevant legal basis.
                </p>
                <p className="terms-text">
                  Any access to personal data is restricted to those persons who
                  need to know the respective personal data in order to perform
                  their professional duties ("need-to-know principle").
                </p>
                <p className="terms-text">
                  Personal data will only be disclosed to third parties (eg to
                  courts or law enforcement agencies) if we are required to do
                  so by law, if we have obtained the relevant consent, or if the
                  disclosure is otherwise permitted by law.
                </p>
                <p className="terms-text">
                  We may transfer your personal data for the respective purposes
                  to the following recipients and categories of recipients:
                </p>
                <ul>
                  <li className="terms-text">
                    {" "}
                    <span style={{ textDecoration: "underline" }}>
                      Data processors
                    </span>{" "}
                    – Just like other data controllers, we rely on the services
                    of third parties. The service providers are subject to local
                    data protection laws and are also contractually obligated to
                    process the personal data only in accordance with the
                    respective contract and instructions. We also require our
                    service providers to comply with technical and
                    organizational measures that ensure the protection of
                    personal data. We currently use the following service
                    providers:
                  </li>
                </ul>
              </Grid>
              <Grid item xs={2} sm={4} md={4} xl={4}>
                <ul className="d-flex flex-column" style={{ gap: "10px" }}>
                  <li className="terms-text">
                    Squarespace Ireland Ltd. <br /> Le Pole House, Ship Street
                    Great <br /> Dublin 8, Ireland <br /> (Hosting Website)
                  </li>
                  <li className="terms-text">
                    <span style={{ textDecoration: "underline" }}>
                      Private third parties
                    </span>{" "}
                    – Affiliated or unaffiliated private bodies other than us.
                  </li>
                </ul>
                <p className="terms-text">
                  1. We process your personal data in order to comply with legal
                  obligations (Art. 6 (1) c) GDPR) to which we are subject,
                  including for the following purposes:
                </p>
                <ul className="d-flex flex-column" style={{ gap: "10px" }}>
                  <li className="terms-text">Maintain information security</li>
                  <li className="terms-text">
                    Participation in investigations and proceedings (including
                    judicial proceedings) conducted by public authorities in
                    particular, for the purpose of detecting, investigating and
                    prosecuting illegal acts.
                  </li>
                  <li className="terms-text">
                    Complying with legal retention obligations (see IV. "Storage
                    duration and deletion" below).
                  </li>
                </ul>
                <p className="terms-text">
                  2. We process personal data to the extent necessary for the
                  purposes of the legitimate interests pursued by us or by a
                  third party (Art. 6 (1) f) GDPR), including for the following
                  purposes:
                </p>
                <ul className="d-flex flex-column" style={{ gap: "10px" }}>
                  <li className="terms-text">
                    Participation in proceedings (including judicial
                    proceedings) conducted by public authorities, in particular,
                    for the purpose of detecting, investigating and prosecuting
                    illegal acts, unless there is a statutory obligation.
                  </li>
                  <li className="terms-text">
                    Prevention, detection, investigation, mitigation and
                    remediation of fraud, security breaches and other prohibited
                    or unlawful activities, including the assessment of
                    corresponding risks.
                  </li>
                </ul>
                <br />
                <p className="terms-text-title">
                  IV. Storage duration and deletion
                </p>
                <p className="terms-text">
                  We store personal data as long as it is necessary to fulfill
                  the respective purposes. When we no longer need personal data
                  to comply with contractual or legal obligations, it is deleted
                  from our systems or anonymized. Something else only applies if
                  we have to fulfill legal or official obligations, eg,
                  statutory retention obligations. In Germany such retention
                  obligations may arise, in particular, arise under the German
                  Commercial Code ( Handelsgesetzbuch , "HGB") or the German
                  Fiscal Code ( Taking Code , "AO"), and may generally be 6 to
                  10 years (eg for contracts and business letters).
                </p>
                <br />
                <p className="terms-text-title">
                  V. Cross-border data transfer outside of the EU/EEA
                </p>
                <p className="terms-text">
                  Some of the recipients of your personal data will be located
                  outside of European Union (EU) and the European Economic Area
                  (EEA), respectively, where the data protection laws may
                  provide a different level of protection compared to the laws
                  in the EU and the EEA and with regard to which an adequacy
                  decision by the European Commission does not exist. The
                  countries which provide an adequate level of data protection
                  from a European data protection law perspective include
                  Andorra, Argentina, Canada, Faeroe Islands, Guernsey, the
                  State of Israel, Isle of Man, Japan, Jersey, New Zealand,
                  Switzerland and the Eastern Republic of Uruguay. With regard
                  to data transfers to recipients outside of the European
                  Economic Area and outside the mentioned countries we provide
                  appropriate safeguards, in particular, by way of entering into
                  data transfer agreements adopted by the European Commission
                  (eg Standard Contractual Clauses) with the recipients or
                  taking other measures to provide an adequate level of data
                  protection, where this is required under applicable law. We
                  will provide you with a copy of the respective measure we have
                  taken upon request.
                </p>
              </Grid>
              <Grid item xs={2} sm={4} md={4} xl={4}>
                <p className="terms-text">
                  Photography:
                  <br />
                  Andreas Gehrke <br />
                  Gregor Hohenberg <br />
                  Fabian Jäkel <br />
                  Alina Simmelbauer <br />
                  Matthias Ziegler
                </p>
              </Grid>
            </Grid>
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

export default TermsPage;
