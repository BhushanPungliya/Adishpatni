import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import OfficeSlider from "../components/OfficeSlider";
import MainLayout from "../components/MainLayout";

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
                <hr className="m-0" style={{ color: "white" }} />
              </div>
              <p className="office-page-text mb-1">
                Adish Patni is an award-winning architect and interior designer,
                with many accolades to his name. With an impressive array of
                projects such as Pavilion house, Villa one under his belt, and
                multiple cover articles in Antarya, The Times of India and other
                such magazines. Adish has created his own niche in the highly
                competitive world of design. Named as World's Top 100 young
                architect by Archiprix Netherlands.
              </p>
              <br />
              <br />
              <p className="office-page-text">
                Adish's work reflects his ability to use an international
                aesthetic with Indian sensibility. The essence of his work is
                captured best when he knows his patrons are at the same
                wavelength, and are willing to live in a home than a
                well-designed house.
              </p>
              <h6 className="download-title">Download Profile</h6>
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
