import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

export class TimeSheet extends Component {
  render() {
    return (
      <div className="container">
        <h4>TODO: timesheet</h4>

        <div className="row">
          <ul>
            <NavLink
              to="/time-sheet/button1"
              className="list-group-item list-group-item-action"
              activeClassName="active"
            >
              button1
            </NavLink>
            <NavLink
              to="/time-sheet/button2"
              className="list-group-item list-group-item-action"
              activeClassName="active"
            >
              button2
            </NavLink>
            <NavLink
              to="/time-sheet/button3"
              className="list-group-item list-group-item-action"
              activeClassName="active"
            >
              button3
            </NavLink>
          </ul>

          <div>
            <Route
              exact
              path="/time-sheet/button1"
              render={() => <div>one</div>}
            />
            <Route
              exact
              path="/time-sheet/button2"
              render={() => <div>two</div>}
            />
            <Route
              exact
              path="/time-sheet/button3"
              render={() => <div>three</div>}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TimeSheet;
