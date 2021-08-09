import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "../apiCalls";

function Signup() {
  const [data, setData] = useState({
    username: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(data);
  };

  const { username, name, password } = data;
  return (
    <div className="right">
      <form required onSubmit={handleSubmit}>
        <section className="copy">
          <h2 id="signup-h2">Sign up</h2>
          <div className="login-container">
            <p id="signup-p">
              Already have an account?{" "}
              <Link to="/login" id="signup-a">
                <strong>Log in</strong>
              </Link>
            </p>
          </div>
        </section>
        <div className="input-container email">
          <label htmlFor="email"> Email id</label>
          <input
            id="email"
            name="username"
            type="email"
            value={username}
            onChange={handleChange}
            placeholder="your email id"
            autoComplete="false"
            required
          ></input>
        </div>
        <div className="input-container name">
          <label htmlFor="fname"> Full Name</label>
          <input
            id="fname"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="your name"
            autoComplete="false"
            required
          ></input>
        </div>
        <div className="input-container password">
          <label htmlFor="password"> Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="your password"
            autoComplete="false"
            required
          ></input>
        </div>
        <button className="signup-btn">Sign Up</button>{" "}
      </form>
    </div>
  );
}

export default Signup;
