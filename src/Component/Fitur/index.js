import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

// Asset
import "./style.css";
import FiturSection from "../../Assets/fitur-section.png";
import Line2 from "../../Assets/Line-2.svg";

function Fitur() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/product/all").then((res) => {
      setProduct(res.data.data);
    });
  }, []);

  return (
    <div className="fitur">
      <div className="row">
        <div className="col-md-12 col-xl-6 col-lg-6">
          <img src={FiturSection} className="img-fluid lekung" alt="" />
        </div>
        <div
          className="col-md-12 col-xl-6 col-lg-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="fitur-caption">
            <img src={Line2} alt="" className="line2" />
            <h1>Pilihlah Fitur Modern Keinginanmu</h1>
            <p>
              Menemukan sistem lingkungan modern yang menghadirkan teknologi
              untuk keamanan dan kenyamanan itu tidaklah mudah. Temukan solusi
              itu bersama agen kami.
            </p>
            <div className="list-fitur">
              {product.map((x) => (
                <img
                  src={`http://localhost:8000/image/product/${x.gambar}`}
                  alt=""
                />
              ))}
            </div>
            <NavLink className="btn btn-primary" to="/product">
              Temukan Berbagai Fitur Pintar
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fitur;
