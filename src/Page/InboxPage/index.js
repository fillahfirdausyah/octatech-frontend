import React from "react";

// Asset
import './style.css' 

// Component
import Sidebar from "../../Component/Admin/Sidebar";
import Navbar from "../../Component/Admin/Navbar";
import Inbox from "../../Component/Admin/Inbox";

function InboxPage() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div class="container-fluid">
            <Inbox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InboxPage;
