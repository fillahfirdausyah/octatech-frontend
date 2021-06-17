import React from "react";
import { Container } from "react-bootstrap";

// Asset
import "./style.css";
import PersonScooter from "../../Assets/person-scooter.svg";

function StartWith() {
  return (
    <div className="start-with">
      <Container data-aos="zoom-in" data-aos-duration="900">
        <div className="dotted d-1"></div>
        <div className="dotted d-2"></div>
        <div className="start-with-caption">
          <h1>Mulailah dengan kami</h1>
          <p>
            Membuat lingkungan modern adalah spesialisasi kami, dengan banyak
            pengalaman <br /> kami akan membantu Anda menciptakan lingkungan
            modern yang Anda inginkan.
          </p>
          <a href="/" className="btn btn-primary">
            Temukan Berbagai Fitur Pintar
          </a>
        </div>
        <div className="start-with-img">
          <img src={PersonScooter} alt="" className="img-fluid" />
        </div>
      </Container>
    </div>
  );
}

export default StartWith;
