import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(user);
  };

  render() {
    const { errors } = this.props;

    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 m-auto">
            <h1 className="text-center">Login</h1>
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
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
