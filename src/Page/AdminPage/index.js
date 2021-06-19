import React from "react";

// Component
import Sidebar from "../../Component/Admin/Sidebar";
import Navbar from "../../Component/Admin/Navbar";
import Content from "../../Component/Admin/Content";

function AdminPage(props) {

  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar signOutProses={props.signOutProses}/>
          <div class="container-fluid">
              <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
