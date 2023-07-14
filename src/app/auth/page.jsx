"use client";
import React from "react";
import "./style.scss";

const auth = () => {
  return (
    <div>
      <div className="leaves-container"></div>
      <div className="login-box">
        <h2>Đăng nhập</h2>
        <br />
        <form action="">
          <label htmlFor=""></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
          />
          <label htmlFor=""></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <input type="submit" value="login" />
        </form>
        <div className="login-links">
          <a href="">Forgot Password</a>
          <span className="spacer"></span>
          <a href="">Đăng nhập</a>
        </div>
      </div>
    </div>
  );
};

export default auth;
