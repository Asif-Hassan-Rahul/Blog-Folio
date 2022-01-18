import React from "react";
import About from "./About/About";
import Services from "./Services/Services";
import HeroSection from "./HeroSection/HeroSection";
import Contact from "./Contact/Contact";

function Home() {
  return (
    <>
      <HeroSection />

      <main id="main">
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default Home;
