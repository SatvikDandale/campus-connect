import React from "react";
import LoginLeft from "../../Assets/Images/leftImage.png";
import "./authLeft.css";

export default function AuthLeft(props) {
  return (
    <div className="auth__left">
      <img src={LoginLeft} alt="login__left" />
      <div className="login__left__text">
        {props.pageNo === undefined ? (
          <>
            <h1>Welcome Back!</h1>
            <h3>Nice to see you again</h3>
          </>
        ) : null}
        {props.pageNo === 0 ? (
          <>
            <h1>Hello there!</h1>
            <h3>Ready to make your college experience virtual?</h3>
          </>
        ) : null}
        {props.pageNo === 1 ? (
          <>
            <h3>Just need the email ID given by your college</h3>
          </>
        ) : null}
        {props.pageNo === 2 ? (
          <>
            <h3>Make sure you stand out!</h3>
          </>
        ) : null}
        {props.pageNo === 3 ? (
          <>
            <h3>Help others find you</h3>
          </>
        ) : null}
      </div>
    </div>
  );
}
