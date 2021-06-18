import React from "react";

// Asset
import "./style.css";
import Video from '../../Assets/video/WeatherAPP.mp4'

function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div className="row">
        <div
          className="col-lg-6 col-sm-12"
          data-aos-duration="900"
          data-aos="fade-right"
        >
          <h1>APA YANG KITA LAKUKAN?</h1>
          <p>
            Octa Tech adalah penyedia solusi IoT yang berkomitmen untuk
            memberdayakan perusahaan di Indonesia. Kami bertujuan untuk
            memecahkan tantangan bisnis pelanggan kami, dengan membantu mereka
            untuk mengoptimalkan, mempertumbuhkan, dan mengubah bisnis mereka
            melalui solusi IoT kami.
          </p>
        </div>
        <div
          className="col-lg-6 col-sm-12"
          data-aos-duration="900"
          data-aos="fade-left"
        >
          {/* <img
            src="https://dbkpop.com/wp-content/uploads/cache/2021/03/Weeekly_After_School_Jihan_3/3944390263.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt=""
          /> */}
          <video
            src={Video}
            class="w-100 shadow-1-strong rounded mb-4"
            controls
            autoPlay={true}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
