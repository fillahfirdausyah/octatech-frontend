import React from "react";
import { Container } from "react-bootstrap";

// Component
import Navbar from "../../Component/Navbar";
import OurTeam from "../../Component/OurTeam";
import Footer from "../../Component/Footer";

function TeamPage() {
  return (
    <>
      <div className="dotted d-o"></div>
      <Container>
        <Navbar />
        <OurTeam />
      </Container>
      <Footer />
    </>
  );
}

export default TeamPage;
