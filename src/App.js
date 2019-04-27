import React from "react";

import "./App.css";
import axios from "axios";
import logo from "./images/recruitd_MainLogo_Green.png";

import SignUpForm from "./signupform";
import SignInForm from "./signinform";
import RemindPasswordForm from "./forgotpassform";

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

  //HIDE SUCCESS-FAIL MESSAGE
  hideMessage() {
    this.setState({ popupClasses: ["submit-message"] });
  }

  //CHANGES THE STATE TO DISPLAY DIFFERENT FORMS
  changeForm(form) {
    this.setState({ currentForm: form });
  }

  //HANDLES THE SIGNUP FORM SUBMIT
  handleSubmit(e) {
    e.preventDefault();
    let body = `name=${e.target[0].value}&email=${e.target[1].value}&password=${e.target[3].value}&passwordConfirmation=${e.target[3].value}`;
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    axios.post("https://staging-api.recruitd.co.uk/professional_auth/", body, config )

      .then(function(response) {
          this.setState({
            popupClasses: ["submit-message", "submit-success"],
            popUpText: `Thank you for Registering with us. Please check your email to confirm your account`
          });
          document.getElementById("signup-form").reset();
        }.bind(this)
      )

      .catch(function(error) {
          this.setState({
            popupClasses: ["submit-message", "submit-fail"],
            popUpText: `Sorry, email already registered`
          });
        }.bind(this)
      );
  }

  render() {
    return (
      <div className="App">
        <div className="holder logo-holder">
          <img src={logo} alt="" />
          <div className="top-shape" />
          <div className="bottom-shape" />
        </div>
        <div className="holder form-holder">
          {this.state.currentForm === "signup" ? (
            <SignUpForm
              handleSubmit={this.handleSubmit}
              changeForm={this.changeForm}
            />
          ) : this.state.currentForm === "signin" ? (
            <SignInForm changeForm={this.changeForm} />
          ) : (
            <RemindPasswordForm />
          )}
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
export default App;
