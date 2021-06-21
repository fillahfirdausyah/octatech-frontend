import React from "react";

// Component
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

function Article() {
  return (
    <>
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
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td className="td-btn-action">
                    <a href="" className="btn btn-danger btn-action mx-2">
                      <DeleteForeverIcon className="action-icon" />
                    </a>
                    <a href="" className="btn btn-success btn-action mx-2">
                      <EditIcon className="action-icon" />
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

export default Article;
