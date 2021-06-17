import React from "react";
import { Container } from "react-bootstrap";

// Asset
import "./style.css";
import IconBerkas from "../../Assets/icon-berkas.svg";
import IconChat from '../../Assets/icon-chat.svg'
import IconCheck from '../../Assets/icon-check.svg'

function WhyUs() {
  return (
    <div className="why-us">
      <Container>
        <div className="dotted d-1"></div> 
        <div className="dotted d-2"></div>
        <div className="dotted d-3"></div>
        <div className="dotted d-4"></div>
        <div className="why-us-caption text-center">
          <h6>Mengapa Memilih Kami</h6>
          <h1>Dengan 3 Tahun Pengalaman</h1>
          <p>Kami siap membantumu untuk menemukan lingkungan pintarmu</p>
        </div>
        <div className="unggulan">
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="unggulan-card" data-aos="fade-down" data-aos-duration="1200">
                <img src={IconBerkas} alt="" />
                <h5>Pilih Fiturmu</h5>
                <p>
                  Temukan fitur apa yang Anda inginkan untuk lingkunganmu, dan
                  pilih fitur dengan mudah.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unggulan-card" data-aos="fade-down" data-aos-duration="2300">
                <img src={IconChat} alt="" />
                <h5>Nomor Kontak</h5>
                <p>
                  Temukan nomor kontak yang tertera di tipe fitur Anda dan
                  datang untuk melihat langsung fitur yang Anda inginkan.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="unggulan-card" data-aos="fade-down" data-aos-duration="3000">
                <img src={IconCheck} alt="" />
                <h5>Pembayaran yang Mudah dan Aman</h5>
                <p>
                  Siap mendapatkan properti Anda? Tandatangani kontrak dan fitur
                  Anda siap untuk Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhyUs;
