import React from "react";
import { Container } from "react-bootstrap";

// Asset
import "./style.css";

function VisiMisi() {
  return (
    <div className="visi-misi" data-aos="zoom-in" data-aos-duration="700">
      <Container>
        <div className="dotted d-1"></div>
        <div className="dotted d-2"></div>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <h1>VISI</h1>
            <p>
              Mewujudkan perusahaan yang profesional, dan terpercaya dalam
              pengembangan produk yang lebih kompeten maupun sumber daya manusia
              melalui teknologi di bidang IoT dan revolusi industri 4.0 di
              berbagai wilayah Indonesia.
            </p>
          </div>
          <div className="col-sm-12 col-lg-6">
            <h1>MISI</h1>
            <p>
              Mengembangkan sebuah produk yang berkualitas tinggi dan
              berinovasi. Menciptakan layanan profesional melalui mitra.
              Memberikan kemitraan yang saling menguntungkan satu sama lain.
              Inovasi, kreativitas terbaru dalam setiap produk. Menghasilkan
              nilai tambah dan keuntungan bagi mitra.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default VisiMisi;
