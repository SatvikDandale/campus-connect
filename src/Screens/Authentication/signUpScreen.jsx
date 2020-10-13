import React from "react";
import AuthLeft from "../../Components/AuthLeft/authLeft";
import FacebookIcon from "../../Assets/Images/facebook.png";
import TwitterIcon from "../../Assets/Images/twitter.png";
import SignUpHome from "../../Components/SignUp/signUpHome";
import "./auth.css";
import SignUpEmail from "../../Components/SignUp/signUpEmail";
import { useState } from "react";

export default function SignUp() {
  const [pageNo, setPageNo] = useState(0)

  return (
    <div className="auth__screen">
      <AuthLeft />
      <div className="auth__right">
        {pageNo===0 ? <SignUpHome setPageNo={setPageNo}/> : null}
        {pageNo===1 ? <SignUpEmail setPageNo={setPageNo}/> : null}
        {/* <SignUpHome /> */}
      <div className="auth__right__footer">
          <p>Contact Us</p>
          <img src={FacebookIcon} alt="facebook" />
          <img src={TwitterIcon} alt="twitter" />
      </div>
      </div>
    </div>
  );
}
