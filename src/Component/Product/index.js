import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import api from '../../Helpers/api-endpoint'

// Asset
import "./style.css";
import Home from "../../Assets/icon/smarthome.svg";
import Garden from "../../Assets/icon/garden.svg";
import Robot from "../../Assets/icon/robot.svg";

// Component
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get("/product/all").then((res) => {
      setProduct(res.data.data);
    });
  }, []);

  console.log(product);

  return (
    <div className="product">
      <h1>Produk Kami</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="browse-product">
        <h1>Browse by Category</h1>
        <div className="row">
          <div
            className="col-lg-6 col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card-product">
              <img className="icon-product" src={Home} alt="" />
              <h4>Smart Home</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                perferendis?
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="card-product">
              <img className="icon-product" src={Garden} alt="" />
              <h4>Smart Garden</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                perferendis?
              </p>
            </div>
          </div>
          <div
            className="col-lg-12 col-xl-4 col-md-12"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <div className="card-product">
              <img className="icon-product" src={Robot} alt="" />
              <h4>Smart Bot</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                perferendis?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-product">
        <h1>List Product</h1>

        <div className="row">
          {product.map((x) => (
            <div
              className="col-lg-6 col-xl-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="card-product the-product">
                <img
                  className="thub-product"
                  src={`https://api-octatech.herokuapp.com/image/product/${x.gambar}`}
                  alt=""
                />
                <h2>{x.nama}</h2>
                <p>
                  <CurrencyFormat
                    value={x.harga}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"-Rp."}
                  />
                </p>
                <div className="rating">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                  <p>(250)</p>
                  <hr />
                  <div className="cap">
                    <div className="row">
                      <div className="co">
                        <CheckCircleIcon className="icon" />
                      </div>
                      <div className="col">
                        <h5>Sekali Bayar / Maintance Berkala</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary">Lihat Selanjutnya</button>
      </div>
    </div>
  );
}

export default Product;
