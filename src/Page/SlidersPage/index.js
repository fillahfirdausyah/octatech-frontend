import React from "react";

// Component
import Sidebar from "../../Component/Admin/Sidebar";
import Navbar from "../../Component/Admin/Navbar";
import Slider from "../../Component/Admin/Slider";

function SlidersPage() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar/>
          <div class="container-fluid">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlidersPage;
