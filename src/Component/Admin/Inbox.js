import React from "react";

// Component
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Inbox() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Kotak Masuk</h1>
      </div>
      <div class="card shadow mb-4" data-aos="fade-up" data-aos-duration="500">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Kotak Masuk</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* <tfoot>
                <tr>
                <th>Judul</th>
                  <th>Tanggal</th>
                  <th>Office</th>
                  <th>Action</th>
                </tr>
              </tfoot> */}
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Donna Snider</td>
                  <td>donna@k.com</td>
                  <td>
                    <a href="" className="btn btn-danger btn-action mx-2">
                      <DeleteForeverIcon className="action-icon" />
                    </a>
                    <a href="" className="btn btn-info btn-action">
                      <VisibilityIcon className="action-icon" />
                    </a>
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

export default Inbox;