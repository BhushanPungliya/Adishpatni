import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header/Header";
import Logo from "../assets/logo.svg";
import MobileHeader from "./MobileHeader";
import Footer from "./Footer";

function MainLayout({ children, isHome }) {
    const [open, setOpen] = useState(false);

    function ToggleOpen() {
        setOpen(!open);
    }

    return (
        <>
            <MobileHeader open={open} />
            <section className={isHome ? "hero-section" : "contact-section"}>
                <div className="header" style={isHome ? { backgroundColor: "transparent", padding: "0" } : {}}>
                    <div className="left-item-hide"></div>
                    <div className="text-center">
                        <Link to="/works">
                            <img src={Logo} className="header-title-logo" alt="Logo" />
                        </Link>
                        <Header />
                    </div>
                    <div className="bras-btn">
                        <input type="checkbox" id="checkbox" checked={open} readOnly onClick={ToggleOpen} />
                        <label htmlFor="checkbox" className="toggle">
                            <div className="bars" id="bar1"></div>
                            <div className="bars" id="bar2"></div>
                            <div className="bars" id="bar3"></div>
                        </label>
                    </div>
                </div>
                {isHome && children}
            </section>
            {!isHome && children}
            <Footer />
        </>
    );
}

export default MainLayout;
