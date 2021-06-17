import React from "react";

// Asset
import "./style.css";
import FiturSection from "../../Assets/fitur-section.png";
import Line2 from "../../Assets/Line-2.svg";
import Fitur1 from '../../Assets/fitur-1.jpg'
import Fitur2 from '../../Assets/fitur-2.jpg'
import Fitur3 from '../../Assets/fitur-3.jpg'
import Fitur4 from '../../Assets/fitur-4.jpg'
import Fitur5 from '../../Assets/fitur-5.jpg'

function Fitur() {
  return (
    <div className="fitur" data-aos="fade-down" data-aos-duration="2500"> 
      <div className="row">
        <div className="col-md-12 col-xl-6">
          <img src={FiturSection} className="img-fluid lekung" alt="" />
        </div>
        <div className="col-md-12 col-xl-6">
          <div className="fitur-caption">
            <img src={Line2} alt="" className="line2"/>
            <h1>Pilihlah Fitur Modern Keinginanmu</h1>
            <p>
              Menemukan sistem lingkungan modern yang menghadirkan teknologi
              untuk keamanan dan kenyamanan itu tidaklah mudah. Temukan solusi
              itu bersama agen kami.
            </p>
            <div className="list-fitur">
              {/* <img src={Fitur1} alt="" />
              <img src={Fitur2} alt="" />
              <img src={Fitur3} alt="" />
              <img src={Fitur4} alt="" />
              <img src={Fitur5} alt="" /> */}
            </div>
            <a href="" className="btn btn-primary">Temukan Berbagai Fitur Pintar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fitur;
