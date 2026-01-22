import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout isHome={true}>
      <div className="hero-page"></div>
      <div className="hero-title">
        <h1>Atelier Adish Patni</h1>
        <h6 className="hero-text" onClick={() => navigate("/works")} style={{ cursor: "pointer" }}>
          Enter
        </h6>
      </div>
    </MainLayout>
  );
}

export default HomePage;
