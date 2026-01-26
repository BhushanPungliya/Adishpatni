import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const pathName = useLocation();
  return (
    <>
      <header>
        {/* <Link className={pathName.pathname === "/works" ? "active" : "header-item" && pathName.pathname === "/list" ? "active" : "header-item"} to="/works">Works</Link> */}
        <Link className={pathName.pathname === "/process" ? "active" : "header-item"} to="/process">Process</Link>
        <Link className={pathName.pathname === "/office" ? "active" : "header-item"} to="/office">Studio</Link>
        <Link className={pathName.pathname === "/contact" ? "active" : "header-item"} to="/contact">Contact</Link>
      </header>

    </>
  );
}

export default Header;
