import React, { useRef, useState } from "react";
import { Toast } from "react-bootstrap";
import axios from "axios";

// Asset
import "./style.css";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

function ContactUs() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const pesanRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const pesan = pesanRef.current.value;

    const name = `${firstName} ${lastName}`;

    const data = {
      name,
      email,
      pesan,
    };

    axios.post("http://localhost:8000/pesan/add", data).then((res) => {
      setMessage(res.data.message);
      setShowToast(true);
    });

    e.target.reset();
  };

  return (
    <div className="contact-us text-center">
      <h1>KONTAK KAMI</h1>
      <div className="contact-info">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div
              className="custom-card"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="contact-icon">
                <RoomIcon fontSize="large" className="icon" />
              </div>
              <h1>Alamat</h1>
              <p>Jl. Menuju Surga, Dunia, No.1, Indonesia</p>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div
              className="custom-card"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div className="contact-icon">
                <EmailIcon fontSize="large" className="icon" />
              </div>
              <h1>Email</h1>
              <p>Team@OctaTechnologies.com</p>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div
              className="custom-card"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <div className="contact-icon">
                <PhoneIcon fontSize="large" className="icon" />
              </div>
              <h1>Telephone</h1>
              <p>+62 8889 82761</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2000}
          autohide
          className="bg-success text-white"
          style={{ position: 'absolute', right: 0 }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Message</strong>
          </Toast.Header>
          <Toast.Body>{`${message} mengirimkan pesan`}</Toast.Body>
        </Toast>
        <h1>Kirim Pesan</h1>
        <div className="row" data-aos="fade-up" data-aos-duration="900">
          <div className="col">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="fist-name"
                      placeholder="Nama Depan"
                      ref={firstNameRef}
                    />
                  </div>
                  <div className="col">
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="last-name"
                      placeholder="Nama Belakang"
                      ref={lastNameRef}
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <input
                  required
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  ref={emailRef}
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Pesan Kamu"
                  rows="3"
                  ref={pesanRef}
                ></textarea>
              </div>
              <button className="btn btn-primary w-100">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
