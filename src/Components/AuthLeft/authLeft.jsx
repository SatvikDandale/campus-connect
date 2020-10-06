import React from "react";
import LoginLeft from "../../Assets/Images/leftImage.png";
import "./authLeft.css";

export default function AuthLeft() {
  return (
    <div className="auth__left">
      <img src={LoginLeft} alt="login__left" />
      <div className="login__left__text">
        <h1>Welcome Back!</h1>
        <h3>Nice to see you again</h3>
      </div>
    </div>
  );
}
