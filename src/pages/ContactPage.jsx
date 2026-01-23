import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="office-section">
        <div className="text-center">
          <h1 className="contact-title">Atelier Adish Patni</h1>
          <h6 className="contact-title mt-0 mb-3" style={{ fontWeight: '400', fontSize: "14px" }}>
            art | architecture | interior
          </h6>
          <p className="office-text">
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="https://www.google.com/maps/search/?api=1&query=72%20Saket%20Nagar%20Indore%20452018"
              target="_blank"
              rel="noreferrer"
            >
              72, Saket Nagar <br /> Indore Madhya Pradesh 452 018
            </a>
          </p>
          <p className="office-text">
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="https://www.google.com/maps/search/?api=1&query=R.R+Heights+B.G+Road+Bangalore+560076"
              target="_blank"
              rel="noreferrer"
            >
              R.R Heights, B.G Road <br /> Bangalore 560 076
            </a>
          </p>
          <p className="office-telephone">
            <a href="tel:+918550811105" style={{ textDecoration: "none", color: "inherit" }}>
              Contact : +91 85508 11105
            </a>
          </p>

          <a
            href="mailto:studio@adishpatni.com"
            style={{ textDecoration: "none", color: "#fff" }}
            rel="noreferrer"
            target="_blank"
          >
            <p className="office-text">studio@adishpatni.com</p>
          </a>
        </div>
      </section>
    </MainLayout>
  );
}

export default ContactPage;
