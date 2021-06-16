import React from "react";
import CountUp from "react-countup";

// Asset
import "./style.css";
import Jumbo from "../../Assets/jumbo.png";

// Component
import Carousel from "react-bootstrap/Carousel";

function Jumbotron() {
  return (
    <div className="jumbo" data-aos="fade-down" data-aos-duration="2500">
      <div className="row ">
        <div className="col-md-12 col-xl-6">
          <div className="caption">
            <h1>Ciptakan Lingkungan Modern Yang Nyaman, Aman dan Pintar</h1>
            <p>
              Permudah hidup anda dengan lingkungan yang melimiki sistem modern.
              Jadikan lingkungan anda lebih pintar bersama kami.
            </p>
            <a href="" className="btn btn-primary fitur">
              Temukan Berbagai Fitur Pintar
            </a>
            <a href="" className="btn btn-secondary">
              Katalog
            </a>
          </div>
        </div>
        <div className="col-md-12 col-xl-6">
          {/* <img src={Jumbo} className="img-fluid slider" alt="" /> */}
          <Carousel className="slider" nextLabel="" prevLabel="" fade>
            <Carousel.Item className="slider-img">
              <img
                className="w-100"
                src="https://dbkpop.com/wp-content/uploads/2020/06/weeekly_we_are_teaser_2_shin_Jiyoon.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item className="slider-img">
              <img
                className="w-100"
                src="https://image.kpopmap.com/2020/10/weeekly-zig-zag.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className="slider-img">
              <img
                className="w-100"
                src="https://thumbnails.kpopmap.com/2020/06/weeekly-lee-soojin-cover-680x384.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="info">
        <div className="info1">
          <h3>
            <CountUp end={450} duration={5} />+
          </h3>
          <p>Layanan terjuan</p>
        </div>
        <div className="info2">
          <h3>
            <CountUp end={122} duration={5} />
          </h3>
          <p>Klien Terpuaskan</p>
        </div>
        <div className="info3">
          <h3>
            <CountUp end={3} duration={5} />
          </h3>
          <p>Tahun Pengalaman</p>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
