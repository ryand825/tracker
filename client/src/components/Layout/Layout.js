import React, { Component } from "react";
import axios from "axios";
import { withRouter, Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../config/setAuthToken";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Clockin from "../clock-in/Clockin";
import TimeSheet from "../time-sheet/TimeSheet";
import Settings from "../Settings/Settings";
import Authentication from "../auth/Authentication";
import Login from "../auth/Login";
import PrivateRoute from "../common/PrivateRoute";

export class Layout extends Component {
  state = {
    laborTypes: ["Billable", "Travel", "Warranty"],
    auth: false,
    registerErrors: {},
    loginErrors: {},
    currentUser: {}
  };

  componentWillMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      this.setState({ auth: true, currentUser: decoded });

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        this.handleLogout();
        window.location.href = "/login";
      }
    }
  }

  handleAddLaborTypes = newValue => {
    let typesArray = [...this.state.laborTypes];
    typesArray.push(newValue);
    this.setState({
      laborTypes: typesArray
    });
  };

  handleNewUser = newUser => {
    axios
      .post("/api/users/register", newUser)
      .then(res =>
        this.setState({ auth: true }, () => this.props.history.push("/login"))
      )
      .catch(err => this.setState({ registerErrors: err.response.data }));
  };

  handleLogin = user => {
    axios
      .post("/api/users/login", user)
      .then(res => {
        const { token } = res.data; // Get token
        localStorage.setItem("jwtToken", token); // Save token to local storage
        setAuthToken(token); // Set auth token to header
        const decoded = jwt_decode(token);
        this.setState({ currentUser: decoded, auth: true });
      })
      .catch(err => {
        this.setState({ loginErrors: err.response.data });
      });
  };

  handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    this.props.history.push("/login");
    this.setState({ setCurrentUser: false });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar logout={this.handleLogout} />
        <Route
          path="/register"
          render={() =>
            this.state.auth ? (
              <Redirect to="/clock-in" />
            ) : (
              <Authentication
                registerUser={this.handleNewUser}
                errors={this.state.registerErrors}
              />
            )
          }
        />
        <Route
          path="/login"
          render={() =>
            this.state.auth ? (
              <Redirect to="clock-in" />
            ) : (
              <Login
                loginUser={this.handleLogin}
                errors={this.state.loginErrors}
              />
            )
          }
        />
        <PrivateRoute
          auth={this.state.auth}
          exact
          path="/clock-in"
          component={Clockin}
        />
        <PrivateRoute
          auth={this.state.auth}
          path="/time-sheet"
          component={TimeSheet}
        />
        <PrivateRoute
          auth={this.state.auth}
          path="/settings"
          laborTypes={this.state.laborTypes}
          addLaborTypes={this.handleAddLaborTypes}
          component={Settings}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
