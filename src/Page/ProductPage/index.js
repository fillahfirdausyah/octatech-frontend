import React from "react";
import { Container } from "react-bootstrap";

// Asset
import './style.css'

// Component
import Product from "../../Component/Product";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

function ProductPage() {
  return (
    <>
      <div className="dotted d-o product"></div>
      <Container>
        <Navbar />
        <Product />
      </Container>
      <Footer />
    </>
  );
}

export default ProductPage;
