import { useEffect } from "react";
// import Office from "../assets/project/office.jpg";
import { Grid } from "@mui/material";
import about1 from "../assets/about/01.png";
import about2 from "../assets/about/02.png";
import about3 from "../assets/about/03.png";
import about4 from "../assets/about/04.png";
import about5 from "../assets/about/05.png";
// import Inst from "../assets/insta.png";
// import LinkedIn from "../assets/linkedin.svg";
// import fLogo from "../assets/fb.png";
// import xLogo from "../assets/x-logo.png";
// import dummy from "../assets/dummy-image.png";

// import about1 from "../assets/about/about-1.png";
// import about2 from "../assets/about/about-2.png";
// import about3 from "../assets/about/about-3.png";
// import MobileHeader from "../components/MobileHeader";
import ProcessSlider from "../components/ProcessSlider";
import AwardSlider from "../components/AwardSlider";
import MainLayout from "../components/MainLayout";

const AwerdList = [
  { name: "Glenn Murcutt Masterclass, Australia " },
  { name: "iGen Award 2022" },
  { name: "B.V Doshi BWTIBA Commendation, Ahmedabad" },
  { name: "IIA - Young Architect Festival Award" },
  { name: "ACYA Award, Malaysia" },
  { name: "Indias’s Best Design Award - IBDA 2022" },
  { name: "CNBC FOAID Architecture Idea Award" },
  { name: "Aces of Space Design Award" },
  { name: "IIID - BMRCL Competition" },
  { name: "NDTV DAA Award" },
  { name: "Acetech - Design Jury Award" },
  { name: "Yuva Ratna - Recreation House Award" },
  { name: "The Daily Beast, New York - Art Feature" },
  { name: "Sir Peter Cook Certificate, London" },
  { name: "Design Awards India 2023 AIDEA" },
  { name: "RV Dimensions 2017" },
  { name: "IPS The Knowledge Kingdom Award" },
  { name: "Vigyan Bharti Vibha Vastuki Award " },
  { name: "Sloped Roof to Mandiram Book" },
  { name: "ArchiPRIX, Netherlands" },
  { name: "AICA Artist in Concrete Architecture" },
  { name: "IBS Washington - Lecture" },
  { name: "GYLC - Global Young Leaders Conference, Prague" },
];

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="about-section">
        <div className="container">
          <div className="about-img">
            <div className="process-slider">
              <ProcessSlider />
            </div>
            {/* <img src={Office} className="img-fluid about-office" alt="" /> */}
            <h6 className="about-title">Process</h6>
            <div className="pb-4">
              <hr className="m-0" style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.1)" }} />
            </div>
            <Grid
              container
              columnSpacing={{ xs: 2, sm: 5, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12, xl: 12 }}
            >
              <Grid item xs={2} sm={4} md={4} xl={4}>
                {/* <img src={dummy} alt="" className="img-fluid" /> */}
                <p className="about-text">
                  Architecture for us is a process of constantly examining,
                  analyzing and re-interpreting reality. It has provided the
                  opportunity to investigate man’s essence and to attempt to
                  fathom his nature.
                </p>
                <p className="about-text">
                  We have come to understand architecture as the communication
                  of stories - an ancient practice of transmitting experience.
                  All the core of these experiences are the things we have in
                  common; familiar yet unique vocabularies, values and beliefs,
                  all of which synthesized in language and craft.
                </p>
              </Grid>
              <Grid item xs={2} sm={4} md={4} xl={4}>
                <p className="about-text">
                  Architecture is a fairytale presented in the language of the
                  tectonic. It is didactic and the fantastic, made real by the
                  theatrical and the phenomenological. It is the theatrical and
                  the mundane, the sublime and the simple. Architecture has to
                  address some of the most difficult questions that we face
                  today, yet can rely on man’s imagination, his past, and course
                  his penchant for storytelling for guidance and inspiration.
                </p>

                <p className="about-text">
                  Design is an attitude that exists in every aspect of our
                  lives. Through the making of architecture, we amalgamate
                  science into art, art into architecture, architecture into the
                  poetics of space.
                </p>
              </Grid>
              <Grid item xs={2} sm={4} md={4} xl={4}>
                <p className="about-text">
                  The amalgamation between theory, exploration and practice
                  offer us a versatile structure for endless possibilities. This
                  structure is without boundaries.
                </p>
                <p className="about-text">
                  Atelier Adish Patni is involved in project ranging in scale
                  from small built furniture to large residences.
                </p>
                <p className="about-text">
                  The Studio focuses on select project, keeping with the belief
                  that creative clarity and highest degree of construction
                  quality are only achieved through close control and
                  involvement.
                </p>
              </Grid>
            </Grid>
            <h6 className="about-title">Awards And Features</h6>
            <div className="pb-4">
              <hr className="m-0" style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.1)" }} />
            </div>
            <div className="text-center">
              <div className="about-bottom-img">
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 2, sm: 3, md: 3 }}
                  columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                >
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                    <div>
                      {AwerdList?.map((e, i) => {
                        return (
                          <h6
                            className="about-text"
                            style={{ textAlign: "left" }}
                            key={i}
                          >
                            {e?.name}
                          </h6>
                        );
                      })}
                    </div>
                  </Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                    <div className="about-slider">
                      <AwardSlider />
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  container
                  rowSpacing={{ xs: 0, sm: 0, md: 0 }}
                  columnSpacing={{ xs: 0, sm: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 20 }}
                >
                  <Grid item xs={2} sm={1} md={4}>
                    <img src={about1} className="about-img1 img-fluid" alt="" />
                  </Grid>
                  <Grid item xs={2} sm={1} md={4}>
                    <img src={about2} className="about-img1 img-fluid" alt="" />
                  </Grid>
                  <Grid item xs={2} sm={1} md={4}>
                    <img src={about3} className="about-img1 img-fluid" alt="" />
                  </Grid>
                  <Grid item xs={2} sm={1} md={4}>
                    <img src={about4} className="about-img1 img-fluid" alt="" />
                  </Grid>
                  <Grid item xs={2} sm={1} md={4}>
                    <img src={about5} className="about-img1 img-fluid" alt="" />
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default AboutPage;
