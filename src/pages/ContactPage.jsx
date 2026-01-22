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
              href="https://www.google.com/maps/dir//Atelier+Adish+Patni+-+Art+%7C+Architecture+%7C+Interiors,+12,+R.R+Heights+NS+Palya,+B.G+Road,+Bengaluru,+Karnataka+560076/@12.911657,77.598352,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae154a11c6e615:0xf300fae9f286a399!2m2!1d77.6004938!2d12.9116559"
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
