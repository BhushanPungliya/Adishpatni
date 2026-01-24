import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import MainLayout from "../components/MainLayout";

function TermsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout>
            <section className="about-section">
                <div className="container">
                    <div className="about-img">
                        <h6 className="terms-title">Legal notice</h6>
                        <div className="pb-4">
                            <hr className="m-0" style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.1)" }} />
                        </div>
                        <Grid
                            container
                            columnSpacing={{ xs: 2, sm: 5, md: 3 }}
                            columns={{ xs: 2, sm: 8, md: 12, xl: 12 }}
                        >
                            <Grid item xs={2} sm={4} md={4} xl={4}>
                                <p className="terms-text-title">
                                    <strong>
                                        Atelier Adish Patni<br></br> art | architecture | interior
                                    </strong>
                                </p>
                                <p className="terms-text">studio@adishpatni.com</p>
                                <p className="terms-text">
                                    R.R Heights, B.G Road Bangalore 560 076
                                </p>
                                <p className="terms-text">
                                    <a href="tel:+918550811105" style={{ textDecoration: "none", color: "inherit" }}>
                                        +91 85508 11105
                                    </a>
                                </p>
                            </Grid>
                            <Grid item xs={2} sm={4} md={4} xl={4}>
                                <p className="terms-text">
                                    Job Applications: <br />
                                    studio@adishpatni.com <br />
                                </p>
                                <p className="terms-text">
                                    For inquiries please contact: <br></br>
                                    info@adishpatni.com
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default TermsPage;
