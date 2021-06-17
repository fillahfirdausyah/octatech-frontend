import React from "react";

// Asset
import "./style.css";
import Logo from "../../Assets/Logo.svg";

function AboutUs() {
  return (
    <>
      <div className="about-us" data-aos="fade-up" data-aos-duration="900">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <img src={Logo} alt="" />
          </div>
          <div className="col-lg-8 col-sm-12">
            <p>
              PT. Octa Technologies (Octa Tech) berkomitmen untuk membangun dan
              mengembangkan platform digital dan layanan digital. Octa Tech siap
              untuk memperkenalkan National Digital Platform sebagai Platform
              Digital di mana semua pemain industri termasuk startup dapat
              menggunakan. Inisiatif ini diharapkan untuk mendukung pemerintah
              dalam percepatan ekonomi digital, serta mendukung industri 4.0.
              Ini adalah kontribusi PT. Octa Techtonolgies untuk mendukung
              Indonesia menjadi economy, digital terbesar di indonesia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
