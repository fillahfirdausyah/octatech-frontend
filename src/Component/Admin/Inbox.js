import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Moment from "react-moment";
import api from "../../Helpers/api-endpoint";

// Component
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Inbox() {
  const [allPesan, setAllPesan] = useState([]);
  const [pesan, setPesan] = useState({});
  const [fetchData, setFetchData] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    api.get("pesan/all").then((res) => {
      setAllPesan(res.data.data);
    });
  }, [fetchData]);

  const deleteHandler = (e, id) => {
    e.preventDefault();

    api.delete(`pesan/delete/${id}`).then((res) => {
      console.log(res.data);
      setFetchData(!fetchData);
    });
  };

  const showHandler = (e, id) => {
    e.preventDefault();

    api.get(`/pesan/details/${id}`).then((res) => {
      setPesan(res.data.data);
    });
    setShowModal(true);
  };

  const closehandler = () => setShowModal(false);
  return (
    <>
      <Modal
        show={showModal}
        onHide={closehandler}
        backdrop="static"
        keyboard={false}
        className="pesan-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Detail Pesan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <h5>{pesan.name}</h5>
              <p className="pesan-email">{pesan.email}</p>
            </div>
            <div className="col-6">
              <p className="pesan-waktu">
                <Moment fromNow>{pesan.createdAt}</Moment>
              </p>
            </div>
          </div>
          <hr />
          <p className="mt-4">{pesan.pesan}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closehandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Kotak Masuk</h1>
      </div>
      <div class="card shadow mb-4" data-aos="fade-up" data-aos-duration="500">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Kotak Masuk</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* <tfoot>
                <tr>
                <th>Judul</th>
                  <th>Tanggal</th>
                  <th>Office</th>
                  <th>Action</th>
                </tr>
              </tfoot> */}
              <tbody>
                {allPesan.length < 0 ? (
                  <tr>
                    <td>Tidak ada Data</td>
                  </tr>
                ) : (
                  allPesan.map((x, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{x.name}</td>
                      <td>{x.email}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-action mx-2"
                          onClick={(e) => deleteHandler(e, x.id)}
                        >
                          <DeleteForeverIcon className="action-icon" />
                        </button>
                        <button
                          className="btn btn-info btn-action"
                          onClick={(e) => showHandler(e, x.id)}
                        >
                          <VisibilityIcon className="action-icon" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inbox;
