import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css"
export const UserSignup = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="Page">
      <div className="auth-form-container">
        <h1 id="black-text">User Signup</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="lbl-input">
            <label className="lbl-primary" htmlFor="name">
              Full name
            </label>
            <input
              className="tb-primary"
              value={name}
              name="name"
              id="name"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="lbl-input">
            <label className="lbl-primary" htmlFor="email">
              Email
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
              Password
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
          <button className="btn-primary" type="submit">
            Signup
          </button>
        </form>
        <Link to="/userlogin" exact>
        <div className="bottom-link">
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("login")}
          >
            Already have an account? <span className="underline">Login here.</span>
          </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
