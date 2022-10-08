import React from "react";
import hero1 from "../../../images/hero-1.jpg";

const HeroSlider = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={hero1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={hero1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={hero1} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
