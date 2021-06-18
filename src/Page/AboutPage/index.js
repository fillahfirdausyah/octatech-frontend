import React from "react";
import { Container } from "react-bootstrap";

// Component
import Navbar from "../../Component/Navbar";
import AboutUs from "../../Component/AboutUs";
import Gallery from "../../Component/Gallery";
import WhatWeDo from "../../Component/WhatWeDo";
import VisiMisi from "../../Component/VisiMisi";
import Footer from "../../Component/Footer";

function AboutPage() {
  return (
    <>
      <div className="dotted d-o"></div>
      <Container>
        <Navbar />
        <AboutUs />
        <Gallery />
        <WhatWeDo />
      </Container>
      <VisiMisi />
      <Footer />
    </>
  );
}

export default AboutPage;
