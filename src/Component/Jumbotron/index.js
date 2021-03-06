import React from "react";
import CountUp from "react-countup";

// Asset
import "./style.css";

// Component
import Carousel from "react-bootstrap/Carousel";

function Jumbotron() {
  return (
    <div className="jumbo" data-aos="fade-up" data-aos-duration="1500">
      <div className="row ">
        <div className="col-md-12 col-xl-7">
          <div className="caption">
            <h1>Ciptakan Lingkungan Modern Yang Nyaman, Aman dan Pintar</h1>
            <p>
              Permudah hidup anda dengan lingkungan yang <br /> melimiki sistem
              modern. Jadikan lingkungan anda <br /> lebih pintar bersama kami.
            </p>
            <a href="/" className="btn btn-primary fitur">
              Temukan Berbagai Fitur Pintar
            </a>
            <a href="/" className="btn btn-secondary">
              Katalog
            </a>
          </div>
        </div>
        <div className="col-md-12 col-xl-5">
          {/* <img src={Jumbo} className="img-fluid slider" alt="" /> */}
          <Carousel className="slider" nextLabel="" prevLabel="" fade>
            <Carousel.Item className="slider-img">
              <img
                className="w-100"
                src="https://techprorepair.com/wp-content/uploads/2020/05/Home-Automation.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item className="slider-img">
              <img
                className="w-100"
                src="https://myventurepad.com/wp-content/uploads/2017/06/smarthome1.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className="slider-img">
              <img
                className="w-100"
                src="https://www.telitec.com/wp-content/uploads/2016/08/smarthomes.png"
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
