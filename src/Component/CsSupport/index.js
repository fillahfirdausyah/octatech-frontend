import React from "react";

// Asset
import "./style.css";
import Support from "../../Assets/cs-support.svg";

function CsSupport() {
  return (
    <div className="cs-support"> 
      <div className="row">
        <div className="col-md-6">
          <h1>Friendly Support That Cares</h1>
          <p>
            Customer Service on-line 7x24 Jam. Jadi jangan khawatir, Anda
            spesial dan kami siap mendengarnya.
          </p>
          <a href="" className="btn btn-primary">
            Pusat Bantuan & FAQ
          </a>
          <a href="" className="btn btn-secondary">
            Lakukan Panggilan
          </a>
        </div>
        <div className="col-md-6">
          <img src={Support} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default CsSupport;
