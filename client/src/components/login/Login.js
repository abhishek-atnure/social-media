import React, { useState } from "react";
import { loginUser } from "../apiCalls";
import { Link } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(data);
  };

  return (
    <div className="right">
      <form onSubmit={handleSubmit}>
        <section className="copy">
          <h2 id="log-in-text">Log in</h2>
          <div className="login-container">
            <p id="line-text">
              Don't have an account?{" "}
              <Link to="/register">
                <strong>Sign Up</strong>{" "}
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
            onChange={(e) => handleChange(e)}
            placeholder="your email id"
            autoComplete="nope"
            required
          ></input>
        </div>

        <div className="input-container password">
          <label htmlFor="password"> Password</label>
          <input
            id="password"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
            type="password"
            placeholder="your password"
            autoComplete="off"
            required
          ></input>
        </div>

        <button type="submit" className="signup-btn">
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
