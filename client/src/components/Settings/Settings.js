import React, { Component } from "react";

class Settings extends Component {
  state = {
    newLaborTypeValue: ""
  };

  handleChange = e => {
    this.setState({
      newLaborTypeValue: e.target.value
    });
  };

  render() {
    const laborTypes = this.props.laborTypes.map(labor => {
      return (
        <li key={`laborType: ${labor}`} className="list-group-item">
          {labor}
        </li>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <div className="card-title">Labor Types</div>
                <ul className="list-group mb-4">{laborTypes}</ul>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="New Labor Type"
                    aria-label="New Labor Type"
                    onChange={this.handleChange}
                    value={this.state.newLaborTypeValue}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      onClick={() =>
                        this.props.addLaborTypes(this.state.newLaborTypeValue)
                      }
                    >
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
