import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "./../../App.css";

export const UserLogin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="Page">
      <div className="auth-form-container">
        <h1 id="black-text">User Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="lbl-input">
            <label className="lbl-primary" htmlFor="email">
              Email:
            </label>
            <input
              className="tb-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
          </div>
          <div className="lbl-input">
            <label className="lbl-primary" htmlFor="password">
              Password:
            </label>
            <input
              className="tb-primary"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
            />
          </div>
          <div className="link-btn">
            <Link to="/">
              <button id="dumb" className="btn-primary" type="submit">
                Log In
              </button>
            </Link>
          </div>
        </form>
        <Link to="/usersignup" exact>
          <div className="bottom-link">
            <button
              className="link-btn"
              onClick={() => props.onFormSwitch("register")}
            >
              Don't have an account?{" "}
              <span className="underline">Register here</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
