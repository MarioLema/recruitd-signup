import React from "react";
// SIGNIN FORM
class SignInForm extends React.Component {
    render() {
      return (
        <div>
          <div className="signup-link">
            New to Recruitd?{" "}
            <button onClick={() => this.props.changeForm("signup")}>
              Create a new account
            </button>
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
              <button type="submit" className="submit-button">Sign In</button>
            </div>
  
            <button
              className="forgotten-pass-link"
              onClick={() => this.props.changeForm("forgotPass")}
            >
              Forgot your password?
            </button>
          </form>
        </div>
      );
    }
  }

  export default SignInForm;