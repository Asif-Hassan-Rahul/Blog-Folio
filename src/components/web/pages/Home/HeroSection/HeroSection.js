import React from "react";
import background from "../../../../../assets/img/hero-bg-3.jpg";

import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div id="hero" className="hero route bg-image" style={{ backgroundImage: `url(${background})` }}>
        <div className="overlay-itro" />
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              {/*<p class="display-6 color-d">Hello, world!</p>*/}
              <h1 className="hero-title mb-4">
                INNOVATE <span className="mx-3"></span> CONNECT <span className="mx-3"></span>INSPIRE
              </h1>
              <p className="hero-subtitle">
                <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" />
              </p>
              <p class="pt-3" id="hero-button">
                <a class="btn btn-primary btn js-scroll px-4" href="#contact" role="button">
                  Get in Touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
