import React from "react";
import { Link } from "react-router-dom";
import Inst from "../assets/insta.png";
// import LinkedIn from "../assets/linkedin.svg";
// import fLogo from "../assets/fb.png";
// import xLogo from "../assets/x-logo.png";

function Footer() {
    return (
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
                            style={{
                                height: "26px",

                                filter: "brightness(0) invert(1)"
                            }}
                            className="img-fluid"
                            alt=""
                        />
                    </Link>
                    {/* <Link
                        style={{ textDecoration: "none" }}
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
                    >
                        <img
                            src={fLogo}
                            style={{ height: "26px" }}
                            className="img-fluid"
                            alt=""
                        />
                    </Link> */}
                </p>
                <h4 className="home-text">copyright 2026</h4>
                <h4 className="home-text">
                    <Link
                        to="/terms-privacy"
                        style={{ textDecoration: "none", color: "#fff" }}
                    >
                        Terms & Privacy
                    </Link>
                </h4>
            </div>
        </div>
    );
}

export default Footer;
