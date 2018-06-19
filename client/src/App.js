import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import SettingsContext from "../src/components/context/SettingsContext";

class App extends Component {
  state = {
    settings: {
      laborTypes: [],
      errors: {}
    }
  };

  componentDidMount() {
    this.getLaborTypes();
  }

  componentDidUpdate() {
    console.log("updated");
  }

  getLaborTypes = childSettingsData => {
    if (childSettingsData) {
      // If data is passed up from child, don't make GET request
      this.setState({ settings: childSettingsData });
    } else {
      axios.get("/api/settings/labor-types").then(res => {
        const settingsData = {
          ...this.state.settings,
          laborTypes: res.data
        };
        this.setState({ settings: settingsData });
      });
    }
  };

  // addLaborType = newValue => {
  //   const newLaborType = { laborTypeName: newValue };
  //   axios
  //     .put("/api/settings/add-labor-type", newLaborType)
  //     .then(res => {
  //       const settingsData = {
  //         ...this.state.settings,
  //         laborTypes: res.data
  //       };
  //       this.setState({ settings: settingsData });
  //     })
  //     .catch(err => {
  //       const errData = {
  //         ...this.state.settings,
  //         errors: err.response.data
  //       };
  //       console.log(err.response.data);

  //       this.setState({ settings: errData });
  //     });
  // };

  deleteLaborType = laborId => {
    console.log(laborId);
  };

  submitLaborTypeName = (laborId, newName) => {
    const newLaborTypeData = {
      newLaborTypeName: newName,
      laborTypeId: laborId
    };
    axios.put("/api/settings/rename-labor-type", newLaborTypeData).then(res => {
      const settingsData = {
        ...this.state.settings,
        laborTypes: res.data
      };
      console.log(settingsData);
      this.setState({ settings: settingsData });
    });
  };

  render() {
    return (
      <Router>
        <SettingsContext.Provider
          value={{
            settings: this.state.settings,
            addLaborType: this.addLaborType,
            deleteLaborType: this.deleteLaborType,
            submitLaborTypeName: this.submitLaborTypeName,
            getLaborTypes: this.getLaborTypes
          }}
        >
          <Layout />
        </SettingsContext.Provider>
      </Router>
    );
  }
}

export default App;
