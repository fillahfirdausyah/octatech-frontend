import React from "react";
import { Container } from "react-bootstrap";

// Asset
import "./style.css";
import IconBerkas from "../../Assets/icon-berkas.svg";

function WhyUs() {
  return (
    <div className="why-us">
      <Container>
        <div className="dotted d-1"></div>
        <div className="dotted d-2"></div>
        <div className="why-us-caption text-center">
          <h6>Mengapa Memilih Kami</h6>
          <h1>Dengan 3 Tahun Pengalaman</h1>
          <p>Kami siap membantumu untuk menemukan lingkungan pintarmu</p>
        </div>
        <div className="unggulan">
          <div className="row">
            <div className="col">
              <div className="unggulan-card">
                  <img src={IconBerkas} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhyUs;
