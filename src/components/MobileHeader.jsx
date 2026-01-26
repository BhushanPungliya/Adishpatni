import React from "react";
import { Link } from "react-router-dom";

function MobileHeader({ open }) {
  return (
    <>
      <div
        className="mobile-header"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="mobile-list">
          <Link className={"header-item"} to="/process">
            Process
          </Link>
          <Link className={"header-item"} to="/office">
            Office
          </Link>
          <Link className={"header-item"} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
