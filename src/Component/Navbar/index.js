import React from "react";

// Asset
import Logo from "../../Assets/Logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand d-flex " href="#">
            <img
              src={Logo}
              alt="otatech_logo"
              width="110px"
              height="90px"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto navbar-nav-custom">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Beranda
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Tentang
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Tim
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Kontak
                </a>
              </li>
            </ul>
            <form>
              <div className="form-search">
                <div className="search-icon">
                  <SearchIcon className="search-icon" />
                </div>
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
