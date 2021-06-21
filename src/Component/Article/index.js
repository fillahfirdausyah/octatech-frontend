import React from "react";

// Asset
import "./style.css";

import Article1 from "../../Assets/article-1.jpg";
import Article2 from "../../Assets/article-2.jpg";
import Article3 from "../../Assets/article-3.jpg";
import Article4 from "../../Assets/article-4.jpg";
import Article5 from "../../Assets/article-2.jpg";

function Article() {
  return (
    <div className="article">
      <h1>Artikel & Kiat Unggulan</h1>
      <div className="content">
        <div className="row">
          <div className="col">
            <div
              className="content-left"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <img src={Article1} alt="" />
              <h2>
                Hallway Interior with Cabinet and Potted Plant near the door
              </h2>
              <p>
                The inside of your home is likely already decked out with
                houseplants that give your space personality, but guess what:
                Your front door deserves some plant love, too. Whether you've
                got a shady porch perfect for trailing English ivy, read more
              </p>
            </div>
          </div>
          <div className="col">
            <div className="content-right">
              <div className="row">
                <div
                  className="right-child d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="right-child-title">
                    <h2>
                      3 interior design tips that make a rented space feel like
                      home
                    </h2>
                    <p>Design2TasteBlog</p>
                  </div>
                  <img src={Article2} alt="" />
                </div>
              </div>
              <div className="row">
                <div
                  className="right-child mt-5 d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="right-child-title">
                    <h2>How to Protect Furniture While Renovating</h2>
                    <p>Ivan Dimitrijevic</p>
                  </div>
                  <img src={Article3} alt="" />
                </div>
              </div>
              <div className="row">
                <div
                  className="right-child mt-5 d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="right-child-title">
                    <h2>
                      Don’t Lose Your Marbles: How to Care for Your Marble
                      Furniture
                    </h2>
                    <p>France & Son</p>
                  </div>
                  <img src={Article4} alt="" />
                </div>
              </div>
              <div className="row">
                <div
                  className="right-child mt-5 d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="right-child-title">
                    <h2>DEAR PEOPLE WHO LIVE IN FANCY TINY HOUSES</h2>
                    <p>Lauren Moudery</p>
                  </div>
                  <img src={Article5} alt="" />
                </div>
              </div>
              <div className="row">
                <div
                  className="right-child mt-5 d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="right-child-title">
                    <h2>
                      3 interior design tips that make a rented space feel like
                      home
                    </h2>
                    <p>Design2TasteBlog</p>
                  </div>
                  <img src={Article2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="selengkapnya">
        <a href="" className="btn btn-primary btn-selengkapnya">
          Lihat Artikel Lainya
        </a>
      </div>
    </div>
  );
}

export default Article;
