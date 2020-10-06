import React from "react";
import AuthLeft from "../../Components/AuthLeft/authLeft";

import "./auth.css";

export default function SignUp() {
  return (
    <div className="auth__screen">
      <AuthLeft />
      <div className="auth__right">
        <h1>SignUp</h1>
      </div>
    </div>
  );
}
