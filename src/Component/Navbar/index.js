import React, { useState } from "react";
import { Link } from "react-router-dom";

// Asset
import Logo from "../../Assets/Logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavCollapsed = () => setIsCollapsed(!isCollapsed);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link className="navbar-brand d-flex" to="/">
            <img
              src={Logo}
              alt="otatech_logo"
              width="110px"
              height="90px"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapsed}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={`${isCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul class="navbar-nav ms-auto navbar-nav-custom">
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                  Beranda
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/about">
                  Tentang
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/team">
                  Tim
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="contact">
                  Kontak
                </Link>
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
