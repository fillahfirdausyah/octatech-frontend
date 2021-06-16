import React from "react";
import { Container } from "react-bootstrap";

// Component
import Navbar from "../../Component/Navbar";
import Jumbotron from "../../Component/Jumbotron";
import Fitur from "../../Component/Fitur";
import WhyUs from "../../Component/WhyUs";
import Article from "../../Component/Article";
import CsSupport from "../../Component/CsSupport";
import StartWith from "../../Component/StartWith";

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
      <Container>
        <Article />
        <CsSupport />
      </Container>
      <div>
        <StartWith />
      </div>
    </>
  );
}

export default MainPage;
