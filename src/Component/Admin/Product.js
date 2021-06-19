import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

// Component
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

function Product() {
  const [product, setProduct] = useState([]);
  const [modalForm, setModalForm] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/product/all").then((res) => {
      setProduct(res.data.data);
    });
  }, []);

  const handleModalForm = (e) => {
      e.preventDefault();
      
      setModalForm(true)
  };

  const handleClose = () => setModalForm(false)

  return (
    <>
      <Modal
        show={handleModalForm}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Artikel</h1>
      </div>

      <div class="card shadow mb-4" data-aos="fade-up" data-aos-duration="500">
        <div class="card-header py-3 d-flex align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-primary">Data Artikel</h6>
          <button className="btn btn-primary btn-action ml-5" onClick={handleModalForm}>
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
                      <a href="" className="btn btn-danger btn-action mx-2">
                        <DeleteForeverIcon className="action-icon" />
                      </a>
                      <a href="" className="btn btn-success btn-action mx-2">
                        <EditIcon className="action-icon" />
                      </a>
                      <a href="" className="btn btn-info btn-action">
                        <VisibilityIcon className="action-icon" />
                      </a>
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
