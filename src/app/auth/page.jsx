"use client";
import React, { useState } from "react";
import "./style.scss";
import { Button } from "antd";
import { useFormik } from "formik";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="auth__container">
        <div className="leaves-container"></div>
        <div className="login-box">
          <h2>Đăng kí</h2>
          <br />
          <form action="" onSubmit={formik.handleSubmit}>
            <label htmlFor="">Tài khoản</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formik.values.username}
              placeholder="Nhập tài khoản..."
              required
              onChange={formik.handleChange}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              placeholder="Nhập email..."
              required
              onChange={formik.handleChange}
            />
            <label htmlFor="">Mật khẩu</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Nhập mật khẩu"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
            />
            <label htmlFor="">Nhập lại mật khẩu</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              required
            />
            <label htmlFor=""></label>
            <input type="submit" value="login" />
          </form>
          <div className="login-links">
            <a href="">Forgot Password</a>
            <span className="spacer"></span>
            <a href="" type="submit">
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
