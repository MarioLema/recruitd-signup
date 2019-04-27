import React from "react";


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
            Already have an account? {" "}
            <button onClick={() => this.props.changeForm("signin")}>
               Sign in here
            </button>
          </div>
          <form action="#" onSubmit={this.props.handleSubmit} id="signup-form">
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
                pattern="^[a-zA-Z\s]*$"
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
              <button type="submit" className="submit-button">Create Account</button>
            </div>
          </form>
        </div>
      );
    }
  }

  export default SignUpForm;