import React from "react";
import { Container } from "react-bootstrap";

// Component
import Navbar from "../../Component/Navbar";
import Gallery from "../../Component/Gallery";
import Footer from "../../Component/Footer";

function GalleryPage() {
  return (
    <>
      <Container>
        <Navbar />
        <Gallery />
      </Container>
      <Footer />
    </>
  );
}

export default GalleryPage;
