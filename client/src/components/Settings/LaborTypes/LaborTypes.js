import React, { Component } from "react";
import axios from "axios";

import DisplayLaborType from "./DisplayLaborType";
import EditLaborTypeName from "./EditLaborTypeName";

import TextFieldGroup from "../../common/TextFieldGroup";

export class LaborTypes extends Component {
  state = {
    newLaborTypeValue: "",
    renamingLaborType: ""
  };

  componentDidUpdate() {
    console.log(this.props.context);
  }

  handleChange = e => {
    this.setState({
      newLaborTypeValue: e.target.value
    });
  };

  addLaborType = newValue => {
    const newLaborType = { laborTypeName: newValue };
    axios
      .put("/api/settings/add-labor-type", newLaborType)
      .then(res => {
        const settingsData = {
          ...this.props.context.settings,
          laborTypes: res.data
          // errors: {}
        };
        this.props.context.getLaborTypes(settingsData);
      })
      .catch(err => {
        const errData = {
          ...this.state.settings,
          errors: err.response.data
        };
        console.log(err.response.data);

        this.setState({ settings: errData });
      });
  };

  submitLaborTypeName = (laborId, newName) => {
    const newLaborTypeData = {
      newLaborTypeName: newName,
      laborTypeId: laborId
    };
    axios.put("/api/settings/rename-labor-type", newLaborTypeData).then(res => {
      const settingsData = {
        ...this.state.settings,
        laborTypes: res.data,
        errors: {}
      };
      this.props.context.getLaborTypes(settingsData);
    });
  };

  editLaborTypeName = id => {
    this.setState({ renamingLaborType: id });
  };

  // submitLaborTypeName = id => {
  //   this.setState({ renamingLaborType: "" });
  // };

  cancelEdit = () => {
    this.setState({ renamingLaborType: "" });
  };

  // laborTypesList = (array, deleteLaborType, submitLaborTypeName) => {
  //   return laborTypes;
  // };

  render() {
    const context = this.props.context;
    const laborTypes = context.settings.laborTypes.map(labor => {
      if (this.state.renamingLaborType === labor._id) {
        return (
          <EditLaborTypeName
            key={labor._id}
            labor={labor}
            cancelEdit={this.cancelEdit}
            submitLaborTypeName={this.submitLaborTypeName}
            error={
              context.settings.errors ? context.settings.errors.laborType : ""
            }
          />
        );
      } else {
        return (
          <DisplayLaborType
            key={labor._id}
            labor={labor}
            deleteLaborType={context.deleteLaborType}
            editLaborTypeName={this.editLaborTypeName}
          />
        );
      }
    });
    return (
      <div className="card mb-3">
        <div className="card-body">
          <div className="card-title">
            Labor Types <small className="invalid-feedback">error here</small>
          </div>
          <ul className="list-group mb-4">{laborTypes}</ul>
          <div className="input-group">
            <TextFieldGroup
              type="text"
              className="form-control"
              placeholder="New Labor Type"
              aria-label="New Labor Type"
              onChange={this.handleChange}
              value={this.state.newLaborTypeValue}
              error={context.settings.errors.laborType}
              AppendButton={() => (
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={() =>
                      this.addLaborType(this.state.newLaborTypeValue)
                    }
                  >
                    Add New
                  </button>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LaborTypes;
