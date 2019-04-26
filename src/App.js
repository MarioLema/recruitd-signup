import React from "react";
import "./App.css";

import bottomRightShape from "./images/bottom_right_shape.png";
import topLeftShape from "./images/top_left_shape.png";
import logo from "./images/recruitd_MainLogo_Green.png";

function App() {
  return (
    <div className="App">
      <div className="holder logo-holder">
        <img className="shape shape--top" src={topLeftShape} alt="" />
        <img className="shape shape--bottom" src={bottomRightShape} alt="" />
        <img src={logo} alt="" />
      </div>
      <div className="holder form-holder">
        <div>
          <div className="signup-link">
            Already have an account? <a href="/signup">Sign in here</a>
          </div>
          <form>
            <div>
              <label className="box-label" htmlFor="cheese">
                Full Name
              </label>
              <input
                className="input-box"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="box-label" htmlFor="cheese">
                Email Address
              </label>
              <input className="input-box" type="email" placeholder="Email" />
            </div>
            <div>
              <label className="box-label" htmlFor="cheese">
                Username
              </label>
              <input className="input-box" type="text" placeholder="Username" />
            </div>
            <div>
              <label className="box-label" htmlFor="cheese">
                Password
              </label>
              <input
                className="input-box"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="cheese" className="checkbox-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="t&c"
                  value="t&c"
                />
                <span className="checkmark" />
                Creating an account means you have read and accept our{" "}
                <a href="/signup">Privacy Policy</a> and{" "}
                <a href="/signup">Terms of Use</a>.
              </label>
            </div>
            <div>
              <button type="submit">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
