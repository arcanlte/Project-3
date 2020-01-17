import React, { Component } from "react";
import { Link } from "react-router-dom";
import foodBackground from "../images/loginBackground.jpg";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  onChange = async e => {
    const { name, value } = e.target
    this.setState({
      [name]:value
    })
  }
  render() {
    return (
      <div id="login">
        <div id="loginBackground">
          <img src={foodBackground} />
        </div>
        <div id="backframeLogin">
          <form
            onSubmit={e => {
              alert("FUCK YOU")
              this.props.handleLogin(e, {
                username: this.state.username,
                password: this.state.password
              });
            }}
          >
            <>
              <input
                type="text"
                name="usename"
                value={this.state.username}
                onChange={this.onChange}
                placeholder="Username"
                required
              />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                placeholder="Password"
                required
              />
            </>
            <>
              <input type="submit" value="Login" />
              <Link to="/register">Not a member? Click to sign up</Link>
            </>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
