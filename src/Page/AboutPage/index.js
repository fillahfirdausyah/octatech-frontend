import React from "react";
import { Container } from "react-bootstrap";

// Asset
import './style.css'

// Component
import Navbar from "../../Component/Navbar";
import AboutUs from "../../Component/AboutUs";
import WhatWeDo from "../../Component/WhatWeDo";
import VisiMisi from "../../Component/VisiMisi";
import Footer from "../../Component/Footer";

function AboutPage() {
  return (
    <>
      <div className="dotted d-o about"></div>
      <Container>
        <Navbar />
        <AboutUs />
        <WhatWeDo />
      </Container>
      <VisiMisi />
      <Footer />
    </>
  );
}

export default AboutPage;
