import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Clockin from "../clock-in/Clockin";
import TimeSheet from "../time-sheet/TimeSheet";
import Settings from "../Settings/Settings";

export class Layout extends Component {
  state = {
    laborTypes: ["Billable", "Travel", "Warranty"]
  };

  handleAddLaborTypes = newValue => {
    let typesArray = [...this.state.laborTypes];
    typesArray.push(newValue);
    this.setState({
      laborTypes: typesArray
    });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/clock-in" component={Clockin} />
          <Route path="/time-sheet" component={TimeSheet} />
          <Route
            path="/settings"
            render={() => (
              <Settings
                laborTypes={this.state.laborTypes}
                addLaborTypes={this.handleAddLaborTypes}
              />
            )}
          />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default Layout;
