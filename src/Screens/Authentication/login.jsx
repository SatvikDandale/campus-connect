import React from "react";
import AuthLeft from "../../Components/AuthLeft/authLeft";
import Login from "../../Components/Login/login";
import FacebookIcon from "../../Assets/Images/facebook.png";
import TwitterIcon from "../../Assets/Images/twitter.png";

import "./auth.css";

export default function LoginScreen() {
  return (
    <div className="auth__screen">
      <AuthLeft />
      <div className="auth__right">
        <Login />

        <div className="auth__right__footer">
          <p>Contact Us</p>
          <img src={FacebookIcon} alt="facebook" />
          <img src={TwitterIcon} alt="twitter" />
        </div>
      </div>
    </div>
  );
}
