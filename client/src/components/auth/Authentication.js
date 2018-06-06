import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";

export class Authentication extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    errors: {},
    currentUser: {
      email: ""
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);
  };

  render() {
    const { errors } = this.props;

    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 m-auto">
            <h1 className="text-center">Sign Up</h1>
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Email Address"
                name="email"
                type="email"
                value={this.state.email}
                error={errors.email}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                error={errors.password}
                onChange={this.onChange}
              />
              <TextFieldGroup
                placeholder="Retype Password"
                name="password2"
                type="password"
                value={this.state.password2}
                error={errors.password2}
                onChange={this.onChange}
              />
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Authentication;
