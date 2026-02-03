import React from "react";
import { Link } from "react-router-dom";

// Props mein 'setOpen' receive karna zaroori hai state update ke liye
function MobileHeader({ open, setOpen }) {
  
  // Menu close karne ka function
  const handleClose = () => {
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <>
      <div
        className="mobile-header"
        style={{ display: open ? "block" : "none" }}
      >
        <div 
          // className="close-btn" 
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            cursor: "pointer",
            zIndex: 100
          }}
        >
          {/* SVG for Cross Icon */}
          <svg 
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M18 6L6 18" 
              stroke="white" /* Icon ka color yahan change karein */
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M6 6L18 18" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* --- Close Icon End --- */}

        <div className="mobile-list">
          {/* Link click hone par bhi menu close hona chahiye */}
          <Link className={"header-item"} to="/process" onClick={handleClose}>
            Process
          </Link>
          <Link className={"header-item"} to="/office" onClick={handleClose}>
            Office
          </Link>
          <Link className={"header-item"} to="/contact" onClick={handleClose}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;