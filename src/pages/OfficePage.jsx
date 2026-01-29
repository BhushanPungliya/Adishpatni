import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import OfficeSlider from "../components/OfficeSlider";
import MainLayout from "../components/MainLayout";
import ProfilePDF from "../assets/profile/Adish Patni Profile 2025.pdf";

function OfficePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
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
              <div className="pb-4 ">
                <hr className="m-0" style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.1)" }} />
              </div>
              <p className="office-page-text mb-1">
                <br />
                Adish Patni is an acclaimed architect and interior designer in Bangalore and Indore, leading his boutique practice under the name Atelier Adish Patni, celebrated for his innovative approach that harmoniously blends international aesthetics with Indian sensibilities.
              </p>
              <br />

              <p className="office-page-text">
                Recognized globally, Adish was named among the World's Top 100 Young Architects by Archiprix Netherlands and has been featured in India's Top 50 Architects by iGen. Adish has collaborated with architectural luminaries such as the late B.V. Doshi in Ahmedabad, Sir Peter Cook in London, and Sir Glenn Murcutt in Australia.
              </p>
             <br />
             
              <p className="office-page-text">
                His portfolio displays an impressive array of projects like the Art House, Pavilion House, and Villa 101, which have garnered attention in esteemed publications.
              </p>

              <a href={ProfilePDF} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <h6 className="download-title">Download Profile</h6>
              </a>
            </Grid>

            <Grid item xs={4} sm={6} md={6}>
              <div className="office-img">
                <OfficeSlider />
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </MainLayout>
  );
}

export default OfficePage;
