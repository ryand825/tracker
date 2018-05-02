import React, { Component } from "react";
import Clockin from "../Clockin/Clockin";
import Titlebar from "../../components/Titlebar/Titlebar";

export class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Titlebar />
        <div className="container">
          <Clockin />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
