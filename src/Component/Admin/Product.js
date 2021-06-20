import React, { useState, useEffect, useRef } from "react";
import CurrencyFormat from "react-currency-format";
import { Modal, Button, Toast } from "react-bootstrap";
import axios from "axios";

// Component
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { ID } from "postcss-selector-parser";

function Product() {
  const [product, setProduct] = useState([]);
  const [detailsProduct, setDetailsProduct] = useState({
    data: {
      nama: "",
      harga: "",
    },
  });
  const [showModalForm, setShowModalForm] = useState(false);
  const [showModalFormUpdate, setShowModalFormUpdate] = useState(false);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [showToats, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [gambar, setgambar] = useState("");
  const [fetchData, setFetchData] = useState(false);

  const namaProductRef = useRef();
  const hargaProductRef = useRef();

  useEffect(() => {
    axios.get("http://localhost:8000/product/all").then((res) => {
      setProduct(res.data.data);
    });
  }, [fetchData]);

  const handleModalForm = () => setShowModalForm(true);
  const closehandler = () => setShowModalForm(false);
  const handleModalFormUpdate = (id) => {
    axios.get(`http://localhost:8000/product/details/${id}`).then((res) => {
      setDetailsProduct(res.data);
    });
    console.log(detailsProduct);
    setShowModalFormUpdate(true);
  };
  const closehandlerFormUpdate = () => setShowModalFormUpdate(false);
  const handlerModalDetails = (id) => {
    axios.get(`http://localhost:8000/product/details/${id}`).then((res) => {
      setDetailsProduct(res.data);
    });
    setShowModalDetails(true);
  };
  const closeModalDetailsHandler = () => setShowModalDetails(false);

  const gambarHanlder = (e) => {
    setgambar(e.target.files[0]);
  };

  const formProductHandler = (e) => {
    e.preventDefault();

    const nama = namaProductRef.current.value;
    const harga = hargaProductRef.current.value;

    let productData = new FormData();
    productData.append("gambar", gambar);
    productData.append("nama", nama);
    productData.append("harga", harga);

    axios
      .post("http://localhost:8000/product/add", productData)
      .then((res) => {
        setShowModalForm(false);
        setToastMessage(res.data.message);
        setShowToast(true);
        setFetchData(true);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();

    axios.delete(`http://localhost:8000/product/delete/${id}`).then((res) => {
      setToastMessage(res.data.message);
      setShowToast(true);
      setFetchData(true);
    });
  };

  return (
    <>
      {/* Form Insert */}
      <Modal
        size="md"
        show={showModalForm}
        onHide={closehandler}
        backdrop="static"
        keyboard={false}
        className="pesan-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Masukan Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formProductHandler}>
            <div className="row">
              <div className="col-6">
                <div class="mb-4">
                  <label for="nama" class="form-label">
                    Nama Product
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="nama"
                    placeholder="Nama"
                    ref={namaProductRef}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="harga" class="form-label">
                    Harga Product
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="harga"
                    placeholder="Rp..."
                    ref={hargaProductRef}
                  />
                </div>
              </div>
              <div className="col-12">
                <div class="mb-4">
                  <label for="nama" class="form-label">
                    Gambar Product
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="nama"
                    placeholder="Nama"
                    // ref={gambarProductRef}
                    onChange={gambarHanlder}
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-primary w-100 mb-2">
              Tambahkan Product
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closehandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Form Update */}
      <Modal
        size="md"
        show={showModalFormUpdate}
        onHide={closehandlerFormUpdate}
        backdrop="static"
        keyboard={false}
        className="pesan-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="col-6">
                <div class="mb-4">
                  <label for="nama" class="form-label">
                    Nama Product
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="nama"
                    placeholder="Nama"
                    value={detailsProduct.data.nama}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="harga" class="form-label">
                    Harga Product
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="harga"
                    placeholder="Rp..."
                    value={detailsProduct.data.harga}
                  />
                </div>
              </div>
              <div className="col-12">
                <div class="mb-4">
                  <label for="nama" class="form-label">
                    Gambar Product
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="nama"
                    placeholder="Nama"
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-primary w-100 mb-2">
              Tambahkan Product
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closehandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Details */}
      <Modal
        size="md"
        show={showModalDetails}
        onHide={closeModalDetailsHandler}
        backdrop="static"
        keyboard={false}
        className="pesan-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Details Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-product the-product">
            <img
              className="thub-product"
              src={`http://localhost:8000/image/product/${detailsProduct.data.gambar}`}
              alt=""
            />
            <h2>{detailsProduct.data.nama}</h2>
            <p>
              <CurrencyFormat
                value={detailsProduct.data.harga}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"-Rp."}
              />
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalDetailsHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Toast
        onClose={() => setShowToast(false)}
        show={showToats}
        delay={3000}
        autohide
        className="bg-success text-white"
        style={{ position: "absolute", zIndex: 1, right: 0 }}
      >
        <Toast.Header>
          <strong className="me-auto">Message</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Artikel</h1>
      </div>

      <div class="card shadow mb-4" data-aos="fade-up" data-aos-duration="500">
        <div class="card-header py-3 d-flex align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-primary">Data Artikel</h6>
          <button
            className="btn btn-primary btn-action ml-5"
            onClick={handleModalForm}
          >
            <AddCircleOutlineIcon className="action-icon" />{" "}
          </button>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {product.map((x, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{x.nama}</td>
                    <td>
                      <CurrencyFormat
                        value={x.harga}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"-Rp."}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-action mx-2"
                        onClick={(e) => deleteHandler(e, x.id)}
                      >
                        <DeleteForeverIcon className="action-icon" />
                      </button>
                      <button
                        className="btn btn-success btn-action mx-2"
                        onClick={() => handleModalFormUpdate(x.id)}
                      >
                        <EditIcon className="action-icon" />
                      </button>
                      <button
                        className="btn btn-info btn-action"
                        onClick={() => handlerModalDetails(x.id)}
                      >
                        <VisibilityIcon className="action-icon" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
