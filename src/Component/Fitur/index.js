import React from "react";

// Asset
import "./style.css";
import Banner from "../../Assets/fitur-banner.png";

function Fitur() {
  return (
    <div className="fitur">
      <div className="row">
        <div className="col">
          <img
            src="https://dbkpop.com/wp-content/uploads/2020/06/weeekly_we_are_teaser_2_shin_Jiyoon.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col">
          <h1>Pilihlah Fitur Modern Keinginanmu</h1>
          <p>
            Menemukan sistem lingkungan modern yang menghadirkan teknologi untuk
            keamanan dan kenyamanan itu tidaklah mudah. Temukan solusi itu
            bersama agen kami.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fitur;
