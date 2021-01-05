import React, { useEffect } from "react";
import AuthLeft from "../../Components/AuthLeft/authLeft";
import Login from "../../Components/Login/login";
import FacebookIcon from "../../Assets/Images/facebook.png";
import TwitterIcon from "../../Assets/Images/twitter.png";
import { login } from "../../Services/userService";
import "./auth.css";
import { connect } from "react-redux";
import { removeError } from "../../Redux/Actions/errorAction";
import LoadingOverlay from "react-loading-overlay";
import { useState } from "react";
import { reset } from "../../Redux/Actions/userAction";

function LoginScreen(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    props.reset();
  }, [])

  // console.log("LogIn");
  // props.login("USER1", "abcd");
  props.removeError();
  const logIn = (userName, password) => {
    setLoading(true);
    props
      .login(userName, password)
      .then(() => {
        setLoading(false);
        props.history.push("/");
      })
      .catch((err) =>{
        console.log(err.response);
        setLoading(false);
        if (err.response && err.response.status === 409) {
          alert("User already exists");
        }
        else if (err.response && err.response.status === 403 && err.response.data === "Not verified") {
          alert("Please check your email inbox and verify your account.")
        }
        else if (err.response && err.response.status === 404) {
          alert("No user found with these credentials.")
        }
        else {
          alert("There is an error. Please try again.")
        }
      });
  };
  return (
    <LoadingOverlay
      active={loading}
      spinner
      text="Loading..."
      className="overlay"
    >
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
    </LoadingOverlay>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userName, password) => {
      return dispatch(login(userName, password));
    },
    reset: () => dispatch(reset()),
    removeError: () => {
      return dispatch(removeError());
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
