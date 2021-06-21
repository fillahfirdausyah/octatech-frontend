import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import api from "../../Helpers/api-endpoint";

// Component
import EditIcon from "@material-ui/icons/Edit";

function Slider() {
  const [showModalForm, setShowModal] = useState(false);
  const [slider, setSlider] = useState();

  const sliderHandler = (e) => {
    e.preventDefault();

    let newSlider = new FormData()

    slider.forEach(x => {
        newSlider.append('slider', x)
    })

    api.get("/slider/add", newSlider).then((res) => {
      alert(res);
    });
    console.log(slider)
  };

  const gambarSliderHandler = (e) => {
    setSlider(e.target.files);
  };

  const openModalForm = () => setShowModal(true);
  const closeModalForm = () => setShowModal(false);

  return (
    <>
      <Modal
        size="md"
        show={showModalForm}
        onHide={closeModalForm}
        backdrop="static"
        keyboard={false}
        className="pesan-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Slider</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={sliderHandler}>
            <div className="row">
              <div className="col-12">
                <div class="mb-4">
                  <label for="nama" class="form-label">
                    Gambar Slider
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="nama"
                    placeholder="Nama"
                    onChange={gambarSliderHandler}
                    multiple
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
          <Button variant="secondary" onClick={closeModalForm}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Slider</h1>
      </div>

      <div class="card shadow mb-4" data-aos="fade-up" data-aos-duration="500">
        <div class="card-header py-3 d-flex align-items-center justify-content-between">
          <h6 class="m-0 font-weight-bold text-primary">Slider Home Page</h6>
          <button
            className="btn btn-primary btn-action ml-5"
            onClick={openModalForm}
          >
            <EditIcon className="action-icon" />
          </button>
        </div>
        <div class="card-body">
          <div className="row">
            <div className="col">
              <h4>Slider 1</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
