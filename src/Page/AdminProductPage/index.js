import React from "react";

// Component
import Sidebar from "../../Component/Admin/Sidebar";
import Navbar from "../../Component/Admin/Navbar";
import Product from "../../Component/Admin/Product";

function AdminProductPage(props) {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar signOutProses={props.signOutProses} />
          <div class="container-fluid">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProductPage;
