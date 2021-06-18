import React from "react";

// Asset
import "./style.css";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

function ContactUs() {
  return (
    <div className="contact-us text-center">
      <h1>Kontak Kami</h1>
      <div className="contact-info">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div
              className="custom-card"
              data-aos="fade-up"
              data-aos-duration="900"
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
              data-aos-duration="900"
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
              data-aos-duration="900"
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
        <h1>Kirim Pesan</h1>
        <div className="row" data-aos="fade-up" data-aos-duration="900">
          <div className="col">
            <form>
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      class="form-control"
                      id="fist-name"
                      placeholder="Nama Depan"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      class="form-control"
                      id="last-name"
                      placeholder="Nama Belakang"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Pesan Kamu"
                  rows="3"
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
