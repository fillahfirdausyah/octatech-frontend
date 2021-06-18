import React from "react";
import { Container } from "react-bootstrap";

// Asset
import './style.css'

// Component
import Navbar from "../../Component/Navbar";
import Gallery from "../../Component/Gallery";
import Footer from "../../Component/Footer";

function GalleryPage() {
  return (
    <>
      <div className="dotted d-o galeri"></div>
      <Container>
        <Navbar />
        <Gallery />
      </Container>
      <Footer />
    </>
  );
}

export default GalleryPage;
