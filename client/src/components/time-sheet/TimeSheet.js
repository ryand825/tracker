import React, { Component } from "react";
// import { Route, NavLink } from "react-router-dom";

export class TimeSheet extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h4>TODO: timesheet</h4>
            <input type="date" className="form-control mb-2" />
            <div className="list-group mb-3">
              <div className="list-group-item d-flex justify-content-between">
                <h5 className="mb-0">Job: 12345</h5>
                <small className="text-muted">5.5 hours</small>
              </div>
              <div className="list-group-item bg-light d-flex justify-content-between">
                <h6 className="mb-0">The Labor Type</h6>
                <small className="text-muted">1.0 Hours</small>
              </div>
              <div className="list-group-item">
                <small className="text-muted float-right">03:57 - 04:57</small>
                <p className="mb-0">
                  Notes go in here Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Ducimus dolor reprehenderit nam debitis
                  mollitia iusto eos nesciunt eum voluptas necessitatibus.
                </p>
              </div>
              <div className="list-group-item bg-light d-flex justify-content-between">
                <h6 className="mb-0">The Labor Type</h6>
                <small className="text-muted">4.0 Hours</small>
              </div>
              <div className="list-group-item">
                <small className="text-muted float-right ml-1">
                  04:57 - 08:57
                </small>
                <p className="mb-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ducimus dolor reprehenderit nam debitis mollitia iusto eos
                  nesciunt eum voluptas necessitatibus.
                </p>
              </div>
            </div>
            <div className="list-group">
              <div className="list-group-item d-flex justify-content-between">
                <h5 className="mb-0">Job: 54321</h5>
                <small className="text-muted">5.5 hours</small>
              </div>
              <div className="list-group-item bg-light d-flex justify-content-between">
                <h6 className="mb-0">The Labor Type</h6>
                <small className="text-muted">1.0 Hours</small>
              </div>
              <div className="list-group-item">
                <small className="text-muted float-right">03:57 - 04:57</small>
                <p className="mb-0">
                  Notes go in here Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Ducimus dolor reprehenderit nam debitis
                  mollitia iusto eos nesciunt eum voluptas necessitatibus.
                </p>
              </div>
              <div className="list-group-item bg-light d-flex justify-content-between">
                <h6 className="mb-0">The Labor Type</h6>
                <small className="text-muted">4.0 Hours</small>
              </div>
              <div className="list-group-item">
                <small className="text-muted float-right ml-1">
                  04:57 - 08:57
                </small>
                <p className="mb-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ducimus dolor reprehenderit nam debitis mollitia iusto eos
                  nesciunt eum voluptas necessitatibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeSheet;
