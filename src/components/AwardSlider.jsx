import { Grid } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import Office from "../assets/project/office.jpg";

function AwardSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 2, sm: 3, md: 3 }}
            columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          >
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div>
                <h6 className="slide-title">Awards Name</h6>
                <p className="slider-text">
                  The Studio focuses on select project, keeping with the belief
                  that creative clarity and highest degree of construction
                  quality are only achieved through close control and
                  involvement.
                </p>
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div>
               <img src={Office} className="img-fluid" alt="" />
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 2, sm: 3, md: 3 }}
            columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          >
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div>
                <h6 className="slide-title">Awards Name</h6>
                <p className="slider-text">
                  The Studio focuses on select project, keeping with the belief
                  that creative clarity and highest degree of construction
                  quality are only achieved through close control and
                  involvement.
                </p>
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div>
               <img src={Office} className="img-fluid" alt="" />
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 2, sm: 3, md: 3 }}
            columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          >
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div>
                <h6 className="slide-title">Awards Name</h6>
                <p className="slider-text">
                  The Studio focuses on select project, keeping with the belief
                  that creative clarity and highest degree of construction
                  quality are only achieved through close control and
                  involvement.
                </p>
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div>
               <img src={Office} className="img-fluid" alt="" />
              </div>
            </Grid>
          </Grid>
        </div>
      </Slider>
    </>
  );
}

export default AwardSlider;
