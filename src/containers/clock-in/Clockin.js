import React, { Component } from "react";

export class Clockin extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h1 className="text-center mb-3">Clock in here</h1>

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
    );
  }
}

export default Clockin;
