import React, { useEffect, useState } from "react";
import api from "../../Helpers/api-endpoint";

// Component
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Content() {

  const [product, setProduct] = useState(0)
  const [pesan, setPesan] = useState(0)

  useEffect(() => {
    api.get("/product/all").then((res) => {
      setProduct(res.data.data.length)
    });
  }, []);

  useEffect(() => {
    api.get("/pesan/all").then((res) => {
      setPesan(res.data.data.length)
    });
  }, []);

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <div class="row">

      <div
          class="col-xl-6 col-md-6 mb-4"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Jumlah Product
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{product}</div>
                </div>
                <div class="col-auto">
                  <LocalMallIcon fontSize="large" className="text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-xl-6 col-md-6 mb-4"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Jumlah Artikel
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">2</div>
                </div>
                <div class="col-auto">
                  <CollectionsBookmarkIcon
                    fontSize="large"
                    className="text-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-xl-6 col-md-6 mb-4"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Pesan Masuk
                  </div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{pesan}</div>
                </div>
                <div class="col-auto">
                  <AllInboxIcon fontSize="large" className="text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
