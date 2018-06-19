import React, { Component } from "react";

import TextFieldGroup from "../../common/TextFieldGroup";

export class EditLaborTypeName extends Component {
  state = { newLaborTypeName: "" };

  handleChange = e => {
    this.setState({ newLaborTypeName: e.target.value });
  };

  render() {
    return (
      <li className="list-group-item  d-flex justify-content-between align-items-center">
        <form>
          <TextFieldGroup
            placeholder={this.props.labor.laborTypeName}
            value={this.state.newLaborTypeName}
            type="text"
            className="col-6 form-control"
            id="renameLabor"
            onChange={this.handleChange}
            error={this.props.error}
          />
        </form>
        <span>
          <button
            className="btn btn-outline-warning mr-2"
            onClick={this.props.cancelEdit}
          >
            <i className="fas fa-ban" />
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => {
              this.props.submitLaborTypeName(
                this.props.labor._id,
                this.state.newLaborTypeName
              );
              // this.props.cancelEdit();
            }}
          >
            <i className="fas fa-check" />
          </button>
        </span>
      </li>
    );
  }
}

export default EditLaborTypeName;
