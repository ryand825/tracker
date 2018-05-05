import React, { Component } from "react";

export class Clockin extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* <h1 className="text-center mb-3">Clock in here</h1> */}
          <div className="col-sm">
            <div className="card mb-3">
              <div className="card-body">
                <h6 className="card-title">Title</h6>
                <div className="form-group">
                  <label>Labor Type</label>
                  <select className="form-control mb-3">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <label>Job Number</label>
                  <input type="text" className="form-control mb-3" />
                  <label className="label">Notes</label>
                  <textarea name="" id="" rows="3" className="form-control" />
                </div>
                <button className="btn btn-primary">Start</button>
              </div>
            </div>
          </div>

          <div className="col-sm">
            {/* <h5>Time Status</h5> */}
            <div className="list-group">
              <div className="list-group-item">Title</div>
              <div className="list-group-item bg-light py-1">
                03:57 - 4:57 <span className="float-right">1.0 Hours</span>
              </div>
              <div className="list-group-item">Some info</div>

              <div className="list-group-item bg-light py-1">Time entry</div>
              <div className="list-group-item">Some info</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clockin;
