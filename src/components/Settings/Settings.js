import React, { Component } from "react";

export class Settings extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <div className="card-title">Labor Types</div>
                <ul className="list-group mb-4">
                  <li className="list-group-item">
                    Billable{" "}
                    <i
                      style={{ fontSize: "1.5em", color: "red" }}
                      className="fas fa-minus-circle float-right"
                    />
                  </li>
                  <li className="list-group-item">Travel</li>
                  <li className="list-group-item">Warranty</li>
                </ul>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="New Labor Type"
                    aria-label="New Labor Type"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button">
                      Add New
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
