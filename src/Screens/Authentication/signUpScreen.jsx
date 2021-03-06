import React, { useEffect } from "react";
import AuthLeft from "../../Components/AuthLeft/authLeft";
import FacebookIcon from "../../Assets/Images/facebook.png";
import TwitterIcon from "../../Assets/Images/twitter.png";
import SignUpHome from "../../Components/SignUp/signUpHome";
import "./auth.css";
import SignUpEmail from "../../Components/SignUp/signUpEmail";
import { useState } from "react";
import SignUpPersonalDetails from "../../Components/SignUp/signUpPersonalDetails";
import SignUpCollegeDetails from "../../Components/SignUp/signUpCollegeDetails";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {
  signUp,
  getUserDetails,
  uploadProfilePhoto,
} from "../../Services/userService";
import LoadingOverlay from "react-loading-overlay";
import { reset } from "../../Redux/Actions/userAction";
import CommitteeSignUp from "../../Components/SignUp/committeeSignUp";
import { committeeSignUpFunction } from "../../Services/committeeService";

function SignUp(props) {
  const [pageNo, setPageNo] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    props.reset();
  }, []);
  const [signUpData, setSignUpData] = useState({
    email: "",
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    collegeName: "",
    year: "",
    branch: "",
  });

  function finalSubmitHandler(
    collegeDetails,
    isCommittee = false,
    isCollege = false
  ) {
    setLoading(true);

    var formData = new FormData();

    for (let key in signUpData) {
      formData.append(key, signUpData[key]);
    }

    if (formData.has("branch")) formData.delete("branch");
    if (formData.has("year")) formData.delete("year");

    if (isCommittee) {
      formData.append("name", formData.get("firstName"));
    }
    if (isCollege) {
      formData.append("isCollegeProfile", "true")
      formData.set("collegeName", formData.get("firstName"));
      // formData.append("collegeName", formData.get("firstName"))
    }

    for (let key in collegeDetails) {
      formData.append(key, collegeDetails[key]);
    }

    if (!isCommittee) {
      props
        .signUp(formData)
        .then(() => {
          setLoading(false);
          alert("Verification Link sent to your email. Please check.");
          // props.getUserDetails(userObject.userName);
          props.reset();
          props.history.push("/login");
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
          setLoading(false);
          if (err.response && err.response.status === 409) {
            alert("User Name already exists");
          } else {
            alert("There is an error. Please try again.");
            alert(err);
          }
        });
    } else {
      // formData.delete("image");

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      props
        .signUpCommittee(formData)
        .then(() => {
          setLoading(false);
          alert("Verification Link sent to your email. Please check.");
          // props.getUserDetails(userObject.userName);
          props.reset();
          props.history.push("/login");
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response);
          setLoading(false);
          if (err.response && err.response.status === 409) {
            alert("Committee already exists");
          } else {
            alert("There is an error. Please try again.");
            alert(err);
          }
        });
    }
  }

  localStorage.removeItem("token");

  return (
    <LoadingOverlay
      active={loading}
      spinner
      text="Loading..."
      className="overlay"
    >
      <div className="auth__screen">
        <AuthLeft pageNo={pageNo} />
        <div className="auth__right">
          <Switch>
            <Route
              exact
              strict
              path="/signUp"
              component={(props) => {
                return <SignUpHome setPageNo={setPageNo} {...props} />;
              }}
            />
            <Route
              exact
              strict
              path="/signUp/1"
              component={(props) => {
                return (
                  <SignUpEmail
                    setPageNo={setPageNo}
                    signUpData={signUpData}
                    setSignUpData={setSignUpData}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              strict
              path="/signUp/committee/1"
              component={(props) => {
                return (
                  <SignUpEmail
                    setPageNo={setPageNo}
                    committee={true}
                    signUpData={signUpData}
                    setSignUpData={setSignUpData}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              strict
              path="/signUp/college/1"
              component={(props) => {
                return (
                  <SignUpEmail
                    setPageNo={setPageNo}
                    committee={true}
                    college={true}
                    signUpData={signUpData}
                    setSignUpData={setSignUpData}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              strict
              path="/signUp/2"
              component={(props) => {
                return (
                  <SignUpPersonalDetails
                    setPageNo={setPageNo}
                    signUpData={signUpData}
                    setSignUpData={setSignUpData}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              strict
              path="/signUp/committee/2"
              component={(props) => {
                return (
                  <SignUpPersonalDetails
                    committee={true}
                    setPageNo={setPageNo}
                    signUpData={signUpData}
                    setSignUpData={setSignUpData}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              strict
              path="/signUp/college/2"
              component={(props) => {
                return (
                  <SignUpPersonalDetails
                    committee={true}
                    college={true}
                    setPageNo={setPageNo}
                    signUpData={signUpData}
                    setSignUpData={setSignUpData}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              strict
              path="/signUp/3"
              component={(props) => {
                return (
                  <SignUpCollegeDetails
                    setPageNo={setPageNo}
                    signUpData={signUpData}
                    setSignUpData={setSignUpData}
                    onSubmit={finalSubmitHandler}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              strict
              path="/signUp/committee/3"
              component={(props) => {
                return (
                  <SignUpCollegeDetails
                    committee={true}
                    setPageNo={setPageNo}
                    signUpData={signUpData}
                    setSignUpData={setSignUpData}
                    onSubmit={finalSubmitHandler}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              strict
              path="/signUp/college/3"
              component={(props) => {
                return (
                  <SignUpCollegeDetails
                    committee={true}
                    college={true}
                    setPageNo={setPageNo}
                    signUpData={signUpData}
                    setSignUpData={setSignUpData}
                    onSubmit={finalSubmitHandler}
                    {...props}
                  />
                );
              }}
            />
            <Route path="/" component={() => <Redirect to="/signUp" />}></Route>
          </Switch>
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
    signUp: (formData) => {
      return dispatch(signUp(formData));
    },
    reset: () => dispatch(reset()),
    getUserDetails: (userName, other = false) => {
      return dispatch(getUserDetails(userName, other));
    },
    signUpCommittee: (formData) => {
      return dispatch(committeeSignUpFunction(formData));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
