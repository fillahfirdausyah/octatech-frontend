import React from "react";
import { Container } from "react-bootstrap";

// Asset
import './style.css'

// Component
import Navbar from "../../Component/Navbar";
import ContactUs from "../../Component/ContactUs";
import Footer from "../../Component/Footer";

function ContactPage() {
  return (
    <>
      <div className="dotted d-o contact"></div>
      <Container>
        <Navbar />
        <ContactUs />
      </Container>
      <Footer />
    </>
  );
}

export default ContactPage;
