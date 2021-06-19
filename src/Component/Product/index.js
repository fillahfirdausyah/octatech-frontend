import React from "react";

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
  return (
    <div className="product">
      <h1>Produk Kami</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="browse-product">
        <h1>Browse by Category</h1>
        <div className="row">
          <div className="col-lg-6 col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <div className="card-product">
              <img className="icon-product" src={Home} alt="" />
              <h4>Smart Home</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                perferendis?
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="700">
            <div className="card-product">
              <img className="icon-product" src={Garden} alt="" />
              <h4>Smart Garden</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
                perferendis?
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-xl-4 col-md-12" data-aos="fade-up" data-aos-duration="400">
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
          <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-duration="1000">
            <div className="card-product the-product">
              <img
                className="thub-product"
                src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2017/06/connected-home.jpg?fit=2000%2C1060&ssl=1"
                alt=""
              />
              <h2>Smart Home Pack 1</h2>
              <p>Rp. 200,000</p>
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
          <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-duration="700">
            <div className="card-product the-product">
              <img
                className="thub-product"
                src="https://i.shgcdn.com/0dc5b846-9063-46e6-892e-e01df269860a/-/stretch/off/-/resize/3000x/-/quality/lighter/"
                alt=""
              />
              <h2>Smart Home Pack 1</h2>
              <p>Rp. 200,000</p>
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
          <div className="colcol-lg-12 col-xl-4" data-aos="fade-up" data-aos-duration="400">
            <div className="card-product the-product">
              <img
                className="thub-product"
                src="https://smarthome.bkav.com/documents/34864/260627/03_SMARTHOME.jpg?t=1542339732697"
                alt=""
              />
              <h2>Smart Home Pack 1</h2>
              <p>Rp. 200,000</p>
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
        </div>
          <button className="btn btn-primary">Lihat Selanjutnya</button>
      </div>
    </div>
  );
}

export default Product;
