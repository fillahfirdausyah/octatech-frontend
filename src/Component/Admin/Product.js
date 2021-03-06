import React, { useState, useEffect, useRef } from "react";
import CurrencyFormat from "react-currency-format";
import { Modal, Button, Toast, Spinner } from "react-bootstrap";
import api from "../../Helpers/api-endpoint";

// Component
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

function Product() {
  const [loading, setLoading] = useState(false);
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
  const [fetchData, setFetchData] = useState(false);

  const [id, setId] = useState(0);
  const [namaProduct, setNamaProduct] = useState("");
  const namaProductHandler = (e) => {
    setNamaProduct(e.target.value);
  };

  const [hargaProduct, setHargaProduct] = useState(0);
  const hargaProductHandler = (e) => {
    setHargaProduct(e.target.value);
  };

  const [gambar, setgambar] = useState("");
  const gambarHanlder = (e) => {
    setgambar(e.target.files[0]);
  };

  const [deskripsi, setDeskripsi] = useState("");
  const deskripsiHandler = (e) => {
    setDeskripsi(e.target.value);
  };

  useEffect(() => {
    api.get("/product/all").then((res) => {
      setProduct(res.data.data);
    });
  }, [fetchData]);

  const handleModalForm = () => setShowModalForm(true);
  const closehandler = () => setShowModalForm(false);
  const handleModalFormUpdate = (id) => {
    api.get(`/product/details/${id}`).then((res) => {
      setId(res.data.data.id);
      setNamaProduct(res.data.data.nama);
      setHargaProduct(res.data.data.harga);
      setDeskripsi(res.data.data.deskripsi);
    });
    setShowModalFormUpdate(true);
  };
  const closehandlerFormUpdate = () => setShowModalFormUpdate(false);

  const handlerModalDetails = (id) => {
    api.get(`/product/details/${id}`).then((res) => {
      setDetailsProduct(res.data);
    });
    setShowModalDetails(true);
  };
  const closeModalDetailsHandler = () => setShowModalDetails(false);

  const formProductHandler = (e) => {
    e.preventDefault();

    setLoading(true);

    let productData = new FormData();
    productData.append("gambar", gambar);
    productData.append("nama", namaProduct);
    productData.append("harga", hargaProduct);
    productData.append("deskripsi", deskripsi);

    api
      .post("/product/add", productData)
      .then((res) => {
        setShowModalForm(false);
        setFetchData(true);
        setToastMessage(res.data.message);
        setShowToast(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
    setDeskripsi("");
    setFetchData(false);
  };

  const updateProductHandler = (e) => {
    e.preventDefault();

    setLoading(true);

    let productData = new FormData();
    productData.append("gambar", gambar);
    productData.append("nama", namaProduct);
    productData.append("harga", hargaProduct);
    productData.append("deskripsi", deskripsi);

    api.put(`/product/update/${id}`, productData).then((res) => {
      setShowModalFormUpdate(false);
      setFetchData(true);
      setToastMessage(res.data.message);
      setShowToast(true);
      setLoading(false);
    });

    e.target.reset();
    setFetchData(false);
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();

    setLoading(true);

    api.delete(`/product/delete/${id}`).then((res) => {
      setToastMessage(res.data.message);
      setFetchData(true);
      setShowToast(true);
      setLoading(false);
    });

    setFetchData(false);
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
            {!loading ? (
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
                      onChange={namaProductHandler}
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
                      onChange={hargaProductHandler}
                    />
                  </div>
                </div>
                <div className="col">
                  <div class="mb-4">
                    <label for="nama" class="form-label">
                      Deskripsi
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={deskripsi}
                      onChange={deskripsiHandler}
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div class="mb-4">
                    <label for="nama" class="form-label">
                      Gambar Product
                    </label>
                    <input
                      type="file"
                      required
                      class="form-control"
                      id="nama"
                      placeholder="Nama"
                      // ref={gambarProductRef}
                      onChange={gambarHanlder}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-6">
                  <div class="mb-4">
                    <label for="nama" class="form-label">
                      Nama Product
                    </label>
                    <input
                      disabled
                      type="text"
                      class="form-control"
                      id="nama"
                      placeholder="Nama"
                      onChange={namaProductHandler}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div class="mb-3">
                    <label for="harga" class="form-label">
                      Harga Product
                    </label>
                    <input
                      disabled
                      type="number"
                      class="form-control"
                      id="harga"
                      placeholder="Rp..."
                      onChange={hargaProductHandler}
                    />
                  </div>
                </div>
                <div className="col">
                  <div class="mb-4">
                    <label for="nama" class="form-label">
                      Deskripsi
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={deskripsi}
                      onChange={deskripsiHandler}
                      disabled
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div class="mb-4">
                    <label for="nama" class="form-label">
                      Gambar Product
                    </label>
                    <input
                      disabled
                      type="file"
                      required
                      class="form-control"
                      id="nama"
                      placeholder="Nama"
                      // ref={gambarProductRef}
                      onChange={gambarHanlder}
                    />
                  </div>
                </div>
              </div>
            )}
            {!loading ? (
              <button className="btn btn-primary w-100 mb-2" type="submit">
                Tambahkan Product
              </button>
            ) : (
              <button className="btn btn-primary w-100 mb-2" type="submit">
                <Spinner
                  className="mr-2"
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </button>
            )}
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
          <form
            onSubmit={(e) => updateProductHandler(e, detailsProduct.data.id)}
          >
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
                    value={namaProduct}
                    onChange={namaProductHandler}
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
                    value={hargaProduct}
                    onChange={hargaProductHandler}
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-4">
                  <label for="nama" class="form-label">
                    Deskripsi
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={deskripsi}
                    onChange={deskripsiHandler}
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <div class="mb-4">
                  <label for="nama" class="form-label">
                    Gambar Product
                  </label>
                  <input
                    type="file"
                    required
                    class="form-control"
                    id="nama"
                    placeholder="Nama"
                    onChange={gambarHanlder}
                  />
                </div>
              </div>
            </div>
            {!loading ? (
              <button className="btn btn-primary w-100 mb-2" type="submit">
                Update Product
              </button>
            ) : (
              <button className="btn btn-primary w-100 mb-2" type="submit">
                <Spinner
                  className="mr-2"
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </button>
            )}
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
              src={`https://api-octatech.herokuapp.com/image/product/${detailsProduct.data.gambar}`}
              alt=""
            />
            <h2>{detailsProduct.data.nama}</h2>
            <p>
              <CurrencyFormat
                value={detailsProduct.data.harga}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp."}
              />
            </p>
            <hr />
            <p style={{ color: "black" }}>{detailsProduct.data.deskripsi}</p>
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
        <h1 class="h3 mb-0 text-gray-800">Product</h1>
      </div>

      <div class="card shadow mb-4" data-aos="fade-up" data-aos-duration="500">
        <div class="card-header py-3 d-flex align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-primary">Data Product</h6>
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
                        prefix={"Rp."}
                      />
                    </td>
                    <td className="td-btn-action">
                      {!loading ? (
                        <button
                          className="btn btn-danger btn-action mx-2"
                          onClick={(e) => deleteHandler(e, x.id)}
                        >
                          <DeleteForeverIcon className="action-icon" />
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger btn-action mx-2"
                          onClick={(e) => deleteHandler(e, x.id)}
                        >
                          <Spinner
                            className="mr-2"
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        </button>
                      )}
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
