import React, { useState, useEffect } from "react";
import { Modal, Spinner, Button, Toast } from "react-bootstrap";
import api from '../../Helpers/api-endpoint'

// Component
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import EditIcon from "@material-ui/icons/Edit";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fetchData, setFetchData] = useState(false);
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [dataContact, setDataContact] = useState({})

  const [showModalFormUpdate, setShowModalFormUpdate] = useState(false);

  const closehandlerFormUpdate = () => setShowModalFormUpdate(false);
  const closehandler = () => setShowModalFormUpdate(false);

  useEffect(() => {
    api.get("/contact/get").then((res) => {
      setData(res.data.data[0]);
    });
  }, [fetchData]);

  const showModalhandler = () => {
    api.get('/contact/get').then(res => {
      setAlamat(res.data.data[0].alamat)
      setEmail(res.data.data[0].email)
      setPhone(res.data.data[0].phone)
    })
    setShowModalFormUpdate(true);
  };

  const alamatHandler = (e) => {
    setAlamat(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const updateContact = (e) => {
    e.preventDefault();

    setLoading(true);

    const newData = {
      alamat,
      email,
      phone,
    };

    api.put("/contact/update/1", newData).then((res) => {
      setLoading(false);
      setShowToast(true)
      setFetchData(true)
      setToastMessage('Data berhasil diubah')
      setShowModalFormUpdate(false)
    });

    e.target.reset();
    setFetchData(false)
  };

  return (
    <>
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
          <form onSubmit={updateContact}>
            <div className="row">
              <div className="col-12">
                <div class="mb-3">
                  <label for="nama" class="form-label">
                    Alamat
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="nama"
                    placeholder="Alamat"
                    value={alamat}
                    onChange={alamatHandler}
                  />
                </div>
              </div>
              <div className="col">
                <div class="mb-3">
                  <label for="harga" class="form-label">
                    email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    placeholder="Email"
                    value={email}
                    onChange={emailHandler}
                  />
                </div>
              </div>
              <div className="col-12">
                <div class="mb-4">
                  <label for="harga" class="form-label">
                    Nomor Telephone
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="harga"
                    placeholder="Phone"
                    value={phone}
                    onChange={phoneHandler}
                  />
                </div>
              </div>
            </div>
            {!loading ? (
              <button className="btn btn-primary w-100 mb-2" type="submit">
                Update Contact
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

      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
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

      <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Kontak</h1>
        </div>

        <div class="card shadow mb-4 text-center">
          <div class="card-header py-3 d-flex align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Informasi Kontak</h6>
            <button
              className="btn btn-primary btn-action ml-5"
              onClick={showModalhandler}
            >
              <EditIcon className="action-icon" />{" "}
            </button>
          </div>
          <div class="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className="custom-card">
                  <div className="contact-icon">
                    <RoomIcon fontSize="large" className="icon" />
                  </div>
                  <h1>Alamat</h1>
                  <p>{data.alamat}</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="custom-card">
                  <div className="contact-icon">
                    <EmailIcon fontSize="large" className="icon" />
                  </div>
                  <h1>Email</h1>
                  <p>{data.email}</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="custom-card">
                  <div className="contact-icon">
                    <PhoneIcon fontSize="large" className="icon" />
                  </div>
                  <h1>Telephone</h1>
                  <p>+62 {data.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
