import React from "react";
import AuthLeft from "../../Components/AuthLeft/authLeft";
import Login from "../../Components/Login/login";
import FacebookIcon from "../../Assets/Images/facebook.png";
import TwitterIcon from "../../Assets/Images/twitter.png";
import { login } from "../../Services/userService";
import "./auth.css";
import { connect } from "react-redux";
import { removeError } from "../../Redux/Actions/errorAction";

function LoginScreen(props) {
  // console.log("LogIn");
  // props.login("USER1", "abcd");
  props.removeError();
  const logIn = (userName, password) => {
    props
      .login(userName, password)
      .then(() => {
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth__screen">
      <AuthLeft />
      <div className="auth__right">
        <Login login={logIn} />
        <div style={{ flex: 1 }}></div>
        <div className="auth__right__footer">
          <p>Contact Us</p>
          <img src={FacebookIcon} alt="facebook" />
          <img src={TwitterIcon} alt="twitter" />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userName, password) => {
      return dispatch(login(userName, password));
    },
    removeError: () => {
      return dispatch(removeError());
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
