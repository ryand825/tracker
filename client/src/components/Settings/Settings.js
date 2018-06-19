import React, { PureComponent } from "react";

import SettingsContext from "../context/SettingsContext";
import LaborTypes from "./LaborTypes/LaborTypes";

class Settings extends PureComponent {
  componentDidUpdate() {
    console.log("did update");
  }

  render() {
    return (
      <SettingsContext.Consumer>
        {value => (
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <LaborTypes context={value} />
              </div>
            </div>
          </div>
        )}
      </SettingsContext.Consumer>
    );
  }
}

export default Settings;
