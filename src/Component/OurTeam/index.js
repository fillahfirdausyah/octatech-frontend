import React from "react";

// Asset
import "./style.css";

// Profile Picture
import Fajar from "../../Assets/profile/fajar.JPG";
import Fill from "../../Assets/profile/fill.jpg";
import Aqsal from "../../Assets/profile/aqsal.jpeg";
import Nando from "../../Assets/profile/nando.jpg";
import Syaffa from "../../Assets/profile/syaffa.JPG";
import Anna from '../../Assets/profile/anna.jpeg'
import Sam from "../../Assets/profile/sam2.jpg";
import Farid from "../../Assets/profile/farid1.png";

function OurTeam() {
  return (
    <div className="our-team">
      <h1>TIM KAMI</h1>
      <div className="ceo" data-aos="fade-up" data-aos-duration="700">
        <img src={Fajar} alt="" />
        <h1>Moh. Fajar Abdillah</h1>
        <p>CEO</p>
      </div>
      <hr />
      <div className="programmer">
        <div className="row">
          <div className="col-md-12 col-lg-4" data-aos="fade-up" data-aos-duration="1000">
            <img src={Fill} alt="" />
            <h1>Fillah Akbar F.</h1>
            <p>Lead Programmer</p>
          </div>
          <div className="col-md-12 col-lg-4" data-aos="fade-up" data-aos-duration="650">
            <img src={Aqsal} alt="" />
            <h1>Aqsal Haris P.</h1>
            <p>Programmer</p>
          </div>
          <div className="col-md-12 col-lg-4" data-aos="fade-up" data-aos-duration="350">
            <img src={Nando} alt="" />
            <h1>Fernando W.</h1>
            <p>Programmer</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="content-writer">
        <div className="row">
          <div className="col-md-12 col-lg-6" data-aos="fade-up" data-aos-duration="900">
            <img src={Syaffa} alt="" />
            <h1>Musyaffa N.</h1>
            <p>Content Writer</p>
          </div>
          <div className="col-md-12 col-lg-6" data-aos="fade-up" data-aos-duration="400">
            <img src={Anna} alt="" />
            <h1>Anna Caroline A. B.</h1>
            <p>Content Writer</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="video-creator" data-aos="fade-up" data-aos-duration="700">
        <div className="row">
          <div className="col">
            <img src={Sam} alt="" />
            <h1>Samudra Wijaza</h1>
            <p>Video Creator</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="ui-ux" data-aos="fade-up" data-aos-duration="700">
        <div className="row">
          <div className="col">
            <img src={Farid} alt="" />
            <h1>M. H. Faridh Nur</h1>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
