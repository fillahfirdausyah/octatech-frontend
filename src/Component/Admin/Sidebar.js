import React from "react";
import { NavLink } from "react-router-dom";

// Component
import DraftsIcon from "@material-ui/icons/Drafts";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import TuneIcon from '@material-ui/icons/Tune';

function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <NavLink
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/admin"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink" />
        </div>
        <div class="sidebar-brand-text mx-3">Octa Admin</div>
      </NavLink>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item">
        <NavLink className="nav-link" to="/admin">
          <DashboardIcon className="mx-2" />
          <span>Dashboard</span>
        </NavLink>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Pesan</div>

      <li class="nav-item">
        <NavLink className="nav-link" to="/inbox">
          <DraftsIcon className="mx-2" />
          <span>Kotak Masuk</span>
        </NavLink>
      </li>

      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Content</div>

      <li class="nav-item">
        <NavLink className="nav-link" to="/products">
          <LocalMallIcon className="mx-2" />
          <span>Product</span>
        </NavLink>
      </li>

      <li class="nav-item">
        <NavLink className="nav-link" to="/artikel">
          <LibraryBooksIcon className="mx-2" />
          <span>Artikel</span>
        </NavLink>
      </li>
      <hr class="sidebar-divider" />

      <div class="sidebar-heading">Pengaturan Halaman</div>

      <li class="nav-item">
        <NavLink className="nav-link" to="/sliders">
          <TuneIcon className="mx-2" />
          <span>Gambar Slider</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Sidebar;
