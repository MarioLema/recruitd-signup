import React from "react";
//REMIND PASSWORD FORM
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
              <button type="submit" className="submit-button">Send Reset Email</button>
            </div>
          </form>
        </div>
      );
    }
  }

  export default RemindPasswordForm;