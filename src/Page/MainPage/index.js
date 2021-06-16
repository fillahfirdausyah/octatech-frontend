import React from "react";
import { Container } from "react-bootstrap";

// Component
import Navbar from "../../Component/Navbar";
import Jumbotron from "../../Component/Jumbotron";
import Fitur from "../../Component/Fitur";
import WhyUs from "../../Component/WhyUs";

function MainPage() {
  return (
    <>
      <Container>
        <Navbar />
        <Jumbotron />
        <Fitur />
      </Container>
      <div>
        <WhyUs />
      </div>
    </>
  );
}

export default MainPage;
