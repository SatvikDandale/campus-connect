import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signUpHome.css";

function SignUpHome(props) {
  const [options, setOptions] = useState(false);

  return (
    <div className="signUpHome">
      <h2>Create a new Account</h2>
      {!options && (
        <div className="options">
          <Button
            variant="primary"
            onClick={() => {
              setOptions(true);
            }}
          >
            Let's Go
          </Button>
        </div>
      )}
      {options && (
        <div className="options">
           <Button
            variant="primary"
            onClick={() => {
              props.history.push("/signUp/college/1");
            }}
          >
            College Profile
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.history.push("/signUp/committee/1");
            }}
          >
            Committee Profile
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.history.push("/signUp/1");
            }}
          >
            Personal Profile
          </Button>
        </div>
      )}
      <h6>
        Already have an account,{" "}
        <Link
          className="link"
          to={props.committee ? "/login/committee" : "/login"}
        >
          Sign In Here
        </Link>
      </h6>
    </div>
  );
}

export default SignUpHome;
