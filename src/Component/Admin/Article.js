import React, {useState} from "react";
import { Toast } from "react-bootstrap";

// Component
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

function Article() {

  const [notify, setNotify] = useState(false)

  const notifyHandler = (e) => {
    e.preventDefault();
    
    setNotify(true)
  }

  return (
    <>
      <Toast
        show={notify}
        onClose={() => setNotify(false)}
        delay={2000}
        autohide
        className="bg-warning text-white"
        style={{ position: "absolute", right: 0, zIndex: 1 }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Message</strong>
        </Toast.Header>
        <Toast.Body>Dalam Tahap Maintanance</Toast.Body>
      </Toast>

      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Artikel</h1>
      </div>

      <div class="card shadow mb-4" data-aos="fade-up" data-aos-duration="500">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Data Artikel</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Judul</th>
                  <th>Tanggal</th>
                  <th>Office</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td className="td-btn-action">
                    <button onClick={notifyHandler} className="btn btn-danger btn-action mx-2">
                      <DeleteForeverIcon className="action-icon" />
                    </button>
                    <button onClick={notifyHandler} className="btn btn-success btn-action mx-2">
                      <EditIcon className="action-icon" />
                    </button>
                    <button onClick={notifyHandler} className="btn btn-info btn-action">
                      <VisibilityIcon className="action-icon" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
