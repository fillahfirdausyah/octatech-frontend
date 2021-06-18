import React from "react";
import { Container } from "react-bootstrap";

// Asset
import "./style.css";

function VisiMisi() {
  return (
    <div className="visi-misi">
      <Container>
        <div className="dotted d-1"></div>
        <div className="row">
          <div className="col-sm-12 col-lg-6" data-aos="zoom-in" data-aos-duration="700">
            <h1>VISI</h1>
            <p>
              Mewujudkan perusahaan yang profesional, dan terpercaya dalam
              pengembangan produk yang lebih kompeten maupun sumber daya manusia
              melalui teknologi di bidang IoT dan revolusi industri 4.0 di
              berbagai wilayah Indonesia.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6" data-aos="zoom-in" data-aos-duration="700">
            <h1>MISI</h1>
            <p>
              <ol>
                <li>Mengembangkan sebuah system yang berinovasi dan berkualitas tinggi.</li>
                <li>Menciptakan layanan professional melalui mitra.</li>
                <li>Memberikan kemitraan yang saling menguntungkan satu sama lain.</li>
                <li>Inovasi dan kreatifisan terbaru dalam system</li>
                <li>Menghasilkan nilai tambah dan keuntungan bagi mitra.</li>
              </ol>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default VisiMisi;
