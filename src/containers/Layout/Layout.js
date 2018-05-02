import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Clockin from "../clock-in/Clockin";

export class Layout extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/clock-in" component={Clockin} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default Layout;
