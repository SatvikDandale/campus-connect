import React, { useEffect } from "react";
import AuthLeft from "../../Components/AuthLeft/authLeft";
import Login from "../../Components/Login/login";
import FacebookIcon from "../../Assets/Images/facebook.png";
import TwitterIcon from "../../Assets/Images/twitter.png";
import { login } from "../../Services/userService";
import { committeeLoginFunction } from "../../Services/committeeService";
import "./auth.css";
import { connect } from "react-redux";
import { removeError } from "../../Redux/Actions/errorAction";
import LoadingOverlay from "react-loading-overlay";
import { useState } from "react";
import { reset } from "../../Redux/Actions/userAction";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import CommitteeLogin from "../../Components/Login/committeeLogin";
import NotFound404 from "../NotFound404/notFound404";
import { setTokenHeader } from "../../Services/apiService";

function LoginScreen(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    props.reset();
    localStorage.clear();
    setTokenHeader();
  }, []);

  // console.log("LogIn");
  // props.login("USER1", "abcd");
  props.removeError();
  const logIn = (userName, password, isCommittee = false) => {
    setLoading(true);
    if (!isCommittee) {
      props
        .login(userName, password)
        .then(() => {
          setLoading(false);
          props.history.push("/");
        })
        .catch((err) => {
          console.log(err.response);
          setLoading(false);
          if (err.response && err.response.status === 409) {
            alert("User already exists");
          } else if (
            err.response &&
            err.response.status === 403 &&
            err.response.data === "Not verified"
          ) {
            alert("Please check your email inbox and verify your account.");
          } else if (err.response && err.response.status === 422) {
            alert("No User found with these credentials.");
          } else if (err.response && err.response.status === 404) {
            alert("No user found with these credentials.");
          } else if (err.response && err.response.status === 500) {
            alert(
              "Can't login. Are you trying to log into a committee profile"
            );
          } else {
            alert("There is an error. Please try again.");
          }
        });
    } else {
      console.log("COMMITTEE LOGIN");
      props
        .committeeLogin(userName, password)
        .then(() => {
          setLoading(false);
          props.history.push("/");
        })
        .catch((err) => {
          console.log(err.response);
          console.log(err.response.status);
          setLoading(false);
          if (err.response && err.response.status === 409) {
            alert("User already exists");
          } else if (
            err.response &&
            err.response.status === 403 &&
            err.response.data === "Not verified"
          ) {
            alert("Please check your email inbox and verify your account.");
          } else if (err.response && err.response.status === 404) {
            alert("No committee found with these credentials.");
          } else if (err.response && err.response.status === 422) {
            alert("No committee found with these credentials.");
          } else if (
            err.response &&
            err.response.status === 500 &&
            err.response.data &&
            err.response.data.message === "source cannot be null"
          ) {
            alert("No user found with these credentials.");
          }else if (err.response && err.response.status === 500) {
            alert(
              "Can't login. Are you trying to log into a committee profile"
            );
          }  else {
            alert("There is an error. Please try again.");
          }
        });
    }
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
          <Switch>
            <Route
              exact
              strict
              path="/login/committee"
              component={(props) => <CommitteeLogin login={logIn} {...props} />}
            ></Route>
            <Route
              exact
              strict
              path="/login"
              component={(props) => <Login login={logIn} {...props} />}
            ></Route>
            <Route path="/" component={() => <Redirect to="/login" />}></Route>
          </Switch>

          <div style={{ flex: 1 }}></div>
          <div className="auth__right__footer toggleAuth">
            <Switch>
              <Route
                exact
                strict
                path="/login/committee"
                component={() => (
                  <p>
                    <Link className="link" to="/login">
                      Log in
                    </Link>{" "}
                    to your personal account
                  </p>
                )}
              />
              <Route
                exact
                strict
                path="/login"
                component={() => (
                  <p>
                    <Link className="link" to="/login/committee">
                      Log in
                    </Link>{" "}
                    to a committee account
                  </p>
                )}
              />
            </Switch>
          </div>
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
    committeeLogin: (userName, password) => {
      return dispatch(committeeLoginFunction(userName, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
