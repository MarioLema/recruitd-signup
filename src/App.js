import React from "react";
import "./App.css";
import axios from "axios";
// import bottomRightShape from "./images/bottom_right_shape.png";
// import topLeftShape from "./images/top_left_shape.png";
import logo from "./images/recruitd_MainLogo_Green.png";

import shape1 from "./images/shape1.svg";
import shape2 from "./images/shape2.svg";
import shape3 from "./images/shape3.svg";
import shape4 from "./images/shape4.svg";
import shadow1 from "./images/shadow1.svg";
import shadow2 from "./images/shadow2.svg";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupClasses: ["submit-message"],
      popUpText: "",
      currentForm: "signup"
    };
    this.hideMessage = this.hideMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
  }

  hideMessage() {
    this.setState({ popupClasses: ["submit-message"] });
  }

  changeForm(form) {
    this.setState({ currentForm: form });
  }

  handleSubmit(e) {
    e.preventDefault();
    let body = `name=${e.target[0].value}&email=${e.target[1].value}&username=${
      e.target[2]
    }&password=${e.target[3].value}&passwordConfirmation=${e.target[3].value}`;
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .post(
        "https://staging-api.recruitd.co.uk/professional_auth/",
        body,
        config
      )
      .then(
        function(response) {
          this.setState({
            popupClasses: ["submit-message", "submit-fail"],
            popUpText: `Thank you for Registering with us. Please check your email to confirm your account`
          });
          document.getElementById("myForm").reset();
        }.bind(this)
      )
      .catch(
        function(error) {
          this.setState({
            popupClasses: ["submit-message", "submit-success"],
            popUpText: `Sorry, Email already registered`
          });
        }.bind(this)
      );
  }
  // <img className="shape shape--top" src={topLeftShape} alt="" />
  // <img className="shape shape--bottom" src={bottomRightShape} alt="" />
  render() {
    return (
      <div className="App">
        <div className="holder logo-holder">
          <img src={logo} alt="" />

          <img src={shape1} id="shape1" className="top-shape" alt="" />
          <img src={shape2} id="shape2" className="top-shape" alt="" />
          <img src={shape3} id="shape3" className="bottom-shape" alt="" />
          <img src={shape4} id="shape4" className="bottom-shape" alt="" />
          <img src={shadow1} id="shadow1" className="top-shape" alt="" />
          <img src={shadow2} id="shadow2" className="bottom-shape" alt="" />
        </div>
        <div className="holder form-holder">
          {this.state.currentForm === "signup" ? (
            <SignUpForm
              handleSubmit={this.handleSubmit}
              changeForm={this.changeForm}
            />
          ) : this.state.currentForm === "signin" ?(
            <SignInForm changeForm={this.changeForm} />
          ) :
         (<RemindPasswordForm />)
        }
        </div>
        <div
          className={this.state.popupClasses.join(" ")}
          onClick={this.hideMessage}
        >
          <p>{this.state.popUpText}</p>
          <span>✖</span>
        </div>
      </div>
    );
  }
}

class SignUpForm extends React.Component {
  togglePassword() {
    let passInput = document.getElementById("password-input");
    passInput.type === "password"
      ? (passInput.type = "text")
      : (passInput.type = "password");
  }

  render() {
    return (
      <div>
        <div className="signup-link">
          Already have an account?{" "}
          <span onClick={() => this.props.changeForm("signin")}>
            Sign in here
          </span>
        </div>
        <form action="#" onSubmit={this.props.handleSubmit}>
          <div>
            <label className="box-label" htmlFor="name">
              Full Name
            </label>
            <input
              className="input-box"
              type="text"
              placeholder="Full Name"
              name="name"
              minLength="2"
              maxLength="50"
              pattern="^[a-zA-Z]*$"
              title="Must not contain numbers or special characters"
              required
            />
          </div>
          <div>
            <label className="box-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="input-box"
              type="email"
              placeholder="Email"
              name="email"
              minLength="4"
              maxLength="50"
              required
            />
          </div>
          <div>
            <label className="box-label" htmlFor="username">
              Username
            </label>
            <input
              className="input-box"
              type="text"
              placeholder="Username"
              name="username"
              minLength="3"
              maxLength="15"
              required
            />
          </div>
          <div>
            <label className="box-label" htmlFor="password">
              Password
            </label>
            <input
              className="input-box"
              id="password-input"
              type="password"
              placeholder="Password"
              name="password"
              minLength="8"
              maxLength="20"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
            <span className="password-toggle" onClick={this.togglePassword}>
              👁
            </span>
          </div>
          <div>
            <label htmlFor="t&c" className="checkbox-label">
              <input
                className="checkbox"
                type="checkbox"
                name="t&c"
                value="t&c"
                required
              />
              <span className="checkmark" />
              Creating an account means you have read and accept our
              <a
                href="https://www.recruitd.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and
              <a
                href="https://www.recruitd.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </a>
              .
            </label>
          </div>
          <div>
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    );
  }
}

class SignInForm extends React.Component {
  render() {
    return (
      <div>
        <div className="signup-link">
          New to Recruitd?{" "}
          <span onClick={() => this.props.changeForm("signup")}>
            Create a new account
          </span>
        </div>
        <form action="#">
          <div>
            <label className="box-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="input-box"
              type="email"
              placeholder="Email"
              name="email"
              minLength="4"
              maxLength="50"
              required
            />
          </div>
          <div>
            <label className="box-label" htmlFor="password">
              Password
            </label>
            <input
              className="input-box"
              id="password-input"
              type="password"
              placeholder="Password"
              name="password"
              minLength="8"
              maxLength="20"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
          </div>
          <div>
            <button type="submit">Sign In</button>
          </div>

          <span
            className="forgotten-pass-link"
            onClick={() => this.props.changeForm("forgotPass")}
          >
            Forgot your password?
          </span>
        </form>
      </div>
    );
  }
}

class RemindPasswordForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Forgot Password</h2>
        <p>
          Fill in your email address and we'll email you a link allowing you to
          reset your password.
        </p>
        <form action="#">
          <div>
            <label className="box-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="input-box"
              type="email"
              placeholder="Email"
              name="email"
              minLength="4"
              maxLength="50"
              required
            />
          </div>
          <div>
            <button type="submit">Send Reset Email</button>
          </div>
        </form>
      </div>
    );
  }
}
export default App;
