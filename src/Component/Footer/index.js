import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-bootstrap";

// Asset
import "./style.css";
import Logo from "../../Assets/Logo.svg";

function Footer() {
  return (
    <div className="footer octa">
      <Container>
        <div className="row">
          <div className="col-md-3 octa-footer">
            <div className="section1 d-flex align-items-center">
              <img src={Logo} alt="" className="img-fluid" />
              <h3>OCTA TECH</h3>
            </div>
            <p>Octa Technologies</p>
            <p className="year">© 2019-2021</p>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <h1>Syarat & Kebijakan</h1>
            <li>Syarat Layanan</li>
            <li>Aturan Menengah</li>
            <li>Kebijakan Privasi</li>
            <li>Syarat Program Mitra</li>
          </div>
          <div className="col-md-3 col-6 mt-5">
            <h1>Perusahaan</h1>
            <li>Tentang</li>
            <li>Time Line Kami</li>
            <li>Kontak</li>
            <li>Karir</li>
          </div>
          <div className="col-md-3 col-12 mt-5">
            <h1>Kantor</h1>
            <li>PT. Octa Technologies</li>
            <li>Jl. Menuju Surga, Dunia, No.1</li>
            <li>Jawa, Indonesia</li>
            <li>team@OctaTechnologies.com</li>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
